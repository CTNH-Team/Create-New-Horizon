//应力仓
Ponder.registry(event=>{
    event.create([
        "ctpp:lv_kinetic_input_box", 
        "ctpp:mv_kinetic_input_box", 
        "ctpp:hv_kinetic_input_box", 
        "ctpp:ev_kinetic_input_box", 
        "ctpp:iv_kinetic_input_box", 
        "ctpp:luv_kinetic_input_box", 
        "ctpp:zpm_kinetic_input_box",
        "ctpp:lv_kinetic_output_box", 
        "ctpp:mv_kinetic_output_box", 
        "ctpp:hv_kinetic_output_box", 
        "ctpp:ev_kinetic_output_box", 
        "ctpp:iv_kinetic_output_box", 
        "ctpp:luv_kinetic_output_box", 
        "ctpp:zpm_kinetic_output_box"
        ])
        .scene("block_ponder",
        "kinetic input/output hatch",
        "kubejs:kinetic_input",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            scene.world.showSection([0, 1, 0, 6, 1, 6], Direction.DOWN)

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [1, 1, 3, 5, 1, 3], 60)
            scene.text(60,"This is kinetic hatch,they have different levels.",[1, 2, 3]).attachKeyFrame()

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [5, 1, 3], 60)
            scene.text(60,"The lowest level of kinetic hatch you may use is the LV kinetic hatch,it have 32768su input/output at 256RPM speed.",[5, 2, 3]).attachKeyFrame()

            scene.idle(80)

            scene.text(120,"Similar to gregtech's boost mechanism,the required stress * 4 is required for each level of the kinetic hatch",[1, 2, 3]).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [4, 1, 3], 20)
            scene.text(20,"131072su",[4, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [3, 1, 3], 20)
            scene.text(20,"524288su",[3, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [2, 1, 3], 20)
            scene.text(20,"2097152su",[2, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [1, 1, 3], 20)
            scene.text(20,"8388608su",[1, 2.5, 3]).attachKeyFrame()
        })
})


//牧场
Ponder.registry(event=>{
    event.create('ctnhcore:meadow')
    .scene("meadou_building",
        "How to build a gregtech multiblock",
        "kubejs:meadow",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            scene.idle(10)
            scene.world.showSection([6, 1, 1],"down")
            scene.text(40,"First, you need a meadow main block.",[3, 2, 2]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[6, 1, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.text(40,"One click placement using the terminal.",[6, 2, 1]).attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1, 1, 1, 11, 7, 11],"down")
            scene.world.modifyBlockEntityNBT([5, 1, 1], nbt => { nbt.Speed = 0 });
            
            scene.idle(60)

            scene.overlay.showOutline("red", {}, [4, 1, 6, 2, 1, 2], 40)
            scene.text(40,"Lily pad and water can not automatically place, remember to manually fill them in.",[2,5,1]).attachKeyFrame()

            scene.idle(60)

            scene.overlay.showOutline("red", {}, [4, 1, 1, 3, 1, 1], 40)
            scene.text(40,"Ensure sufficient space for output items and liquids.",[3,2,1]).attachKeyFrame()

            scene.idle(60)

            scene.overlay.showOutline("red", {}, [7, 1, 1], 40)

            scene.text(40,"Don't forget to set the circuit to 0.",[7,2,1]).attachKeyFrame()

            scene.idle(60)

            scene.world.showSection([5, 1, 0],"down")
            scene.world.modifyBlockEntityNBT([5, 1, 1], nbt => { nbt.Speed = 256 });
            scene.text(40,"Access stress.",[4, 1, 1]).attachKeyFrame()

            scene.idle(60)

            scene.text(60,"Put in animals, the more animals there are, the more they produce.",[5, 1, 5]).attachKeyFrame()
            scene.world.createEntity("minecraft:cow", [9, 2, 5])
            scene.idle(10)
            scene.world.createEntity("minecraft:sheep", [7, 2, 5])
            scene.idle(10)
            scene.world.createEntity("minecraft:pig", [5, 2, 5])
            scene.idle(10)
            scene.world.createEntity("minecraft:chicken", [3, 2, 5])
            scene.idle(10)


            scene.idle(60)
            
            scene.overlay.showOutline("red", {}, [9, 2, 5 , 8, 3, 4], 30)
            scene.text(30,"The output of cows is milk and leather.",[9,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [7, 2, 5 , 6, 3, 4], 30)
            scene.text(30,"The output of sheep is wool.",[7,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [5, 2, 5 , 4, 3, 4], 30)
            scene.text(30,"The output of pigs is pork.",[5,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [3, 2, 5 , 2, 3, 4], 30)
            scene.text(30,"The output of chickens is eggs.",[3,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [9, 2, 5 , 2, 3, 4], 60)
            scene.text(60,"All animals produce feces.",[3,3,5]).attachKeyFrame()

            scene.idle(60)

            scene.world.showSection([4, 1, 0, 3, 1, 0],"down")
            scene.text(40,"Finally, place the container and you can use the meadow perfectly.",[2, 1, 1]).attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})


//粉碎工厂
Ponder.registry(event=>{
    event.create('ctpp:smashing_factory')
        .scene("smashing_factory_building",
        "How to build a gregtech multiblock",
        "kubejs:smashing_factory",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            var crushing_wheel_right= util.select.fromTo(2, 3, 2, 4, 3, 4)
            var crushing_wheel_control= util.select.fromTo(3, 3, 2, 3, 3, 4)
            var crushing_wheel = "create:crushing_wheel"

            scene.idle(10)

            scene.world.showSection([3, 2, 1],"down")
            scene.text(60,"First, you need a smashing factory main block.",[3, 2.5, 1]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[3, 2.5, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(40)
            scene.world.showSection([1, 1, 1, 5, 3, 5],"down")
            scene.text(40,'One click placement using the terminal.').attachKeyFrame()

            scene.idle(60)

            scene.addKeyframe()
            scene.text(100,'Due to issues with the terminal, the terminal placed crushing wheel is not placed in the correct direction, but rather appears in this form')
            scene.idle(40)
            scene.world.replaceBlocks(crushing_wheel_right, "minecraft:air", true)
            scene.world.setBlock([2, 3, 2], crushing_wheel, true)
            scene.world.setBlock([4, 3, 2], crushing_wheel, true)
            scene.world.setBlock([2, 3, 4], crushing_wheel, true)
            scene.world.setBlock([4, 3, 4], crushing_wheel, true)
            scene.overlay.showOutline("red", {}, crushing_wheel_right, 60)
            scene.idle(100)

            scene.addKeyframe()
            scene.text(80,'At this point, we need to manually replace the crushing wheel in the correct direction.')
            scene.world.setBlock([2, 3, 3], crushing_wheel, true)
            scene.world.setBlock([4, 3, 3], crushing_wheel, true)
            scene.world.modifyBlocks(crushing_wheel_right, () => Block.id(crushing_wheel).with("axis", "z"), true)
            scene.world.replaceBlocks(crushing_wheel_control, "minecraft:air", false)


            scene.idle(100)

            scene.world.modifyBlockEntityNBT([2, 2, 1], nbt => { nbt.Speed = 256 })
            scene.text(80,'Access stress.',[3,1.75,2]).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [2, 2, 1], 80)
            scene.idle(100)
            scene.world.replaceBlocks([4, 2, 1], "ctpp:mv_kinetic_input_box", true)
            scene.text(80,'If there are multiple kinetic input hatch of different levels in the smashing factory, the actual operating speed will be calculated based on the highest level of kinetic input hatch.',[5,1.75,2]).attachKeyFrame()
            scene.idle(20)
            scene.world.modifyBlockEntityNBT([4, 2, 1], nbt => { nbt.Speed = 64 })

            scene.idle(100)

            scene.text(80,'Now you can use the smashing factory normally. Please note that this machine does not produce any grinding by-products',[4,1.75,2]).attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})


//风车控制中心
Ponder.registry(event=>{
    var kinetic_output = "ctpp:lv_kinetic_output_box"
    event.create('ctpp:windmill_control_center')
        .scene("windmill_control_center_building",
        "How to build a gregtech multiblock",
        "kubejs:windmill_control_center",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            var windmill1= util.select.fromTo(2, 6, 2, 2, 14, 2)
            var windmill2= util.select.fromTo(2, 6, 4, 2, 14, 4)
            var windmill3= util.select.fromTo(4, 6, 2, 4, 14, 2)
            var windmill4= util.select.fromTo(4, 6, 4, 4, 14, 4)

            scene.idle(10)

            scene.world.showSection([3, 2, 2],"down")
            scene.text(60,"First, you need a windmill control center main block",[2.5, 3.5, 1]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[2.5, 3.5, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(40)
            scene.world.showSection([1, 1, 1, 5, 4, 5],"down")
            scene.text(40,'One click placement using the terminal.').attachKeyFrame()
            
            scene.idle(60)
            
            scene.world.setBlock([3, 3, 2], "gtceu:lv_input_hatch", true)
            scene.text(60,'Place the input hatch to ensure that lubricating oil can be input').attachKeyFrame()
            scene.idle(20)
            scene.showControls(40,[2.5, 4.5, 1],"left")
                .rightClick()
                .withItem('gtceu:lubricant_bucket')
            
            scene.idle(80)

            scene.world.setBlock([2, 3, 2], kinetic_output, true)
            scene.world.setBlock([4, 3, 2], kinetic_output, true)
            scene.world.setBlock([2, 2, 2], kinetic_output, true)
            scene.world.setBlock([4, 2, 2], kinetic_output, true)
            scene.text(60,'Place sufficient kinetic output hatch to ensure that stress can be output.').attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([2, 5, 2, 4, 5, 4],"down")
            scene.text(60,'Place windmill bearings within the 16 grid radius of the main block, and the more they are placed, the more stress they will output. A maximum of 16 windmill bearings can be included.').attachKeyFrame()

            scene.idle(80)

            scene.text(60,'Connect 128 sails or wool to each windmill bearing to maximize the stress of each windmill bearing.').attachKeyFrame()
            const WINDMILL1 = scene.world.showIndependentSection(windmill1,Direction.down)
            const WINDMILL2 = scene.world.showIndependentSection(windmill2,Direction.down)
            const WINDMILL3 = scene.world.showIndependentSection(windmill3,Direction.down)
            const WINDMILL4 = scene.world.showIndependentSection(windmill4,Direction.down)

            scene.idle(80)

            scene.text(60,'Activate the windmill bearings.').attachKeyFrame()
            scene.showControls(40,[2, 5.5, 2],"left")
                .rightClick()
            scene.world.rotateSection(WINDMILL1, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL2, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL3, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL4, 0, 360, 0, 400)

            scene.idle(80)

            scene.text(60,'With sufficient stress output compartment, you can now enjoy the power of the windmill.').attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})


//三峡大坝
Ponder.registry(event=>{
    var kinetic_output = "ctpp:lv_kinetic_output_box"
    event.create('ctnhcore:big_dam')
        .scene("big_dam_1",
            "Precautions for the big dam", 
            "kubejs:big_dam_1",
        (scene,util)=>{
            scene.scaleSceneView(0.3)
            scene.setSceneOffsetY(-10)
            scene.idle(10)

            scene.world.showSection([9, 8, 0],"down")
            scene.text(60,"First, you need a big dam main block",[9.5, 8.5, 1]).attachKeyFrame()

            scene.idle(80)

            scene.showControls(60,[9, 8.5, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(80)
            scene.world.showSection([0, 0, 0, 17, 15, 28],"down")
            scene.text(60,'One click placement using the terminal.').attachKeyFrame()

            scene.idle(80)
            
            scene.overlay.showOutline("red", {}, [16, 15, 1, 16, 15, 27], 60)
            scene.overlay.showOutline("red", {}, [3, 1, 1, 3, 1, 27], 60)
            scene.text(60,'Note that the water will not automatically place, remember to manually fill it in').attachKeyFrame()
            
            scene.idle(80)

            scene.overlay.showOutline("red", {}, [16, 15, 1, 16, 15, 27], 60)
            scene.text(60,'The top layer of water will freeze, so you can place blocks above the water source to prevent freezing.').attachKeyFrame()
            scene.idle(20)
            scene.world.showSection([16, 17, 1, 16, 17, 27],"down")
        })

        .scene("big_dam_2",
            "Limitations on the hatch of the big dam", 
            "kubejs:big_dam_2",
        (scene,util)=>{
            const BIG_DAM = scene.world.showIndependentSection([0, 0, 0, 17, 15, 28],Direction.down)
            scene.scaleSceneView(0.5)
            scene.setSceneOffsetY(-10)
            scene.idle(10)

            scene.world.rotateSection(BIG_DAM, 41, 28, -22, 8)
            
            scene.idle(80)

            scene.world.setBlock([9, 9, 0], "gtceu:lv_input_hatch", true)
            scene.text(60,'Place the input hatch to ensure that lubricating oil can be input').attachKeyFrame()

            scene.idle(80)

            scene.text(80,'You need at least 16 LV kinetic output hatch to fully output the stress inside the big dam, otherwise the dam will not work').attachKeyFrame()
            scene.idle(10)
            scene.world.replaceBlocks([11, 10, 0, 10, 7, 0], kinetic_output, true)
            scene.world.replaceBlocks([8, 10, 0, 7, 7, 0], kinetic_output, true)
        })
})
//碳刷
Ponder.registry(event=>{
    event.create([
        'create_new_age:carbon_brushes',
        'create_new_age:generator_coil'
        ])
    .scene("carbon_brushes",
        "Magneto generated electricity",
        "kubejs:carbon_brushes",
        (scene,util)=>{
            var magnet1= util.select.fromTo(4, 5, 1, 2, 5, 8)
            var magnet2= util.select.fromTo(4, 1, 1, 2, 1, 8)
            var magnet3= util.select.fromTo(1, 4, 1, 1, 2, 8)
            var magnet4= util.select.fromTo(5, 2, 1, 5, 4, 8)

            scene.idle(10)
            scene.world.showSection([0, 0, 0, 6, 0, 8],"north")

            scene.idle(10)

            scene.world.showSection([3, 3, 0],"north")
            scene.world.modifyBlockEntityNBT([3, 3, 0, 3, 3, 9], nbt => { nbt.Speed = 16 });
            scene.world.replaceBlocks(magnet1, 'create_new_age:magnetite_block', false)
            scene.world.replaceBlocks(magnet2, 'create_new_age:magnetite_block', false)
            scene.world.replaceBlocks(magnet3, 'create_new_age:magnetite_block', false)
            scene.world.replaceBlocks(magnet4, 'create_new_age:magnetite_block', false)
            scene.text(60,"This is carbon brushes.It can convert kinetic energy into electrical energy.",[3.5, 3.5, 0]).attachKeyFrame()

            scene.idle(70)

            scene.world.showSection([3, 3, 1, 3, 3.5, 1],"north")
            scene.idle(10)
            scene.text(60,"To provide sufficient kinetic energy, you need generator coils.",[2.5, 3.5, 1]).attachKeyFrame()

            scene.idle(70)

            scene.world.showSection([3, 5, 1],"north")
            scene.idle(10)
            scene.text(60,"Just having a generator coil is not enough to generate energy, you also need to install magnets around the coil.",[3, 5.5, 2]).attachKeyFrame()

            scene.idle(70)

            scene.world.showSection([3, 4, 0],"down")
            scene.world.showSection([2, 3, 0],"east")
            scene.idle(10)
            scene.text(60,"Place containers or cables to export energy",[3, 3.5, 1]).attachKeyFrame()

            scene.idle(70)

            scene.text(60,"A generator coil can be accelerated by up to 12 magnets",[2, 5.5, 1]).attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1, 5, 1, 5, 1, 1],"north")

            scene.idle(70)

            scene.text(60,"One carbon brush can receive the kinetic energy of 8 generator coils").attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1, 5, 2, 5, 1, 9],"north")

            scene.idle(70)

            scene.text(60,"As the number of magnets increases, the stress consumption of the coil will also increase",[2, 5.5, 1]).attachKeyFrame()

            scene.idle(60)

            scene.text(60,"the rotational speed is also a major contributor to the increase in stress consumption",[3.5, 3.5, 0]).attachKeyFrame()
            scene.idle(10)
            scene.world.modifyBlockEntityNBT([3, 3, 0, 3, 3, 8], nbt => { nbt.Speed = 256 })

            scene.idle(70)

            scene.text(100,"Similarly, The grade of the magnet will also increase stress consumption.").attachKeyFrame()
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:redstone_magnet', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:redstone_magnet', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:redstone_magnet', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:redstone_magnet', true)
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:layered_magnet', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:layered_magnet', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:layered_magnet', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:layered_magnet', true)
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:fluxuated_magnetite', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:fluxuated_magnetite', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:fluxuated_magnetite', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:fluxuated_magnetite', true)
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:netherite_magnet', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:netherite_magnet', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:netherite_magnet', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:netherite_magnet', true)

        })
})