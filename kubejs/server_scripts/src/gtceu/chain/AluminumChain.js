ServerEvents.recipes(event => {
    //原产线配方移除
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_green_sapphire' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_sapphire' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ruby' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_pyrope' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_granite_red' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_potassium_feldspar' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_pollucite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_kyanite' })
    event.remove({ id: 'gtceu:electrolyzer/bauxite_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_topaz' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_spodumene' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_spessartine' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_sodalite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_mica' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_lepidolite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_lazurite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_grossular' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_glauconite_sand' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_emerald' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_blue_topaz' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_biotite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_alunite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_almandine' })
        //所有副产为铝粉的配方改为副产氧化铝粉
    // event.replaceOutput({
    //     output: 'gtceu:aluminium_dust',
    //     type: 'gtceu:centrifuge',
    //     not: {
    //         or: [
    //             { id: 'gtceu:centrifuge/decomposition_centrifuging__cobalt_brass' },
    //             { id: 'gtceu:centrifuge/decomposition_centrifuging__kanthal' },
    //             { id: 'gtceu:centrifuge/sapphire_slurry_centrifuging' },
    //             { id: 'gtceu:centrifuge/ruby_slurry_centrifuging' },
    //             { id: 'gtceu:centrifuge/centrifuge_aluminium_pure_dust_to_dust' },
    //             { id: 'gtceu:centrifuge/green_sapphire_slurry_centrifuging' },
    //             { id: 'gtceu:centrifuge/decomposition_centrifuging__incoloy_ma_956' },
    //             { id: 'gtceu:centrifuge/decomposition_centrifuging__maraging_steel_300' }
    //         ]
    //     }
    // }, 'gtceu:aluminium_dust', 'gtceu:alumina_dust')

    // event.replaceOutput({
    //     output: 'gtceu:aluminium_dust',
    //     type: 'gtceu:ore_washer',
    //     not: {
    //         or: [
    //             { id: 'gtceu:ore_washer/wash_aluminium_dirty_dust_to_dust' },
    //             { id: 'gtceu:ore_washer/wash_aluminium_pure_dust_to_dust' }
    //         ]
    //     }
    // }, 'gtceu:aluminium_dust', 'gtceu:alumina_dust')
    // event.replaceOutput({ output: 'gtceu:aluminium_dust', type: 'gtceu:thermal_centrifuge' }, 'gtceu:aluminium_dust', 'gtceu:alumina_dust')
    // event.replaceOutput({
    //         output: 'gtceu:aluminium_dust',
    //         type: 'gtceu:macerator',
    //         or: [
    //             { id: 'gtceu:macerator/macerate_zeolite_refined_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_fullers_earth_crushed_ore_to_impure_dust' },
    //             { id: 'gtceu:macerator/macerate_deepslate_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_netherrack_fullers_earth_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_raw_bentonite_ore_to_crushed_ore' },
    //             { id: 'gtceu:macerator/macerate_endstone_fullers_earth_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_raw_fullers_earth_ore_to_crushed_ore' },
    //             { id: 'gtceu:macerator/macerate_emerald_crushed_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_glauconite_sand_crushed_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_sapphire_crushed_ore_to_impure_dust' },
    //             { id: 'gtceu:macerator/macerate_deepslate_green_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_raw_spodumene_ore_to_crushed_ore' },
    //             { id: 'gtceu:macerator/macerate_green_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_netherrack_spodumene_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_bentonite_crushed_ore_to_impure_dust' },
    //             { id: 'gtceu:macerator/macerate_mica_refined_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_deepslate_fullers_earth_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_endstone_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_endstone_spodumene_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_netherrack_bentonite_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_bentonite_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_almandine_crushed_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_raw_green_sapphire_ore_to_crushed_ore' },
    //             { id: 'gtceu:macerator/macerate_pollucite_crushed_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_deepslate_spodumene_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_deepslate_bentonite_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_deepslate_bentonite_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_netherrack_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_emerald_refined_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_fullers_earth_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_raw_sapphire_ore_to_crushed_ore' },
    //             { id: 'gtceu:macerator/macerate_aluminium_refined_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_spodumene_crushed_ore_to_impure_dust' },
    //             { id: 'gtceu:macerator/macerate_mica_crushed_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_kyanite_crushed_ore_to_dust' },
    //             { id: 'gtceu:macerator/macerate_green_sapphire_crushed_ore_to_impure_dust' },
    //             { id: 'gtceu:macerator/macerate_spodumene_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_endstone_green_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_endstone_bentonite_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_netherrack_green_sapphire_ore_to_raw_ore' },
    //             { id: 'gtceu:macerator/macerate_almandine_refined_ore_to_dust' }
    //         ]
    //     }, 'gtceu:aluminium_dust', 'gtceu:alumina_dust')
        //宝石粉处理
    event.recipes.gtceu.centrifuge('electrolyzing_green_sapphire') //绿色蓝宝石
        .EUt(480)
        .duration(100)
        .itemInputs("5x gtceu:green_sapphire_dust")
        .itemOutputs('5x gtceu:alumina_dust')
        .chancedOutput('gtceu:tiny_beryllium_dust', 500, 0)
    event.recipes.gtceu.centrifuge('electrolyzing_sapphire') //蓝宝石
        .EUt(480)
        .duration(100)
        .itemInputs("5x gtceu:sapphire_dust")
        .itemOutputs('5x gtceu:alumina_dust')
    event.recipes.gtceu.centrifuge('electrolyzing_ruby') //红宝石
        .EUt(480)
        .duration(100)
        .itemInputs("6x gtceu:ruby_dust")
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('gtceu:chromium_oxide_dust')
    event.recipes.gtceu.electrolyzer('electrolyzing_pyrope') //镁铝榴石
        .EUt(120)
        .duration(200)
        .itemInputs('20x gtceu:pyrope_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('9x gtceu:silicon_dioxide_dust')
        .itemOutputs('3x gtceu:magnesium_dust')
        .outputFluids('gtceu:oxygen 3000')
    event.recipes.gtceu.electrolyzer('electrolyzing_granite_red') //红花岗岩
        .EUt(120)
        .duration(60)
        .itemInputs('6x gtceu:granite_red_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('gtceu:potassium_feldspar_dust')
    event.recipes.gtceu.electrolyzer('electrolyzing_potassium_feldspar') //钾长石粉
        .EUt(120)
        .duration(220)
        .itemInputs('22x gtceu:potassium_feldspar_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('6x gtceu:silicon_dioxide_dust')
        .itemOutputs('2x gtceu:potassium_dust')
        .outputFluids('gtceu:oxygen 11000')
    event.recipes.gtceu.electrolyzer('electrolyzing_pollucite') //铯榴石粉
        .EUt(120)
        .duration(286)
        .itemInputs('22x gtceu:pollucite_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('12x gtceu:silicon_dioxide_dust')
        .itemOutputs('2x gtceu:caesium_dust')
        .outputFluids('minecraft:water 2000')
        .outputFluids('gtceu:oxygen 1000')
    event.recipes.gtceu.electrolyzer('electrolyzing_kyanite') //蓝晶石粉
        .EUt(120)
        .duration(80)
        .itemInputs('8x gtceu:kyanite_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('3x gtceu:silicon_dioxide_dust')
    event.recipes.gtceu.electrolyzer('electrolyzing_spodumene') //锂辉石粉
        .EUt(120)
        .duration(180)
        .itemInputs('20x gtceu:spodumene_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('12x gtceu:silicon_dioxide_dust')
        .itemOutputs('2x gtceu:lithium_dust')
        .outputFluids('gtceu:oxygen 1000')
    event.recipes.gtceu.electrolyzer('electrolyzing_spessartine') //锰铝榴石粉
        .EUt(120)
        .duration(220)
        .itemInputs('20x gtceu:spessartine_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('9x gtceu:silicon_dioxide_dust')
        .itemOutputs('3x gtceu:manganese_dust')
        .outputFluids('gtceu:oxygen 3000')
    event.recipes.gtceu.electrolyzer('electrolyzing_mica') //云母粉
        .EUt(120)
        .duration(380)
        .itemInputs('38x gtceu:mica_dust')
        .itemOutputs('15x gtceu:alumina_dust')
        .itemOutputs('18x gtceu:silicon_dioxide_dust')
        .itemOutputs('2x gtceu:potassium_dust')
        .outputFluids('gtceu:fluorine 4000')
    event.recipes.gtceu.electrolyzer('electrolyzing_lepidolite') //锂云母粉
        .EUt(120)
        .duration(160)
        .itemInputs('20x gtceu:lepidolite_dust')
        .itemOutputs('10x gtceu:alumina_dust')
        .itemOutputs('3x gtceu:lithium_dust')
        .itemOutputs('1x gtceu:potassium_dust')
        .outputFluids('gtceu:oxygen 4000')
        .outputFluids('gtceu:fluorine 2000')
    event.recipes.gtceu.electrolyzer('electrolyzing_grossular') //钙铝榴石粉
        .EUt(120)
        .duration(220)
        .itemInputs('20x gtceu:grossular_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('9x gtceu:silicon_dioxide_dust')
        .itemOutputs('3x gtceu:calcium_dust')
        .outputFluids('gtceu:oxygen 3000')
    event.recipes.gtceu.electrolyzer('electrolyzing_glauconite_sand') //海绿石砂粉
        .EUt(120)
        .duration(220)
        .itemInputs('21x gtceu:glauconite_sand_dust')
        .itemOutputs('10x gtceu:alumina_dust')
        .itemOutputs('2x gtceu:manganese_dust')
        .itemOutputs('1x gtceu:potassium_dust')
        .outputFluids('gtceu:oxygen 6000')
        .outputFluids('gtceu:hydrogen 2000')
    event.recipes.gtceu.electrolyzer('electrolyzing_emerald') //绿宝石粉
        .EUt(120)
        .duration(261)
        .itemInputs('29x gtceu:emerald_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('18x gtceu:silicon_dioxide_dust')
        .itemOutputs('3x gtceu:beryllium_dust')
        .outputFluids('gtceu:oxygen 3000')
    event.recipes.gtceu.electrolyzer('electrolyzing_blue_topaz') //蓝黄玉粉
        .EUt(120)
        .duration(104)
        .itemInputs('13x gtceu:blue_topaz_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('3x gtceu:silicon_dioxide_dust')
        .outputFluids('gtceu:oxygen 1000')
        .outputFluids('gtceu:hydrogen 2000')
        .outputFluids('gtceu:fluorine 2000')
    event.recipes.gtceu.electrolyzer('electrolyzing_biotite') //黑云母粉
        .EUt(120)
        .duration(440)
        .itemInputs('44x gtceu:biotite_dust')
        .itemOutputs('15x gtceu:alumina_dust')
        .itemOutputs('18x gtceu:lithium_dust')
        .itemOutputs('2x gtceu:potassium_dust')
        .itemOutputs('6x gtceu:manganese_dust')
        .outputFluids('gtceu:fluorine 4000')
    event.recipes.gtceu.electrolyzer('electrolyzing_alunite') //明矾石粉
        .EUt(120)
        .duration(520)
        .itemInputs('52x gtceu:alunite_dust')
        .itemOutputs('15x gtceu:alumina_dust')
        .itemOutputs('12x gtceu:lithium_dust')
        .itemOutputs('2x gtceu:potassium_dust')
        .outputFluids('gtceu:oxygen 11000')
        .outputFluids('gtceu:hydrogen 12000')
    event.recipes.gtceu.electrolyzer('electrolyzing_almandine') //铁铝榴石粉
        .EUt(120)
        .duration(200)
        .itemInputs('20x gtceu:almandine_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('9x gtceu:silicon_dioxide_dust')
        .itemOutputs('3x gtceu:iron_dust')
        .outputFluids('gtceu:oxygen 3000')

    //直接电解（高电压）
    event.recipes.gtceu.electrolyzer('electrolyzing_topaz') //黄玉粉
        .EUt(1920)
        .duration(200)
        .itemInputs('6x gtceu:topaz_dust')
        .itemOutputs('2x gtceu:aluminium_dust')
        .itemOutputs('gtceu:silicon_dust')
        .outputFluids('gtceu:hydrogen 2000')
        .outputFluids('gtceu:fluorine 1000')
    event.recipes.gtceu.electrolyzer('electrolyzing_sodalite') //方纳石粉
        .EUt(1920)
        .duration(390)
        .itemInputs('11x gtceu:sodalite_dust')
        .itemOutputs('3x gtceu:aluminium_dust')
        .itemOutputs('3x gtceu:silicon_dust')
        .itemOutputs('4x gtceu:sodium_dust')
        .outputFluids('gtceu:chlorine 1000')
    event.recipes.gtceu.electrolyzer('electrolyzing_lazurite') //蓝金石粉
        .EUt(1920)
        .duration(460)
        .itemInputs('14x gtceu:lazurite_dust')
        .itemOutputs('3x gtceu:aluminium_dust')
        .itemOutputs('3x gtceu:silicon_dust')
        .itemOutputs('4x gtceu:sodium_dust')
        .itemOutputs('4x gtceu:calcium_dust')
    event.recipes.gtceu.electrolyzer('electrolyzing_clay')
        .EUt(120)
        .duration(182)
        .itemInputs("gtceu:clay_dust")
        .itemOutputs('2x gtceu:sodium_dust')
        .itemOutputs('gtceu:lithium_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .itemOutputs('6x gtceu:silicon_dioxide_dust')
        .outputFluids(Fluid.of('minecraft:water', 6000))
        //氧化铝电解
    event.recipes.gtceu.electrolyzer('alumina_electrolyse')
        .duration(200)
        .EUt(30)
        .itemInputs('10x gtceu:alumina_dust')
        .inputFluids('gtceu:sodium_hexafluoroaluminate 1000')
        .outputFluids('gtceu:oxygen 6000')
        .itemOutputs('4x gtceu:aluminium_dust')
        .itemOutputs('6x gtceu:sodium_fluoride_dust')
        .itemOutputs('4x gtceu:aluminium_trifluoride_dust')
    event.recipes.gtceu.electrolyzer('alumina_electrolyse2')
        .duration(400)
        .EUt(480)
        .itemInputs('10x gtceu:alumina_dust')
        .itemOutputs('4x gtceu:aluminium_dust')
        .outputFluids('gtceu:oxygen 6000')
        .circuit(0)
        //六氟铝酸钠合成
    event.recipes.gtceu.chemical_reactor('sodium_hexafluoroaluminate')
        .duration(400)
        .EUt(120)
        .itemInputs('18x gtceu:sodium_hydroxide_dust')
        .itemInputs('5x gtceu:alumina_dust')
        .inputFluids('gtceu:hydrofluoric_acid 12000')
        .outputFluids('gtceu:sodium_hexafluoroaluminate 2000')
        .outputFluids('minecraft:water 9000')
    event.recipes.gtceu.large_chemical_reactor('sodium_hexafluoroaluminate')
        .duration(400)
        .EUt(120)
        .itemInputs('18x gtceu:sodium_hydroxide_dust')
        .itemInputs('5x gtceu:alumina_dust')
        .inputFluids('gtceu:hydrofluoric_acid 12000')
        .outputFluids('gtceu:sodium_hexafluoroaluminate 2000')
        .outputFluids('minecraft:water 9000')
    event.recipes.gtceu.extractor('sodium_hexafluoroaluminate3')
        .duration(100)
        .EUt(30)
        .itemInputs('10x gtceu:cryolite_dust')
        .outputFluids('gtceu:sodium_hexafluoroaluminate 1000')
        //六氟铝酸钠回收
    event.recipes.gtceu.chemical_reactor('sodium_hexafluoroaluminate2')
        .duration(200)
        .EUt(120)
        .itemInputs('6x gtceu:sodium_fluoride_dust')
        .itemInputs('4x gtceu:aluminium_trifluoride_dust')
        .outputFluids('gtceu:sodium_hexafluoroaluminate 1000')
        //矿粉用氢氧化钠浸泡
    event.recipes.gtceu.mixer('bauxite_process')
        .duration(80)
        .EUt(30)
        .inputFluids('gtceu:sodium_hydroxide_solution 8000')
        .itemInputs('13x gtceu:bauxite_dust')
        .outputFluids('gtceu:sodium_hydroxide_bauxite 8000')
    event.recipes.gtceu.mixer('sodium_hydroxide_solution')
        .circuit(0)
        .duration(200)
        .EUt(120)
        .itemInputs('3x gtceu:sodium_hydroxide_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:sodium_hydroxide_solution 1000')
        //含杂氢氧化铝溶液
    event.recipes.gtceu.fluid_heater('impure_aluminum_hydroxide_solution')
        .duration(30)
        .EUt(30)
        .inputFluids('gtceu:sodium_hydroxide_bauxite 1000')
        .outputFluids('gtceu:impure_aluminium_hydroxide_solution 1000')
        .circuit(1)
        //氯化铝变氢氧化铝
    event.recipes.gtceu.electric_blast_furnace("aluminium_process1s")
        .itemInputs('4x gtceu:aluminium_chloride_dust')
        .inputFluids("minecraft:water 1500")
        .itemOutputs('7x gtceu:aluminium_hydroxide_dust')
        .outputFluids("gtceu:hydrochloric_acid 3000")
        .blastFurnaceTemp(900)
        .EUt(96)
        .duration(40)
        //纯净氢氧化铝溶液
    event.recipes.gtceu.chemical_reactor('red_mud')
        .duration(230)
        .EUt(120)
        .inputFluids('minecraft:water 9000')
        .inputFluids('gtceu:impure_aluminium_hydroxide_solution 24000')
        .outputFluids('gtceu:red_mud 8000')
        .outputFluids('gtceu:pure_aluminium_hydroxide_solution 16000')
    event.recipes.gtceu.large_chemical_reactor('red_mud')
        .duration(230)
        .EUt(120)
        .inputFluids('minecraft:water 9000')
        .inputFluids('gtceu:impure_aluminium_hydroxide_solution 24000')
        .outputFluids('gtceu:red_mud 8000')
        .outputFluids('gtceu:pure_aluminium_hydroxide_solution 16000')
        //氢氧化铝粉
    event.recipes.gtceu.centrifuge('aluminum_hydroxide_dust')
        .duration(240)
        .EUt(120)
        .inputFluids('gtceu:pure_aluminium_hydroxide_solution 1000')
        .itemOutputs('14x gtceu:aluminium_hydroxide_dust')
    event.recipes.gtceu.centrifuge('aluminium_hydroxide_dust')
        .duration(240)
        .EUt(240)
        .notConsumable('gtceu:aluminium_hydroxide_dust')
        .inputFluids('gtceu:pure_aluminium_hydroxide_solution 4000')
        .itemOutputs('56x gtceu:aluminium_hydroxide_dust')
        //
    event.recipes.gtceu.electric_blast_furnace('alumina')
        .EUt(120)
        .duration(200)
        .blastFurnaceTemp(1100)
        .itemInputs('14x gtceu:aluminium_hydroxide_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .outputFluids('minecraft:water 3000')
        //中和赤泥
    event.recipes.gtceu.mixer('neutralised_red_mud')
        .duration(100)
        .EUt(120)
        .inputFluids('gtceu:red_mud 1000')
        .inputFluids('gtceu:hydrochloric_acid 4500')
        .outputFluids('gtceu:neutralised_red_mud 2000')
        //赤泥浆液
    event.recipes.gtceu.centrifuge('red_slurry')
        .duration(100)
        .EUt(120)
        .inputFluids('gtceu:neutralised_red_mud 2000')
        .outputFluids('gtceu:red_slurry 1000')
        .outputFluids('gtceu:ferric_ree_chloride 1000')
        .outputFluids('gtceu:salt_water 6000')
        //含稀土氯化铁
    event.recipes.gtceu.centrifuge('ferric_fee_chloride')
        .duration(320)
        .EUt(480)
        .inputFluids('gtceu:ferric_ree_chloride 2000')
        .outputFluids('gtceu:rare_earth_chloride_solution 1000')
        .outputFluids('gtceu:iron_iii_chloride 1000')
        .outputFluids('minecraft:water 3000')
        //硫酸钛酯
    event.recipes.gtceu.chemical_reactor('titanyl_sulfate')
        .duration(160)
        .EUt(120)
        .inputFluids('gtceu:red_slurry 2000')
        .inputFluids('gtceu:sulfuric_acid 2000')
        .outputFluids('gtceu:titanyl_sulfate 2000')
        .outputFluids('minecraft:water 2000')
    event.recipes.gtceu.large_chemical_reactor('titanyl_sulfate')
        .duration(160)
        .EUt(120)
        .inputFluids('gtceu:red_slurry 2000')
        .inputFluids('gtceu:sulfuric_acid 2000')
        .outputFluids('gtceu:titanyl_sulfate 2000')
        .outputFluids('minecraft:water 2000')
        //四氯化钛
    event.recipes.gtceu.chemical_reactor('titanium_tetrachloride')
        .duration(160)
        .EUt(960)
        .inputFluids('gtceu:titanyl_sulfate 1000')
        .inputFluids('gtceu:hydrochloric_acid 4000')
        .outputFluids('gtceu:titanium_tetrachloride 1000')
        .outputFluids('gtceu:sulfuric_acid 2100')
    event.recipes.gtceu.large_chemical_reactor('titanium_tetrachloride')
        .duration(160)
        .EUt(960)
        .inputFluids('gtceu:titanyl_sulfate 1000')
        .inputFluids('gtceu:hydrochloric_acid 4000')
        .outputFluids('gtceu:titanium_tetrachloride 1000')
        .outputFluids('gtceu:sulfuric_acid 2100')

    //氟化钠和三氟化铝分解
    event.recipes.gtceu.chemical_reactor('alumina_from_alf')
        .duration(160)
        .EUt(120)
        .itemInputs('8x gtceu:aluminium_trifluoride_dust')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('5x gtceu:alumina_dust')
        .outputFluids('gtceu:hydrofluoric_acid 6000')
    event.recipes.gtceu.large_chemical_reactor('alumina_from_alf')
        .duration(160)
        .EUt(120)
        .itemInputs('8x gtceu:aluminium_trifluoride_dust')
        .inputFluids('minecraft:water 3000')
        .itemOutputs('5x gtceu:alumina_dust')
        .outputFluids('gtceu:hydrofluoric_acid 6000')
    event.recipes.gtceu.electrolyzer('fluorine_from_naf')
        .duration(160)
        .EUt(120)
        .itemInputs('2x gtceu:sodium_fluoride_dust')
        .itemOutputs('gtceu:sodium_dust')
        .outputFluids('gtceu:fluorine 1000')
        //氟化钠合成
    event.recipes.gtceu.chemical_reactor('naf_from_sodium')
        .duration(160)
        .EUt(120)
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('2x gtceu:sodium_fluoride_dust')
    event.recipes.gtceu.large_chemical_reactor('naf_from_sodium')
        .duration(160)
        .EUt(120)
        .itemInputs('gtceu:sodium_dust')
        .inputFluids('gtceu:fluorine 1000')
        .itemOutputs('2x gtceu:sodium_fluoride_dust')
    event.recipes.gtceu.centrifuge('bauxite_dust')
        .duration(60)
        .EUt(120)
        .itemInputs('gtceu:bauxite_dust')
        .itemOutputs('gtceu:alumina_dust')
        .chancedOutput('gtceu:tiny_gallium_dust', 2500, 250)
        .chancedOutput('gtceu:tiny_rutile_dust', 3000, 300)

    event.recipes.gtceu.large_chemical_reactor('catalyst')
        .itemInputs('39x gtceu:bauxite_dust')
        .notConsumable('kubejs:bauxite_process_catalyst')
        .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 24000))
        .outputFluids(Fluid.of('gtceu:titanium_tetrachloride_v', 3000))
        .outputFluids(Fluid.of('gtceu:ferric_ree_chloride', 250))
        .outputFluids(Fluid.of('minecraft:water', 12000))
        .itemOutputs('24x gtceu:aluminium_dust')
        .EUt(480)
        .duration(200)
})