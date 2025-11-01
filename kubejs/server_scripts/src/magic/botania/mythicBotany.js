ServerEvents.recipes(event => {
    function infuser(event, input, output, mana) {
        event.custom({
            "type": "mythicbotany:infuser",
            "fromColor": 255,
            "group": "infuser",
            "ingredients": input.map(item => {
                return Item.of(item).toJson()
            }),
            "mana": mana,
            "output": Item.of(output).toJson(),
            "toColor": 65280
        })
    }
    infuser(event, ['botania:manasteel_ingot', 'botania:mana_pearl', 'botania:mana_diamond', 'botania:rune_mana'], 'botania:terrasteel_ingot', 500000)
    infuser(event, ['kubejs:advanced_mana_transistor', 'kubejs:advanced_mana_capacitor', 'kubejs:advanced_mana_inductor', 'gtceu:advanced_integrated_circuit', 'kubejs:elementium_cpu_chip'], 'kubejs:mana_integrated_circuit', 250000)
    infuser(event, ['gtceu:simple_soc', 'botania:mana_diamond', 'botania:rune_mana'], 'kubejs:mana_soc', 50000)
    infuser(event, ['gtceu:mana_unstable_plus_dust', 'botania:rune_mana', 'mythicbotany:asgard_rune'], 'gtceu:mana_infused_plus_dust', 50000)
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 255,
        "group": "infuser",
        "ingredients": [{
                "item": "botania:manasteel_ingot"
            },
            {
                "item": "botania:mana_pearl"
            },
            {
                "tag": "botania:mana_diamond_gems"
            },
            {
                "item": "botania:rune_mana"
            }
        ],
        "mana": 500000,
        "output": {
            "count": 1,
            "item": "botania:terrasteel_ingot"
        },
        "toColor": 65280
    }).id('mythicbotany:mythicbotany_infusion/terrasteel_ingot')
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 16711821,
        "group": "infuser",
        "ingredients": [{
                "item": "botania:elementium_ingot"
            },
            {
                "tag": "botania:dragonstone_gems"
            },
            {
                "item": "botania:pixie_dust"
            },
            {
                "item": "botania:quartz_elven"
            },
            {
                "item": "botania:elf_glass"
            }
        ],
        "mana": 1500000,
        "output": {
            "count": 1,
            "item": "mythicbotany:alfsteel_ingot"
        },
        "toColor": 16750080
    }).id('mythicbotany:mythicbotany_infusion/alfsteel_ingot')

    event.custom({
            "type": "mythicbotany:rune_ritual",
            "center": {
                "item": "botania:gaia_ingot"
            },
            "group": "rune_rituals",
            "inputs": [{
                    "item": "mythicbotany:vanaheim_rune"
                },
                {
                    "item": "mythicbotany:alfheim_rune"
                },
                {
                    "item": "mythicbotany:niflheim_rune"
                }
            ],
            "mana": 1000000,
            "outputs": [{
                "count": 1,
                "item": "mythicbotany:mana_collector"
            }],
            "runes": [{
                    "consume": true,
                    "rune": {
                        "item": "botania:dragonstone"
                    },
                    "x": 2,
                    "z": 2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:dragonstone"
                    },
                    "x": 2,
                    "z": -2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:dragonstone"
                    },
                    "x": -2,
                    "z": 2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:dragonstone"
                    },
                    "x": -2,
                    "z": -2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": 1,
                    "z": 4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": 1,
                    "z": -4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": -1,
                    "z": 4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": -1,
                    "z": -4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": 4,
                    "z": 0
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": 4,
                    "z": 1
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": 4,
                    "z": -1
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": -4,
                    "z": 0
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": -4,
                    "z": 1
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": -4,
                    "z": -1
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": 0,
                    "z": 4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:glimmering_dreamwood"
                    },
                    "x": 0,
                    "z": -4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": 2,
                    "z": 3
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": 3,
                    "z": 2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": 3,
                    "z": -2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": 2,
                    "z": -3
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": -3,
                    "z": -2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": -2,
                    "z": -3
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": -3,
                    "z": 2
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:pixie_dust"
                    },
                    "x": -2,
                    "z": 3
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "bloodmagic:reagentmagnetism"
                    },
                    "x": 4,
                    "z": 4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "bloodmagic:reagentmagnetism"
                    },
                    "x": 4,
                    "z": -4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "bloodmagic:reagentmagnetism"
                    },
                    "x": -4,
                    "z": 4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "bloodmagic:reagentmagnetism"
                    },
                    "x": -4,
                    "z": -4
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:spark"
                    },
                    "x": 5,
                    "z": 0
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:spark"
                    },
                    "x": -5,
                    "z": 0
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:light_relay"
                    },
                    "x": 0,
                    "z": 5
                },
                {
                    "consume": true,
                    "rune": {
                        "item": "botania:light_relay"
                    },
                    "x": 0,
                    "z": -5
                }
            ],
            "ticks": 200
        })
        .id('mythicbotany:mana_collector')
    event.custom({
            type: "mythicbotany:rune_ritual",
            "center": {
                "item": 'mythicbotany:midgard_rune'
            },
            "group": "rune_rituals",
            "inputs": [{
                    "item": 'gtceu:zenith_essence_bucket'
                },
                {
                    "item": 'gtceu:zenith_essence_bucket'
                },
                {
                    "item": 'gtceu:zenith_essence_bucket'
                }
            ],
            "mana": 500000,
            "outputs": [{
                "count": 1,
                "item": 'ctnhcore:horizen_rune'
            }],
            "runes": [{
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 5,
                    "z": 0

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 5,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 5,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": -5,
                    "z": 0

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": -5,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": -5,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 5,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 0,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 1,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": -1,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": -1,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 0,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": 1,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_eye'
                    },
                    "x": -1,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:mana_plus_ingot'
                    },
                    "x": 2,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:mana_plus_ingot'
                    },
                    "x": 2,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:mana_plus_ingot'
                    },
                    "x": -2,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:mana_plus_ingot'
                    },
                    "x": -2,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'botania:rune_pride'
                    },
                    "x": 3,
                    "z": 2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'botania:rune_pride'
                    },
                    "x": 4,
                    "z": 2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:niflheim_rune'
                    },
                    "x": 3,
                    "z": -2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:niflheim_rune'
                    },
                    "x": 4,
                    "z": -2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'botania:rune_lust'
                    },
                    "x": -4,
                    "z": 2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'botania:rune_lust'
                    },
                    "x": -3,
                    "z": 2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:muspelheim_rune'
                    },
                    "x": -3,
                    "z": -2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:muspelheim_rune'
                    },
                    "x": -4,
                    "z": -2

                },
            ],
            "ticks": 200
        }

    ).id('ctnh:horizen_rune')
    event.custom({
            type: "mythicbotany:rune_ritual",
            "center": {
                "item": 'gtceu:quantum_star'
            },
            "group": "rune_rituals",
            "inputs": [{
                    "item": 'gtceu:zenith_essence_bucket'
                },
                {
                    "item": 'gtceu:zenith_essence_bucket'
                },
                {
                    "item": 'gtceu:zenith_essence_bucket'
                }
            ],
            "mana": 500000,
            "outputs": [{
                "count": 1,
                "item": 'ctnhcore:starlight_rune'
            }],
            "runes": [{
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -1,
                    "z": 0

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -2,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -2,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -3,
                    "z": 2

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -3,
                    "z": -2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -4,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -4,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:mars_stone'
                    },
                    "x": -5,
                    "z": 0

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:moon_cobblestone'
                    },
                    "x": -2,
                    "z": 0

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:moon_cobblestone'
                    },
                    "x": -3,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:moon_cobblestone'
                    },
                    "x": -3,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ad_astra:moon_cobblestone'
                    },
                    "x": -4,
                    "z": -0

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_star'
                    },
                    "x": -3,
                    "z": 0

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'deep_aether:sterling_aercloud'
                    },
                    "x": 0,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'deep_aether:sterling_aercloud'
                    },
                    "x": -1,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'deep_aether:sterling_aercloud'
                    },
                    "x": 1,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'deep_aether:sterling_aercloud'
                    },
                    "x": 0,
                    "z": -5

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_star'
                    },
                    "x": 0,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'twilightforest:hollow_oak_sapling'
                    },
                    "x": 0,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'twilightforest:hollow_oak_sapling'
                    },
                    "x": 1,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'twilightforest:hollow_oak_sapling'
                    },
                    "x": -1,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'twilightforest:hollow_oak_sapling'
                    },
                    "x": 0,
                    "z": 5

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:quantum_star'
                    },
                    "x": 0,
                    "z": 4

                },

            ],
            "ticks": 200
        }

    ).id('ctnh:starlight_rune')
    event.custom({
            type: "mythicbotany:rune_ritual",
            "center": {
                "item": 'kubejs:endslate'
            },
            "group": "rune_rituals",
            "inputs": [{
                    "item": 'gtceu:zenith_essence_bucket'
                },
                {
                    "item": 'gtceu:zenith_essence_bucket'
                },
                {
                    "item": 'gtceu:zenith_essence_bucket'
                }
            ],
            "mana": 500000,
            "outputs": [{
                "count": 1,
                "item": 'ctnhcore:twist_rune'
            }],
            "runes": [{
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:ingot_hellforged'
                    },
                    "x": -5,
                    "z": 0

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:ingot_hellforged'
                    },
                    "x": -4,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:ingot_hellforged'
                    },
                    "x": -4,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune'
                    },
                    "x": -3,
                    "z": -2

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune'
                    },
                    "x": -4,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune'
                    },
                    "x": -3,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune'
                    },
                    "x": -4,
                    "z": -5

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune'
                    },
                    "x": -3,
                    "z": -6

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune2'
                    },
                    "x": -3,
                    "z": 2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune2'
                    },
                    "x": -4,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune2'
                    },
                    "x": -3,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune2'
                    },
                    "x": -4,
                    "z": 5

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'bloodmagic:speedrune2'
                    },
                    "x": -3,
                    "z": 6

                },


            ],
            "ticks": 200
        }

    ).id('ctnhcore:twist_rune')
    event.custom({
            type: "mythicbotany:rune_ritual",
            "center": {
                "item": 'gtceu:gravi_star'
            },
            "group": "rune_rituals",
            "inputs": [{
                    "item": 'gtceu:ultra_mana_ingot'
                },
                {
                    "item": 'gtceu:ultra_mana_ingot'
                },
                {
                    "item": 'gtceu:ultra_mana_ingot'
                }
            ],
            "mana": 1000000,
            "outputs": [{
                "count": 1,
                "item": 'ctnhcore:quasar_rune'
            }],
            "runes": [{
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:neutronium_block'
                    },
                    "x": -1,
                    "z": 1

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'gtceu:neutronium_block'
                    },
                    "x": 1,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ctnhcore:proliferation_rune'
                    },
                    "x": -3,
                    "z": 0

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ctnhcore:twist_rune'
                    },
                    "x": 3,
                    "z": 0

                }, {
                    "consume": true,
                    "rune": {
                        "item": 'ctnhcore:starlight_rune'
                    },
                    "x": 0,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ctnhcore:horizen_rune'
                    },
                    "x": 0,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": -2,
                    "z": 2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": -2,
                    "z": -2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": 2,
                    "z": 2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": 2,
                    "z": -2

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": -3,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": -3,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": 3,
                    "z": 1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2omnicells:complex_omni_cell_component_64m'
                    },
                    "x": 3,
                    "z": -1

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2:singularity'
                    },
                    "x": -1,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2:singularity'
                    },
                    "x": -1,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2:singularity'
                    },
                    "x": 1,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'ae2:singularity'
                    },
                    "x": 1,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:alfheim_rune'
                    },
                    "x": -3,
                    "z": 3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:joetunheim_rune'
                    },
                    "x": -4,
                    "z": 4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:nidavellir_rune'
                    },
                    "x": -5,
                    "z": 5

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:asgard_rune'
                    },
                    "x": 3,
                    "z": -3

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:midgard_rune'
                    },
                    "x": 4,
                    "z": -4

                },
                {
                    "consume": true,
                    "rune": {
                        "item": 'mythicbotany:vanaheim_rune'
                    },
                    "x": 5,
                    "z": -5

                },


            ],
            "ticks": 200
        }

    ).id('ctnhcore:quasar_rune')
    event.replaceInput({}, 'mythicbotany:alfsteel_ingot', 'mythicbotany:alfsteel_ingot')
    event.replaceOutput({}, 'mythicbotany:alfsteel_ingot', 'mythicbotany:alfsteel_ingot')
})