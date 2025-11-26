ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ruby' })
    event.replaceOutput({id: 'gtceu:macerator/macerate_ruby_refined_ore_to_dust'},'gtceu:chromium_dust','gtceu:chromite_dust')
    event.replaceOutput({id: 'gtceu:macerator/macerate_ruby_crushed_ore_to_impure_dust'},'gtceu:chromium_dust','gtceu:chromite_dust')
    event.replaceOutput({id: 'gtceu:macerator/macerate_raw_ruby_ore_to_crushed_ore'},'gtceu:chromium_dust','gtceu:chromite_dust')
    event.replaceOutput({id: 'gtceu:ore_washer/wash_ruby_crushed_ore_to_purified_ore'},'gtceu:chromium_dust','gtceu:chromite_dust')
    event.replaceOutput({id: 'gtceu:centrifuge/centrifuge_ruby_dirty_dust_to_dust'},'gtceu:chromium_dust','gtceu:chromite_dust')

    event.recipes.gtceu.mixer('sodium_carbonate_solution')
        .circuit(1)
        .itemInputs('6x gtceu:soda_ash_dust')
        .inputFluids('water 1000')
        .outputFluids('gtceu:sodium_carbonate_solution 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.chemical_reactor('sodium_chromate_from_sodium_carbonate')
        .itemInputs('14x gtceu:chromite_dust')
        .inputFluids('gtceu:oxygen 7000')
        .inputFluids('gtceu:sodium_carbonate_solution 2000')
        .itemOutputs('7x gtceu:magnetite_dust')
        .outputFluids('gtceu:carbon_dioxide 2000')
        .outputFluids('gtceu:sodium_chromate_solution 2000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_reactor('sodium_dichromate_from_sodium_chromate')
        .inputFluids('gtceu:sulfuric_acid 1000')
        .inputFluids('gtceu:sodium_chromate_solution 2000')
        .itemOutputs('7x gtceu:sodium_sulfate_dust')
        .outputFluids('gtceu:sodium_dichromate_solution 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.dehydrator('chromium_oxide_dust_from_sodium_dichromate')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:sodium_dichromate_solution 1000')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .itemOutputs('5x gtceu:chromium_oxide_dust')
        .outputFluids('gtceu:carbon_monoxide 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.electric_blast_furnace('chrome_from_chromium_3')
        .itemInputs('5x gtceu:chromium_oxide_dust')
        .itemInputs('2x gtceu:aluminium_dust')
        .itemOutputs('2x gtceu:chromium_dust')
        .itemOutputs('5x gtceu:alumina_dust')
        .blastFurnaceTemp(1200)
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_reactor('sodium_sulfide_from_sodium_sulfate')
        .itemInputs('7x gtceu:sodium_sulfate_dust')
        .itemInputs('2x gtceu:carbon_dust')
        .itemOutputs('3x gtceu:sodium_sulfide_dust')
        .outputFluids('gtceu:carbon_dioxide 2000')
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.chemical_reactor('soda_ash_from_sodium_sulfide')
        .itemInputs('3x gtceu:sodium_sulfide_dust')
        .itemInputs('2x gtceu:quicklime_dust')
        .inputFluids('gtceu:carbon_dioxide 1000')
        .itemOutputs('6x gtceu:soda_ash_dust')
        .itemOutputs('2x gtceu:calcium_sulfide_dust')
        .duration(40)
        .EUt(GTValues.VA[GTValues.MV]);
})