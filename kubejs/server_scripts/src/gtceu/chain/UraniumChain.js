ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:large_chemical_reactor/uranium_hexafluoride' })
    event.remove({ id: 'alexscaves:furnace/uranium_from_radrock_ore_smelting' })
    event.remove({ id: 'alexscaves:furnace/uranium_from_radrock_ore_blasting' })
    event.remove({ id: 'alexscaves:uranium_from_shard' })
    let ctnh = event.recipes.gtceu
    // UO2 + 2 Cl + H2O -> [UO2Cl2 + H2O + ?]
    ctnh.chemical_reactor('uranyl_chloride_solution')
        .itemInputs('3x gtceu:uraninite_dust')
        .inputFluids(Fluid.of('gtceu:chlorine', 2000))
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .outputFluids(Fluid.of('gtceu:uranyl_chloride_solution', 1000))
        .duration(50).EUt(120)

    // [UO2Cl2 + H2O + ?] + 2HNO3 -> [UO2(NO3)2 + H2O + ?] + 2HCl
    ctnh.chemical_reactor('uranyl_nitrate_solution')
        .inputFluids(Fluid.of('gtceu:nitric_acid', 2000))
        .inputFluids(Fluid.of('gtceu:uranyl_chloride_solution', 1000))
        .outputFluids(Fluid.of('gtceu:uranyl_nitrate_solution', 1000))
        .outputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
        .duration(100).EUt(120)

    // [UO2(NO3)2 + H2O + ?] + H2SO4 -> [UO2(NO3)2 + H2O] + [? + SO4]
    ctnh.chemical_reactor('purified_uranyl_nitrate')
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
        .inputFluids(Fluid.of('gtceu:uranyl_nitrate_solution', 1000))
        .outputFluids(Fluid.of('gtceu:purified_uranyl_nitrate', 1000))
        .outputFluids(Fluid.of('gtceu:uranium_sulfate_waste_solution', 1000))
        .duration(40).EUt(120)

    // [? + SO4] -> Pb + 0.111Ra + 0.111Sr + H2SO4
    // Lead is okay here because of uranium decay
    ctnh.electrolyzer('uranium_sulfate_waste_solution')
        .inputFluids(Fluid.of('gtceu:uranium_sulfate_waste_solution', 1000))
        .outputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
        .itemOutputs('gtceu:lead_dust')
        .itemOutputs('gtceu:tiny_radium_dust')
        .itemOutputs('gtceu:tiny_strontium_dust')
        .itemOutputs('gtceu:tiny_barium_dust')
        .duration(200).EUt(480)

    // 2[UO2(NO3)2 + H2O] + 4H2O + 8C -> (NH4)2U2O7 + 2HNO3 + 8CO
    ctnh.large_chemical_reactor('uranium_diuranate')
        .itemInputs('8x gtceu:carbon_dust')
        .inputFluids(Fluid.of('minecraft:water', 4000))
        .inputFluids(Fluid.of('gtceu:purified_uranyl_nitrate', 2000))
        .outputFluids(Fluid.of('gtceu:uranium_diuranate', 1000))
        .outputFluids(Fluid.of('gtceu:nitric_acid', 2000))
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 8000))
        .duration(140).EUt(120)

    // (NH4)2U2O7 + 2K2CO3 -> 2UO2(CO3) + 2K2O + 2NH3 + H2O
    ctnh.large_chemical_reactor('potassium_uranyl_tricarbonate_dust')
        .itemInputs('12x gtceu:potassium_carbonate_dust')
        .itemOutputs('10x gtceu:potassium_uranyl_tricarbonate_dust')
        .itemOutputs('6x gtceu:potash_dust')
        .inputFluids(Fluid.of('gtceu:uranium_diuranate', 1000))
        .outputFluids(Fluid.of('gtceu:ammonia', 2000))
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(160).EUt(120)

    // UO2(CO3) + [H2O2 + H2SO4] -> [UO3•H2O2 + ThO2] + [? + C + H2SO4]
    ctnh.mixer('piranha_solution')
        .inputFluids(Fluid.of('gtceu:hydrogen_peroxide', 1000))
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
        .outputFluids(Fluid.of('gtceu:piranha_solution', 2000))
        .duration(50)
        .EUt(30)

    ctnh.chemical_reactor('uranium_peroxide_thorium_oxide_dust')
        .itemInputs('5x gtceu:potassium_uranyl_tricarbonate_dust')
        .itemOutputs('8x gtceu:uranium_peroxide_thorium_oxide_dust')
        .inputFluids(Fluid.of('gtceu:piranha_solution', 2000))
        .outputFluids(Fluid.of('gtceu:uranium_refinement_waste_solution', 1000))
        .duration(200).EUt(480)

    // [? + C + H2SO4] -> H2SO4 + CsOH + MoO3 + V2O5 (carbon voided, multiplied by 20 for game balance)
    ctnh.electrolyzer('uranium_refinement_waste_solution')
        .inputFluids(Fluid.of('gtceu:uranium_refinement_waste_solution', 20000))
        .outputFluids(Fluid.of('gtceu:sulfuric_acid', 2000))
        .itemOutputs('3x gtceu:caesium_hydroxide_dust')
        .itemOutputs('4x gtceu:molybdenum_trioxide_dust')
        .itemOutputs('7x gtceu:vanadium_pentoxide_dust')
        .duration(200).EUt(1920)

    ctnh.electric_blast_furnace('vanadium_dust')
        .itemInputs('7x gtceu:vanadium_pentoxide_dust')
        .itemInputs('gtceu:carbon_dust')
        .itemInputs('2x gtceu:aluminium_dust')
        .itemOutputs('gtceu:vanadium_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
        .EUt(120)
        .duration(200)
        .blastFurnaceTemp(1200)

    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_vanadium_pentoxide' })

    // [UO3•H2O2 + ThO2] -> [UO2 + ThO2] + H2O + 2O
    ctnh.electrolyzer('uranium_thorium_oxide_dust')
        .itemInputs('8x gtceu:uranium_peroxide_thorium_oxide_dust')
        .outputFluids(Fluid.of('gtceu:hydrogen_peroxide', 1000))
        .outputFluids(Fluid.of('gtceu:oxygen', 1000))
        .itemOutputs('6x gtceu:uranium_thorium_oxide_dust')
        .duration(100).EUt(30)

    // [UO2 + ThO2] + H2SO4 + S -> [UO2SO4 + ThO2] + H2S
    ctnh.chemical_reactor('uranyl_thorium_sulfate_dust')
        .itemInputs('6x gtceu:uranium_thorium_oxide_dust')
        .itemInputs('gtceu:sulfur_dust')
        .itemOutputs('11x gtceu:uranyl_thorium_sulfate_dust')
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
        .outputFluids(Fluid.of('gtceu:hydrogen_sulfide', 1000))
        .duration(110).EUt(120)

    // [UO2SO4 + ThO2] + 6HNO3 -> [UO2(NO3)2 + Th(NO3)4] + 2H2O + H2SO4
    ctnh.chemical_reactor('uranyl_thorium_nitrate_dust')
        .itemInputs('11x gtceu:uranyl_thorium_sulfate_dust')
        .itemOutputs('26x gtceu:uranyl_thorium_nitrate_dust')
        .inputFluids(Fluid.of('gtceu:nitric_acid', 6000))
        .outputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(120).EUt(120)

    // [UO2(NO3)2 + Th(NO3)4] + 2H -> [UO2 + Th(NO3)4] + 2HNO3
    ctnh.electric_blast_furnace('uranium_oxide_thorium_nitrate_dust')
        .itemInputs('26x gtceu:uranyl_thorium_nitrate_dust')
        .itemOutputs('18x gtceu:uranium_oxide_thorium_nitrate_dust')
        .inputFluids(Fluid.of('gtceu:hydrogen', 2000))
        .outputFluids(Fluid.of('gtceu:nitric_acid', 2000))
        .duration(200).EUt(120).blastFurnaceTemp(500)

    // [UO2 + Th(NO3)4] + H2O -> UO2 + [H2O + Th(NO3)4]
    ctnh.mixer('uranium_dioxide_dust')
        .itemInputs('18x gtceu:uranium_oxide_thorium_nitrate_dust')
        .itemOutputs('3x gtceu:uranium_dioxide_dust')
        .inputFluids(Fluid.of('gtceu:distilled_water', 1000))
        .outputFluids(Fluid.of('gtceu:thorium_nitrate_solution', 1000))
        .duration(100).EUt(30)

    // [H2O + Th(NO3)4] + 2Na -> ThO + 2NaNO3 + 2HNO3
    ctnh.electrolyzer('thorium_oxide_dust')
        .itemInputs('2x gtceu:sodium_dust')
        .inputFluids(Fluid.of('gtceu:thorium_nitrate_solution', 1000))
        .outputFluids(Fluid.of('gtceu:nitric_acid', 2000))
        .itemOutputs('2x gtceu:thorium_oxide_dust')
        .itemOutputs('10x gtceu:sodium_nitrate_dust')
        .duration(150).EUt(120)

    // NaNO3 + H2O -> NaOH + HNO3
    ctnh.chemical_reactor('sodium_hydroxide_dust')
        .itemInputs('5x gtceu:sodium_nitrate_dust')
        .itemOutputs('3x gtceu:sodium_hydroxide_dust')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .outputFluids(Fluid.of('gtceu:nitric_acid', 1000))
        .duration(100).EUt(120)

    // UO2 + C -> U + CO2
    ctnh.electric_blast_furnace('uranium_dust')
        .itemInputs('gtceu:uranium_dioxide_dust')
        .itemInputs('gtceu:carbon_dust')
        .itemOutputs('gtceu:uranium_dust')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
        .duration(150).EUt(120).blastFurnaceTemp(1000)

    // ThO + CaCl2 -> Th + CaO + 2Cl
    ctnh.electric_blast_furnace('thorium_dust')
        .itemInputs('2x gtceu:thorium_oxide_dust')
        .itemInputs('3x gtceu:calcium_chloride_dust')
        .itemOutputs('gtceu:thorium_dust')
        .itemOutputs('2x gtceu:quicklime_dust')
        .outputFluids(Fluid.of('gtceu:chlorine', 2000))
        .duration(150).EUt(120).blastFurnaceTemp(1000)

    //化工厂
    ctnh.chemical_plant('uranium_dust_chemical_plant')
        .itemInputs('3x gtceu:uraninite_dust')
        .itemOutputs('3x gtceu:uranium_dust')
        .inputFluids(Fluid.of('gtceu:nitration_mixture', 4000))
        .outputFluids(Fluid.of('gtceu:uranium_sulfate_waste_solution', 1000))
        .outputFluids(Fluid.of('gtceu:uranium_refinement_waste_solution', 1000))
        .outputFluids(Fluid.of('gtceu:thorium_nitrate_solution', 1000))
        .EUt(7680).duration(864)
        .addCondition($CTNHRecipes.setPlantCasing(5))

    ctnh.chemical_reactor('uranium_hexafluoride')
        .itemInputs('3x gtceu:uranium_dioxide_dust')
        .inputFluids(Fluid.of('gtceu:fluorine', 2000))
        .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 4000))
        .outputFluids(Fluid.of('gtceu:uranium_hexafluoride', 1000))
        .outputFluids(Fluid.of('minecraft:water', 2000))
        .EUt(480)
        .duration(40)

    ctnh.macerator('radrock_uranium_ore')
        .itemInputs('alexscaves:radrock_uranium_ore')
        .itemOutputs('3x gtceu:uraninite_dust')
        .itemOutputs('1x gtceu:thorium_dust')
        .chancedOutput('2x gtceu:tiny_uranium_dust', 5000, 500)
        .EUt(120)
        .duration(40)
})