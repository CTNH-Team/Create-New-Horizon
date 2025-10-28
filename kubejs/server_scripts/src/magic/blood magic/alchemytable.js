ServerEvents.recipes(event => {
    let remove = ['bloodmagic:alchemy_table',
        'bloodmagic:alchemytable/reagent_water',
        'bloodmagic:alchemytable/reagent_lava',
        'bloodmagic:alchemytable/reagent_sight',
        'bloodmagic:alchemytable/reagent_air',
        'bloodmagic:alchemytable/reagent_fastminer',
        'bloodmagic:alchemytable/reagent_void',
        'bloodmagic:alchemytable/reagent_growth',
        'bloodmagic:alchemytable/reagent_holding',
        'bloodmagic:alchemytable/reagent_magnetism',
        'bloodmagic:alchemytable/reagent_blood_light',
        'bloodmagic:alchemytable/reagent_binding',
        'bloodmagic:alchemytable/reagent_suppression',
        'bloodmagic:alchemytable/reagent_teleposition'
    ]
    remove.forEach(r => {
        event.remove({ id: r })
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('bloodmagic:alchemytable', 1), [
            "     ",
            "   A ",
            "BBCBB",
            " DED ",
            "FGHGI"
        ], {
            A: Item.of('bloodmagic:alchemy_flask', '{Damage:0}'),
            B: 'gtceu:dark_steel_plate',
            C: 'minecraft:red_wool',
            D: 'bloodmagic:reinforcedslate',
            E: 'gtceu:iron_rod',
            F: 'botania:rune_pride',
            G: 'gtceu:dark_steel_block',
            H: 'gtceu:small_terra_steel_gear',
            I: 'botania:rune_greed'
        })


    event.recipes.extendedcrafting.shaped_table(
        Item.of('kubejs:snow_city_sword', 1), [
            "      AA ",
            "      A A",
            "     AAAA",
            "    ABAAA",
            "   ABA   ",
            "AAABA    ",
            "AAAA     ",
            "A A      ",
            " AA      "
        ], {
            A: 'gtceu:snow_steel_ingot',
            B: '#gtceu:circuits/luv'
        })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('kubejs:yharim', 9), [
            "ABBCCCBBA",
            "BDDDDDDDB",
            "BDEEEEEDB",
            "CDEGGGEDC",
            "CDEGFGEDC",
            "CDEGGGEDC",
            "BDEEEEEDB",
            "BDDDDDDDB",
            "ABBCCCBBA",
        ], {
            A: 'gtceu:neutronium_ingot',
            B: 'gtceu:aether_ingot',
            C: 'gtceu:ultra_mana_ingot',
            D: 'gtceu:boundless_ingot',
            E: 'minecraft:honeycomb',
            F: 'minecraft:bee_nest',
            G: 'gtceu:infinity_catalyst_dust'

        })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('kubejs:ark_of_homo', 1), [
            " D D D D ",
            " D D D D ",
            " A D D A ",
            "C AD DA C",
            " CCDBDCC ",
            "   D D   ",
            "  GG GG  ",
            " G G G G ",
            "G  G G  G",
        ], {
            A: 'gtceu:neutronium_ingot',
            B: 'gtceu:aether_ingot',
            C: 'gtceu:ultra_mana_ingot',
            D: 'gtceu:boundless_ingot',
            G: 'kubejs:yharim'

    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('kubejs:ark_of_homo', 1), [
        " D D D D ",
        " D D D D ",
        " A D D A ",
        "C AD DA C",
        " CCDBDCC ",
        "   D D   ",
        "  GG GG  ",
        " G G G G ",
        "G  G G  G",
    ], {
        A: 'gtceu:neutronium_ingot',
        B: 'gtceu:aether_ingot',
        C: 'gtceu:ultra_mana_ingot',
        D: 'gtceu:boundless_ingot',
        G: 'kubejs:yharim'

    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:elite_component', 1), [
        "ABBCA",
        "CCCCC",
        "BBBCB",
        "BBBCB",
        "ABBCA",
    ], {
        A: 'extendedcrafting:luminessence_block',
        B: 'extendedcrafting:black_iron_slate',
        C: 'gtceu:diamond_plate'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:redstone_component', 8), [
        "AAAAA",
        "ACBCA",
        "ABDBA",
        "ACBCA",
        "AAAAA",
    ], {
        A: 'extendedcrafting:luminessence',
        B: 'vintageimprovements:redstone_module',
        C: 'extendedcrafting:redstone_ingot_block',
        D: 'extendedcrafting:black_iron_slate'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:redstone_catalyst', 1), [
        "  A  ",
        " CBC ",
        "ABDBA",
        " CBC ",
        "  A  ",
    ], {
        A: 'vintageimprovements:redstone_module',
        B: 'extendedcrafting:redstone_ingot_block',
        C: 'extendedcrafting:redstone_component',
        D: 'extendedcrafting:luminessence_block'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:flux_crafter', 1), [
        "AAAAA",
        "BCCCB",
        "BCDCB",
        "BEEEB",
        "BBBBB",
    ], {
        A: 'extendedcrafting:luminessence_block',
        B: 'extendedcrafting:redstone_ingot_block',
        C: 'vintageimprovements:redstone_module',
        D: 'extendedcrafting:advanced_table',
        E: 'extendedcrafting:redstone_catalyst'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:flux_alternator', 4), [
        " AAA ",
        " ACA ",
        " ACA ",
        "BEEEB",
        "BBBBB",
    ], {
        A: 'extendedcrafting:luminessence_block',
        B: 'extendedcrafting:redstone_ingot_block',
        C: 'gtceu:electrum_block',
        E: 'extendedcrafting:redstone_catalyst'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:ender_component', 8), [
        "AAAAA",
        "ACBCA",
        "ABDBA",
        "ACBCA",
        "AAAAA",
    ], {
        A: 'extendedcrafting:ender_ingot_block',
        B: 'enderio:ender_crystal',
        C: 'extendedcrafting:ender_ingot_block',
        D: 'extendedcrafting:black_iron_slate'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:ender_catalyst', 1), [
        "  A  ",
        " CBC ",
        "ABDBA",
        " CBC ",
        "  A  ",
    ], {
        A: 'enderio:ender_crystal',
        B: 'extendedcrafting:ender_ingot_block',
        C: 'extendedcrafting:ender_component',
        D: 'extendedcrafting:luminessence_block'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:ender_crafter', 1), [
        "AAAAA",
        "BCCCB",
        "BCDCB",
        "BEEEB",
        "BBBBB",
    ], {
        A: 'extendedcrafting:luminessence_block',
        B: 'extendedcrafting:ender_ingot_block',
        C: 'enderio:ender_crystal',
        D: 'extendedcrafting:advanced_table',
        E: 'enderio:ender_crystal'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:ender_alternator', 4), [
        " AAA ",
        " ACA ",
        " ACA ",
        "BEEEB",
        "BBBBB",
    ], {
        A: 'extendedcrafting:luminessence_block',
        B: 'extendedcrafting:ender_ingot_block',
        C: 'gtceu:olivine_block',
        E: 'extendedcrafting:ender_catalyst'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:elite_catalyst', 1), [
        "ABCBA",
        "BCBCB",
        "CBABC",
        "BCBCB",
        "ABCBA",
    ], {
        A: 'extendedcrafting:elite_component',
        B: 'extendedcrafting:black_iron_slate',
        C: 'extendedcrafting:luminessence_block'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:crystaltine_component', 1), [
        "ABBBCBA",
        "BBBBDBB",
        "CCCDEDC",
        "BBBBDBB",
        "BBBBCBB",
        "BBBBCBB",
        "ABBBCBA"
    ], {
        A: 'extendedcrafting:crystaltine_block',
        B: 'extendedcrafting:black_iron_slate',
        C: 'extendedcrafting:crystaltine_ingot',
        D: 'gtceu:engraved_lapotron_crystal_chip',
        E: 'gtceu:lapotron_gem'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:crystaltine_component', 1), [
        "ABBBCBA",
        "BBBBDBB",
        "CCCDEDC",
        "BBBBDBB",
        "BBBBCBB",
        "BBBBCBB",
        "ABBBCBA"
    ], {
        A: 'extendedcrafting:crystaltine_block',
        B: 'extendedcrafting:black_iron_slate',
        C: 'extendedcrafting:crystaltine_ingot',
        D: 'gtceu:engraved_lapotron_crystal_chip',
        E: 'gtceu:lapotron_gem'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:crystaltine_catalyst', 1), [
        "ABCCCBA",
        "BCCDCCB",
        "CCDEDCC",
        "CDEAEDC",
        "CCDEDCC",
        "BCCDCCB",
        "ABCCCBA"
    ], {
        A: 'extendedcrafting:crystaltine_block',
        B: 'gtceu:engraved_lapotron_crystal_chip',
        C: 'extendedcrafting:crystaltine_ingot',
        D: 'extendedcrafting:black_iron_slate',
        E: 'extendedcrafting:crystaltine_component'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:ultimate_component', 1), [
        "ABBBDBA",
        "BBBBCBB",
        "DCCCECD",
        "BBBBCBB",
        "BBBBCBB",
        "BBBBCBB",
        "ABBBDBA"
    ], {
        A: 'extendedcrafting:luminessence_block',
        B: 'extendedcrafting:black_iron_slate',
        C: 'gtceu:olivine_plate',
        D: 'gtceu:ender_eye_plate',
        E: 'gtceu:terra_steel_plate'
    })
    event.recipes.extendedcrafting.shaped_table(
        Item.of('extendedcrafting:ultimate_catalyst', 1), [
        "ABCDCBA",
        "BCDEDCB",
        "CDEAEDC",
        "DEAAAED",
        "CDEAEDC",
        "BCDEDCB",
        "ABCDCBA"
    ], {
        A: 'extendedcrafting:ultimate_component',
        B: 'gtceu:ender_eye_plate',
        C: 'gtceu:terra_steel_plate',
        D: 'extendedcrafting:luminessence_block',
        E: 'gtceu:thorium_232_plate'
    })
    //water
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "alexscaves:bioluminesscence"
                },
                {
                    "item": "minecraft:ink_sac"
                },
                {
                    "item": "botania:rune_water"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentwater"
            },
            "syphon": 500,
            "ticks": 10,
            "upgradeLevel": 2
        })
        //lava
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "biomesoplenty:burning_blossom"
                },
                {
                    "item": "botania:quartz_blaze"
                },
                {
                    "tag": "forge:obsidian"
                },
                {
                    "item": "botania:rune_fire"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentlava"
            },
            "syphon": 500,
            "ticks": 10,
            "upgradeLevel": 2
        })
        //air
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "gtceu:air_bucket"
                },
                {
                    "item": "create:windmill_bearing"
                },
                {
                    "item": "botania:ender_air_bottle"
                },
                {
                    "item": "botania:rune_air"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentair"
            },
            "syphon": 500,
            "ticks": 10,
            "upgradeLevel": 2
        })
        //miner
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "botania:lens_mine"
                },
                {
                    "item": "gtceu:coal_dust"
                },
                {
                    "item": "minecraft:flint"
                },
                {
                    "item": "botania:rune_earth"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentfastminer"
            },
            "syphon": 500,
            "ticks": 10,
            "upgradeLevel": 2
        })
        //void
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "sophisticatedbackpacks:void_upgrade"
                },
                {
                    "item": "cataclysm:void_eye"
                },
                {
                    "item": "ae2:void_card"
                },
                {
                    "item": "botania:rune_winter"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentvoid"
            },
            "syphon": 2000,
            "ticks": 40,
            "upgradeLevel": 3
        })
        //growth
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "gtceu:fertilizer"
                },
                {
                    "item": "create:tree_fertilizer"
                },
                {
                    "item": "minecraft:bone_meal"
                },
                {
                    "item": "botania:rune_spring"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentgrowth"
            },
            "syphon": 2000,
            "ticks": 40,
            "upgradeLevel": 3
        })
        //holding
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "create:railway_casing"
                },
                {
                    "item": "botania:lens_piston"
                },
                {
                    "item": "minecraft:chest_minecart"
                },
                {
                    "item": "botania:rune_summer"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentholding"
            },
            "syphon": 2000,
            "ticks": 40,
            "upgradeLevel": 3
        })
        //sight
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "minecraft:spyglass"
                },
                {
                    "item": "botania:cosmetic_engineer_goggles"
                },
                {
                    "item": "minecraft:ender_pearl"
                },
                {
                    "item": "botania:rune_autumn"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentsight"
            },
            "syphon": 500,
            "ticks": 40,
            "upgradeLevel": 3
        })
        //magnetism
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "sophisticatedbackpacks:magnet_upgrade"
                },
                {
                    "item": "enderio:electromagnet"
                },
                {
                    "item": "alexscaves:scarlet_magnet"
                },
                {
                    "item": "alexscaves:azure_magnet"
                },
                {
                    "item": "botania:rune_greed"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentmagnetism"
            },
            "syphon": 4000,
            "ticks": 80,
            "upgradeLevel": 4
        })
        //bloodlight
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "tag": "forge:dusts/glowstone"
                },
                {
                    "item": "bloodmagic:tauoil"
                },
                {
                    "item": "botania:terra_sword"
                },
                {
                    "item": "bloodmagic:life_essence_bucket"
                },
                {
                    "item": "botania:rune_wrath"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentbloodlight"
            },
            "syphon": 4000,
            "ticks": 80,
            "upgradeLevel": 4
        })
        //binding
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "bloodmagic:steadfastcrystal"
                },
                {
                    "item": "bloodmagic:corrosivecrystal"
                },
                {
                    "item": "bloodmagic:vengefulcrystal"
                },
                {
                    "item": "bloodmagic:destructivecrystal"
                },
                {
                    "item": "mythicbotany:asgard_rune"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentbinding"
            },
            "syphon": 4000,
            "ticks": 80,
            "upgradeLevel": 4
        })
        //suppression
    event.custom({
            "type": "bloodmagic:alchemytable",
            "input": [{
                    "item": "bloodmagic:teleposer"
                },
                {
                    "item": "bloodmagic:reagentlava"
                },
                {
                    "item": "bloodmagic:reagentwater"
                },
                {
                    "item": "bloodmagic:reagentvoid"
                },
                {
                    "item": "bloodmagic:reagentholding"
                },
                {
                    "item": "bloodmagic:reagentmagnetism"
                }
            ],
            "output": {
                "item": "bloodmagic:reagentsuppression"
            },
            "syphon": 10000,
            "ticks": 160,
            "upgradeLevel": 5
        })
        //teleposition
    event.custom({
        "type": "bloodmagic:alchemytable",
        "input": [{
                "item": "bloodmagic:teleposer"
            },
            {
                "item": "bloodmagic:reagentair"
            },
            {
                "item": "bloodmagic:reagentfastminer"
            },
            {
                "item": "bloodmagic:reagentgrowth"
            },
            {
                "item": "bloodmagic:reagentsight"
            },
            {
                "item": "bloodmagic:reagentbloodlight"
            }
        ],
        "output": {
            "item": "bloodmagic:reagentteleposition"
        },
        "syphon": 10000,
        "ticks": 200,
        "upgradeLevel": 5
    })
})