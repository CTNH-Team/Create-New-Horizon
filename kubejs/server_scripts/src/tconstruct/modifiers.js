//通便
EntityEvents.hurt((event) => {
    let entity = event.entity; // 被击杀的实体
    let source = event.source; // 伤害来源
    let attacker = source.getActual(); // 实际攻击者

    // 检查攻击者是否为玩家
    if (attacker && attacker.isPlayer()) {
        let player = attacker; // 直接使用 attacker，因为 isPlayer() 确认其为玩家
        let handSlots = player.getHandSlots(); // 获取玩家手中的物品槽位（主手和副手）
        let mainHandItem = null;
 
        // 获取主手物品（通常是第一个槽位）
        let iterator = handSlots.iterator();//这里是一个迭代器
        if (iterator.hasNext())
            mainHandItem = iterator.next(); // 主手物品是第一个槽位
 
        if (mainHandItem.hasTag('tconstruct:modifiable')) {// 检查主手物品是否为匠魂工具
            let modifiers = mainHandItem.getNbt().getAsString(); // 获取工具的NBT
            // 检查NBT中是否包含 "kubejs:add_drop"
            if (matchModifiers(modifiers, "gaping")) {
                let random = Utils.getRandom();
                let offsetx = random.nextInt(-1, 2)
                let offsety = random.nextInt(-1, 2)
                let world = entity.level; // 获取实体所在的世界
                let x = entity.x + offsetx; // 实体 X 坐标
                let y = entity.y + 1; // 实体 Y 坐标上方 1 格
                let z = entity.z + offsety; // 实体 Z 坐标
                let lvl = getModifierLevel(modifiers, "gaping");
                let chance = lvl * 10; // 概率为等级*10
                if (Utils.getRandom().nextInt(100) < chance) { // 以chance%的概率执行
                    world.runCommandSilent(`/summon minecraft:item ${x} ${y} ${z} {Item:{id:"ctnhcore:animal_excreta",Count:1b}}`);
                    world.runCommandSilent(`/effect give @s minecraft:nausea 10 1`);
                    world.runCommandSilent(`/effect give @e[type=${entity.type}] minecraft:slowness 5 3`);
                }
                
            }
            
        }
    }
})
//护盾
//初始化
PlayerEvents.loggedIn(event => {
    const player = event.player;
    if (!player.persistentData.contains('shield_cooldown')) {
        player.persistentData.putInt('shield_cooldown', 600);
    }
});
PlayerEvents.tick(event => {
    const player = event.player;
    if (player.persistentData.contains('shield_cooldown')) {
        const currentCooldown = player.persistentData.getInt('shield_cooldown');
        if (currentCooldown > 0) {
            player.persistentData.putInt('shield_cooldown', currentCooldown - 1);
        }
    }
});
EntityEvents.hurt((event) => {
    let entity = event.entity;
    if (entity && entity.isPlayer()) {
        let player = entity;
        let totalLevel = 0;
        
        let mainHandItem = player.getMainHandItem();
        if (mainHandItem && !mainHandItem.isEmpty() && mainHandItem.hasTag('tconstruct:modifiable')) {
            let modifiers = mainHandItem.getNbt().getAsString();
            if (matchModifiers(modifiers, "fortification")) {
                totalLevel += getModifierLevel(modifiers, "fortification");
            }
        }
        
        let offHandItem = player.getOffhandItem();
        if (offHandItem && !offHandItem.isEmpty() && offHandItem.hasTag('tconstruct:modifiable')) {
            let modifiers = offHandItem.getNbt().getAsString();
            if (matchModifiers(modifiers, "fortification")) {
                totalLevel += getModifierLevel(modifiers, "fortification");
            }
        }
        
        let armorSlots = player.getArmorSlots();
        let armorIterator = armorSlots.iterator();
        while (armorIterator.hasNext()) {
            let armorItem = armorIterator.next();
            if (armorItem && !armorItem.isEmpty() && armorItem.hasTag('tconstruct:modifiable')) {
                let modifiers = armorItem.getNbt().getAsString();
                if (matchModifiers(modifiers, "fortification")) {
                    totalLevel += getModifierLevel(modifiers, "fortification");
                }
            }
        }
        
        if (totalLevel > 0) {
            let world = player.level;
            if (player.persistentData.getInt('shield_cooldown') <= 0) {
                let calculatedCooldown = 100 * (1 - 0.05 * totalLevel);
                let finalCooldown = Math.max(400, calculatedCooldown);
                
                world.runCommandSilent(`/twilightforest shield @s set ${totalLevel}`);
                player.persistentData.putInt('shield_cooldown', finalCooldown);
            }
        }
    }
})