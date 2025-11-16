// 环球旅行者
if (!global.bound_container) global.bound_container = {};
PlayerEvents.loggedIn(event => {
    let player = event.player;
    let playerUUID = player.uuid
    let x = player.persistentData.getInt("bound_container_x");
    let y = player.persistentData.getInt("bound_container_y");
    let z = player.persistentData.getInt("bound_container_z");
    let dim = player.persistentData.getString("bound_container_dim");
    let world = event.server.getLevel(dim);
    global.bound_container[playerUUID] = world.getBlock(x, y, z);
})
BlockEvents.broken(event => {
    let player = event.player;
    let playerUUID = player.uuid
    let mainHandItem = player.getMainHandItem();
    if (!mainHandItem || mainHandItem.isEmpty() || !mainHandItem.hasTag('tconstruct:modifiable')) return;
    let modifiers = mainHandItem.getNbt().getAsString();
    if (matchModifiers(modifiers, "global_traveler")) {
        let container = global.bound_container[playerUUID]
        let pworld = player.level;
        let drops = event.block.getDrops();
        let containerInventory = container.getInventory();
        if (!containerInventory) {
            player.tell(`§c绑定的方块不是容器，无法传送掉落物`);
            player.persistentData.remove('bound_container_x')
            player.persistentData.remove('bound_container_y')
            player.persistentData.remove('bound_container_z')
            player.persistentData.remove('bound_container_dim')
            global.bound_container[playerUUID] = null;
            return;
        }
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
                pworld.runCommandSilent(`/summon minecraft:item ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} {Item:{id:"${remaining.getId()}",Count:1b}}`);
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
            player.persistentData.putInt("bound_container_x", pos.x);
            player.persistentData.putInt("bound_container_y", pos.y);
            player.persistentData.putInt("bound_container_z", pos.z);
            player.persistentData.putString("bound_container_dim", player.level.dimension);
            global.bound_container[playerUUID] = container
            event.cancel();
            return;
        }
    }
});
