//添加传动杆切割配方
//鼓风机动力合成配方

ServerEvents.recipes(e => {
    let ingot = ['tin', 'bronze', 'zinc', 'brass', 'nickel', 'lead']
    for (let i of ingot) {
        e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
        e.recipes.create.milling(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
    }
    let crushingot = ['andesite_alloy']
    for (let i of crushingot) {
        e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
        e.recipes.create.milling(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
    }
    e.recipes.create.crushing('gtceu:coke_dust', 'gtceu:coke_gem')
    e.recipes.create.milling('gtceu:coke_dust', 'gtceu:coke_gem')
})
ServerEvents.recipes(e => {
    let ingot = ['copper', 'iron', 'gold']
    for (let i of ingot) {
        e.recipes.create.crushing(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)
        e.recipes.create.milling(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)

    }
})

//切割
ServerEvents.recipes(event => {
    event.recipes.create.cutting('2x create:shaft', 'gtceu:andesite_alloy_ingot')
    let plates = ['copper', 'iron', 'gold', 'lead', 'nickel', 'tin', 'silver', 'annealed_copper', 'cupronickel', 'steel', 'red_alloy', 'mana_steel', 'conductive_alloy']
    plates.forEach(plate => {
        event.recipes.create.cutting(`2x gtceu:${plate}_single_wire`, `gtceu:${plate}_plate`)
    })
})

//动力合成
ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('create:encased_fan', [
        "ABCBA",
        "DDEDD",
        "AFBFA",
        "AFBFA",
        "GGHGG"
    ], {
        A: "create:andesite_casing",

        B: "create:shaft",

        C: "minecraft:redstone_torch",

        D: 'gtceu:steel_rod',

        E: "minecraft:redstone",

        F: 'gtceu:steel_plate',

        G: "minecraft:iron_bars",

        H: "create:propeller"

    })
    event.recipes.create.mechanical_crafting('2x create:crushing_wheel', [
        " AAA ",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        " AAA "
    ], {
        A: "gtceu:wrought_iron_plate",

        B: "gtceu:andesite_alloy_plate",

        C: "gtceu:iron_rod",

        D: 'gtceu:wrought_iron_gear',

    })
    event.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
        "  A  ",
        " BCB ",
        "ACDCA",
        " BCB ",
        "  A  "
    ], {
        A: 'gtceu:fine_copper_wire',

        B: "gtceu:andesite_alloy_plate",

        C: "gtceu:resin_printed_circuit_board",

        D: 'create:precision_mechanism',

    })

    event.recipes.create.mechanical_crafting('create:large_water_wheel', [
        " AAA ",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        " AAA "
    ], {
        A: "gtceu:treated_wood_planks",

        B: "gtceu:treated_wood_screw",

        C: "gtceu:gold_ring",

        D: 'create:water_wheel'
    })

    event.recipes.create.mechanical_crafting('javd:portal_block', [
        "AAAAA",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        "AAAAA"
    ], {
        A: "gtceu:double_shadow_steel_plate",

        B: "#gtceu:circuits/hv",

        C: "gtceu:double_black_steel_plate",

        D: 'gtceu:hv_machine_casing'
    })

    event.recipes.create.mechanical_crafting('gtceu:nan_certificate', [
        "ABBCCCBBA",
        "BDEFGFEDB",
        "BEHIJIHEB",
        "CKIJLJIMC",
        "CNJOPOJNC",
        "CKIJQJIMC",
        "BEHIJIHEB",
        "BDERGREDB",
        "ABBCCCBBA"
    ], {
        A: "gtceu:uhv_sensor",
        B: "gtceu:uhv_electric_pump",
        C: "gtceu:uhv_electric_motor",
        D: 'gtmthings:uhv_wireless_energy_receive_cover',
        E: "gtceu:elementium_gear",
        F: "ars_nouveau:summon_focus",
        G: "bloodmagic:reagentsuppression",
        H: "gtceu:uhv_robot_arm",
        I: "gtmthings:uhv_huge_dual_hatch",
        J: "gtceu:gravi_star",
        K: "cataclysm:cursium_ingot",
        L: "bigger_ae2:quantum_item_storage_cell",
        M: "cataclysm:ignitium_ingot",
        N: "gtceu:ultra_mana_frame",
        O: "gtceu:max_battery",
        P: "gtceu:uhv_field_generator",
        Q: "bigger_ae2:quantum_fluid_storage_cell",
        R: "apotheosis:infused_breath"
    })

    event.recipes.create.mechanical_crafting('ctnhcore:martial_morality_eye', [
        "ABCCCBA",
        "BADCDAB",
        "BADCDAB",
        "BAAEAAB",
        "BADCDAB",
        "BADCDAB",
        "ABCCCBA"
    ], {
        A: 'gtceu:lp_steam_rock_crusher',

        B: 'kubejs:heavy_machinery_casing',

        C: 'create:mechanical_drill',

        D: 'createoreexcavation:drilling_machine',

        E: 'gtceu:hp_steam_rock_crusher'
    })

})

//动力辊压机
ServerEvents.recipes(event => {
    event.recipes.create.compacting('minecraft:paper', '2x gtceu:paper_dust')
    let ingot = ['iron', 'copper', 'gold', 'zinc', 'brass', 'wrought_iron', 'steel', 'rubber', 'red_alloy', 'andesite_alloy', 'bronze', 'potin', 'nickel', 'tin', 'mana_steel']
    for (let i of ingot) {
        event.recipes.create.compacting(`gtceu:${i}_plate`, `2x #forge:ingots/${i}`)
    }
    event.recipes.create.compacting('gtceu:diamond_plate', '2x minecraft:diamond')
    event.recipes.create.compacting('gtceu:emerald_plate', '2x minecraft:emerald')
    event.recipes.create.compacting('gtceu:nether_quartz_plate', '2x minecraft:quartz')
    event.recipes.create.compacting('gtceu:lapis_plate', '2x minecraft:lapis_lazuli')
    event.recipes.create.compacting('minecraft:netherrack', ['minecraft:gravel', '2x minecraft:redstone', Fluid.of('minecraft:lava', 250)])
    event.recipes.create.compacting('minecraft:bricks', [Fluid.of('gtceu:cement', 250), '4x minecraft:brick'])
    event.recipes.create.compacting('minecraft:bricks', [Fluid.of('gtceu:cement', 50), '5x gtceu:brick_dust'])
    event.recipes.create.pressing('gtceu:gold_ring', 'gtceu:gold_rod')
    event.recipes.create.pressing('gtceu:iron_ring', 'gtceu:iron_rod')
    event.recipes.create.pressing('gtceu:copper_ring', 'gtceu:copper_rod')
    event.recipes.create.pressing('gtceu:wrought_iron_ingot', 'gtceu:hot_high_temp_wrought_precursor_ingot')
    event.recipes.create.compacting('ctnhcore:refined_iron_ingot', ['8x gtceu:steel_precursor_dust'])
        /*Ingredient.of("#forge:ingots").itemIds.forEach((id) =>{
          id
        })*/
    event.remove({ id: 'create:pressing/copper_ingot' })
    event.remove({ id: 'create:pressing/brass_ingot' })
    event.remove({ id: 'create:pressing/gold_ingot' })
})

//搅拌机
ServerEvents.recipes(event => {
        event.recipes.create.mixing('8x gtceu:potin_dust', ['6x gtceu:copper_dust', '2x gtceu:tin_dust', 'gtceu:lead_dust']).heated()
        event.recipes.create.mixing('8x extendedcrafting:luminessence', ['4x minecraft:glowstone_dust', 'minecraft:gunpowder', 'minecraft:redstone']).heated()
        event.recipes.create.mixing('16x extendedcrafting:crystaltine_ingot', ['4x extendedcrafting:luminessence_block', 'gtceu:quantum_star', 'minecraft:netherite_ingot']).heated()
        event.recipes.create.mixing('create:rose_quartz', ['minecraft:quartz', '4x minecraft:redstone']).heated()
        event.recipes.create.mixing('create:rose_quartz', ['2x biomesoplenty:rose_quartz_chunk', Fluid.of('minecraft:water', 100)])
        event.recipes.create.mixing(Fluid.of('gtceu:concrete', /** @type {number} */ 1000), ['gtceu:stone_dust', 'gtceu:quartz_sand_dust', 'gtceu:clay_dust', '2x gtceu:calcite_dust', Fluid.of('minecraft:water', 1000)]).heated()
        event.recipes.create.mixing('2x gtceu:andesite_alloy_dust', [Fluid.of('gtceu:iron', 144), '2x gtceu:andesite_dust'])
        event.recipes.create.mixing('gtceu:stem_cells', [Fluid.of('gtceu:simple_growth_medium', 144), '4x ctnhcore:animal_excreta'])
        event.recipes.create.mixing('2x gtceu:treated_wood_planks', [Fluid.of('gtceu:creosote', 250), '2x #minecraft:planks'])
        event.recipes.create.mixing('gtceu:red_alloy_dust', ['4x minecraft:redstone', '1x gtceu:copper_dust']).heated()
        event.recipes.create.mixing(['gtceu:andesite_alloy_dust', Item.of('gtceu:andesite_alloy_dust').withChance(0.3)], ['gtceu:andesite_dust', 'gtceu:iron_dust'])
        event.recipes.create.mixing('8x gtceu:steel_precursor_dust', ['8x gtceu:wrought_iron_dust', '3x gtceu:coke_dust']).heated()
        event.recipes.create.mixing('8x gtceu:steel_precursor_dust', ['8x gtceu:wrought_iron_dust', '6x #forge:dusts/charcoal']).heated()
        event.recipes.create.mixing('3x gtceu:bronze_dust', ['3x gtceu:copper_dust', 'gtceu:tin_dust']).heated()

        //alex 磁铁
        event.recipes.create.mixing('2x alexscaves:scarlet_neodymium_ingot', ["alexscaves:raw_scarlet_neodymium", "minecraft:iron_ingot"])
        event.recipes.create.mixing('2x alexscaves:azure_neodymium_ingot', ["alexscaves:raw_azure_neodymium", "minecraft:iron_ingot"])

    })
    //组装
ServerEvents.recipes(event => { //红色合金线缆
        event.recipes.create.deploying('gtceu:red_alloy_single_cable', ['gtceu:red_alloy_single_wire', 'gtceu:rubber_plate'])
    })
    //序列组装
ServerEvents.recipes(event => {
    let transitional = 'gtceu:coke_oven_brick'
    event.recipes.create.sequenced_assembly([ //焦炉砖
            'gtceu:coke_oven_bricks'
        ], 'gtceu:coke_oven_brick', [
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:cement', 100)]),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:coke_oven_brick']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:cement', 100)]),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:coke_oven_brick']),
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'ctpp:incomplete_basic_mechanism'
    event.recipes.create.sequenced_assembly([
            'ctpp:basic_mechanism'
        ], '#minecraft:wooden_slabs', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:andesite_alloy_ingot']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:iron_plate']),
            event.recipes.createCutting(transitional, transitional)
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'create:incomplete_precision_mechanism'
    event.recipes.create.sequenced_assembly([
            'create:precision_mechanism'
        ], 'ctpp:basic_mechanism', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:brass_plate']),
            event.recipes.createDeploying(transitional, [transitional, 'create:cogwheel']),
            event.recipes.createDeploying(transitional, [transitional, 'create:large_cogwheel']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('alexscaves:acid', 500)])
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'create:electron_tube'
    event.recipes.create.sequenced_assembly([
            'gtceu:vacuum_tube'
        ], 'create:electron_tube', [
            event.recipes.createDeploying(transitional, [transitional, 'minecraft:glass']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_ingot']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_double_wire']),
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'kubejs:unfinished_steel_mechanism'
    event.recipes.create.sequenced_assembly([
            'ctpp:steel_mechanism'
        ], 'create:precision_mechanism', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_plate']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:red_alloy_plate']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_screw']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:rubber', 576)])
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'gtceu:ender_pearl_dust'
    event.recipes.create.sequenced_assembly([
            'gtceu:ender_eye_dust'
        ], 'gtceu:ender_pearl_dust', [
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:blaze', 288)]),
            event.recipes.createPressing(transitional, [transitional])
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'gtceu:bronze_machine_casing'
    event.recipes.create.sequenced_assembly([
            'create:steam_engine'
        ], 'gtceu:bronze_machine_casing', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_plate']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:long_steel_rod']),
            event.recipes.createDeploying(transitional, [transitional, 'ctpp:steel_mechanism']),
            event.recipes.createPressing(transitional, [transitional]),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:lubricant', 250)])
        ]).transitionalItem(transitional)
        .loops(3)
    event.remove({ output: 'create:steam_engine' })
})
ServerEvents.recipes(event => {
    let transitional = 'minecraft:paper'
    event.recipes.create.sequenced_assembly([
            '2x gtceu:resistor'
        ], 'minecraft:paper', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_single_wire']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:coal_dust']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:sticky_resin']),
            event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'gtceu:small_gallium_arsenide_dust'
    event.recipes.create.sequenced_assembly([
            '2x gtceu:diode'
        ], 'gtceu:small_gallium_arsenide_dust', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_single_wire']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:tin', 144)]),
            event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'ctnhcore:high_strength_concrete'
    event.recipes.create.sequenced_assembly([
            'ctnhcore:sintering_kiln'
        ], 'gtceu:steel_firebox_casing', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_block']),
            event.recipes.createDeploying(transitional, [transitional, 'ctnhcore:advanced_coke_oven']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:firebricks']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:creosote', 1000)])
        ]).transitionalItem(transitional)
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'minecraft:orange_stained_glass'
    event.recipes.create.sequenced_assembly([
            'ctnhcore:bronze_framed_glass'
        ], 'minecraft:glass', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:bronze_tiny_fluid_pipe']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:bronze_rod']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:long_bronze_rod']),
        ]).transitionalItem(transitional)
        .loops(2)
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'gtceu:resin_circuit_board'
        },
        "loops": 1,
        "results": {
            "item": "gtceu:basic_electronic_circuit"
        },
        "sequence": [{
                "type": "create:deploying",
                "ingredients": [{
                        "item": "gtceu:resin_circuit_board"
                    },
                    {
                        "item": "gtceu:copper_quadruple_wire"
                    }
                ],
                "results": [{
                    "item": "gtceu:resin_circuit_board"
                }]
            },
            {
                "type": "create:deploying",
                "ingredients": [{
                        "item": "gtceu:resin_circuit_board"
                    },
                    {
                        "item": "gtceu:red_alloy_double_wire"
                    }
                ],
                "results": [{
                    "item": "gtceu:resin_circuit_board"
                }]
            },
            {
                "type": "create:deploying",
                "ingredients": [{
                        "item": "gtceu:resin_circuit_board"
                    },
                    {
                        "item": 'gtceu:vacuum_tube'
                    }
                ],
                "results": [{
                    "item": "gtceu:resin_circuit_board"
                }]
            },
            {
                "type": "create:deploying",
                "ingredients": [{
                        "item": "gtceu:resin_circuit_board"
                    },
                    {
                        "item": 'gtceu:resistor'
                    }
                ],
                "results": [{
                    "item": "gtceu:resin_circuit_board"
                }]
            },
            {
                "type": "create:filling",
                "ingredients": [{
                        "item": "gtceu:resin_circuit_board"
                    },
                    {
                        "amount": 288,
                        "fluid": 'gtceu:rubber'
                    }
                ],
                "results": [{
                    "item": "gtceu:resin_circuit_board"
                }]
            },
            {
                "type": "create:pressing",
                "ingredients": [{
                    "item": "gtceu:resin_circuit_board"
                }],
                "results": [{
                    "item": "gtceu:resin_circuit_board"
                }]
            },
            {
                "type": "create_new_age:energising",
                "energy_needed": 10000,
                "ingredients": [{
                    "item": "gtceu:resin_circuit_board"
                }],
                "results": [{
                    "item": "gtceu:resin_circuit_board"
                }]
            }
        ],
        "transitionalItem": {
            "item": "gtceu:resin_circuit_board"
        }
    })
})


ServerEvents.recipes(event => {
    let transitional = 'gtceu:coke_oven_bricks'
    event.recipes.create.sequenced_assembly([
            '2x gtceu:firebricks'
        ], 'gtceu:coke_oven_bricks', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:firebrick']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:firebrick']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:gypsum_dust']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:cement', 250)])
        ]).transitionalItem(transitional)
        .loops(2)
    event.remove({ output: 'gtceu:firebricks' })
})

ServerEvents.recipes(event => {
    let transitional = 'gtceu:coke_dust'
    event.recipes.create.sequenced_assembly([
            'kubejs:high_quality_solid_fuel'
        ], 'gtceu:coke_dust', [
            event.recipes.createCutting(transitional, [transitional]),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:lignin_dust']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:creosote', 250)]),
            event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem(transitional)
        .loops(1)
})

ServerEvents.recipes(event => {
        let transitional = 'create:blaze_cake'
        event.recipes.create.sequenced_assembly([
                'kubejs:double_blaze_cake'
            ], 'create:blaze_cake', [
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 100)]),
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 100)]),
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 100)]),
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 100)]),
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 100)]),
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 100)]),
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 200)]),
                event.recipes.create.filling(transitional, [transitional, Fluid.of("minecraft:lava", 200)])
            ]).transitionalItem(transitional)
            .loops(1)
    })
    //注液器
ServerEvents.recipes(event => {
    event.recipes.create.filling('legendarysurvivaloverhaul:thermometer', ['kubejs:thermometer_case', Fluid.of('gtceu:mercury', 1000)])
    event.remove({ output: 'legendarysurvivaloverhaul:thermometer' })
    event.recipes.create.filling('2x ctnhcore:simple_nutritious_meal', ['minecraft:paper', Fluid.of('gtceu:biomass', 500)])
})

ServerEvents.recipes(event => {
    event.recipes.create.crushing('gtceu:clay_dust', 'minecraft:clay_ball')
    event.recipes.create.crushing('4x gtceu:clay_dust', 'minecraft:clay')
    event.recipes.create.crushing('gtceu:brick_dust', 'minecraft:brick')
    event.recipes.create.crushing('4x gtceu:brick_dust', 'minecraft:bricks')
    event.recipes.create.crushing('gtceu:ender_pearl_dust', 'minecraft:ender_pearl')
    event.recipes.create.crushing('gtceu:flint_dust', 'minecraft:flint')
    event.recipes.create.crushing('gtceu:quartz_sand_dust', 'minecraft:sand')
    event.recipes.create.milling('gtceu:flint_dust', 'minecraft:flint')
    event.recipes.create.milling('gtceu:quartz_sand_dust', 'minecraft:sand')
    event.recipes.create.crushing('gtceu:asurine_dust', 'create:asurine')
    event.recipes.create.crushing('gtceu:crimsite_dust', 'create:crimsite')
    event.recipes.create.crushing('gtceu:ochrum_dust', 'create:ochrum')
    event.recipes.create.crushing('gtceu:veridium_dust', 'create:veridium')
    event.recipes.create.splashing(['gtceu:silicon_dioxide_dust', Item.of('4x gtceu:zinc_nugget').withChance(0.5)], 'gtceu:asurine_dust')
    event.recipes.create.splashing(['gtceu:silicon_dioxide_dust', Item.of('4x minecraft:iron_nugget').withChance(0.5)], 'gtceu:crimsite_dust')
    event.recipes.create.splashing(['gtceu:silicon_dioxide_dust', Item.of('4x gtceu:precious_alloy_nugget').withChance(0.5)], 'gtceu:ochrum_dust')
    event.recipes.create.splashing(['gtceu:silicon_dioxide_dust', Item.of('4x gtceu:copper_nugget').withChance(0.5)], 'gtceu:veridium_dust')
    event.recipes.create.splashing(['gtceu:stone_dust', Item.of('minecraft:diamond').withChance(0.05), Item.of('minecraft:gold_nugget').withChance(0.05), Item.of('minecraft:iron_nugget').withChance(0.1), Item.of('gtceu:copper_nugget').withChance(0.08), Item.of('gtceu:zinc_nugget').withChance(0.05), Item.of('gtceu:platinum_nugget').withChance(0.01), Item.of('gtceu:manganese_nugget').withChance(0.04), Item.of('gtceu:chromium_nugget').withChance(0.02)], 'gtceu:deepslate_dust')
    event.recipes.create.crushing(['gtceu:deepslate_dust', Item.of('gtceu:flint_dust').withChance(0.25)], 'minecraft:tuff')
    event.remove({ id: 'create:crushing/tuff' })
    event.remove({ id: 'create:crushing/tuff_recycling' })
})

ServerEvents.recipes(event => {
    event.recipes.create.item_application('create:shadow_steel_casing', ['minecraft:obsidian', 'gtceu:shadow_steel_plate'])
    event.recipes.create.mixing('4x create:chromatic_compound', [Fluid.of('minecraft:lava', 500), 'gtceu:netherite_dust', 'gtceu:andesite_alloy_ingot', 'create:polished_rose_quartz'])
    event.recipes.create.mixing('5x minecraft:gold_nugget', [Fluid.of("gtceu:aqua_regia", 500), '2x gtceu:ochrum_dust'])
})
ServerEvents.recipes(event => {
    event.recipes.create.splashing([Item.of('minecraft:gold_nugget', 3).withChance(0.8), Item.of('minecraft:gold_nugget', 2).withChance(0.6), Item.of('minecraft:gold_nugget', 1).withChance(0.4), Item.of('gtceu:silver_nugget').withChance(0.6)], 'gtceu:precious_alloy_dust')
})
ServerEvents.recipes(event => {
    let transitional = 'gtceu:ulv_input_bus'
    event.recipes.create.sequenced_assembly([
            'gtceu:ulv_input_bus'
        ], '#forge:chests/wooden', [
            event.recipes.createDeploying(transitional, [transitional, 'ctpp:steel_mechanism']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:ulv_machine_casing']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:double_wrought_iron_plate']),
        ]).transitionalItem('#forge:chests/wooden')
        .loops(1)
})
ServerEvents.recipes(event => {
    let transitional = 'gtceu:ulv_input_hatch'
    event.recipes.create.sequenced_assembly([
            'gtceu:ulv_input_hatch'
        ], 'gtceu:bronze_drum', [
            event.recipes.createDeploying(transitional, [transitional, 'ctpp:steel_mechanism']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:ulv_machine_casing']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:double_wrought_iron_plate']),
        ]).transitionalItem('gtceu:bronze_drum')
        .loops(1)
})


ServerEvents.recipes(event => {
    let transitional = 'gtceu:tungsten_steel_frame'
    event.recipes.create.sequenced_assembly([
            Item.of('gtceu:assembly_line_casing').withChance(0.95),
            Item.of('gtceu:snow_steel_block').withChance(0.05)
        ], 'gtceu:tungsten_steel_frame', [
            event.recipes.createDeploying(transitional, [transitional, '#gtceu:circuits/zpm']),
            event.recipes.createPressing(transitional, [transitional]),
            event.recipes.createPressing(transitional, [transitional]),
            event.recipes.createDeploying(transitional, [transitional, '#gtceu:circuits/zpm']),
            event.recipes.createPressing(transitional, [transitional]),
            event.recipes.createPressing(transitional, [transitional]),
            event.recipes.createDeploying(transitional, [transitional, '#gtceu:circuits/luv']),
            event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem('gtceu:tungsten_steel_frame')
        .loops(2)

})
ServerEvents.recipes(event => {
    let transitional = 'gtceu:tungstensteel_gearbox'
    event.recipes.create.sequenced_assembly([
            Item.of('gtceu:assembly_line_unit').withChance(0.95),
            Item.of('gtceu:snow_steel_block').withChance(0.05)
        ], 'gtceu:tungstensteel_gearbox', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:ruridit_gear']),
            event.recipes.createPressing(transitional, [transitional]),
            event.recipes.createCutting(transitional, [transitional]),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:iv_robot_arm']),
            event.recipes.createCutting(transitional, [transitional]),
            event.recipes.createPressing(transitional, [transitional]),
        ]).transitionalItem('gtceu:tungstensteel_gearbox')
        .loops(4)

})
ServerEvents.recipes(event => {
    event.recipes.createMilling(Item.of('gtceu:obsidian_dust').withChance(0.75), 'minecraft:obsidian')
})