ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    // Ba + H2O2 = Ba(OH)2
    ctnh.chemical_reactor('barium_hydroxide')
        .itemInputs('gtceu:barium_dust')
        .inputFluids(Fluid.of('gtceu:hydrogen_peroxide', 1000))
        .itemOutputs('5x gtceu:barium_hydroxide_dust')
        .duration(125).EUt(480)

    // 2C3H6O = C6H10O + H2O
    ctnh.chemical_reactor('mesityl_oxide')
        .notConsumable('gtceu:barium_hydroxide_dust')
        .inputFluids(Fluid.of('gtceu:acetone', 2000))
        .outputFluids(Fluid.of('gtceu:mesityl_oxide', 1000))
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(100).EUt(120)

    // C6H10O + C + H2O = C6H12O + CO
    ctnh.chemical_reactor('methyl_isobutyl_ketone')
        .notConsumable('ctnhcore:palladium_on_carbon_catalyst')
        .itemInputs('gtceu:carbon_dust')
        .inputFluids(Fluid.of('gtceu:mesityl_oxide', 1000))
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .outputFluids(Fluid.of('gtceu:methyl_isobutyl_ketone', 1000))
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 1000))
        .duration(130).EUt(480)

    // S + HCN = HSCN
    ctnh.chemical_reactor('thiocyanic_acid')
        .itemInputs('gtceu:sulfur_dust')
        .inputFluids(Fluid.of('gtceu:hydrogen_cyanide', 1000))
        .outputFluids(Fluid.of('gtceu:thiocyanic_acid', 1000))
        .duration(100).EUt(120)

    // C6H12O + HSCN = [C6H12O + HSCN]
    ctnh.mixer('zr_hf_separation_mix')
        .inputFluids(Fluid.of('gtceu:thiocyanic_acid', 1000))
        .inputFluids(Fluid.of('gtceu:methyl_isobutyl_ketone', 1000))
        .outputFluids(Fluid.of('gtceu:zr_hf_separation_mix', 2000))
        .duration(80).EUt(120)

    // ZrSiO4 + 8Cl = ZrHfCl4 + SiCl4?
    ctnh.chemical_reactor('zr_hf_chloride')
        .itemInputs('6x gtceu:zircon_dust')
        .inputFluids(Fluid.of('gtceu:chlorine', 4000))
        .outputFluids(Fluid.of('gtceu:zr_hf_chloride', 1000))
        .outputFluids(Fluid.of('gtceu:zircon_chlorinating_residue', 1000))
        .duration(120).EUt(120)

    // SiCl4? = SiCl4 + Co + RareEarth
    ctnh.chemical_reactor('silicon_chloride')
        .inputFluids(Fluid.of('gtceu:zircon_chlorinating_residue', 1000))
        .outputFluids(Fluid.of('gtceu:silicon_chloride', 500))
        .chancedOutput('gtceu:cobalt_dust', 7500, 450)
        .chancedOutput('gtceu:rare_earth_dust', 200, 20)
        .duration(140).EUt(120)

    // ZrHfCl4 + H2O = Cl2HfOZr + 2HCl
    ctnh.chemical_reactor('zr_hf_oxy_chlorides')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .inputFluids(Fluid.of('gtceu:zr_hf_chloride', 1000))
        .outputFluids(Fluid.of('gtceu:zr_hf_oxy_chloride', 1000))
        .outputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
        .duration(100).EUt(480)

    // 3Cl2HfOZr + 3HClO + 3H2SO4 + 15NH3 + 3H2O2 = 9NH4Cl + 3(NH4)2SO4 + 3ZrO2 + 3HfO2 (THIS IS TOO BIG)
    // 3Cl2HfOZr + 3H2SO4 + 6NH4Cl + 9O = 3(NH4)2SO4 + 6HCl + 6Cl + 3ZrO2 + 3HfO2 (THIS FITS)
    // 3Cl2HfOZr + 3SO3 + 6NH4Cl + 6H2O2 = 3(NH4)2SO4 + 12HCl + 3ZrO2 + 3HfO2 (CURRENTLY USING)
    ctnh.large_chemical_reactor('cubic_zirconia')
        .inputFluids(Fluid.of('gtceu:hydrogen_peroxide', 6000))
        .inputFluids(Fluid.of('gtceu:zr_hf_oxy_chloride', 3000))
        .inputFluids(Fluid.of('gtceu:sulfur_trioxide', 3000))
        .inputFluids(Fluid.of('gtceu:ammonium_chloride', 6000))
        .notConsumableFluid(Fluid.of('gtceu:zr_hf_separation_mix', 1000))
        .outputFluids(Fluid.of('gtceu:ammonium_sulfate', 3000))
        .outputFluids(Fluid.of('gtceu:hydrochloric_acid', 12000))
        .itemOutputs('3x gtceu:cubic_zirconia_dust')
        .chancedOutput('3x gtceu:hafnium_oxide_dust', 1000, 0)
        .duration(100).EUt(1920)

    // C + 4Cl + ZrO2 = CO2 + ZrCl4
    ctnh.chemical_reactor('zirconium_tetrachloride')
        .itemInputs('gtceu:carbon_dust')
        .itemInputs('3x gtceu:cubic_zirconia_dust')
        .inputFluids(Fluid.of('gtceu:chlorine', 4000))
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
        .itemOutputs('5x gtceu:zirconium_tetrachloride_dust')
        .duration(150).EUt(480)

    // ZrCl4 + 2Mg = Zr + 2MgCl2
    ctnh.electric_blast_furnace('zirconium_dust')
        .itemInputs('5x gtceu:zirconium_tetrachloride_dust')
        .itemInputs('2x gtceu:magnesium_dust')
        .itemOutputs('gtceu:zirconium_dust')
        .itemOutputs('6x gtceu:magnesium_chloride_dust')
        .duration(300).EUt(120).blastFurnaceTemp(2500)

    // C + 4Cl + HfO2 = CO2 + HfCl4
    ctnh.chemical_reactor('hafnium_tetrachloride')
        .itemInputs('gtceu:carbon_dust')
        .itemInputs('3x gtceu:hafnium_oxide_dust')
        .inputFluids(Fluid.of('gtceu:chlorine', 4000))
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
        .itemOutputs('5x gtceu:hafnium_chloride_dust')
        .duration(150).EUt(120)

    // HfCl4 + 2Mg = Hf + 2MgCl2
    ctnh.electric_blast_furnace('hafnium_dust')
        .itemInputs('5x gtceu:hafnium_chloride_dust')
        .itemInputs('2x gtceu:magnesium_dust')
        .itemOutputs('gtceu:hafnium_dust')
        .itemOutputs('6x gtceu:magnesium_chloride_dust')
        .duration(300).EUt(120).blastFurnaceTemp(2500)
})