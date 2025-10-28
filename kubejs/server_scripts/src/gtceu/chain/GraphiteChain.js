ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    ctnh.electric_blast_furnace("graphite_gas")//1C 500
        .itemInputs('2x gtceu:graphite_dust')
        .outputFluids("gtceu:graphite_steam 4000")
        .duration(1000)
        .EUt(6144)
        .blastFurnaceTemp(4500)
    ctnh.chemical_vapor_deposition("graphene_plate_production_method_1")
        .inputFluids("gtceu:graphite_steam 4000")
        .itemInputs('gtceu:iridium_plate')
        .inputFluids("gtceu:nitrogen 1000")
        .itemOutputs('gtceu:graphite_ir_plate_plate')
        .duration(100)
        .EUt(1920)
    ctnh.chemical_vapor_deposition("graphene_plate_production_method_2")
        .inputFluids("gtceu:graphite_steam 8000")
        .itemInputs('gtceu:double_iridium_plate')
        .inputFluids("gtceu:nitrogen 2000")
        .itemOutputs('gtceu:double_graphite_ir_plate_plate')
        .duration(100)
        .EUt(6144)
    ctnh.chemical_reactor("iridium_plate_graphene_separation_1")
        .itemInputs('2x gtceu:graphite_ir_plate_plate')
        .inputFluids("gtceu:hydrochloric_acid 6000")
        .outputFluids("gtceu:hydrogen 6000")
        .itemOutputs('2x gtceu:iridium_chloride_dust', "2x gtceu:graphene_dust")
        .duration(200)
        .EUt(1920)
    ctnh.chemical_reactor("iridium_plate_graphene_separation_2")
        .itemInputs('2x gtceu:double_graphite_ir_plate_plate')
        .inputFluids("gtceu:hydrochloric_acid 12000")
        .outputFluids("gtceu:hydrogen 12000")
        .itemOutputs('4x gtceu:iridium_chloride_dust', "4x gtceu:graphene_dust")
        .duration(100)
        .EUt(1920)
    ctnh.assembler("graphene_powder")
        .itemInputs(['10x gtceu:graphite_dust', '10x gtceu:duct_tape'])
        .chancedOutput('gtceu:small_graphene_dust', 4500, 0)
        .EUt(480)
        .duration(180)

    let transitional = 'minecraft:coal_block'
    event.recipes.create.sequenced_assembly([
            Item.of('gtceu:small_graphene_dust').withChance(0.09),
            Item.of('minecraft:coal_block').withChance(0.5),
            Item.of('minecraft:diamond').withChance(0.05),
            Item.of('gtceu:snow_steel_ingot').withChance(0.01),
            Item.of('minecraft:coal').withChance(0.3),
            Item.of('gtceu:exquisite_coal_gem').withChance(0.05),
        ], 'minecraft:coal_block', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:duct_tape'])
        ]).transitionalItem(transitional)
        .loops(1)

    ctnh.centrifuge("metal_slag")
        .itemInputs('gtceu:metal_sludge_dust')
        .itemOutputs('gtceu:nickel_dust', 'gtceu:copper_dust')
        .duration(80)
        .EUt(480)
    ctnh.electric_blast_furnace("graphite_gas_production_method_1")
        .itemInputs('24x gtceu:fluid_cell')
        .inputFluids("gtceu:methane 6000")//6C 3000
        .outputFluids("gtceu:graphite_steam 3000")
        .itemOutputs(Item.of('gtceu:fluid_cell', 24, '{Fluid:{Amount:1000,FluidName:"gtceu:hydrogen"}}'))
        .EUt(480)
        .circuit(1)
        .duration(200)
        .blastFurnaceTemp(2200)
    ctnh.electric_blast_furnace("graphite_gas_production_method_1_no_hydrogen")
        .inputFluids("gtceu:methane 6000")
        .outputFluids("gtceu:graphite_steam 3000")
        .EUt(480)
        .circuit(2)
        .duration(200)
        .blastFurnaceTemp(2200)
})