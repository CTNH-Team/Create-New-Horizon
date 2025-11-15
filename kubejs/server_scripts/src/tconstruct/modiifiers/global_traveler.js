// 环球旅行者
function saveGlobalData() {
    try {
        JsonIO.write('kubejs/data/global_traveler_data.json', {
            bound_container_x: global.bound_container_x,
            bound_container_y: global.bound_container_y,
            bound_container_z: global.bound_container_z
        });
    } catch (e) {
        console.error('保存环球旅行者数据时出错: ' + e);
    }
}

function loadGlobalData() {
    try {
        let data = JsonIO.read('kubejs/data/global_traveler_data.json');
        if (data) {
            global.bound_container_x = data.bound_container_x || {};
            global.bound_container_y = data.bound_container_y || {};
            global.bound_container_z = data.bound_container_z || {};
        }
    } catch (e) {
        global.bound_container_x = {};
        global.bound_container_y = {};
        global.bound_container_z = {};
    }
}

loadGlobalData();
if (!global.bound_container) global.bound_container = {};

ServerEvents.loaded(event => {
    event.server.scheduleInTicks(100, () => {
        for (let playerUUID in global.bound_container_x) {
            let x = global.bound_container_x[playerUUID];
            let y = global.bound_container_y[playerUUID];
            let z = global.bound_container_z[playerUUID];
            let block = event.level.getBlock(x, y, z);
            if (block && block.entityData) {
                global.bound_container[playerUUID] = block;
            } else {
                delete global.bound_container_x[playerUUID];
                delete global.bound_container_y[playerUUID];
                delete global.bound_container_z[playerUUID];
                delete global.bound_container[playerUUID];
                saveGlobalData();
            }
        }
    });
});

BlockEvents.broken(event => {
    let player = event.player;
    let playerUUID = player.uuid
    let mainHandItem = player.getMainHandItem();
    if (!mainHandItem || mainHandItem.isEmpty() || !mainHandItem.hasTag('tconstruct:modifiable')) return;
    let modifiers = mainHandItem.getNbt().getAsString();
    if (matchModifiers(modifiers, "global_traveler")) {
        let x = global.bound_container_x[playerUUID]
        let y = global.bound_container_y[playerUUID]
        let z = global.bound_container_z[playerUUID]
        let container = global.bound_container[playerUUID]
        let pworld = player.level;
        let drops = event.block.getDrops();
        console.log(`broken_event:${event.level.getBlock(x, y, z)}`);
        console.log(`container:${container}`);
        if (!container) return null;
        let containerInventory = container.getInventory();
        if (!containerInventory) {
            delete global.bound_container_x[playerUUID];
            delete global.bound_container_y[playerUUID];
            delete global.bound_container_z[playerUUID];
            delete global.bound_container[playerUUID];
            saveGlobalData();
            return;
        }
        let slotCount = containerInventory.getSlots();
        for (let item of drops) {
            let remaining = item.copy();
            let slotCount = containerInventory.getSlots();
            for (let i = 0; i < slotCount; i++) {
                let slotItem = containerInventory.getStackInSlot(i);
                if (!slotItem.isEmpty() && slotItem.getId() == remaining.getId() && slotItem.getCount() < slotItem.getMaxStackSize()) {
                    let canAdd = Math.min(remaining.getCount(), slotItem.getMaxStackSize() - slotItem.getCount());
                    if (canAdd > 0) {
                        slotItem.setCount(slotItem.getCount() + canAdd);
                        containerInventory.setStackInSlot(i, slotItem);
                        remaining.setCount(remaining.getCount() - canAdd);
                    }
                    if (remaining.getCount() <= 0) break;
                }
            }
            if (remaining.getCount() > 0) {
                for (let i = 0; i < slotCount; i++) {
                    let slotItem = containerInventory.getStackInSlot(i);
                    if (slotItem.isEmpty()) {
                        let toInsert = remaining.copy();
                        if (toInsert.getCount() > toInsert.getMaxStackSize()) {
                            toInsert.setCount(toInsert.getMaxStackSize());
                        }
                        containerInventory.setStackInSlot(i, toInsert);
                        remaining.setCount(remaining.getCount() - toInsert.getCount());
                    }
                    if (remaining.getCount() <= 0) break;
                }
            }
            if (remaining.getCount() > 0) {
                pworld.runCommandSilent(`/summon minecraft:item ${x} ${y} ${z} {Item:{id:"${remaining.getId()}",Count:1b}}`);
                player.tell(`§c容器空间不足，${drops} 剩余 ${remaining.getCount()} 个未传送。`);
            }
            event.block.set('minecraft:air')
        }
        event.cancel();
           return;
    }
    return;
});
BlockEvents.rightClicked(event => {
    let blockid = event.block.getId()
    if (event.getHand() != "MAIN_HAND") return;
    let player = event.player;
    let playerUUID = player.uuid
    let mainHandItem = player.getMainHandItem();
    if (!mainHandItem || mainHandItem.isEmpty() || !mainHandItem.hasTag('tconstruct:modifiable')) return;
    let modifiers = mainHandItem.getNbt().getAsString();
    if (player.isShiftKeyDown()) {
        if (matchModifiers(modifiers, "global_traveler")) {
            let pos = event.block.pos;
            let world = event.level;
            let container = world.getBlock(pos.x, pos.y, pos.z);
            player.tell(`§7尝试绑定容器，坐标: ${pos.x},${pos.y},${pos.z}, 维度: ${player.level.dimension}`);
            let blockEntity = event.block.entityData;
            if (!blockEntity) {
                player.tell(`§4	[环球旅行者] 容器绑定失败: (${pos.x},${pos.y},${pos.z})`);
                event.cancel();
                return;
            }
            if (/^ae2:.*/.test(blockid) || /^expatternprovider:.*/.test(blockid))  {
                player.tell(`§4	[环球旅行者] 容器绑定失败，不是支持的容器`);
                event.cancel();
                return;
            }
            player.tell(`§a	[环球旅行者] 容器绑定成功: (${pos.x},${pos.y},${pos.z})`);
            global.bound_container_x[playerUUID] = pos.x
            global.bound_container_y[playerUUID] = pos.y
            global.bound_container_z[playerUUID] = pos.z
            global.bound_container[playerUUID] = container
            saveGlobalData();
            event.cancel();
            return;
        }
    }
});

ServerEvents.loaded(event => {
    event.server.scheduleInTicks(1, () => {
        global.saveOnShutdown = () => {
            saveGlobalData();
        };
    });
});

ServerEvents.tick(event => {
    if (event.server.tickCount % 12000 === 0) {
        saveGlobalData();
    }
});
