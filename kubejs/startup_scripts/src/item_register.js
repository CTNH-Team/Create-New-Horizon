Platform.getInfo('kubejs').name = 'Create: New Horizon'

StartupEvents.registry("item", event => {
    event.create('treated_clay_ball')
    let MAX_ENERGY = 10000000
    event.create('temperature_keeping_device').tag('curios:body')
        .attachCapability(CapabilityBuilder.ENERGY.customItemStack()
            .canReceive(i => true)
            .getEnergyStored( /**@type {Internal.ItemStack}*/ itemStack => {
                if (itemStack.getOrCreateTag().contains("energyStored")) {
                    return itemStack.nbt.getInt("energyStored")
                } else {
                    itemStack.getOrCreateTag().putInt("energyStored", 0)
                    return 0
                }
            })
            .getMaxEnergyStored(i => MAX_ENERGY)
            .receiveEnergy(( /**@type {Internal.ItemStack}*/ item, i, receive) => {
                /** @type {Internal.IEnergyStorage} */
                let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                let received = Math.min(energy.maxEnergyStored - energy.energyStored, i)
                if (!receive && energy.energyStored <= energy.maxEnergyStored) {
                    item.nbt.putInt('energyStored', energy.energyStored + received)
                }
                return received
            })
        )
        //.tooltip('showenergy')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .curioTick(( /**@type {Internal.ItemStack}*/ itemstack, slotcontext) => {
                let energy = itemstack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                let { energyStored, maxEnergyStored } = energy
                if (energyStored > 0) {
                    let energyConsumed = Math.min(energyStored, 60)
                    itemstack.nbt.putInt('energyStored', energyStored - energyConsumed)
                    return true
                }
            })
            .dynamicAttribute(attribute => {
                let energy = attribute.stack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                let { energyStored, maxEnergyStored } = energy
                if (energyStored > 0) {
                    attribute.modify('legendarysurvivaloverhaul:thermal_resistance', 'kubejsthermal_resistance', 20, 'addition')
                }
            })
        )
        .barWidth( /**@type {Internal.ItemStack}*/ item => {
            let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
            return Math.floor(energy.energyStored / energy.maxEnergyStored * 13)
        })
    event.create('broken_temperature_keeping_device').maxDamage(12000).tag('curios:body')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .curioTick(( /**@type {$ItemStack}*/ itemstack, slotcontext) => {
                if (itemstack.damageValue >= 12000) {
                    itemstack.shrink(1)
                }
                itemstack.setDamageValue(itemstack.damageValue + 1)
                return true
            })
            .modifyAttribute('legendarysurvivaloverhaul:thermal_resistance', 'kubejsthermal_resistance', 20, 'addition')
        )
    event.create('double_blaze_cake').burnTime(30000).tooltip("可以吃").food(food => {
        food.alwaysEdible(true)
        food.effect("legendarysurvivaloverhaul:cold_immunity", 36000, 10, 1)
    })
    event.create('deep_diver_gear').tag('curios:belt')
    event.create('thermometer_case')
    event.create('high_quality_solid_fuel').burnTime(4800) //.burntime(16000)
    event.create('unfinished_steel_mechanism')
    event.create('multiblock_helper')
    event.create('metallurgical_catalyst')
    event.create('platinum_metal_catalyst_shard1')
    event.create('platinum_metal_catalyst_shard2')
    event.create('platinum_metal_catalyst')
    event.create('stone_process_catalyst')
    event.create('bauxite_process_catalyst')
    event.create('tallow').burnTime('1600')
    event.create('eye_of_underground_cabin')
        .use(( /**@type {$ServerLevel}*/ level, player, interactionhand) => {
            let item = player.getHeldItem(interactionhand)
            player.startUsingItem(interactionhand)
            if (!level.isClientSide) {
                let pos = level.findNearestMapStructure($TagKey.create($Registry.STRUCTURE_REGISTRY, 'alexscaves:underground_cabin'), player.blockPosition, 100, false)
                if (pos) {
                    let eye = new $EyeOfEnder(level, player.getX(), player.getY(0.5), player.getZ())
                    eye.setItem(item)
                    eye.signalTo(pos)
                    player.swing()
                    eye.spawn()
                    item.shrink(1)
                    level.playSound(null, player.x, player.y, player.z, 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
                    player.swing(interactionhand)
                    return true
                }
            }
            return false
        })
    let tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv']
    tiers.forEach(tier => {
        event.create('circuit_resonatic_' + tier).tag('gtceu:circuits/' + tier)
    })
    let moreTiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    for (let i = 0; i < 15; i++) {
        event.create('general_circuit_' + moreTiers[i]).tag('gtceu:circuits/' + moreTiers[i]).tooltip(GTValues.VNF[i] + '级电路板')
    }
    event.create('crashed_rice')
    event.create('space_fabric')
    event.create('imprinted_resonatic_circuit_board')
    event.create('raw_imprinted_resonatic_circuit_board')
    event.create('echo_processor').tag('gtceu:circuits/zpm')
    event.create('echo_processor_assembly').tag('gtceu:circuits/uv')
    event.create('echo_processor_computer').tag('gtceu:circuits/uhv')
    event.create('echo_processor_mainframe').tag('gtceu:circuits/uev')
    event.create('echo_circuit_board')
    event.create('echo_printed_circuit_board')
    event.create('biological_patch_transistor').tooltip('§a生物电子元件')
    event.create('biological_patch_resistor').tooltip('§a生物电子元件')
    event.create('biological_patch_capacitor').tooltip('§a生物电子元件')
    event.create('biological_patch_diode').tooltip('§a生物电子元件')
    event.create('biological_patch_inductor').tooltip('§a生物电子元件')
    event.create('circuit_board_m_one')
    event.create('circuit_board_m_two')
    event.create('circuit_board_m_three')
    event.create('circuit_board_m_four')
    event.create('rubber_powder')
    event.create('uhv_voltage_coil')
    event.create('mana_lens')
    event.create('elementium_lens')
    event.create("terria_catalyst")
    event.create("encapsulated_twist_mana")
    event.create("yharim").tooltip('你必须§6爱护蜜蜂§r才能激发这个锭的真正力量，哦你已经爱过蜜蜂了')
    event.create('strongly_interacting_neutron_refector').tooltip("硬度超越水滴")
    event.create('constrained_electron_deficient_atom_neutronium')
    event.create('constrained_proton_deficient_atom_neutronium')
    event.create('constrained_proton_deficient_atom_neutronium_broken')
    event.create('constrained_chaos_proton_deficient_atom_neutronium')
    event.create('constrained_unstable_neutronium')
    event.create('adamantite_proton_source')
    event.create('source_of_countless_magical_powers').tooltip("疯狂至极")
    event.create('book_of_ruina').tooltip("一场赞歌摇篮曲")
    event.create('heart_of_flower').tooltip("§2她曾存在过")
    event.create('osmiridium_mechanism').tooltip("集成部件方案")
    event.create('naquadah_mechanism').tooltip("进阶集成部件方案")
    event.create('darmstadtium_mechanism').tooltip("构件动力：永无止进")
    event.create('neutronium_mechanism').tooltip("机械动力：无限构件")
    event.create('clgs_electrode')
    event.create("thermotolerant_dish")
    event.create("kubejs:clgs")
    event.create("measurement_pv_cell")
    event.create("pv_drone_research_1")
    event.create("pv_drone_research_2")
    event.create("pv_drone_research_3")
    event.create("pv_drone_research_4")
    event.create("colorful_soc").tooltip("完美的色彩在此流动")
    event.create("graphite_block_mold")
    event.create('grout_dust')
    event.create('heatproof_smelting_brick_dust')

})
StartupEvents.registry("item", event => {
    event.create("scp_500_base", "basic").food(food => {
        food.alwaysEdible(true)
        food.effect("minecraft:regeneration", 999, 10, 1)
        food.effect("minecraft:resistance", 999, 3, 1)
        food.fastToEat(true)
        food.eaten(ctx => {
            Utils.server.runCommandSilent('title @s title {"text":"你在短时间内你将获得强大的恢复能力","color":"red"}');
        })
    })
    event.create("scp_500", "basic").food(food => {
        food.alwaysEdible(true)
        food.effect("minecraft:regeneration", 999, 10, 1)
        food.effect("minecraft:resistance", 999, 3, 1)
        food.fastToEat(true)
        food.eaten(ctx => {
            Utils.server.runCommandSilent('medical_condition clear @p');
            Utils.server.runCommandSilent('title @s title {"text":"你的所有疾病已被治愈","color":"green"}');
            Utils.server.runCommandSilent('title @s subtitle {"text":"在短时间内你将获得强大的恢复能力","color":"red"}');
        })
    })
})
StartupEvents.registry("block", event => {
    event.create('bronze_casing')
    event.create('steel_casing')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("creat:casing")
        .requiresTool(true)
    event.create('heavy_machinery_casing')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("create:casing")
        .requiresTool(true)
    event.create('iridium_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/iridium_casing")
    event.create('mana_steel_tungstensteel_gearbox_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/mana_steel_tungstensteel_gearbox_casing")
    event.create('sculk_casing')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("creat:casing")
        .requiresTool(true)

})


ItemEvents.modification(event => {
    event.modify('farmersdelight:rice', item => {
        item.setFoodProperties(food => {
            food.eaten(( /**@type {$FoodEatenEventJS}*/ eat) => {
                // if(eat.entity.isPlayer()){
                //     console.info('eat!')
                //     eat.player.addItem('kubejs:crashed_rice')
                // }
                return true
            })
        })
    })
    event.modify('ctnhcore:primary_stew', item => {
        item.setFoodProperties(food => {
            food.eaten(( /**@type {Internal.FoodEatenEventJS}*/ eat) => {
                eat.player.addEffect(new Internal.MobEffectInstance('minecraft:regeneration', 600, 1), true)
                return true
            })
        })
    })
    event.modify('ctnhcore:galaxy_meatball', item => {
        item.setFoodProperties(food => {
            food.eaten(( /**@type {$FoodEatenEventJS}*/ eat) => {
                eat.player.addEffect(new Internal.MobEffectInstance('minecraft:regeneration', 600, 1), true)
                return true
            })
        })
    })
    event.modify('tomeofblood:living_mage_hood', item => {
        item.setArmorProtection(4)
        item.setArmorToughness(3)
    })
    event.modify('tomeofblood:living_mage_robes', item => {
        item.setArmorProtection(9)
        item.setArmorToughness(4)
    })
    event.modify('tomeofblood:living_mage_leggings', item => {
        item.setArmorProtection(7)
        item.setArmorToughness(4)
    })
    event.modify('tomeofblood:living_mage_boots', item => {
        item.setArmorProtection(3)
        item.setArmorToughness(3)
    })
    event.modify('bloodmagic:livinghelmet', item => {
        item.setArmorProtection(3)
        item.setArmorToughness(1)
    })
    event.modify('bloodmagic:livingplate', item => {
        item.setArmorProtection(8)
        item.setArmorToughness(2)
    })
    event.modify('bloodmagic:livingleggings', item => {
        item.setArmorProtection(6)
        item.setArmorToughness(1)
    })
    event.modify('bloodmagic:livinghboots', item => {
            item.setArmorProtection(3)
            item.setArmorToughness(1)
        })
        // event.modify('tetranichematerials:bronnum_armor_helmet', item => {
        //     item.setArmorProtection(2)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:bronnum_armor_chest', item => {
        //     item.setArmorProtection(5)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:bronnum_armor_legs', item => {
        //     item.setArmorProtection(4)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:bronnum_armor_feet', item => {
        //     item.setArmorProtection(2)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:blurine_armor_helmet', item => {
        //     item.setArmorProtection(3)
        //     item.setArmorToughness(1)
        // })
        // event.modify('tetranichematerials:blurine_armor_chest', item => {
        //     item.setArmorProtection(6)
        //     item.setArmorToughness(1)
        //     item.addAttribute('attributeslib:cold_damage',
        //         '70195e7a-005a-471a-bd26-3fd6d331676d',
        //         'kubejscolddamage',
        //         2,
        //         'addition')
        // })
        // event.modify('tetranichematerials:blurine_armor_legs', item => {
        //     item.setArmorProtection(4)
        //     item.setArmorToughness(1)
        // })
        // event.modify('tetranichematerials:blurine_armor_feet', item => {
        //     item.setArmorProtection(2)
        //     item.setArmorToughness(1)
        // })
        // event.modify('tetranichematerials:lockwood_armor_chest', item => {
        //     item.setArmorProtection(7)
        //     item.addAttribute('minecraft:generic.max_health',
        //         '03B9249B-929A-42AE-84F2-AD0DEBDCB3AB',
        //         'kubejsmaxhealth',
        //         4,
        //         'addition')
        // })
        // event.modify('tetranichematerials:lockwood_armor_legs', item => {
        //     item.setArmorProtection(5)
        //     item.addAttribute('forge:swim_speed',
        //         'c6953671-9091-479f-a9ef-cc528e7af16f',
        //         'kubejsswimspeed',
        //         0.5,
        //         'addition')
        // })
    event.modify('twilightforest:fiery_helmet', item => {
        item.setArmorProtection(3)
    })
    event.modify('twilightforest:fiery_chestplate', item => {
        item.setArmorProtection(7)
    })
    event.modify('twilightforest:fiery_leggings', item => {
        item.setArmorProtection(5)
    })
    event.modify('twilightforest:fiery_boots', item => {
        item.setArmorProtection(3)
    })
    event.modify('tetranichematerials:burning_steel_armor_helmet', item => {
        item.setArmorProtection(4)
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
            '98d68242-a5bc-40a2-8b3a-cbaa87cc27c9',
            'kubejscolddampening',
            0.1,
            'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_chest', item => {
        item.setArmorProtection(8)
        item.addAttribute('attributeslib:fire_damage',
            '677245f7-3954-466a-a014-97b13af63aa7',
            'kubejsfiredamage',
            2,
            'addition')
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
            '683cbb1f-eb71-45e8-941e-a01805c9d773',
            'kubejscolddampening',
            0.1,
            'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_legs', item => {
        item.setArmorProtection(6)
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
            'e6988b1d-b44c-4b49-8ab4-3a6df3bfd4ee',
            'kubejscolddampening',
            0.1,
            'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_feet', item => {
        item.setArmorProtection(4)
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
            '3470aaa2-397d-4f18-83ad-98c1bc2019e6',
            'kubejscolddampening',
            0.1,
            'addition')
    })
})