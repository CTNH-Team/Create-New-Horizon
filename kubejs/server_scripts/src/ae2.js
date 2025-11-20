ServerEvents.recipes(event => {
    let cell_component = ["ae2:cell_component_1k", "ae2:cell_component_4k", "ae2:cell_component_16k", "ae2:cell_component_64k", "ae2:cell_component_256k"]
    let omni_component = ['ae2omnicells:omni_cell_component_1k', 'ae2omnicells:omni_cell_component_4k', 'ae2omnicells:omni_cell_component_16k', 'ae2omnicells:omni_cell_component_64k', 'ae2omnicells:omni_cell_component_256k', 'ae2omnicells:omni_cell_component_1m', 'ae2omnicells:omni_cell_component_4m', 'ae2omnicells:omni_cell_component_16m', 'ae2omnicells:omni_cell_component_64m']
    let complex_omni_component = ['ae2omnicells:complex_omni_cell_component_1k', 'ae2omnicells:complex_omni_cell_component_4k', 'ae2omnicells:complex_omni_cell_component_16k', 'ae2omnicells:complex_omni_cell_component_64k', 'ae2omnicells:complex_omni_cell_component_256k', 'ae2omnicells:complex_omni_cell_component_1m', 'ae2omnicells:complex_omni_cell_component_4m', 'ae2omnicells:complex_omni_cell_component_16m', 'ae2omnicells:complex_omni_cell_component_64m']
    let quantum_omni_component = ['ae2omnicells:quantum_omni_cell_component_1k', 'ae2omnicells:quantum_omni_cell_component_4k', 'ae2omnicells:quantum_omni_cell_component_16k', 'ae2omnicells:quantum_omni_cell_component_64k', 'ae2omnicells:quantum_omni_cell_component_256k', 'ae2omnicells:quantum_omni_cell_component_1m', 'ae2omnicells:quantum_omni_cell_component_4m', 'ae2omnicells:quantum_omni_cell_component_16m', 'ae2omnicells:quantum_omni_cell_component_64m']
    let circuits = ["#gtceu:circuits/lv", "#gtceu:circuits/mv", "#gtceu:circuits/hv", "#gtceu:circuits/ev", "#gtceu:circuits/iv", "#gtceu:circuits/luv", "#gtceu:circuits/zpm", "#gtceu:circuits/uv"]
    let metal = ["gtceu:steel_plate", "gtceu:aluminium_plate", "gtceu:stainless_steel_plate", "gtceu:titanium_plate", "gtceu:tungsten_steel_plate", "gtceu:rhodium_plated_palladium_plate", "gtceu:naquadah_alloy_plate", "gtceu:darmstadtium_plate"]
    let glass = ["ae2:quartz_glass", "ae2:quartz_vibrant_glass", "botania:mana_glass", "botania:elf_glass"]
    let industrial_glass = ["ae2:quartz_glass", "ae2:quartz_vibrant_glass", 'gtceu:laminated_glass', 'gtceu:fusion_glass']
    let dust = ["minecraft:redstone", "minecraft:glowstone_dust", "gtceu:certus_quartz_dust", "ae2:sky_dust", "gtceu:silicon_dust", "gtceu:electrotine_dust", "ae2:fluix_dust", "gtceu:yttrofluorite_dust"]
    let parallel = ['ae2:crafting_accelerator']
    remove_recipes_output(event, cell_component)
    remove_recipes_output(event, omni_component)
    remove_recipes_output(event, complex_omni_component)
    remove_recipes_output(event, quantum_omni_component)

    for (let i = 0; i < 8; i++) {
        if(i <= 3) {
             event.shaped(Item.of(cell_component[i + 1], 1), [
            "BDB",
            "ACA",
            "EAE"
        ], {
            A: cell_component[i],
            B: dust[i],
            C: glass[(i / 2) | 0],
            D: circuits[i],
            E: metal[i]
        })
        }
        if(i >= 4) {
            event.shaped(Item.of(omni_component[i + 1], 1), [
                "BDB",
                "ACA",
                "EAE"
            ], {
                A: omni_component[i],
                B: dust[i],
                C: industrial_glass[(i / 2) | 0],
                D: circuits[i],
                E: metal[i]
            })
            event.shaped(Item.of(complex_omni_component[i + 1], 1), [
                "BDB",
                "ACA",
                "EAE"
            ], {
                A: complex_omni_component[i],
                B: dust[i],
                C: industrial_glass[(i / 2) | 0],
                D: circuits[i],
                E: metal[i]
            })
            event.shaped(Item.of(quantum_omni_component[i + 1], 1), [
                "BDB",
                "ACA",
                "EAE"
            ], {
                A: quantum_omni_component[i],
                B: dust[i],
                C: industrial_glass[(i / 2) | 0],
                D: circuits[i],
                E: metal[i]
            })
        }
        event.shaped(Item.of(omni_component[i + 1], 1), [
            "BDB",
            "ACA",
            "EAE"
        ], {
            A: omni_component[i],
            B: dust[i],
            C: glass[(i / 2) | 0],
            D: circuits[i],
            E: metal[i]
        })
        event.shaped(Item.of(complex_omni_component[i + 1], 1), [
            "BDB",
            "ACA",
            "EAE"
        ], {
            A: complex_omni_component[i],
            B: dust[i],
            C: glass[(i / 2) | 0],
            D: circuits[i],
            E: metal[i]
        })
        event.shaped(Item.of(quantum_omni_component[i + 1], 1), [
            "BDB",
            "ACA",
            "EAE"
        ], {
            A: quantum_omni_component[i],
            B: dust[i],
            C: glass[(i / 2) | 0],
            D: circuits[i],
            E: metal[i]
        })
        // if (i > 2) {

        // }
    }
            //     event.shaped(Item.of(parallel[i - 2], 1), [
        //         "EDE",
        //         "ACA",
        //         "EAE"
        //     ], {
        //         A: parallel[i - 3],
        //         C: glass[(i / 2) | 0],
        //         D: circuits[i],
        //         E: metal[i]
        //     })
    // 1k
    event.shaped(Item.of("ae2:cell_component_1k", 1), [
        "BDB",
        "ACA",
        "EAE"
    ], {
        A: "gtceu:certus_quartz_plate",
        B: "minecraft:redstone",
        C: "gtceu:tempered_glass",
        D: "#gtceu:circuits/ulv",
        E: "gtceu:iron_plate",
    })
    event.shaped(Item.of('ae2omnicells:omni_cell_component_1k', 1), [
        "BDB",
        "ACA",
        "BAB"
    ], {
        A: "gtceu:certus_quartz_plate",
        B: "gtceu:ender_pearl_dust",
        C: "ae2:cell_component_1k",
        D: "#gtceu:circuits/ulv"
    })
    event.shaped(Item.of('ae2omnicells:complex_omni_cell_component_1k', 1), [
        "BDB",
        "ACA",
        "EAE"
    ], {
        A: "gtceu:certus_quartz_plate",
        B: "gtceu:ender_pearl_dust",
        C: "ae2:cell_component_1k",
        D: "#gtceu:circuits/ulv",
        E: "ae2:fluix_dust"
    })        
    // 256m
    event.shaped(Item.of('ae2omnicells:omni_cell_component_256m', 1), [
        "BDB",
        "ACA",
        "EAE"
    ], {
        A: "ae2omnicells:omni_cell_component_64m",
        B: "gtceu:europium_fluorite_dust",
        C: "gtceu:fusion_glass",
        D: "#gtceu:circuits/uhv",
        E: "gtceu:neutronium_plate"
    })
    event.shaped(Item.of('ae2omnicells:complex_omni_cell_component_256m', 1), [
        "BDB",
        "ACA",
        "EAE"
    ], {
        A: "ae2omnicells:complex_omni_cell_component_64m",
        B: "gtceu:europium_fluorite_dust",
        C: "gtceu:fusion_glass",
        D: "#gtceu:circuits/uhv",
        E: "gtceu:neutronium_plate"
    })  
    event.shaped(Item.of('ae2omnicells:omni_cell_component_256m', 1), [
        "BDB",
        "ACA",
        "EAE"
    ], {
        A: "ae2omnicells:omni_cell_component_64m",
        B: "gtceu:europium_fluorite_dust",
        C: "botania:elf_glass",
        D: "#gtceu:circuits/uhv",
        E: "gtceu:neutronium_plate"
    })
    event.shaped(Item.of('ae2omnicells:complex_omni_cell_component_256m', 1), [
        "BDB",
        "ACA",
        "EAE"
    ], {
        A: "ae2omnicells:complex_omni_cell_component_64m",
        B: "gtceu:europium_fluorite_dust",
        C: "botania:elf_glass",
        D: "#gtceu:circuits/uhv",
        E: "gtceu:neutronium_plate"
    }) 

    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [{
                "item": "ae2:charged_certus_quartz_crystal"
            },
            {
                "item": "gtceu:certus_quartz_dust"
            }
        ],
        "result": {
            "count": 2,
            "item": "ae2:certus_quartz_crystal"
        }
    })

    event.remove({ output: "ae2:logic_processor" })
    event.remove({ output: "ae2:calculation_processor" })
    event.remove({ output: "ae2:engineering_processor" })
    event.remove({ id: "ae2:network/cables/glass_fluix" })
    event.remove({ id: "ae2:network/cables/covered_fluix" })
    event.remove({ id: "expatternprovider:ei" })
    event.remove({ id: "expatternprovider:epp" })
    event.remove({ id: "ae2:network/blocks/pattern_providers_interface" })
    event.remove({ id: "ae2:network/blocks/interfaces_interface" })
    event.remove({ id: "ae2:transform/certus_quartz_crystals" })

    event.replaceInput({ id: "ae2:network/wireless_part" }, "minecraft:iron_ingot", "gtceu:iron_plate")
    event.replaceInput({ id: "ae2:network/blocks/storage_drive" }, "minecraft:iron_ingot", "gtceu:stainless_steel_plate")
    event.replaceInput({ id: "ae2:network/parts/import_bus" }, "minecraft:iron_ingot", "gtceu:steel_plate")
    event.replaceInput({ id: "ae2:network/parts/export_bus" }, "minecraft:iron_ingot", "gtceu:steel_plate")
    // event.replaceInput({ id: 'bigger_ae2:quantum_cell_component' }, 'ae2:engineering_processor', '#gtceu:circuits/iv')
    // event.replaceInput({ id: 'bigger_ae2:digital_singularity_cell_component' }, 'ae2:engineering_processor', '#gtceu:circuits/luv')
    event.recipes.gtceu.wiremill("quartz_fiber")
        .EUt(120)
        .duration(60)
        .itemInputs("gtceu:nether_quartz_plate")
        .itemOutputs("2x ae2:quartz_fiber")
    event.recipes.gtceu.assembler("fluix_covered_cable")
        .EUt(120)
        .duration(40)
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:rubber 144")
        .itemOutputs("ae2:fluix_covered_cable")
    event.recipes.gtceu.assembler("fluix_covered_cable2")
        .EUt(120)
        .duration(40)
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:silicone_rubber 72")
        .itemOutputs("ae2:fluix_covered_cable")
    event.recipes.gtceu.assembler("fluix_covered_cable3")
        .EUt(120)
        .duration(40)
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids("gtceu:styrene_butadiene_rubber 36")
        .itemOutputs("ae2:fluix_covered_cable")
    // event.recipes.gtceu.assembler("ex_inscriber")
    //     .EUt(120)
    //     .duration(400)
    //     .itemInputs(["4x ae2:inscriber", "gtceu:ev_sensor", "gtceu:ev_emitter", "#ae2:interface", "2x ae2:storage_bus"])
    //     .itemOutputs("expatternprovider:ex_inscriber")
    event.recipes.gtceu.assembler("ex_charger")
        .EUt(120)
        .duration(400)
        .itemInputs(["4x ae2:charger", "gtceu:ev_sensor", "gtceu:ev_emitter", "#ae2:interface", "2x ae2:storage_bus"])
        .itemOutputs("expatternprovider:ex_charger")
    event.recipes.gtceu.assembler("ex_interface_update")
        .EUt(480)
        .duration(100)
        .itemInputs(["ae2:interface", "ae2:crafting_accelerator", "ae2:capacity_card", "2x gtceu:titanium_plate", "2x gtceu:ev_electric_motor", "gtceu:ev_electric_piston"])
        .itemOutputs("expatternprovider:interface_upgrade")
    event.recipes.gtceu.assembler("ex_patern_provider_update")
        .EUt(480)
        .duration(100)
        .itemInputs(["3x ae2:pattern_provider", "ae2:crafting_accelerator", "2x gtceu:titanium_plate", "gtceu:ev_conveyor_module", "gtceu:ev_electric_piston"])
        .itemOutputs("expatternprovider:pattern_provider_upgrade")
    event.recipes.gtceu.assembler("ex_io_bus_update")
        .EUt(480)
        .duration(100)
        .itemInputs(["2x ae2:speed_card", "2x ae2:capacity_card", "2x gtceu:ev_electric_motor", "2x ae2:crafting_accelerator"])
        .itemOutputs("expatternprovider:io_bus_upgrade")
    event.recipes.gtceu.assembler("patern_terminal_update")
        .EUt(480)
        .duration(100)
        .itemInputs(["2x ae2:fluix_glass_cable", "2x gtceu:ev_sensor", "minecraft:redstone_lamp", "2x gtceu:quantum_processor", "gtceu:ev_emitter"])
        .itemOutputs("expatternprovider:pattern_terminal_upgrade")
    event.recipes.gtceu.assembler("drive_update")
        .EUt(480)
        .duration(100)
        .itemInputs(["ae2:drive", "ae2:capacity_card", "5x gtceu:titanium_plate", "gtceu:ev_electric_piston"])
        .itemOutputs("expatternprovider:drive_upgrade")
    event.recipes.gtceu.assembler("blank_pattern")
        .EUt(480)
        .duration(100)
        .itemInputs(["#gtceu:circuits/lv", "4x gtceu:stainless_steel_plate", "2x gtceu:small_stainless_steel_gear", "4x gtceu:gold_single_cable", "2x gtceu:aluminium_screw"])
        .itemOutputs("8x ae2:blank_pattern")
    event.recipes.gtceu.assembler("tag_storage_bus")
        .EUt(1920)
        .duration(100)
        .itemInputs(["ae2:storage_bus", "gtceu:ev_robot_arm", "gtceu:ev_sensor", "2x gtceu:titanium_bolt", "minecraft:book"])
        .inputFluids("gtceu:tin 144")
        .itemOutputs("expatternprovider:tag_storage_bus")
    event.recipes.gtceu.assembler("tag_export_bus")
        .EUt(1920)
        .duration(100)
        .itemInputs(["ae2:export_bus", "gtceu:ev_robot_arm", "gtceu:ev_sensor", "2x gtceu:titanium_bolt", "minecraft:book"])
        .inputFluids("gtceu:tin 144")
        .itemOutputs("expatternprovider:tag_export_bus")
    event.recipes.gtceu.assembler("ex_molecular_assembler")
        .EUt(480)
        .duration(100)
        .itemInputs(["4x ae2:molecular_assembler", "2x ae2:crafting_accelerator", "2x ae2:fluix_smart_cable", "2x ae2:engineering_processor", "gtceu:ev_sensor"])
        .inputFluids("gtceu:tin 144")
        .itemOutputs("expatternprovider:ex_molecular_assembler")
    event.recipes.gtceu.assembler("basic_card")
        .EUt(120)
        .duration(100)
        .itemInputs(["2x gtceu:iron_plate", "gtceu:gold_plate", "2x gtceu:red_alloy_foil", "ae2:calculation_processor"])
        .itemOutputs("2x ae2:basic_card")
    event.recipes.gtceu.assembler("advanced_card")
        .EUt(480)
        .duration(100)
        .itemInputs(["2x gtceu:stainless_steel_plate", "gtceu:electrum_plate", "2x gtceu:red_alloy_foil", "ae2:engineering_processor"])
        .itemOutputs("2x ae2:advanced_card")
    event.recipes.gtceu.assembler("crafting_unit")
        .EUt(480)
        .duration(100)
        .itemInputs(["2x ae2:logic_processor", "ae2:calculation_processor", "4x gtceu:steel_plate", "2x ae2:fluix_glass_cable"])
        .itemOutputs("ae2:crafting_unit")
    event.recipes.gtceu.assembler("item_housing")
        .EUt(480)
        .duration(100)
        .itemInputs(["3x gtceu:steel_plate", "2x gtceu:steel_screw", "2x gtceu:red_alloy_foil", "2x ae2:quartz_glass"])
        .itemOutputs("ae2:item_cell_housing")
    event.recipes.gtceu.assembler("fluid_housing")
        .EUt(480)
        .duration(100)
        .itemInputs(["3x gtceu:bronze_plate", "2x gtceu:bismuth_bronze_screw", "2x gtceu:rubber_foil", "2x ae2:quartz_glass"])
        .itemOutputs("ae2:fluid_cell_housing")
    event.recipes.gtceu.electrolyzer("charged_ender_ingot")
        .EUt(960)
        .duration(250)
        .itemInputs(['ae2omnicells:ender_ingot'])
        .itemOutputs(['ae2omnicells:charged_ender_ingot'])
    // event.recipes.gtceu.assembler("deep_item_housing")
    //     .EUt(1920)
    //     .duration(100)
    //     .itemInputs(['4x minecraft:netherite_ingot', "2x gtceu:gold_foil", "2x ae2:quartz_vibrant_glass", "ae2:item_cell_housing"])
    //     .itemOutputs("ae2things:disk_housing")
    // event.recipes.gtceu.assembler("deep_fluid_housing")
    //     .EUt(1920)
    //     .duration(100)
    //     .itemInputs(["3x gtceu:blue_alloy_plate", "2x gtceu:blue_alloy_screw", "2x gtceu:silicone_rubber_foil", "2x ae2:quartz_vibrant_glass", "ae2:fluid_cell_housing"])
    //     .itemOutputs("ae2additions:disk_fluid_housing")
    // event.recipes.gtceu.assembler("super_housing")
    //     .EUt(7680)
    //     .duration(100)
    //     .itemInputs(["3x gtceu:hsss_plate", "2x gtceu:hsss_screw", "2x gtceu:styrene_butadiene_rubber_foil", "2x botania:mana_glass"])
    //     .itemOutputs("ae2additions:super_cell_housing")
    event.recipes.gtceu.assembler("wireless_booster")
        .EUt(480)
        .duration(100)
        .itemInputs(["2x gtceu:steel_plate", "ae2:calculation_processor", "ae2:fluix_dust"])
        .itemOutputs("ae2:wireless_booster")

    // event.recipes.gtceu.assembler('advanced_cell_item_housing')
    //     .EUt(1920)
    //     .duration(100)
    //     .itemInputs(['3x gtceu:end_steel_plate', '2x gtceu:tungsten_steel_screw', '2x gtceu:polyphenylene_sulfide_foil', '2x gtceu:tempered_glass'])
    //     .itemOutputs('bigger_ae2:advanced_item_cell_housing')

    // event.recipes.gtceu.assembler('advanced_cell_fluid_housing')
    //     .EUt(1920)
    //     .duration(100)
    //     .itemInputs(['3x gtceu:chorusite_alloy_plate', '2x gtceu:tungsten_steel_screw', '2x gtceu:polyphenylene_sulfide_foil', '2x gtceu:tempered_glass'])
    //     .itemOutputs('bigger_ae2:advanced_fluid_cell_housing')
    event.recipes.gtceu.assembler("circuit_cutter")
        .EUt(1920)
        .duration(10)
        .itemInputs("gtceu:titanium_buzz_saw_blade")
        .itemInputs("4x ae2:not_so_mysterious_cube")
        .itemInputs("2x #gtceu:circuits/ev")
        .itemInputs("gtceu:laminated_glass")
        .itemOutputs("expatternprovider:circuit_cutter")
    event.shaped(
        Item.of("expatternprovider:ex_interface", 1), [
            "ABA",
            "CDC",
            "EFE"
        ], {
            A: "gtceu:titanium_plate",
            B: "gtceu:ev_electric_piston",
            C: "#ae2:interface",
            D: "ae2:capacity_card",
            E: "gtceu:ev_electric_motor",
            F: "ae2:crafting_accelerator"
        })
    event.shaped(
        Item.of("expatternprovider:ex_pattern_provider", 1), [
            "ABC",
            "BDB",
            "EBE"
        ], {
            A: "gtceu:ev_electric_piston",
            B: "#ae2:pattern_provider",
            C: "gtceu:ev_conveyor_module",
            D: "ae2:crafting_accelerator",
            E: "gtceu:titanium_plate",
        })
    event.shaped(
        Item.of("expatternprovider:ex_export_bus_part", 1), [
            "ABA",
            "CDC",
            "EBE"
        ], {
            A: "ae2:speed_card",
            B: "ae2:crafting_accelerator",
            C: "ae2:capacity_card",
            D: "ae2:export_bus",
            E: "gtceu:ev_electric_motor",
        })
    event.shaped(
        Item.of("expatternprovider:ex_import_bus_part", 1), [
            "ABA",
            "CDC",
            "EBE"
        ], {
            A: "ae2:speed_card",
            B: "ae2:crafting_accelerator",
            C: "ae2:capacity_card",
            D: "ae2:import_bus",
            E: "gtceu:ev_electric_motor",
        })
    event.shaped(
        Item.of("expatternprovider:ex_pattern_access_part", 1), [
            "ABA",
            "CDC",
            "EFE"
        ], {
            A: "ae2:fluix_glass_cable",
            B: "minecraft:redstone_lamp",
            C: "gtceu:ev_sensor",
            D: "ae2:pattern_access_terminal",
            E: "#gtceu:circuits/ev",
            F: "gtceu:ev_emitter"
        })
    event.shaped(
        Item.of("expatternprovider:ex_drive", 1), [
            "AAA",
            "BCB",
            "ADA"
        ], {
            A: "gtceu:titanium_plate",
            B: "ae2:drive",
            C: "gtceu:ev_electric_piston",
            D: "ae2:capacity_card",
        })
    event.shaped(
        Item.of("merequester:requester", 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: "gtceu:stainless_steel_plate",
            B: "ae2:crafting_accelerator",
            C: "#ae2:interface",
            D: "gtceu:hv_sensor",
            E: "gtceu:amethyst_flawless_gem"
        })
    event.shaped(
        Item.of("ae2:storage_bus", 1), [
            "   ",
            "ABC",
            "   "
        ], {
            A: "ae2:import_bus",
            B: "#ae2:interface",
            C: "ae2:export_bus",
        })
    event.shaped(
        Item.of("ae2:pattern_provider", 1), [
            "ABA",
            "CDC",
            "AEA"
        ], {
            A: "gtceu:stainless_steel_plate",
            B: "ae2:blank_pattern",
            C: "ae2:engineering_processor",
            D: "gtceu:hv_electric_motor",
            E: "gtceu:hv_conveyor_module"
        })
    event.shaped(
        Item.of("ae2:interface", 1), [
            "ABC",
            "BDB",
            "EBE"
        ], {
            A: "ae2:import_bus",
            B: "gtceu:certus_quartz_plate",
            C: "ae2:export_bus",
            D: "ae2:logic_processor",
            E: "gtceu:steel_plate"
        })
    event.shaped(
        Item.of("ae2:pattern_encoding_terminal", 1), [
            "ABC",
            "   ",
            "   "
        ], {
            A: "ae2:engineering_processor",
            B: "ae2:crafting_terminal",
            C: "ae2:blank_pattern",
        })
    event.shaped(
        Item.of("expatternprovider:ingredient_buffer", 1), [
            "ABA",
            "CDC",
            "EBF"
        ], {
            A: "gtceu:stainless_steel_plate",
            B: "ae2:cell_component_4k",
            C: "ae2:quartz_vibrant_glass",
            D: "ae2:engineering_processor",
            E: "gtceu:hv_electric_pump",
            F: "gtceu:hv_conveyor_module"
        })
    event.shaped(
        Item.of("ae2:molecular_assembler", 1), [
            "ABA",
            "DCE",
            "ABA"
        ], {
            A: "gtceu:stainless_steel_plate",
            B: "gtceu:tempered_glass",
            C: "enderio:crafter",
            D: "ae2:formation_core",
            E: "ae2:annihilation_core"
        })

    remove_recipes_type(event, [
        "ae2:inscriber"
    ])
    remove_recipes_output(event, ["ae2:energy_acceptor", "ae2:charger", "ae2:inscriber", "ae2:quartz_fiber", "expatternprovider:interface_upgrade", "expatternprovider:pattern_provider_upgrade",
        "expatternprovider:ex_export_bus_part", "expatternprovider:ex_import_bus_part", "expatternprovider:io_bus_upgrade", "expatternprovider:ex_pattern_access_part",
        "expatternprovider:pattern_terminal_upgrade", "expatternprovider:ex_drive", "expatternprovider:drive_upgrade", "merequester:requester", "ae2:storage_bus", "ae2:blank_pattern",
        "ae2:pattern_encoding_terminal", "expatternprovider:tag_storage_bus", "expatternprovider:tag_export_bus", "expatternprovider:ex_molecular_assembler", "expatternprovider:ingredient_buffer",
        "ae2:molecular_assembler", "ae2:basic_card", "ae2:advanced_card", "ae2:printed_silicon", "ae2:ender_dust", "ae2:certus_quartz_dust", "ae2:crafting_unit", "ae2additions:disk_item_256k",
        "ae2:item_cell_housing", "ae2:fluid_cell_housing", "ae2things:disk_housing", "ae2additions:disk_fluid_housing", "ae2additions:super_cell_housing", "ae2:wireless_booster", "ae2:quartz_glass",
        "ae2omnicells:omni_cell_housing",
        "ae2omnicells:complex_omni_cell_housing",
        "ae2omnicells:quantum_omni_cell_housing",
        "ae2omnicells:omni_link_print_press",
        "ae2omnicells:complex_link_print_press",
        "ae2omnicells:multidimensional_expansion_print_press",
        "ae2omnicells:omni_crafting_unit_block",
        "ae2omnicells:complex_crafting_unit_block",
        "ae2omnicells:quantum_crafting_unit_block"
    ])
    remove_recipes_id(event, [
        "expatternprovider:ex_inscriber",
        "expatternprovider:ex_charger",
        "ae2:network/cells/item_storage_cell_1k",
        "ae2:network/cells/item_storage_cell_4k",
        "ae2:network/cells/item_storage_cell_16k",
        "ae2:network/cells/item_storage_cell_64k",
        "ae2:network/cells/item_storage_cell_256k",
        "ae2additions:cells/item/1024k",
        "ae2additions:cells/item/4096k",
        "ae2additions:cells/item/16384k",
        "ae2additions:cells/item/65536k",
        "ae2:network/cells/fluid_storage_cell_1k",
        "ae2:network/cells/fluid_storage_cell_4k",
        "ae2:network/cells/fluid_storage_cell_16k",
        "ae2:network/cells/fluid_storage_cell_64k",
        "ae2:network/cells/fluid_storage_cell_256k",
        "ae2additions:cells/fluid/1024k",
        "ae2additions:cells/fluid/4096k",
        "ae2additions:cells/fluid/16384k",
        "ae2additions:cells/fluid/65536k",
        "ae2things:cells/disk_drive_4k",
        "ae2things:cells/disk_drive_16k",
        "ae2things:cells/disk_drive_64k",
        "ae2things:cells/disk_drive_256k",
        "ae2additions:cells/item/disk-1024",
        "ae2additions:cells/item/disk-4096",
        "ae2additions:cells/item/disk-16384",
        "ae2additions:cells/item/disk-65536",
        "ae2additions:cells/fluid/disk-1",
        "ae2additions:cells/fluid/disk-4",
        "ae2additions:cells/fluid/disk-16",
        "ae2additions:cells/fluid/disk-64",
        "ae2additions:cells/fluid/disk-256",
        "ae2additions:cells/fluid/disk-1024",
        "ae2additions:cells/fluid/disk-4096",
        "ae2additions:cells/fluid/disk-16384",
        "ae2additions:cells/fluid/disk-65536",
        "ae2additions:cells/super/1k",
        "ae2additions:cells/super/4k",
        "ae2additions:cells/super/16k",
        "ae2additions:cells/super/64k",
        "ae2additions:cells/super/256k",
        "ae2additions:cells/super/1024k",
        "ae2additions:cells/super/4096k",
        "ae2additions:cells/super/16m",
        "ae2additions:cells/super/65m",
        "bigger_ae2:4_core_crafting_accelerator",
        "bigger_ae2:16_core_crafting_accelerator",
        "bigger_ae2:64_core_crafting_accelerator",
        "bigger_ae2:256_core_crafting_accelerator",
        "bigger_ae2:1024_core_crafting_accelerator",
        "bigger_ae2:advanced_item_cell_housing",
        "bigger_ae2:advanced_fluid_cell_housing",

        "ae2omnicells:cells/shaped/omni_cell_1k",
        "ae2omnicells:cells/shaped/omni_cell_4k",
        "ae2omnicells:cells/shaped/omni_cell_16k",
        "ae2omnicells:cells/shaped/omni_cell_64k",
        "ae2omnicells:cells/shaped/omni_cell_256k",
        "ae2omnicells:cells/shaped/omni_cell_1m",
        "ae2omnicells:cells/shaped/omni_cell_4m",
        "ae2omnicells:cells/shaped/omni_cell_16m",
        "ae2omnicells:cells/shaped/omni_cell_64m",
        "ae2omnicells:cells/shaped/omni_cell_256m",
        "ae2omnicells:cells/shaped/complex_omni_cell_1k",
        "ae2omnicells:cells/shaped/complex_omni_cell_4k",
        "ae2omnicells:cells/shaped/complex_omni_cell_16k",
        "ae2omnicells:cells/shaped/complex_omni_cell_64k",
        "ae2omnicells:cells/shaped/complex_omni_cell_256k",
        "ae2omnicells:cells/shaped/complex_omni_cell_1m",
        "ae2omnicells:cells/shaped/complex_omni_cell_4m",
        "ae2omnicells:cells/shaped/complex_omni_cell_16m",
        "ae2omnicells:cells/shaped/complex_omni_cell_64m",
        "ae2omnicells:cells/shaped/complex_omni_cell_256m",
        "ae2omnicells:cells/shaped/quantum_omni_cell_1k",
        "ae2omnicells:cells/shaped/quantum_omni_cell_4k",
        "ae2omnicells:cells/shaped/quantum_omni_cell_16k",
        "ae2omnicells:cells/shaped/quantum_omni_cell_64k",
        "ae2omnicells:cells/shaped/quantum_omni_cell_256k",
        "ae2omnicells:cells/shaped/quantum_omni_cell_1m",
        "ae2omnicells:cells/shaped/quantum_omni_cell_4m",
        "ae2omnicells:cells/shaped/quantum_omni_cell_16m",
        "ae2omnicells:cells/shaped/quantum_omni_cell_64m",
        "ae2omnicells:cells/shaped/quantum_omni_cell_256m",

        "ae2omnicells:components/shaped/omni_cell_component_256m",
        "ae2omnicells:components/shaped/complex_omni_cell_component_256m",
        "ae2omnicells:components/shaped/quantum_omni_cell_component_256m",
    ])

    function press_recipe(name, color, ingredient, circuit) {
        event.recipes.gtceu.laser_engraver("gtceu:" + name + "_press")
            .itemInputs("gtceu:stainless_steel_plate")
            .notConsumable("#forge:lenses/" + color)
            .itemOutputs("ae2:" + name + "_press")
            .EUt(120)
            .duration(1600)
        event.recipes.gtceu.forming_press("gtceu:" + name + "_print")
            .itemInputs("gtceu:" + ingredient + "_plate")
            .notConsumable("ae2:" + name + "_press")
            .itemOutputs("ae2:printed_" + name)
            .EUt(120)
            .circuit(23)
            .duration(200)
        if (circuit) {
            event.recipes.gtceu.forming_press("gtceu:" + name)
                .itemInputs("2x ae2:printed_" + name, "2x ae2:printed_silicon", "#gtceu:circuits/hv")
                .itemOutputs("2x ae2:" + name)
                .EUt(120)
                .circuit(23)
                .duration(360)
        }
    }
    press_recipe("calculation_processor", "white", "certus_quartz", true)
    press_recipe("engineering_processor", "blue", "diamond", true)
    press_recipe("silicon", "gray", "silicon", false)

    event.recipes.gtceu.forming_press("gtceu:" + "logic_processor")
        .itemInputs("2x ae2:printed_" + "logic_processor", "2x ae2:printed_silicon", "#gtceu:circuits/mv")
        .itemOutputs("2x ae2:" + "logic_processor")
        .EUt(30)
        .circuit(23)
        .duration(360)

    event.recipes.gtceu.forming_press("gtceu:" + "logic_processor" + "_print")
        .itemInputs("gtceu:" + "gold" + "_plate")
        .notConsumable("ae2:" + "logic_processor" + "_press")
        .itemOutputs("ae2:printed_" + "logic_processor")
        .EUt(30)
        .circuit(23)
        .duration(200)
    event.recipes.gtceu.laser_engraver("gtceu:" + "logic_processor" + "_press")
        .itemInputs("gtceu:stainless_steel_plate")
        .notConsumable("#forge:lenses/" + "yellow")
        .itemOutputs("ae2:" + "logic_processor" + "_press")
        .EUt(30)
        .duration(1600)

    // Omni Link Circuit & ender ingot
    event.recipes.gtceu.forming_press("omni_link_circuit_print")
        .itemInputs('ae2omnicells:ender_ingot')
        .notConsumable('ae2omnicells:omni_link_print_press')
        .itemOutputs('ae2omnicells:omni_link_circuit_print')
        .EUt(480)
        .circuit(23)
        .duration(200)
    event.recipes.gtceu.forming_press("omni_link_processor")
        .itemInputs('2x ae2omnicells:omni_link_circuit_print', '2x ae2:printed_silicon', '#gtceu:circuits/iv')
        .itemOutputs('2x ae2omnicells:omni_link_processor')
        .EUt(480)
        .circuit(23)
        .duration(360)
    event.recipes.gtceu.chemical_bath('ender_ingot')
        .itemInputs('gtceu:end_steel_ingot')
        .inputFluids('gtceu:ender_pearl 288')
        .itemOutputs('ae2omnicells:ender_ingot')
        .EUt(480)
        .duration(60)    

    event.recipes.gtceu.forming_press("complex_link_circuit_print")
        .itemInputs('gtceu:netherite_plate')
        .notConsumable('ae2omnicells:complex_link_print_press')
        .itemOutputs('ae2omnicells:complex_link_circuit_print')
        .EUt(480)
        .circuit(23)
        .duration(200)
    event.recipes.gtceu.forming_press("complex_link_processor")
        .itemInputs('2x ae2omnicells:complex_link_circuit_print', '2x ae2:printed_silicon', '#gtceu:circuits/luv')
        .itemOutputs('2x ae2omnicells:complex_link_processor')
        .EUt(480)
        .circuit(23)
        .duration(360)

    event.recipes.gtceu.laser_engraver('omni_link_print_press')
            .itemInputs('gtceu:stellite_100_plate')
            .notConsumable('gtceu:arcane_crystal_lens')
            .itemOutputs('ae2omnicells:omni_link_print_press')
            .EUt(120)
            .duration(1600)
    event.recipes.gtceu.laser_engraver("complex_link_print_press")
            .itemInputs('gtceu:stellite_100_plate')
            .notConsumable('gtceu:toxic_swamp_amber_lens')
            .itemOutputs('ae2omnicells:complex_link_print_press')
            .EUt(120)
            .duration(1600)
    // 
    event.recipes.gtceu.macerator("gtceu:fluix_dust")
        .itemInputs("ae2:fluix_crystal")
        .itemOutputs("ae2:fluix_dust")
        .EUt(2)
        .duration(40)
    event.recipes.gtceu.macerator("gtceu:sky_dust")
        .itemInputs("ae2:sky_stone_block")
        .itemOutputs("ae2:sky_dust")
        .EUt(2)
        .duration(80)
    event.recipes.gtceu.alloy_smelter("gtceu:quartz_glass")
        .itemInputs("gtceu:quartz_glass_dust")
        .notConsumable("gtceu:block_casting_mold")
        .itemOutputs("ae2:quartz_glass")
        .EUt(16)
        .duration(100)
    event.recipes.gtceu.mixer('quartz_glass_dust')
        .itemInputs(['gtceu:glass_dust', 'gtceu:certus_quartz_dust'])
        .itemOutputs('2x gtceu:quartz_glass_dust')
        .EUt(30)
        .duration(80)
    event.recipes.gtceu.mixer('fluix_crystal')
        .circuit(3)
        .itemInputs(['ae2:charged_certus_quartz_crystal', 'minecraft:redstone', 'minecraft:quartz'])
        .inputFluids('minecraft:water 250')
        .itemOutputs('2x ae2:fluix_crystal')
        .EUt(120)
        .duration(60)
    event.recipes.create.mixing('2x gtceu:quartz_glass_dust', ['gtceu:certus_quartz_dust', 'gtceu:glass_dust']).heated()
    let assembler = event.recipes.gtceu.assembler
    assembler('ae2:cell_component_4k_changed')
        .itemInputs('1x #gtceu:circuits/lv')
        .itemInputs('4x #gtceu:circuits/ulv')
        .itemInputs('ae2:quartz_glass')
        .itemInputs('2x gtceu:mercury_barium_calcium_cuprate_quadruple_wire')
        .itemInputs('2x gtceu:stainless_steel_plate')
        .itemOutputs('ae2:cell_component_4k')
        .EUt(120)
        .duration(100)
    assembler('ae2:cell_component_16k_changed')
        .itemInputs('1x #gtceu:circuits/mv')
        .itemInputs('4x #gtceu:circuits/lv')
        .itemInputs('ae2:quartz_glass')
        .itemInputs('2x gtceu:uranium_triplatinum_quadruple_wire')
        .itemInputs('2x gtceu:titanium_plate')
        .itemOutputs('ae2:cell_component_16k')
        .EUt(120 * 4)
        .duration(60)
    assembler('ae2:cell_component_64k_changed')
        .itemInputs('4x #gtceu:circuits/hv')
        .itemInputs('16x #gtceu:circuits/mv')
        .itemInputs('ae2:quartz_glass')
        .itemInputs('2x gtceu:uranium_triplatinum_quadruple_wire')
        .itemInputs('2x gtceu:titanium_plate')
        .itemOutputs('ae2:cell_component_64k')
        .EUt(120 * 4)
        .duration(60)
    assembler('ae2:cell_component_256k_changed')
        .itemInputs('4x #gtceu:circuits/ev')
        .itemInputs('16x #gtceu:circuits/hv')
        .itemInputs('ae2:quartz_glass')
        .itemInputs('4x gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire')
        .itemInputs('4x gtceu:rhodium_plated_palladium_plate')
        .itemOutputs('ae2:cell_component_256k')
        .EUt(120 * 4 * 4 * 4)
        .duration(60)
    // assembler('ae2:cell_component_1024k_changed')
    //     .itemInputs('4x #gtceu:circuits/ev')
    //     .itemInputs('16x #gtceu:circuits/iv')
    //     .itemInputs('ae2:quartz_glass')
    //     .itemInputs('4x gtceu:naquadah_alloy_plate')
    //     .itemInputs('4x gtceu:uranium_rhodium_dinaquadide_quadruple_wire')
    //     .itemOutputs('ae2additions:cell_component_1024')
    //     .EUt(120 * 4 * 4 * 4 * 4)
    //     .duration(60)

    // event.shaped(
    //     Item.of('mae2:pattern_p2p_tunnel', 1), [
    //         "AB "
    //     ], {
    //         A: 'ae2:me_p2p_tunnel',
    //         B: '#mae2:p2p_attunements/pattern_p2p_tunnel'
    //     }).keepIngredient('#mae2:p2p_attunements/pattern_p2p_tunnel')
    
    event.shaped(
        Item.of('eup2p:eu_p2p_tunnel', 1), [
            "AB "
        ], {
            A: 'ae2:me_p2p_tunnel',
            B: '#eup2p:p2p_attunements/eu_p2p_tunnel'
        }).keepIngredient('#eup2p:p2p_attunements/eu_p2p_tunnel')
    
    
    assembler('omni_cell')
        .itemInputs('4x ae2omnicells:ender_ingot')
        .itemInputs('4x gtceu:polycaprolactam_foil')
        .itemInputs('2x gtceu:aluminium_screw')
        .itemInputs('2x gtceu:tempered_glass')
        .itemInputs('ae2omnicells:omni_link_processor')
        .itemOutputs('ae2omnicells:omni_cell_housing')
        .EUt(1920)
        .duration(100)
    assembler('complex_omni_cell')
        .itemInputs('ae2omnicells:omni_cell_housing')
        .itemInputs('2x gtceu:netherite_plate')
        .itemInputs('2x gtceu:netherite_screw')
        .itemInputs('ae2omnicells:complex_link_processor')
        .itemOutputs('ae2omnicells:complex_omni_cell_housing')
        .EUt(7680)
        .duration(100)

    //cpu
    assembler('crafting_unit_block')
        .itemInputs(['4x ae2omnicells:ender_ingot', '2x ae2omnicells:omni_link_processor', 'ae2:crafting_unit', 'ae2:crafting_accelerator', '4x ae2:fluix_smart_dense_cable'])
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('ae2omnicells:omni_crafting_unit_block')
        .EUt(1920)
        .duration(100)
    event.recipes.gtceu.assembly_line('complex_crafting_unit_block')
        .itemOutputs('ae2omnicells:complex_crafting_unit_block')
        .itemInputs('ae2omnicells:omni_crafting_unit_block')
        .itemInputs('2x gtceu:netherite_plate')
        .itemInputs('2x ae2omnicells:complex_link_processor')
        .itemInputs('4x ae2omnicells:charged_ender_ingot')
        .itemInputs('2x gtceu:small_rhodium_plated_palladium_gear')
        .itemInputs('2x gtceu:netherite_screw')
        .inputFluids('gtceu:ancient_debris_leach 8000')
        .inputFluids('gtceu:lubricant 1000')
        .EUt(7680 * 4)
        .duration(100)
})