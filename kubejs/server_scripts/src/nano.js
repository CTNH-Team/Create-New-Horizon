ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ctnhcore:nanogenetor', 1), [
            "BAB",
            "ACA",
            "BAB"
        ], {
            A: '#gtceu:circuits/mv',
            B: 'kubejs:steel_casing',
            C: 'gtceu:mv_machine_hull',

        })
    event.recipes.gtceu.nano_generator('stone1')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('gtceu:stone_dust')
        .EUt(-1)
        .duration(3)
    event.recipes.gtceu.nano_generator('stone2')
        .itemInputs('minecraft:stone')
        .itemOutputs('gtceu:stone_dust')
        .EUt(-2)
        .duration(5)
    event.recipes.gtceu.nano_generator('minecraft:raw_iron')
        .itemInputs('minecraft:raw_iron')
        .itemOutputs('2x gtceu:impure_iron_dust')
        .EUt(-4)
        .duration(10)
    event.recipes.gtceu.nano_generator('gtceu:raw_antimony')
        .itemInputs('gtceu:raw_aluminium')
        .itemOutputs('2x gtceu:impure_antimony_dust')
        .EUt(-6)
        .duration(40)
    event.recipes.gtceu.nano_generator('gtceu:raw_chromite')
        .itemInputs('gtceu:raw_chromite')
        .itemOutputs('2x gtceu:impure_chromite_dust')
        .EUt(-8)
        .duration(15)
    event.recipes.gtceu.nano_generator('gtceu:raw_scheelite')
        .itemInputs('gtceu:raw_scheelite')
        .itemOutputs('2x gtceu:impure_scheelite_dust')
        .EUt(-16)
        .duration(20)
    event.recipes.gtceu.nano_generator('gtceu:raw_naquadah')
        .itemInputs('gtceu:raw_naquadah')
        .itemOutputs('1x gtceu:impure_naquadah_dust')
        .chancedOutput('gtceu:impure_naquadah_dust', 5000, 0)
        .EUt(-48)
        .duration(40)










})