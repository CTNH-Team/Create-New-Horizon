ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:vacuum_freezer/liquid_oxygen' })
    event.remove({ id: 'gtmthings:assembler/wireless_item_transfer_cover' })
    event.remove({ id: 'gtmthings:assembler/wireless_fluid_transfer_cover' })
    event.remove({ id: 'gtmthings:assembler/advanced_wireless_item_transfer_cover' })
    event.remove({ id: 'gtmthings:assembler/advanced_wireless_fluid_transfer_cover' })
    event.remove({ id: 'ctnhcore:assembler/cover_ender_fluid_link' })
    event.remove({ id: 'gtceu:assembler/cover_ender_fluid_link' })
    let snow = event.recipes.gtceu
        //更易冻的液氧
    snow.vacuum_freezer("adjust_liquid_oxygen")
        .inputFluids(Fluid.of('gtceu:oxygen', 1000))
        .outputFluids(Fluid.of('gtceu:liquid_oxygen', 1000))
        .EUt(480)
        .duration(120)
        //NERF 酸液
        //NERF 无线传输覆盖版
    snow.assembler("adjust_trans_item")
        .itemInputs(
            'gtceu:luv_sensor',
            'gtceu:luv_emitter',
            'gtceu:luv_robot_arm',
            '2x #gtceu:circuits/luv',
            '8x gtceu:ender_eye_plate',
            '4x gtceu:dense_rhodium_plated_palladium_plate',
        )
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtmthings:wireless_item_transfer_cover')
        .EUt(30720)
        .duration(200)
    snow.assembler("adjust_trans_advanced_item")
        .itemInputs(
            'gtmthings:wireless_item_transfer_cover',
            '#gtceu:circuits/luv',
            '16x gtceu:item_filter'
        )
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtmthings:advanced_wireless_item_transfer_cover')
        .EUt(30720)
        .duration(200)
    snow.assembler("adjust_trans_fluid")
        .itemInputs(
            'gtceu:luv_sensor',
            'gtceu:luv_emitter',
            'gtceu:luv_fluid_regulator',
            '2x #gtceu:circuits/luv',
            '8x gtceu:ender_eye_plate',
            '4x gtceu:dense_rhodium_plated_palladium_plate',
        )
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtmthings:wireless_fluid_transfer_cover')
        .EUt(30720)
        .duration(200)
    snow.assembler("adjust_trans_advanced_fluid")
        .itemInputs(
            'gtmthings:wireless_fluid_transfer_cover',
            '#gtceu:circuits/luv',
            '16x gtceu:fluid_filter'
        )
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtmthings:advanced_wireless_fluid_transfer_cover')
        .EUt(30720)
        .duration(200)
        //NERF 末影流体覆盖版
    snow.assembler("adjust_ender_fluid_link")
        .itemInputs(
            'gtceu:luv_sensor',
            'gtceu:luv_emitter',
            'gtceu:luv_electric_pump',
            '2x #gtceu:circuits/luv',
            '8x gtceu:ender_eye_plate',
            '4x gtceu:dense_rhodium_plated_palladium_plate',
        )
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtceu:ender_fluid_link_cover')
        .EUt(30720)
        .duration(200)
})