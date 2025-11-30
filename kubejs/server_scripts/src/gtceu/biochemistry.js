ServerEvents.recipes(event => {
    event.remove({ output: 'gtceu:fermented_biomass' })
    //event.recipes.gtceu.fermenting('yeast')
    let yeast = [
        {
            name: 'normal',
            raw_material: 'minecraft:brown_mushroom',
            temperature: 1000,
            eu: 96,
            duration: 100,
            output: [Fluid.of('gtceu:ethanol', 500), Fluid.of('gtceu:acetic_acid', 250), Fluid.of('gtceu:methane', 250)]
        },
        {
            name: 'crimson',
            raw_material: 'minecraft:crimson_fungus',
            temperature: 1800,
            eu: 480,
            duration: 200,
            output: [Fluid.of('gtceu:ethane', 250), Fluid.of('gtceu:benzene', 500), Fluid.of('gtceu:butane', 250)]
        },
        {
            name: 'warped',
            raw_material: 'minecraft:warped_fungus',
            temperature: 1500,
            eu: 480,
            duration: 200,
            output: [Fluid.of('gtceu:ethane', 250), Fluid.of('gtceu:acetone', 500), Fluid.of('gtceu:butane', 250)]
        },
        {
            name: 'end',
            raw_material: 'minecraft:chorus_fruit',
            temperature: 2200,
            eu: 480,
            duration: 200,
            output: [Fluid.of('gtceu:ethylene', 500), Fluid.of('gtceu:phenol', 100), Fluid.of('gtceu:ethanol', 150), Fluid.of('gtceu:propene', 250)]
        },
        {
            name: 'fluorescence',
            raw_material: 'twilightforest:mushgloom',
            temperature: 2500,
            eu: 480,
            duration: 100,
            output: [Fluid.of('gtceu:butadiene', 500), Fluid.of('gtceu:amino_acid', 250), Fluid.of('gtceu:chlorobenzene', 150), Fluid.of('gtceu:chloromethane', 100)]
        },
        {
            name: 'light',
            raw_material: 'deep_aether:lightcap_mushrooms',
            temperature: 3000,
            eu: 1920,
            duration: 200,
            output: [Fluid.of('gtceu:bisphenol_a', 100), Fluid.of('gtceu:octane', 250), Fluid.of('gtceu:phenol', 250), Fluid.of('gtceu:amino_acid', 400)]
        },
        {
            name: 'radiation_mutated',
            raw_material: null,
            temperature: 4500,
            eu: 7680,
            duration: 140,
            output: [Fluid.of('gtceu:bisphenol_a', 100), Fluid.of('gtceu:octane', 250), Fluid.of('gtceu:phenol', 250), Fluid.of('gtceu:amino_acid', 400)]
        },
        // {
        //     name: 'alf',
        //     raw_material: null,
        //     temperature: 3300,
        //     eu: 1920,
        //     duration: 200,
        //     output: [Fluid.of('gtceu:mana', 100), Fluid.of('minecraft:water', 900)]
        // }
        ]
    let nutritions = ['minecraft:sugar', '3x gtceu:lignin_dust']
    yeast.forEach(y => {
        nutritions.forEach(nutrition => {
            if (y.name == 'fluorescence' || y.name == 'light') {
                event.recipes.gtceu.fermenting(y.name + '_yeast0' + nutrition.path)
                    .EUt(y.eu)
                    .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 500))
                    .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
                    .itemInputs(nutrition)
                    .itemInputs('gtceu:small_salt_dust')
                    .itemInputs('gtceu:small_ammonium_chloride_dust')
                    .blastFurnaceTemp(y.temperature)
                    .duration(y.duration)
            }
            else {
                event.recipes.gtceu.fermenting(y.name + '_yeast0' + nutrition.path)
                    .EUt(y.eu)
                    .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 500))
                    .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
                    .itemInputs(nutrition)
                    .itemInputs('gtceu:small_salt_dust')
                    .blastFurnaceTemp(y.temperature)
                    .duration(y.duration)
            }
        })
        event.recipes.gtceu.mixer(y.name + '_yeast1')
            .EUt(30)
            .itemInputs('gtceu:' + y.name + '_yeast_dust')
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 1000))
            .duration(40)
        event.recipes.gtceu.mixer(y.name + '_yeast2')
            .EUt(30)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 1000))
            .notConsumable('gtceu:lyase_dust')
            .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_extract_liquid', 1000))
            .duration(40)
        event.recipes.gtceu.centrifuge(y.name + '_yeast3')
            .EUt(30)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
            .outputFluids(Fluid.of('gtceu:waste_nutrition_liquid', 500))
            .itemOutputs('2x gtceu:' + y.name + '_yeast_dust')
            .duration(40)
        event.recipes.gtceu.mixer(y.name + '_yeast4')
            .EUt(30)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
            .inputFluids(Fluid.of('minecraft:water', 1500))
            .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 2000))
            .duration(40)
        event.recipes.gtceu.centrifuge(y.name + '_yeast5')
            .EUt(120)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_extract_liquid', 1000))
            .outputFluids(y.output)
            .duration(100)
        if (y.raw_material != null) {
            event.recipes.gtceu.macerator(y.name + '_yeast6')
                .EUt(120)
                .itemInputs(y.raw_material)
                .itemOutputs('2x gtceu:' + y.name + '_yeast_dust')
                .duration(40)
        }
    })
    event.recipes.gtceu.macerator('normal_yeast_from_red_mushroom')
        .EUt(120)
        .itemInputs('minecraft:red_mushroom')
        .itemOutputs('2x gtceu:normal_yeast_dust')
        .duration(40)
    Ingredient.of('#forge:foods').getItemTypes().forEach(food => {
        if (food.toString() != 'pumpkin_pie') {
            //console.info(food.toString())
            let nutrition = food.getFoodProperties().getNutrition()
            let saturation = food.getFoodProperties().getSaturationModifier()
            //console.info(food.getFoodProperties().getNutrition())
            event.recipes.gtceu.digesting(food.toString() + '_digestion')
                .EUt(30)
                .itemInputs(food.asIngredient().getItemIds())
                .inputFluids(Fluid.of('minecraft:water', 100 * Math.floor(nutrition + saturation / 2)))
                .outputFluids(Fluid.of('gtceu:biomass', 100 * Math.floor(nutrition + saturation / 2)))
                .circuit(0)
                .duration(100)
            event.recipes.gtceu.digesting(food.toString() + '_digestion2')
                .EUt(120)
                .itemInputs(food.asIngredient().getItemIds())
                .chancedOutput('gtceu:escherichia_coli_dust', 500 * Math.floor(nutrition + saturation / 2), 500)
                .inputFluids(Fluid.of('minecraft:water', 75 * Math.floor(nutrition + saturation / 2)))
                .outputFluids(Fluid.of('gtceu:fermented_biomass', 75 * Math.floor(nutrition + saturation / 2)))
                .circuit(1)
                .duration(100)
        }
    })
    event.recipes.gtceu.digesting('bio_chaff_digestion')
        .EUt(30)
        .itemInputs('gtceu:bio_chaff')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .outputFluids(Fluid.of('gtceu:biomass', 1000))
        .circuit(0)
        .duration(200)
    event.recipes.gtceu.digesting('bio_chaff_digestion2')
        .EUt(120)
        .itemInputs('gtceu:bio_chaff')
        .itemOutputs('gtceu:fertilizer')
        .inputFluids(Fluid.of('minecraft:water', 800))
        .outputFluids(Fluid.of('gtceu:fermented_biomass', 800))
        .circuit(1)
        .duration(200)
    event.recipes.gtceu.digesting('animal_excreta_digestion')
        .EUt(30)
        .itemInputs('ctnhcore:animal_excreta')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .outputFluids(Fluid.of('gtceu:biomass', 1000))
        .circuit(0)
        .duration(200)
    event.recipes.gtceu.digesting('animal_excreta_digestion2')
        .EUt(120)
        .itemInputs('ctnhcore:animal_excreta')
        .itemOutputs('gtceu:fertilizer')
        .inputFluids(Fluid.of('minecraft:water', 800))
        .outputFluids(Fluid.of('gtceu:fermented_biomass', 800))
        .circuit(1)
        .duration(200)
    event.remove({ id: 'gtceu:pyrolyse_oven/bio_chaff_to_fermented_biomass' })
    event.remove({ id: 'gtceu:pyrolyse_oven/bio_chaff_to_biomass' })
    event.remove({ id: 'gtceu:fermenter/fermented_biomass' })
    event.recipes.gtceu.fermenting('fermented')
        .EUt(96)
        .inputFluids(Fluid.of('gtceu:biomass', 1000))
        .outputFluids(Fluid.of('gtceu:fermented_biomass', 1500))
        .itemInputs('2x gtceu:normal_yeast_dust')
        .duration(200)
        .blastFurnaceTemp(1500)
    event.recipes.gtceu.macerator('lyase')
        .EUt(30)
        .itemInputs('minecraft:shroomlight')
        .itemOutputs('4x gtceu:lignin_dust')
        .chancedOutput('gtceu:tiny_lyase_dust', 1000, 500)
        .duration(200)
    event.recipes.gtceu.macerator('lignin')
        .EUt(30)
        .itemInputs('farmersdelight:tree_bark')
        .itemOutputs('2x gtceu:wood_dust')
        .chancedOutput('2x gtceu:lignin_dust', 7500, 500)
        .chancedOutput('gtceu:lignin_dust', 5000, 0)
        .chancedOutput('gtceu:lignin_dust', 1000, 1000)
        .duration(40)
    event.recipes.gtceu.centrifuge('lignin2')
        .EUt(30)
        .itemInputs('gtceu:wood_dust')
        .itemOutputs('gtceu:cellulose_dust')
        .chancedOutput('gtceu:lignin_dust', 5000, 250)
        .duration(40)
    event.recipes.gtceu.macerator('podzol')
        .EUt(30)
        .duration(40)
        .itemInputs('minecraft:podzol')
        .itemOutputs('4x gtceu:dirt_dust')
        .chancedOutput('gtceu:rhizobium_dust', 500, 250)
    event.recipes.gtceu.chemical_reactor('trisodium_phosphate')
        .itemInputs(['5x gtceu:tricalcium_phosphate_dust', '12x gtceu:salt_dust'])
        .itemOutputs(['9x gtceu:calcium_chloride_dust', '8x gtceu:trisodium_phosphate_dust'])
        .EUt(30)
        .duration(60)
    event.recipes.gtceu.chemical_reactor('sodium_dihydrogen_phosphate_dust')
        .itemInputs('4x gtceu:trisodium_phosphate_dust')
        .inputFluids(Fluid.of('minecraft:water', 2000))
        .itemOutputs(['4x gtceu:sodium_dihydrogen_phosphate_dust', '12x gtceu:sodium_bicarbonate_dust'])
        .circuit(0)
        .EUt(30)
        .duration(100)
    event.recipes.gtceu.chemical_reactor('dibasic_sodium_phosphate_dust')
        .itemInputs('4x gtceu:trisodium_phosphate_dust')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs(['4x gtceu:dibasic_sodium_phosphate_dust', '3x gtceu:sodium_hydroxide_dust'])
        .circuit(1)
        .EUt(30)
        .duration(100)
    event.recipes.gtceu.mixer('carbonate_buffer')
        .circuit(0)
        .EUt(30)
        .duration(120)
        .itemInputs(['6x gtceu:soda_ash_dust', '12x gtceu:sodium_bicarbonate_dust'])
        .inputFluids(Fluid.of('minecraft:water', 2000))
        .outputFluids(Fluid.of('gtceu:carbonate_buffer', 2000))
    event.recipes.gtceu.mixer('phosphate_buffer')
        .EUt(30)
        .duration(120)
        .itemInputs(['9x gtceu:sodium_dihydrogen_phosphate_dust', '9x gtceu:dibasic_sodium_phosphate_dust'])
        .inputFluids(Fluid.of('minecraft:water', 2000))
        .outputFluids(Fluid.of('gtceu:phosphate_buffer', 2000))
    event.recipes.gtceu.ultrasonication('rhizobium')
        .itemInputs('gtceu:rhizobium_dust')
        .inputFluids(Fluid.of('gtceu:carbonate_buffer', 1000))
        .outputFluids(Fluid.of('gtceu:rhizobium_extract', 1000))
        .EUt(480)
        .duration(400)
    event.recipes.gtceu.differential_centrifuge('azotase')
        .inputFluids(Fluid.of('gtceu:rhizobium_extract', 1000))
        .itemOutputs('gtceu:azotase_dust')
        .outputFluids(Fluid.of('gtceu:amino_acid', 1000))
        .EUt(1920)
        .duration(400)
    event.recipes.gtceu.bio_reactor('ammonia')
        .itemInputs('gtceu:azotase_dust')
        .itemInputs('gtceu:small_molybdenum_dust')
        .inputFluids(Fluid.of('gtceu:nitrogen', 10000))
        .inputFluids(Fluid.of('gtceu:hydrogen', 30000))
        .outputFluids(Fluid.of('gtceu:ammonia', 10000))
        .EUt(1920)
        .duration(160)
    event.recipes.gtceu.mixer('radiation_mutated_yeast')
        .itemInputs(['gtceu:polluted_fluorescence_yeast_dust', 'gtceu:mendelevium_dust'])
        .inputFluids(Fluid.of('gtceu:uranium_hexafluoride', 1000))
        .chancedOutput('gtceu:radiation_mutated_yeast_dust', 200, 50)
        .EUt(1920)
        .duration(300)
    let transitional = 'gtceu:fluorescence_yeast_dust'
    event.recipes.create.sequenced_assembly([
        'gtceu:polluted_fluorescence_yeast_dust'
    ], 'gtceu:fluorescence_yeast_dust', [
        event.recipes.createFilling(transitional, [transitional, Fluid.of('alexscaves:acid', 1000)]),
        event.recipes.createFilling(transitional, [transitional, Fluid.of('deep_aether:poison_fluid', 1000)]),
        event.recipes.createPressing(transitional, [transitional]),
    ]).transitionalItem(transitional)
        .loops(1)
    event.recipes.gtceu.differential_centrifuge('thermoduric_bacteria')
        .inputFluids(Fluid.of('gtceu:mystery_fluid',1000))
        .itemOutputs('gtceu:thermoduric_bacteria_dust')
        .outputFluids(Fluid.of('gtceu:biomass',800))
        .EUt(480)
        .duration(160)
    event.recipes.gtceu.ultrasonication('thermoduric_bacteria_extract')
        .itemInputs('gtceu:thermoduric_bacteria_dust')
        .inputFluids(Fluid.of('gtceu:phosphate_buffer',1000))
        .outputFluids(Fluid.of('gtceu:thermoduric_bacteria_extract',1000))
        .EUt(1920)
        .duration(80)
    event.recipes.gtceu.differential_centrifuge('taq_enzyme')
        .inputFluids(Fluid.of('gtceu:thermoduric_bacteria_extract', 1000))
        .itemOutputs('gtceu:taq_enzyme_dust')
        .outputFluids(Fluid.of('gtceu:amino_acid', 1000))
        .EUt(7680)
        .duration(400)
    event.recipes.gtceu.ultrasonication('escherichia_coli_extract')
        .itemInputs('gtceu:escherichia_coli_dust')
        .inputFluids(Fluid.of('gtceu:carbonate_buffer',1000))
        .outputFluids(Fluid.of('gtceu:escherichia_coli_extract',1000))
        .EUt(120)
        .duration(80)
    event.recipes.gtceu.differential_centrifuge('cellulase')
        .inputFluids(Fluid.of('gtceu:escherichia_coli_extract', 1000))
        .itemOutputs('gtceu:cellulase_dust')
        .outputFluids(Fluid.of('gtceu:amino_acid', 1000))
        .EUt(480)
        .duration(100)
    event.recipes.gtceu.bio_reactor('sugar')
        .itemInputs('gtceu:cellulose_dust')
        .chancedInput('gtceu:cellulase_dust',500,0)
        .itemOutputs('4x minecraft:sugar')
        .EUt(120)
        .duration(80)
    event.recipes.gtceu.mixer('simple_growth_medium')
        .inputFluids(Fluid.of('gtceu:amino_acid',1000))
        .inputFluids(Fluid.of('gtceu:normal_yeast_extract_liquid',500))
        .itemInputs('gtceu:salt_dust')
        .outputFluids(Fluid.of('gtceu:simple_growth_medium',1500))
        .EUt(30)
        .duration(60)
    event.recipes.gtceu.macerator('meat')
        .itemInputs('biomesoplenty:flesh')
        .itemOutputs('3x gtceu:meat_dust')
        .chancedOutput('gtceu:meat_dust',4500,500)
        .chancedOutput('gtceu:meat_dust',1500,200)
        .EUt(30)
        .duration(100)
    // event.recipes.gtceu.mana_reactor('alf_yeast')
    //     .itemInputs('64x gtceu:livingrock_dust')
    //     .inputFluids(Fluid.of('gtceu:mana', 5000))
    //     .inputFluids(Fluid.of('gtceu:normal_yeast_extract_liquid', 1000))
    //     .chancedOutput('gtceu:alf_yeast_dust', 100, 100)
    //     .EUt(480)
    //     .duration(400)
})
let meat = ['mynethersdelight:hoglin_loin', 'twilightforest:raw_meef', 'twilightforest:raw_venison', 'alexscaves:dinosaur_chop', 'twilightdelight:raw_insect']