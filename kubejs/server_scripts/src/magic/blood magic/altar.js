ServerEvents.recipes(event => {
    let remove = ['bloodmagic:blankslate',
        'bloodmagic:sacrificialdagger',
        'bloodmagic:altar',
        'bloodmagic:weakbloodorb',
        'bloodmagic:speedrune',
        'bloodmagic:blankrune'
    ]

    remove.forEach(r => {
        event.remove({ output: r })
    })

    let removeid = ['bloodmagic:altar/air_tool',
        'bloodmagic:altar/fire_tool',
        'bloodmagic:altar/water_tool',
        'bloodmagic:altar/earth_tool',
        'bloodmagic:altar/dusk_tool'
    ]
    removeid.forEach(r => {
        event.remove({ id: r })
    })
    event.remove({ id: 'bloodmagic:altar/slate' })
    event.remove({ id: 'bloodmagic:altar/alchemy_flask' })
    event.remove({ id: 'bloodmagic:altar/weakbloodorb' })
        //blankslate
    event.custom({
            "type": "bloodmagic:altar",
            "altarSyphon": 1000,
            "consumptionRate": 5,
            "drainRate": 5,
            "input": {
                "item": "botania:livingrock"
            },
            "output": {
                "item": "bloodmagic:blankslate"
            },
            "upgradeLevel": 0
        })
        //dagger
    event.custom({
            "type": "mythicbotany:rune_ritual",
            "center": {
                "item": "gtceu:chipped_glass_gem"
            },
            "group": "rune_rituals",
            "inputs": [{
                    "item": "botania:rune_wrath"
                },
                {
                    "item": "botania:rune_greed"
                },
                {
                    "item": "alexscaves:shadow_silk"
                }
            ],
            "mana": 1000000,
            "outputs": [{
                "count": 1,
                "item": "bloodmagic:sacrificialdagger"
            }],
            "runes": [{
                    "consume": true,
                    "rune": {
                        "item": "botania:ender_dagger"
                    },
                    "x": -1,
                    "z": 2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "enderio:dark_steel_sword"
                    },
                    "x": -3,
                    "z": 0
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "alexscaves:desolate_dagger"
                    },
                    "x": -1,
                    "z": -2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "gtceu:rose_gold_knife"
                    },
                    "x": 1,
                    "z": 2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "ars_nouveau:wilden_spike"
                    },
                    "x": 3,
                    "z": 0
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "cataclysm:athame"
                    },
                    "x": 1,
                    "z": -2
                }
            ],
            "special_input": "mythicbotany:wandering_trader",
            "ticks": 200
        })
        //altar
    event.recipes.extendedcrafting.shaped_table('bloodmagic:altar', [
            "     ",
            "A   A",
            "ABBBA",
            "CADAC",
            "EFGFE"
        ], {
            A: 'minecraft:stone_bricks',
            B: 'gtceu:steel_plate',
            C: 'botania:red_quartz',
            D: 'gtceu:aluminium_spring',
            E: 'botania:polished_livingrock',
            F: 'gtceu:small_terra_steel_gear',
            G: 'botania:rune_gluttony'
        })
        //weakbloodorb
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "botania:terrasteel_ingot"
        },
        "output": {
            "item": "bloodmagic:weakbloodorb"
        },
        "upgradeLevel": 0
    })

    event.shaped(
        Item.of('bloodmagic:speedrune', 1), [
            "ABA",
            "CDC",
            "BEB"
        ], {
            A: 'bloodmagic:blankslate',
            B: 'minecraft:stone',
            C: 'bloodmagic:reagentwater',
            D: 'bloodmagic:blankrune',
            E: 'botania:rune_air'
        })
    event.replaceInput({ id: 'bloodmagic:blood_rune_sacrifice' }, 'minecraft:gold_ingot', 'alexscaves:dark_tatters')
    event.replaceInput({ id: 'bloodmagic:blood_rune_self_sacrifice' }, 'minecraft:glowstone_dust', 'botania:rune_autumn')
    event.replaceInput({ id: 'bloodmagic:blood_rune_displacement' }, 'minecraft:water_bucket', 'botania:rune_water')
    event.replaceInput({ id: 'bloodmagic:blood_rune_capacity' }, 'minecraft:bucket', 'gtceu:steel_fluid_cell')
    event.replaceInput({ id: 'bloodmagic:blood_rune_aug_capacity' }, '#forge:obsidian', 'gtceu:dense_obsidian_plate')
    event.replaceInput({ id: 'bloodmagic:blood_rune_aug_capacity' }, 'minecraft:bucket', 'gtceu:stainless_steel_fluid_cell')
    event.replaceInput({ id: 'bloodmagic:blood_rune_charging' }, 'minecraft:glowstone_dust', 'ae2:fluix_dust')
    event.replaceInput({ id: 'bloodmagic:blood_rune_charging' }, 'bloodmagic:demonslate', 'bloodmagic:etherealslate')
    event.shaped(
        Item.of('bloodmagic:blankrune', 1), [
            "AAA",
            "BCB",
            "AAA"
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'bloodmagic:blankslate',
            C: 'botania:livingrock',
        })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 4000,
        "consumptionRate": 5,
        "drainRate": 5,
        "input": {
            "item": "botania:flask"
        },
        "output": {
            "item": "bloodmagic:alchemy_flask",
            "nbt": "{Damage:0}"
        },
        "upgradeLevel": 1
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "ars_nouveau:air_essence"
        },
        "output": {
            "item": "bloodmagic:airscribetool"
        },
        "upgradeLevel": 2
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "ars_nouveau:fire_essence"
        },
        "output": {
            "item": "bloodmagic:firescribetool"
        },
        "upgradeLevel": 2
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "ars_nouveau:water_essence"
        },
        "output": {
            "item": "bloodmagic:waterscribetool"
        },
        "upgradeLevel": 2
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "ars_nouveau:earth_essence"
        },
        "output": {
            "item": "bloodmagic:earthscribetool"
        },
        "upgradeLevel": 2
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "bloodmagic:defaultcrystal"
        },
        "output": {
            "item": "bloodmagic:duskscribetool"
        },
        "upgradeLevel": 3
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 4000,
        "consumptionRate": 40,
        "drainRate": 5,
        "input": {
            "item": "bloodmagic:weak_tau"
        },
        "output": {
            "item": "bloodmagic:strong_tau"
        },
        "upgradeLevel": 3
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 10000,
        "consumptionRate": 100,
        "drainRate": 10,
        "input": {
            "item": "gtceu:solid_machine_casing"
        },
        "output": {
            "item": "ctnhcore:blood_casing"
        },
        "upgradeLevel": 3
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 50000,
        "consumptionRate": 1000,
        "drainRate": 150,
        "input": {
            "item": "bloodmagic:etherealslate"
        },
        "output": {
            "item": "kubejs:endslate"
        },
        "upgradeLevel": 5
    })

    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 5000,
        "consumptionRate": 100,
        "drainRate": 50,
        "input": {
            "item": 'gtceu:hv_sensor'
        },
        "output": {
            "item": 'ctnhcore:boss_summoner'
        },
        "upgradeLevel": 1
    })
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 20000,
        "consumptionRate": 1000,
        "drainRate": 400,
        "input": {
            "item": 'gtceu:luv_sensor'
        },
        "output": {
            "item": 'ctnhcore:advanced_boss_summoner'
        },
        "upgradeLevel": 4
    })
})