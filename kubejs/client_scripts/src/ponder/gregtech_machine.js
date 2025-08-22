//焦炉
Ponder.registry(event=>{
    event.create('gtceu:coke_oven')
    .scene("coke_oven_building",
        "How to build a gregtech multiblock",
        "kubejs:coke_oven",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            scene.idle(10)
            scene.world.showSection([3,2,2],"down")
            scene.text(60,"First, you need a multiblock main block.(Use a coke oven block as an example)",[3,2,2]).attachKeyFrame()

            scene.idle(60)
            scene.showControls(40,[3,2.5,2],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(40)
            scene.world.showSection([2,1,2,4,3,4],"down")
            scene.text(40,'Then the whole sturcture will be placed as you have enough blocks').attachKeyFrame()
            scene.idle(60)
            scene.text(60,'You can replace any block in the structure with a coke oven hatch')
            scene.world.setBlock([2,2,2],'gtceu:coke_oven_hatch',true)
            scene.idle(60)
            scene.text(60,'So that you can export the fluid and item through it with pipes')
            scene.world.showSection([1,2,2,0,1,2],"down")
            scene.idle(60)
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})


//装配线
Ponder.registry(event=>{
    event.create('gtceu:assembly_line')
    .scene("assembly_line_building",
        "How to build a gregtech multiblock",
        "kubejs:assembly_line",
        (scene,util)=>{
            scene.world.showSection([0, 0, 0, 17, 0, 10],"down")
            //scene.showStructure()

            scene.idle(10)
            scene.world.showSection([1, 3, 8],"down")
            scene.text(40,"First, you need a assembly line main block.",[1, 4, 9]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[1, 4, 8],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.text(60,"One click placement using the terminal.",[0, 5.5, 8]).attachKeyFrame()
            scene.idle(20)
            scene.world.showSection([1, 1, 6, 17, 4, 10],"down")

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [16, 2, 6], 60)
            scene.text(60,"ulv output bus",[16, 3, 6]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [16, 3, 6], 60)
            scene.text(60,"quadruple input hatch",[16, 4, 6]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [15, 2, 6, 1, 2, 6], 60)
            scene.text(60,"ulv input bus",[1, 3, 6]).attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([16, 1, 5, 16, 2, 5],"down")
            scene.idle(20)
            scene.text(60,"Place the pattern provider in the AE main network, paying attention to place to closely to the ULV output bus.",[16, 3, 5]).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [16, 1, 5, 16, 2, 5], 60)
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [16, 2, 5], 60)
            scene.text(60,"Use a wrench to adjust the sample supplier to send material upwards.",[16, 3, 5]).attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([16, 3, 5],"down")
            scene.idle(20)
            scene.text(60,"Place any level of buffer, pay attention to place to closely following the quadruple input hatch.",[16, 4, 5]).attachKeyFrame()
            scene.idle(80)
            scene.text(60,"Set automatic output direction for items",[16, 3.5, 5.5]).attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([15, 3, 1, 1, 2, 5], Direction.DOWN)
            scene.idle(20)
            scene.text(60,"Place the storage part of the AE subnet.",[15, 4, 5]).attachKeyFrame()
            scene.idle(80)
            scene.text(60,"Please note that quartz fiber should be used to disconnect the direct connection between the subnet and the main network, while also supplying power to the subnet.",[15.5, 2.75, 5]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [15, 2, 5, 1, 2, 5], 140)
            scene.text(140,"Set the priority of the storage bus, decreasing from the main block direction to the output bus, which means whether your materials will enter the assembly line in the correct order for synthesis.",[11, 3.25, 5.5]).attachKeyFrame()

            scene.idle(160)

            scene.world.showSection([0, 2, 9, 0, 2, 10], Direction.DOWN)
            scene.text(60,"Connecting to the power grid.",[0, 3, 10]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [16, 2, 5], 240)
            scene.idle(20)
            scene.text(140,"Place the 'one click template' ('+'button) in the template encoding terminal of the pattern provide to ensure that the materials are output to the buffer in the correct order.",[16, 3, 5]).attachKeyFrame()
            scene.idle(160)
            scene.text(60,"Change the lock synthesis mode to 'until the main product is returned' on the left side of the pattern provide.",[16, 3, 5]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [2, 3, 8], 60)
            scene.text(60,"Put in the research data required for the formula",[2, 4, 8]).attachKeyFrame()

            scene.idle(80)

            scene.text(60,"Congratulations, you have learned how to use AE2 for assembly line automation.",[1, 4, 8]).attachKeyFrame()
        })
    })



//中子活化器
Ponder.registry(event=>{
    event.create('ctnhcore:neutron_activator')
    .scene("neutron_activator_building",
        "How to build a gregtech multiblock",
        "kubejs:neutron_activator",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            scene.idle(10)
            scene.world.showSection([3,1,1],"down")
            scene.text(40,"First, you need a neutron activator main block.",[3,2,2]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[3,1,1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.text(40,"One click placement using the terminal.",[3,2,1]).attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1,1,5,5,6,1],"down")

            scene.idle(60)

            scene.showControls(40,[1,1,2],"left")
                .rightClick()
                .withItem('gtceu:machine_controller_cover')
                .whileSneaking()
            scene.text(40,"Place a machine control cover plate in the direction facing redstone at the neutron accelerator.",[1,2,2]).attachKeyFrame()
            scene.world.showSection([0,1,1,0,1,2],"down")
            scene.idle(60)
            scene.text(40,"Connecting to the power grid.",[1,2,2]).attachKeyFrame()
            scene.world.showSection([1,1,0,0,1,0],"down")
            scene.idle(60)
            scene.text(60,"Set the maximum kinetic energy of the neutron sensor to the maximum kinetic energy required by the formula, and the minimum kinetic energy to the minimum kinetic energy required by the formula+5MeV (1MeV=1000Kev).",[1,2,3]).attachKeyFrame()
            scene.idle(70)
            scene.text(60,"The kinetic energy of the neutron activator will now be maintained within the required kinetic energy range of the formula.",[4,1,2]).attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})