//烈焰人
Ponder.registry(event=>{
    event.create('botania:fel_pumpkin')
    .scene("blaze",
        "How to spawn blaze without entering nether",
        "kubejs:blaze",
        (scene,util)=>{
            scene.idle(10)
            scene.world.showSection([0, 0, 0, 2, 4, 2],"south")
            scene.world.replaceBlocks([1, 1, 1, 1, 3, 1], "minecraft:air", false)
            scene.idle(10)

            var _blaze= scene.world.createEntity("minecraft:blaze", [1, 1, 1])

            scene.text(60,"Under normal circumstances, we cannot encounter the blaze before entering nether.",[1,1.5,1]).attachKeyFrame()

            scene.idle(60)

            scene.world.removeEntity(_blaze);

            scene.idle(10)

            scene.world.setBlocks([1, 1, 1, 1, 2, 1], "minecraft:snow_block", true)
            scene.world.setBlock([1, 3, 1], "minecraft:carved_pumpkin", true)

            scene.idle(10)

            scene.text(60,"Under normal circumstances, this is the way snow golem are placed.",[1,1.5,1]).attachKeyFrame()

            scene.idle(60)

            scene.text(80,"Now all you need to do is replace the snow blocks with iron bars, carved pumpkin with fel pumpkin, and you can spawn a blaze to use.",[1,1.5,1]).attachKeyFrame()
            scene.world.replaceBlocks([1, 1, 1, 1, 2, 1], "minecraft:iron_bars", true)
            scene.world.replaceBlocks([1, 3, 1], "botania:fel_pumpkin", true)
            scene.world.modifyBlock([1, 3, 1], () => Block.id("botania:fel_pumpkin").with("facing", "north"), true)

            scene.idle(40)

            scene.world.replaceBlocks([1, 1, 1, 1, 3, 1], "minecraft:air", true)

            scene.world.createEntity("minecraft:blaze", [1, 1, 1])

        })
})