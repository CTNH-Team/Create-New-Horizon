//在startup_scripts中注册能力后使用此模板
BlockEvents.broken(event => {
    let player = event.player;
    let mainHandItem = player.getMainHandItem();
    if (!mainHandItem || mainHandItem.isEmpty() || !mainHandItem.hasTag('tconstruct:modifiable')) return;
    let modifiers = mainHandItem.getNbt().getAsString();
    if (matchModifiers(modifiers, "test")) {
        console.log("HelloWorld");
    }
    return;
});