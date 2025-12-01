EntityEvents.spawned("touhou_little_maid:fairy", event => {
    if (event.getLevel() != "mythicbotany:alfheim") {
        event.cancel();
    }
})
