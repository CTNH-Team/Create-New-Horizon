ServerEvents.recipes(event => {
    event.remove({ id: "deep_aether:skyroot_crafting_table" })
    event.remove({ id: "aether:skyroot_crafting_table" })
    event.remove({ id: "aether:skyroot_chest" })
    event.shaped(
        Item.of("gtceu:andesite_alloy_ingot", 4), [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "minecraft:iron_ingot",
            B: "minecraft:andesite",
        })
    event.shaped(
        Item.of("create:shaft", 4), [
            "A",
            "A",
            "A"
        ], {
            A: "gtceu:andesite_alloy_ingot",
        })
    event.shaped(
        Item.of("create:mechanical_press", 1), [
            " A ",
            "BCB",
            " D "
        ], {
            A: "minecraft:iron_ingot",
            B: "create:shaft",
            C: "create:andesite_casing",
            D: "minecraft:iron_block"
        })
    event.shaped(
        Item.of("vintageimprovements:recipe_card", 4), [
            " A ",
            "BBB",
            "CCC"
        ], {
            A: "createmetallurgy:sandpaper_belt",
            B: "minecraft:redstone",
            C: "gtceu:brass_plate"
        })
    event.shaped(
        Item.of("create:windmill_bearing", 1), [
            "AAA",
            "BCB",
            "BDB"
        ], {
            A: "#minecraft:wooden_slabs",
            B: "minecraft:stone",
            C: "ctpp:basic_mechanism",
            D: "create:shaft"
        })
    event.shaped(
        Item.of("create:mechanical_bearing", 1), [
            "AAA",
            "BCB",
            "BDB"
        ], {
            A: "#minecraft:wooden_slabs",
            B: "#minecraft:planks",
            C: "gtceu:andesite_alloy_plate",
            D: "create:shaft"
        })
    event.shapeless("create:depot", [
        "create:andesite_casing", "gtceu:andesite_alloy_plate"
    ])
    event.shaped(
        Item.of("create:cogwheel", 4), [
            " A ",
            "ABA",
            " A "
        ], {
            A: "#minecraft:planks",
            B: "gtceu:small_andesite_alloy_gear",
        })
    event.shaped(
        Item.of("create:large_cogwheel", 4), [
            " A ",
            "ABA",
            " A "
        ], {
            A: "gtceu:treated_wood_planks",
            B: "gtceu:andesite_alloy_gear",
        })
    event.shaped(
        Item.of("create:water_wheel", 1), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "gtceu:treated_wood_planks",
            B: "create:large_cogwheel",
        })
    event.shaped(
        Item.of("create:mechanical_drill", 1), [
            " D ",
            "CBC",
            " A "
        ], {
            A: "create:andesite_casing",
            B: "create:shaft",
            C: "gtceu:andesite_alloy_ingot",
            D: "gtceu:iron_drill_head"
        })
    event.shaped(
        Item.of("create:mechanical_mixer", 1), [
            "ABA",
            "CDC",
            " E "
        ], {
            A: "ctpp:basic_mechanism",
            B: "create:shaft",
            C: "create:andesite_casing",
            D: "create:large_cogwheel",
            E: "create:whisk"
        })
    event.shaped(
        Item.of("ctpp:basic_mechanism", 2), [
            "ABC",
            "DEF",
            "GGG"
        ], {
            A: "#forge:tools/saws",
            B: "gtceu:andesite_alloy_rod",
            C: "gtceu:gold_plate",
            D: "gtceu:andesite_alloy_plate",
            E: "gtceu:andesite_alloy_gear",
            F: "gtceu:iron_rod",
            G: "#minecraft:planks"
        })
    event.shaped(
        Item.of("create:electron_tube", 1), [
            " A ",
            "BCB",
            " B "
        ], {
            A: "create:polished_rose_quartz",
            B: "gtceu:andesite_alloy_plate",
            C: "gtceu:small_iron_gear",
        })
    event.shaped(
        Item.of("create:deployer", 1), [
            "ABA",
            "CDC",
            " E "
        ], {
            A: "ctpp:basic_mechanism",
            B: "create:electron_tube",
            C: "create:andesite_casing",
            D: "create:shaft",
            E: "create:brass_hand"
        })
    event.shaped(
        Item.of("create:contraption_controls", 1), [
            " A ",
            "BCB",
            " D "
        ], {
            A: "minecraft:oak_button",
            B: "ctpp:basic_mechanism",
            C: "create:andesite_casing",
            D: "create:electron_tube",
        })
    event.shaped(
        Item.of("create_new_age:redstone_magnet", 2), [
            "ABC",
            "BDB",
            "CBA"
        ], {
            A: "alexscaves:scarlet_neodymium_ingot",
            B: "create:polished_rose_quartz",
            C: "alexscaves:azure_neodymium_ingot",
            D: "create_new_age:magnetite_block",
        })
    event.shaped(
        Item.of("create_new_age:carbon_brushes", 1), [
            "ABA",
            "CDC",
            "ABA"
        ], {
            A: "gtceu:iron_rod",
            B: "gtceu:andesite_alloy_plate",
            C: "gtceu:coke_dust",
            D: "create:shaft",
        })
    event.shaped(
        Item.of("create_new_age:energiser_t1", 1), [
            " A ",
            "BCB",
            " D "
        ], {
            A: "create:precision_mechanism",
            B: "create:shaft",
            C: "create:railway_casing",
            D: "minecraft:lightning_rod",
        })
    event.shaped(
        Item.of("minecraft:lightning_rod", 1), [
            " A ",
            " B ",
            " C "
        ], {
            A: "minecraft:copper_block",
            B: "minecraft:copper_ingot",
            C: "gtceu:copper_rod",
        })
    event.shaped(
        Item.of("enderio:void_chassis", 1), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "minecraft:iron_bars",
            B: "gtceu:steel_plate",
            C: "#gtceu:circuits/mv",
        })
    event.shaped(
        Item.of("create:spout", 1), [
            "ABA",
            "ACA",
            " D "
        ], {
            A: "gtceu:bronze_plate",
            B: "minecraft:glass",
            C: "create:copper_casing",
            D: "create:fluid_pipe"
        })
    event.shaped(
        Item.of("botania:apothecary_default", 1), [
            "ABA",
            "CCC",
            " D "
        ], {
            A: "minecraft:stone_brick_stairs",
            B: "#botania:petals",
            C: "minecraft:stone_brick_slab",
            D: "minecraft:stone_brick_wall"
        })
    event.shaped(
            Item.of("gtceu:magnetic_iron_ingot", 7), [
                "ABA",
                "AAA",
                "ACA"
            ], {
                A: "minecraft:iron_ingot",
                B: "alexscaves:scarlet_magnet",
                C: "alexscaves:azure_magnet"
            }).keepIngredient("alexscaves:scarlet_magnet")
        .keepIngredient("alexscaves:azure_magnet")
    event.shaped(
            Item.of("gtceu:magnetic_iron_rod", 7), [
                "ABA",
                "AAA",
                "ACA"
            ], {
                A: "gtceu:iron_rod",
                B: "alexscaves:scarlet_magnet",
                C: "alexscaves:azure_magnet"
            }).keepIngredient("alexscaves:scarlet_magnet")
        .keepIngredient("alexscaves:azure_magnet")
    event.shaped(
            Item.of('gtceu:magnetic_iron_bolt', 7), [
                "ABA",
                "AAA",
                "ACA"
            ], {
                A: 'gtceu:iron_bolt',
                B: "alexscaves:scarlet_magnet",
                C: "alexscaves:azure_magnet"
            }).keepIngredient("alexscaves:scarlet_magnet")
        .keepIngredient("alexscaves:azure_magnet")
    event.shaped(
        Item.of("create_new_age:magnetite_block", 5), [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: "minecraft:stone",
            B: "gtceu:magnetic_iron_ingot",
        })
    event.shaped(
        Item.of("create:rotation_speed_controller", 1), [
            " A ",
            "BCB",
            "DDD"
        ], {
            A: "create:cogwheel",
            B: "create:shaft",
            C: "create:precision_mechanism",
            D: "create:brass_casing"
        })
    event.shaped(
        Item.of("create:portable_storage_interface", 1), [
            "   ",
            "ABC",
            "   "
        ], {
            A: "create:andesite_casing",
            B: "ctpp:basic_mechanism",
            C: "create:chute",
        })
    event.shaped(
        Item.of("create:cart_assembler", 1), [
            " A ",
            "BCB",
            "DED"
        ], {
            A: "minecraft:slime_ball",
            B: "create:powered_latch",
            C: "create:andesite_casing",
            D: "gtceu:andesite_alloy_plate",
            E: "ctpp:basic_mechanism"
        })
    event.shaped(
        Item.of("create:millstone", 1), [
            " A ",
            "BCB",
            "DDD"
        ], {
            A: "create:chute",
            B: "create:cogwheel",
            C: "ctpp:basic_mechanism",
            D: "minecraft:smooth_stone",
        })
    event.shaped(
        Item.of("create:belt_connector", 3), [
            "   ",
            "AAA",
            "BBB"
        ], {
            A: "minecraft:leather",
            B: "minecraft:dried_kelp",
        })
    event.shaped(
        Item.of("create:belt_connector", 6), [
            "   ",
            "AAA",
            "BBB"
        ], {
            A: "gtceu:polyethylene_plate",
            B: "minecraft:dried_kelp",
        })
    event.shaped(
        Item.of("create:belt_connector", 8), [
            "   ",
            "AAA",
            "BBB"
        ], {
            A: "gtceu:polyvinyl_chloride_plate",
            B: "minecraft:dried_kelp",
        })
    event.shaped(
        Item.of("create:belt_connector", 16), [
            "   ",
            "AAA",
            "BBB"
        ], {
            A: "gtceu:polybenzimidazole_plate",
            B: "minecraft:dried_kelp",
        })
    // event.shaped(
    //     Item.of("ae2:inscriber", 1), [
    //         "ABA",
    //         "C C",
    //         "DBD"
    //     ], {
    //         A: "gtceu:mv_electric_piston",
    //         B: "minecraft:sticky_piston",
    //         C: "gtceu:aluminium_plate",
    //         D: "gtceu:certus_quartz_plate"
    //     })
    event.shaped(
        Item.of("ae2:charger", 1), [
            " AA",
            "BCD",
            " AA"
        ], {
            A: "gtceu:certus_quartz_plate",
            B: "minecraft:redstone",
            C: "minecraft:hopper",
            D: "gtceu:small_aluminium_gear"
        })
    event.shaped(
        Item.of("ae2:energy_acceptor", 1), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "gtceu:certus_quartz_plate",
            B: "gtceu:red_alloy_single_wire",
            C: "gtceu:energetic_alloy_quadruple_wire",
        })
    event.shaped(
        Item.of("ae2:fluix_glass_cable", 4), [
            "AAA",
            "BCB",
            "AAA"
        ], {
            A: "minecraft:glass",
            B: "ae2:fluix_dust",
            C: "ae2:quartz_fiber",
        })
    event.shaped(
        Item.of("angelblockrenewed:angel_block", 1), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "gtceu:tin_rod",
            B: "botania:elf_glass",
            C: "bloodmagic:reagentair",
        })
    event.shaped(
        Item.of("create:goggles", 1), [
            "ABA",
            "CDC",
            "   "
        ], {
            A: "minecraft:lead",
            B: "minecraft:slime_ball",
            C: "gtceu:gold_plate",
            D: "botania:cosmetic_engineer_goggles"
        })

    //魔力透镜魔改；磁化透镜制作磁化物品
    event.shaped(
        Item.of('botania:lens_normal', 1), [
            " A ",
            "ABA",
            " A "
        ], {
            A: 'gtceu:mana_steel_plate',
            B: "minecraft:glass_pane"
        })
    event.shaped(
        Item.of('botania:lens_magnet', 1), [
            "   ",
            "ABC",
            "   "
        ], {
            A: '#forge:dyes/blue',
            B: "botania:lens_normal",
            C: '#forge:dyes/red'
        })    


    event.shaped(
        Item.of("gtceu:magnetic_iron_ingot", 8), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "minecraft:iron_ingot",
            B: "botania:lens_magnet"
        }).keepIngredient("botania:lens_magnet")

    event.shaped(
            Item.of("gtceu:magnetic_iron_rod", 8), [
                "AAA",
                "ABA",
                "AAA"
            ], {
                A: "gtceu:iron_rod",
                B: "botania:lens_magnet"
            }).keepIngredient("botania:lens_magnet")
    event.shaped(
            Item.of("gtceu:magnetic_iron_bolt", 8), [
                "AAA",
                "ABA",
                "AAA"
            ], {
                A: "gtceu:iron_bolt",
                B: "botania:lens_magnet"
            }).keepIngredient("botania:lens_magnet")
   
    event.shaped(
        Item.of("create_new_age:layered_magnet", 2), [
            "AAA",
            "BCB",
            "AAA"
        ], {
            A: "create_new_age:overcharged_golden_sheet",
            B: "create_new_age:redstone_magnet",
            C: "gtceu:steel_ingot"
        })
    event.shaped(
        Item.of("create_new_age:electrical_connector", 2), [
            " A ",
            " B ",
            "CBC"
        ], {
            A: "gtceu:fine_copper_wire",
            B: "gtceu:copper_single_wire",
            C: "gtceu:steel_plate"
        })
    event.shaped(
        Item.of("ctnhcore:digestion_tank", 1), [
            "ABC",
            "BDB",
            "EBE"
        ], {
            A: "gtceu:mv_conveyor_module",
            B: "#gtceu:circuits/mv",
            C: "gtceu:mv_electric_pump",
            D: "gtceu:mv_machine_hull",
            E: "minecraft:bricks"
        })
    event.shaped(
        Item.of("ctnhcore:seawater_desalting_factory", 1), [
            "ABC",
            "DED",
            "FBF"
        ], {
            A: "gtceu:lv_field_generator",
            B: "gtceu:solid_machine_casing",
            C: "gtceu:lv_sensor",
            D: "#gtceu:circuits/mv",
            E: "gtceu:mv_machine_hull",
            F: "gtceu:lv_electric_motor"
        })
    event.shaped(
        Item.of("ctpp:kinetic_steam_turbine", 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: "gtceu:bronze_plate",
            B: "ctpp:steel_mechanism",
            C: "#gtceu:circuits/lv",
            D: "gtceu:steam_machine_casing",
            E: "create:shaft"
        })
    event.shaped(
        Item.of("ctpp:seaweed_farm", 1), [
            "ABA",
            "CDC",
            "EFE"
        ], {
            A: "create:large_cogwheel",
            B: "create:cogwheel",
            C: "create:precision_mechanism",
            D: "create:andesite_casing",
            E: "create:shaft",
            F: "gtceu:bronze_gear"
        })
    event.shaped(
        Item.of("ctnhcore:industrial_primitive_blast_furnace", 1), [
            "ABA",
            "BCB",
            "DBD"
        ], {
            A: "gtceu:lv_conveyor_module",
            B: "#gtceu:circuits/lv",
            C: "minecraft:blast_furnace",
            D: "gtceu:firebricks"
        })
    event.shaped(
        Item.of("ctnhcore:fermenting_tank", 1), [
            "ABA",
            "CDC",
            "EFE"
        ], {
            A: "gtceu:mv_sensor",
            B: "gtceu:mv_robot_arm",
            C: "#gtceu:circuits/hv",
            D: "gtceu:mv_mixer",
            E: "gtceu:solid_machine_casing",
            F: "gtceu:mv_fluid_heater"
        })
    event.shaped(
        Item.of("ctnhcore:slaughter_house", 1), [
            "ABA",
            "BCB",
            "DED"
        ], {
            A: "gtceu:stainless_steel_gear",
            B: "minecraft:netherite_sword",
            C: "gtceu:hv_machine_hull",
            D: "gtceu:hv_conveyor_module",
            E: "#gtceu:circuits/hv"
        })
    event.shaped(
        Item.of("ctnhcore:water_power_station", 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: "ctnhcore:mana_steel_casing",
            B: "create:large_water_wheel",
            C: "gtceu:mv_machine_hull",
            D: "gtceu:mv_electric_pump",
            E: "#gtceu:circuits/mv"
        })
    event.shaped(
        Item.of("ctnhcore:mana_macerator", 1), [
            "AAA",
            "BCB",
            "DDD"
        ], {
            A: "botania:polished_livingrock",
            B: "gtceu:mv_electric_motor",
            C: "gtceu:mv_macerator",
            D: "gtceu:diamond_grinding_head"
        })
    event.shaped(
        Item.of("ctnhcore:mana_seperator", 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: "botania:polished_livingrock",
            B: "gtceu:hv_conveyor_module",
            C: "gtceu:hv_centrifuge",
            D: "gtceu:hv_electric_pump",
            E: "#gtceu:circuits/hv"
        })
    event.shaped(
        Item.of("ctnhcore:photovoltaic_power_station_energetic", 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: "minecraft:gold_ingot",
            B: "gtceu:lv_electric_motor",
            C: "ctnhcore:reflect_light_casing",
            D: "enderio:basic_capacitor",
            E: "#gtceu:circuits/lv"
        })
    event.shaped(
        Item.of("ctnhcore:photovoltaic_power_station_pulsating", 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: "gtceu:pulsating_alloy_plate",
            B: "gtceu:mv_electric_motor",
            C: "ctnhcore:reflect_light_casing",
            D: "enderio:double_layer_capacitor",
            E: "#gtceu:circuits/mv"
        })
    event.shaped(
        Item.of("ctnhcore:photovoltaic_power_station_vibrant", 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: "gtceu:vibrant_alloy_plate",
            B: "gtceu:hv_electric_motor",
            C: "ctnhcore:reflect_light_casing",
            D: "enderio:octadic_capacitor",
            E: "#gtceu:circuits/hv"
        })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:steel"}}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "gtceu:steel_turbine_blade",
            B: "gtceu:long_steel_rod"
        })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:wrought_iron"}}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "gtceu:wrought_iron_turbine_blade",
            B: "gtceu:long_wrought_iron_rod"
        })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:iron"}}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "gtceu:iron_turbine_blade",
            B: "gtceu:long_iron_rod"
        })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:brass"}}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "gtceu:brass_turbine_blade",
            B: "gtceu:long_brass_rod"
        })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:bronze"}}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "gtceu:bronze_turbine_blade",
            B: "gtceu:long_bronze_rod"
        })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:aluminium"}}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: "gtceu:aluminium_turbine_blade",
            B: "gtceu:long_aluminium_rod"
        })
    event.shaped(
        Item.of("ctnhcore:ulv_rotor_holder", 1), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "gtceu:small_brass_gear",
            B: "gtceu:bronze_gear",
            C: "gtceu:ulv_machine_hull"
        })
    event.shaped(
        Item.of("ctnhcore:lv_rotor_holder", 1), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "gtceu:small_steel_gear",
            B: "gtceu:wrought_iron_gear",
            C: "gtceu:lv_machine_hull"
        })
    event.shaped(
        Item.of("ctnhcore:mv_rotor_holder", 1), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: "gtceu:small_aluminium_gear",
            B: "gtceu:magnalium_gear",
            C: "gtceu:mv_machine_hull"
        })
    event.shaped(
        Item.of("enderio:item_conduit", 4), [
            "AAA",
            "BBB",
            "AAA"
        ], {
            A: "enderio:conduit_binder",
            B: "gtceu:pulsating_alloy_ingot"
        }).id('enderio:item_conduit')
    event.shaped(
        Item.of("ctpp:kinetic_generator", 1), [
            "ABA",
            "CDC",
            "ABA"
        ], {
            A: "kubejs:heavy_machinery_casing",
            B: "gtceu:solid_machine_casing",
            C: "#gtceu:circuits/mv",
            D: "create_new_age:generator_coil"
        })
    event.shaped(
        Item.of("ctnhcore:big_dam", 1), [
            "ABA",
            "CDC",
            "AAA"
        ], {
            A: "minecraft:stone_bricks",
            B: "ctpp:basic_mechanism",
            C: "create:shaft",
            D: "create:large_water_wheel"
        })
    event.shaped(
        Item.of("ctpp:windmill_control_center", 1), [
            " A ",
            "BCB",
            "DED"
        ], {
            A: "create:redstone_link",
            B: "create:precision_mechanism",
            C: "create:linked_controller",
            D: "create:brass_casing",
            E: "create:shaft"
        })
    event.shaped(
        Item.of("ctnhcore:wind_power_array", 1), [
            "ABA",
            "BCB",
            "DED"
        ], {
            A: "gtceu:steel_rod",
            B: "gtceu:solid_machine_casing",
            C: "create:windmill_bearing",
            D: "gtceu:lv_electric_motor",
            E: "#gtceu:circuits/lv"
        })
    event.shaped(
        Item.of("ctnhcore:advanced_wind_power_array", 1), [
            "ABA",
            "BCB",
            "DED"
        ], {
            A: "gtceu:stainless_steel_rod",
            B: "gtceu:clean_machine_casing",
            C: "ctnhcore:wind_power_array",
            D: "gtceu:hv_electric_motor",
            E: "#gtceu:circuits/hv"
        })
    event.shaped(
        Item.of("ctnhcore:super_wind_power_array", 1), [
            "ABA",
            "BCB",
            "DED"
        ], {
            A: "gtceu:tungsten_steel_rod",
            B: "gtceu:robust_machine_casing",
            C: "ctnhcore:advanced_wind_power_array",
            D: "gtceu:iv_electric_motor",
            E: "#gtceu:circuits/iv"
        })
    event.shaped(
        Item.of("ctnhcore:meadow", 1), [
            "ABA",
            "CAC",
            "DED"
        ], {
            A: "ctpp:basic_mechanism",
            B: "minecraft:wheat_seeds",
            C: "minecraft:wheat",
            D: "create:shaft",
            E: "create:belt_connector"
        })
    event.shaped("ctnhcore:ion_exchanger", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:iv_machine_hull",
        B: "gtceu:double_hsse_plate",
        C: "gtceu:iv_electric_pump",
        D: "gtceu:fluid_filter"
    })
    event.shaped("ctnhcore:crystallizer", [
        "SCS",
        "DAD",
        "BVB"
    ], {
        A: "gtceu:iv_autoclave",
        B: "gtceu:double_hsse_plate",
        C: "gtceu:iv_electric_pump",
        D: "gtceu:hssg_coil_block",
        S: "gtceu:hssg_spring",
        V: "gtceu:hsse_frame"
    })
    event.shaped("ctnhcore:vacuum_sintering_tower", [
        "BCB",
        "DAD",
        "SVS"
    ], {
        A: "gtceu:electric_blast_furnace",
        B: "gtceu:double_hsse_plate",
        C: "gtceu:iv_electric_furnace",
        D: "gtceu:hssg_coil_block",
        S: "gtceu:hssg_spring",
        V: "gtceu:iv_alloy_smelter"
    })
    event.shaped("ctnhcore:condensing_discrete", [
        "BCB",
        "DAG",
        "SVS"
    ], {
        A: "gtceu:vacuum_freezer",
        B: "gtceu:dense_aluminium_plate",
        C: "gtceu:iv_centrifuge",
        D: "gtceu:iv_thermal_centrifuge",
        S: "gtceu:vanadium_gallium_spring",
        V: "gtceu:iv_sifter",
        G: "gtceu:fluid_filter"
    })
    event.shaped(
        Item.of('ctpp:boom_of_create', 1), [
            "DED",
            "ACA",
            "BAB"
        ], {
            A: 'gtceu:iv_conveyor_module',
            B: '#gtceu:circuits/iv',
            C: 'gtceu:iv_machine_hull',
            D: 'gtceu:iv_electric_pump',
            E: 'ctnhcore:big_dam'
        })
    event.shaped(
        Item.of('ctnhcore:greenhouse', 1), [
            "DED",
            "ACA",
            "BAB"
        ], {
            A: 'gtceu:double_steel_plate',
            B: 'gtceu:mv_electric_pump',
            C: 'gtceu:mv_machine_hull',
            D: '#gtceu:circuits/mv',
            E: 'minecraft:glowstone'
        })
    event.shaped(
        Item.of('ctnhcore:ultrasonic_apparatus', 1), [
            "ABA",
            "BCB",
            "DED"
        ], {
            A: 'gtceu:stainless_steel_gear',
            B: '#gtceu:circuits/hv',
            C: 'gtceu:hv_machine_hull',
            D: 'gtceu:hv_electric_pump',
            E: 'gtceu:stainless_steel_rotor'
        })
    event.shaped(
        Item.of('ctnhcore:super_centrifuge', 1), [
            "ABC",
            "CDE",
            "ABC"
        ], {
            A: 'gtceu:ev_electric_pump',
            B: 'gtceu:stainless_steel_rotor',
            C: '#gtceu:circuits/ev',
            D: 'gtceu:ev_machine_hull',
            E: 'gtceu:double_titanium_plate'
        })
    event.shaped(
        Item.of('ctnhcore:bio_reactor', 1), [
            "ABE",
            "CDE",
            "ABE"
        ], {
            A: 'gtceu:ev_robot_arm',
            B: 'gtceu:titanium_rotor',
            C: '#gtceu:circuits/iv',
            D: 'ctnhcore:bio_reactor_casing',
            E: 'gtceu:uranium_triplatinum_ingot'
        })
    event.shaped(
        Item.of('minecraft:diamond_sword', 1), [
            "A",
            "A",
            "B"
        ], {
            A: 'minecraft:diamond',
            B: 'minecraft:stick'
        })
    event.shaped(
        Item.of('ctnhcore:chemical_vapor_deposition_machine', 1), [
            "ABA",
            "CDE",
            "VVV"
        ], {
            A: '#gtceu:circuits/ev',
            B: 'gtceu:polytetrafluoroethylene_huge_fluid_pipe',
            C: 'gtceu:ev_conveyor_module',
            E: 'gtceu:ev_electric_pump',
            D: 'gtceu:ev_machine_hull',
            V: 'gtceu:dense_stainless_steel_plate'
        })
    event.shaped(
        Item.of('ars_nouveau:novice_spell_book', 1), [
            "AAA",
            "ABA",
            "AEA"
        ], {
            A: 'ars_nouveau:magebloom_fiber',
            B: 'minecraft:book',
            E: 'botania:manasteel_ingot'
        })
    event.shaped(
        Item.of('ctnhcore:coke_tower', 1), [
            "GAG",
            "DBD",
            "GEG"
        ], {
            A: 'gtceu:pyrolyse_oven',
            B: 'gtceu:iv_machine_hull',
            D: 'gtceu:iv_electric_pump',
            E: 'gtceu:dense_tungsten_steel_plate',
            G: '#gtceu:circuits/luv'
        })

    event.shaped(
        Item.of('jackseconomy:empty_exporter_manifest', 1), [
            "ABA",
            "CCC",
            "CDC"
        ], {
            A: 'minecraft:red_carpet',
            B: '#forge:chests',
            C: 'minecraft:string',
            D: 'minecraft:feather'
        })

    event.shaped(
        Item.of('jackseconomy:golden_exporter_manifest', 1), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: 'gtceu:gold_foil',
            B: 'jackseconomy:empty_exporter_manifest'
        })

    event.shaped(
        Item.of('jackseconomy:mechanical_importer', 1), [
            "ABA",
            "BCB",
            "ADA"
        ], {
            A: 'gtceu:gold_foil',
            B: 'gtceu:steel_plate',
            C: 'kubejs:heavy_machinery_casing',
            D: 'create:cogwheel'
        })

    event.shaped(
        Item.of('jackseconomy:mechanical_exporter', 1), [
            "ADA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:gold_foil',
            B: 'gtceu:steel_plate',
            C: 'kubejs:heavy_machinery_casing',
            D: 'create:cogwheel'
        })

    event.shaped(
        Item.of('jackseconomy:importer', 1), [
            "ABA",
            "BCB",
            "ADA"
        ], {
            A: 'gtceu:gold_foil',
            B: 'gtceu:steel_plate',
            C: 'kubejs:heavy_machinery_casing',
            D: 'gtceu:red_alloy_single_wire'
        })

    event.shaped(
        Item.of('jackseconomy:exporter', 1), [
            "ADA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:gold_foil',
            B: 'gtceu:steel_plate',
            C: 'kubejs:heavy_machinery_casing',
            D: 'gtceu:red_alloy_single_wire'
        })

    event.shaped(
        Item.of('gtmthings:ulv_huge_item_import_bus', 1), [
            "A",
            "B"
        ], {
            A: 'gtceu:ulv_input_bus',
            B: 'sophisticatedstorage:basic_to_diamond_tier_upgrade'
        })

    event.shaped(
        Item.of('gtmthings:ulv_huge_item_export_bus', 1), [
            "A",
            "B"
        ], {
            A: 'gtceu:ulv_output_bus',
            B: 'sophisticatedstorage:basic_to_diamond_tier_upgrade'
        })

    event.shaped(
        Item.of('ctnhcore:mana_bender', 1), [
            "AGA",
            "BCB",
            "DEF"
        ], {
            A: 'botania:polished_livingrock',
            B: 'gtceu:mv_electric_motor',
            C: 'gtceu:mv_bender',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_robot_arm',
            F: '#gtceu:circuits/ev',
            G: 'ctnhcore:terra_steel_casing'
        })




    event.shaped(
        Item.of('ctnhcore:mana_reactor', 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: 'botania:polished_livingrock',
            B: '#gtceu:circuits/ev',
            C: 'gtceu:alfsteel_gear',
            D: 'botania:gaia_spreader',
            E: 'botania:fabulous_pool'
        })

    event.shaped(
        Item.of('ctnhcore:dimensional_gas_collection_chamber', 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: 'gtceu:fluid_tag_filter',
            B: '#gtceu:circuits/hv',
            C: 'gtceu:filter_casing',
            D: 'gtceu:hv_electric_pump',
            E: 'gtceu:cleanroom'
        })

    event.shaped(
        Item.of('ctnhcore:large_steel_furnace', 1), [
            "DAD",
            "BCB",
            "DAD"
        ], {
            A: 'gtceu:copper_spring',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:steam_oven',
            D: 'gtceu:firebricks',
        })

    event.shaped(
        Item.of('ctnhcore:large_steel_alloy_furnace', 1), [
            "DAD",
            "BCB",
            "DAD"
        ], {
            A: 'gtceu:copper_spring',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:hp_steam_alloy_smelter',
            D: 'gtceu:firebricks',
        })

    event.shaped(
        Item.of('ctnhcore:testing_terminal', 1), [
            "BBB",
            "BAB",
            "BBB"
        ], {
            A: 'gtceu:terminal',
            B: 'minecraft:redstone'
        })

    event.shaped(
        Item.of('ctnhcore:sweat_shop', 1), [
            "BBB",
            "CAC",
            "EDE"
        ], {
            A: 'create:precision_mechanism',
            B: 'gtceu:solid_machine_casing',
            C: 'gtceu:lv_electric_motor',
            D: 'gtceu:lv_assembler',
            E: 'gtceu:lv_emitter'
        })
    event.shaped(
        Item.of('biomesoplenty:rose_quartz_chunk', 4), [
            "   ",
            " A ",
            "   "
        ], {
            A: "biomesoplenty:rose_quartz_block",
        })
    event.shaped(
        Item.of('gtceu:bronze_large_boiler', 1), [
            "BCB",
            "CAC",
            "BCB"
        ], {
            A: "gtceu:bronze_firebox_casing",
            B: "gtceu:lead_single_cable",
            C: "#gtceu:circuits/ulv"
        })
    event.shaped(
        Item.of('ctnhcore:high_strength_concrete', 1), [
            " C ",
            "CAC",
            " C "
        ], {
            A: 'gtceu:coke_oven_bricks',
            C: 'gtceu:steel_plate'
        })
    event.shaped(
        Item.of('ctnhcore:advanced_coke_oven', 1), [
            "BCB",
            "CAC",
            "BCB"
        ], {
            A: 'gtceu:coke_oven',
            B: 'ctnhcore:high_strength_concrete',
            C: 'gtceu:steel_plate'
        })
    event.shaped(
        Item.of('gtceu:ulv_input_bus', 1), [
            "A",
            "B"
        ], {
            A: 'gtceu:ulv_machine_hull',
            B: '#forge:chests/wooden'
        })
    event.shaped(
        Item.of('gtceu:ulv_output_bus', 1), [
            "B",
            "A"
        ], {
            A: 'gtceu:ulv_machine_hull',
            B: '#forge:chests/wooden'
        })
    event.shaped(
        Item.of("ctnhcore:elementium_normal_fluid_pipe", 2), [
            "A A",
            "A A",
            "A A"
        ], {
            A: "gtceu:elementium_plate"
        })
    event.shaped(
        Item.of("ctnhcore:elementium_pipe_casing", 1), [
            "CAC",
            "ABA",
            "CAC"
        ], {
            A: "ctnhcore:elementium_normal_fluid_pipe",
            B: "gtceu:elementium_frame",
            C: "gtceu:elementium_plate"
        })
    event.shaped(
        Item.of("ctnhcore:ev_chemical_generator", 1), [
            "ABA",
            "CDC",
            "EBE"
        ], {
            A: "gtceu:titanium_rotor",
            B: "gtceu:titanium_turbine_casing",
            C: "gtceu:nichrome_coil_block",
            D: "gtceu:aluminium_single_cable",
            E: "gtceu:ev_electric_motor"
        })
    event.shaped(
        Item.of("ctnhcore:iv_chemical_generator", 1), [
            "ABA",
            "CDC",
            "EBE"
        ], {
            A: "gtceu:tungsten_steel_rotor",
            B: "gtceu:tungstensteel_turbine_casing",
            C: "gtceu:rtm_alloy_coil_block",
            D: "gtceu:platinum_single_cable",
            E: "gtceu:iv_electric_motor"
        })
    event.shaped(
        Item.of("ctnhcore:corrosive_core", 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: "bloodmagic:corrosivecrystal",
            B: "botania:life_essence",
            C: "bloodmagic:reagentgrowth",
            D: "botania:rune_greed",
            E: "botania:lens_mine"
        })
    event.shaped(
        Item.of("ctnhcore:vengeful_core", 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: "bloodmagic:vengefulcrystal",
            B: "botania:life_essence",
            C: "bloodmagic:reagentsight",
            D: "botania:rune_wrath",
            E: "botania:lens_damage"
        })
    event.shaped(
        Item.of("ctnhcore:destructive_core", 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: "bloodmagic:destructivecrystal",
            B: "botania:life_essence",
            C: "bloodmagic:reagentholding",
            D: "botania:rune_sloth",
            E: "botania:lens_influence"
        })
    event.shaped(
        Item.of("ctnhcore:steadfast_core", 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: "bloodmagic:steadfastcrystal",
            B: "botania:life_essence",
            C: "bloodmagic:reagentvoid",
            D: "botania:rune_envy",
            E: "botania:lens_warp"
        })
    let tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    tiers.forEach(tier => {
        event.shaped(
            Item.of("ctpp:" + tier + "_kinetic_input_box", 1), [
                "A",
                "B"
            ], {
                A: "create:shaft",
                B: "gtceu:" + tier + "_machine_hull"
            })
        event.shaped(
            Item.of("ctpp:" + tier + "_kinetic_output_box", 1), [
                "B",
                "A"
            ], {
                A: "create:shaft",
                B: "gtceu:" + tier + "_machine_hull"
            })
        event.shaped(
            Item.of("ctpp:" + tier + "_kinetic_input_box", 1), [
                "A",
                "B"
            ], {
                A: "#forge:tools/wrench",
                B: "ctpp:" + tier + "_kinetic_output_box"
            })
        event.shaped(
            Item.of("ctpp:" + tier + "_kinetic_output_box", 1), [
                "A",
                "B"
            ], {
                A: "#forge:tools/wrench",
                B: "ctpp:" + tier + "_kinetic_input_box"
            })
    })
    tiers = ['lv', 'mv', 'hv', 'ev']
    tiers.forEach(tier => {
        event.shaped(
            Item.of("ctpp:" + tier + "_electric_gear_box_2a", 1), [
                "   ",
                "ABC",
                "   "
            ], {
                A: "create:cogwheel",
                B: "gtceu:" + tier + "_machine_hull",
                C: "gtceu:" + tier + "_voltage_coil"
            })
        event.shaped(
            Item.of("ctpp:" + tier + "_electric_gear_box_8a", 1), [
                "  C",
                "AB ",
                "  C"
            ], {
                A: "create:cogwheel",
                B: "gtceu:" + tier + "_machine_hull",
                C: "gtceu:" + tier + "_voltage_coil"
            })
        event.shaped(
            Item.of("ctpp:" + tier + "_electric_gear_box_16a", 1), [
                " CC",
                "AB ",
                " CC"
            ], {
                A: "create:cogwheel",
                B: "gtceu:" + tier + "_machine_hull",
                C: "gtceu:" + tier + "_voltage_coil"
            })
        event.shaped(
            Item.of("ctpp:" + tier + "_electric_gear_box_32a", 1), [
                "CCC",
                "ABC",
                "CCC"
            ], {
                A: "create:cogwheel",
                B: "gtceu:" + tier + "_machine_hull",
                C: "gtceu:" + tier + "_voltage_coil"
            })
    })
    // event.shaped(
    //     Item.of("ctpp:lv_kinetic_mixer", 1), [
    //         "ABA",
    //         "ACA",
    //         "DED"
    //     ], {
    //         A: "create:shaft",
    //         B: "gtceu:tin_rotor",
    //         C: "gtceu:lv_electric_motor",
    //         D: "#gtceu:circuits/lv",
    //         E: "gtceu:lv_machine_hull"
    //     })
    // event.shaped(
    //     Item.of("ctpp:mv_kinetic_mixer", 1), [
    //         "ABA",
    //         "ACA",
    //         "DED"
    //     ], {
    //         A: "create:shaft",
    //         B: "gtceu:bronze_rotor",
    //         C: "gtceu:mv_electric_motor",
    //         D: "#gtceu:circuits/mv",
    //         E: "gtceu:mv_machine_hull"
    //     })
    // event.shaped(
    //     Item.of("ctpp:hv_kinetic_mixer", 1), [
    //         "ABA",
    //         "ACA",
    //         "DED"
    //     ], {
    //         A: "create:shaft",
    //         B: "gtceu:steel_rotor",
    //         C: "gtceu:hv_electric_motor",
    //         D: "#gtceu:circuits/hv",
    //         E: "gtceu:hv_machine_hull"
    //     })
    // event.shaped(
    //     Item.of("ctpp:ev_kinetic_mixer", 1), [
    //         "ABA",
    //         "ACA",
    //         "DED"
    //     ], {
    //         A: "create:shaft",
    //         B: "gtceu:stainless_steel_rotor",
    //         C: "gtceu:ev_electric_motor",
    //         D: "#gtceu:circuits/ev",
    //         E: "gtceu:ev_machine_hull"
    //     })
    event.shaped(
        Item.of("ctpp:smashing_factory", 1), [
            "ABA",
            "BCB",
            "DED"
        ], {
            A: "create:crushing_wheel",
            B: "gtceu:bronze_gear",
            C: "ctpp:basic_mechanism",
            D: "create:andesite_casing",
            E: "#gtceu:circuits/ulv"
        })
    event.shaped(
        Item.of('ctnhcore:forest_sea_tree_farm', 1), [
            "ABA",
            "BCB",
            "AEA"
        ], {
            A: 'gtceu:iv_field_generator',
            B: 'gtceu:ev_world_accelerator',
            C: 'gtceu:iv_machine_hull',
            E: 'ctnhcore:ecological_star'
        })
    event.shaped(
        Item.of('gtceu:sterilizing_filter_casing', 1), [
            "ADA",
            "BCB",
            "FEG"
        ], {
            A: 'gtceu:fluid_tag_filter',
            B: 'enderio:end_steel_bars',
            C: 'gtceu:hsss_rotor',
            D: 'gtceu:blacklight',
            E: 'gtceu:europium_frame',
            F: 'gtceu:luv_electric_motor',
            G: 'gtceu:luv_electric_pump'
        })
    event.shaped(
        Item.of('ctnhcore:uhv_parallel_hatch', 1), [
            "ABC",
            "BDB",
            "EBE"
        ], {
            A: 'gtceu:uhv_sensor',
            B: '#gtceu:circuits/uev',
            C: 'gtceu:uhv_emitter',
            D: 'gtceu:uhv_machine_hull',
            E: 'gtceu:adamantite_double_cable'
        })
    event.shaped(
        Item.of('ctnhcore:astronomical_observatory', 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: 'gtceu:clean_machine_casing',
            B: 'gtceu:tempered_glass',
            C: 'gtceu:hv_robot_arm',
            D: 'minecraft:daylight_detector',
            E: 'gtceu:hv_sensor'
        })
    event.shaped(
        Item.of('ctnhcore:mechanical_pressor', 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: 'ctpp:steel_mechanism',
            B: 'create:railway_casing',
            C: 'create:mechanical_press',
            D: 'create:large_cogwheel',
            E: 'create:depot'
        })
    event.shaped(
        Item.of('ctnhcore:mechanical_mixer', 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: 'ctpp:steel_mechanism',
            B: 'create:railway_casing',
            C: 'create:mechanical_mixer',
            D: 'create:fluid_pipe',
            E: 'create:basin'
        })
    event.shaped(
        Item.of('ctnhcore:mechanical_centrifuge', 1), [
            "AAA",
            "BCB",
            "DDD"
        ], {
            A: 'ctpp:steel_mechanism',
            B: 'create:railway_casing',
            C: 'vintageimprovements:centrifuge',
            D: 'create:basin'
        })
    event.shaped(
        Item.of('ctnhcore:mechanical_sifter', 1), [
            "AAA",
            "BCB",
            "DDD"
        ], {
            A: 'ctpp:steel_mechanism',
            B: 'create:railway_casing',
            C: 'vintageimprovements:vibrating_table',
            D: 'gtceu:item_filter'
        })
    event.shaped(
        Item.of('ctnhcore:mechanical_extractor', 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: 'ctpp:steel_mechanism',
            B: 'create:railway_casing',
            C: 'createmetallurgy:foundry_mixer',
            D: 'create:fluid_pipe',
            E: 'createmetallurgy:foundry_basin'
        })
    event.shaped(
        Item.of('ctnhcore:mechanical_lathe', 1), [
            "AAA",
            "BCB",
            "DDD"
        ], {
            A: 'ctpp:steel_mechanism',
            B: 'create:railway_casing',
            C: 'vintageimprovements:lathe',
            D: 'create:belt_connector'
        })
    event.shaped(
        Item.of('ctnhcore:mechanical_laser', 1), [
            "AAA",
            "BCB",
            "DED"
        ], {
            A: 'ctpp:steel_mechanism',
            B: 'create:railway_casing',
            C: 'vintageimprovements:laser',
            D: 'gtceu:red_alloy_quadruple_wire',
            E: 'create:depot'
        })
    event.shaped(
        Item.of('bloodmagic:dungeon_brick_slab', 6), [
            "AAA"
        ], {
            A: 'bloodmagic:dungeon_brick1'
        })
    event.shaped(
        Item.of('bloodmagic:dungeon_brick_stairs', 4), [
            "A  ",
            "AA ",
            "AAA"
        ], {
            A: 'bloodmagic:dungeon_brick1'
        })
    event.shaped(
        Item.of('bloodmagic:dungeon_tile', 4), [
            "AA",
            "AA",
        ], {
            A: 'bloodmagic:dungeon_brick1'
        })
    event.shaped(
        Item.of('bloodmagic:dungeon_brick_wall', 6), [
            "AAA",
            "AAA"
        ], {
            A: 'bloodmagic:dungeon_brick1'
        })
    event.shaped(
        Item.of('ad_astra:iron_plating', 64), [
            "AAA",
            "A A",
            "AAA"
        ], {
            A: '#forge:plates/iron'
        })

    event.shapeless("ad_astra:space_helmet", "ad_astra:space_helmet")
    event.shapeless("ad_astra:space_suit", "ad_astra:space_suit")
    event.shapeless("ad_astra:space_pants", "ad_astra:space_pants")
    event.shapeless("ad_astra:space_boots", "ad_astra:space_boots")
    event.shapeless("bloodmagic:dungeon_brick1", "bloodmagic:dungeon_brick_assorted")
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:primordial_caves"}').strongNBT(), Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:candy_cavity"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:toxic_caves"}').strongNBT(), Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:primordial_caves"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:abyssal_chasm"}').strongNBT(), Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:toxic_caves"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:forlorn_hollows"}').strongNBT(), Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:abyssal_chasm"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:magnetic_caves"}').strongNBT(), Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:forlorn_hollows"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:candy_cavity"}').strongNBT(), Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:magnetic_caves"}').strongNBT())
    event.shapeless('ae2:redstone_p2p_tunnel', ['ae2:me_p2p_tunnel', 'minecraft:redstone'])
    event.shapeless('ae2:fe_p2p_tunnel', ['ae2:me_p2p_tunnel', 'ae2:fluix_dust'])
    event.shapeless('ae2:fluid_p2p_tunnel', ['ae2:me_p2p_tunnel', 'minecraft:bucket'])
    event.shapeless('ae2:item_p2p_tunnel', ['ae2:me_p2p_tunnel', 'minecraft:chest'])
})