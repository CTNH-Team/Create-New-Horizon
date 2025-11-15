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
