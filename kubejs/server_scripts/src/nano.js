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
        .itemOutputs('2x gtceu:stone_dust')
        .EUt(-2)
        .duration(5)
    event.recipes.gtceu.nano_generator('minecraft:netherrack')
        .itemInputs('minecraft:netherrack')
        .itemOutputs('2x gtceu:netherrack_dust')
        .EUt(-3)
        .duration(10)
    event.recipes.gtceu.nano_generator('ad_astra:moon_cobblestone')
        .itemInputs('ad_astra:moon_cobblestone')
        .itemOutputs('3x gtceu:moon_stone_dust')
        .EUt(-6)
        .duration(10)
    event.recipes.gtceu.nano_generator('ad_astra:venus_stone')
        .itemInputs('ad_astra:venus_stone')
        .itemOutputs('3x gtceu:venus_stone_dust')
        .EUt(-16)
        .duration(20)
    event.recipes.gtceu.nano_generator('ad_astra:mars_stone')
        .itemInputs('ad_astra:mars_stone')
        .itemOutputs('2x gtceu:mars_stone_dust')
        .EUt(-8)
        .duration(15)
    event.recipes.gtceu.nano_generator('ad_astra:mercury_stone')
        .itemInputs('ad_astra:mercury_stone')
        .itemOutputs('2x gtceu:mercury_stone_dust')
        .EUt(-16)
        .duration(20)
    event.recipes.gtceu.nano_generator('ad_astra:glacio_stone')
        .itemInputs('ad_astra:glacio_stone')
        .itemOutputs('2x gtceu:glacio_stone_dust')
        .EUt(-30)
        .duration(20)










})