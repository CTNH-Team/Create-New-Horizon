// ServerEvents.recipes(event => {
//     event.remove({ output: 'botania:rune_water' })
//     event.remove({ output: 'botania:rune_earth' })
//     event.remove({ output: 'botania:rune_fire' })
//     event.remove({ output: 'botania:rune_air' })
//     let remove = ['botania:mana_pool',
//         'botania:mana_infusion/manasteel',
//         'botania:mana_infusion/manasteel_block',
//         'botania:petal_apothecary/endoflame',
//         'mythicbotany:central_rune_holder',
//         'mythicbotany:rune_holder',
//         'botania:terra_plate/terrasteel_ingot',
//         'botania:runic_altar/mana',
//         'botania:elven_trade/elf_quartz',
//         'botania:elven_trade/elementium',
//         'botania:elven_trade/elementium_block',

//         'botania:mana_ring',
//         'botania:mana_ring_greater',
//         'botania:terra_pick',
//         'botania:terrasteel_helmet',
//         'botania:terrasteel_chestplate',
//         'botania:terrasteel_leggings',
//         'botania:terrasteel_boots',
//         'botania:runic_altar/spring',
//         'botania:runic_altar/summer',
//         'botania:runic_altar/autumn',
//         'botania:runic_altar/winter',
//         'mythicbotany:vanaheim_rune_runic_altar',
//         'mythicbotany:alfheim_rune_runic_altar',
//         'mythicbotany:midgard_rune_runic_altar'
//     ]
//     remove.forEach(r => {
//         event.remove({ id: r })
//     })
//     event.shaped(
//         Item.of('botania:mana_pool', 1), [
//             "   ",
//             "ABA",
//             "AAA"
//         ], {
//             A: 'botania:livingrock',
//             B: 'botania:mana_tablet',
//         })
//     event.shaped(
//             Item.of('kubejs:elf_catalyst', 1), [
//                 "AAA",
//                 "ABA",
//                 "AAA"
//             ], {
//                 A: "gtceu:raw_mana_fused_block",
//                 B: 'kubejs:bauxite_process_catalyst'
//             })
//         //manaring
//     event.shaped(
//             Item.of('botania:mana_ring', 1), [
//                 "ABC",
//                 "DED",
//                 "CFG"
//             ], {
//                 A: 'botania:mana_tablet',
//                 B: 'gtceu:mana_steel_screw',
//                 C: 'gtceu:mana_steel_rod',
//                 D: 'gtceu:mana_steel_plate',
//                 E: 'gtceu:mana_steel_ring',
//                 F: 'gtceu:mana_steel_bolt',
//                 G: '#forge:tools/hammers'
//             })
//         //manaringgreater
//     event.shaped(
//         Item.of('botania:mana_ring_greater', 1), [
//             "ABC",
//             "DED",
//             "CFG"
//         ], {
//             A: 'botania:mana_ring',
//             B: 'gtceu:terra_steel_screw',
//             C: 'gtceu:terra_steel_rod',
//             D: 'gtceu:terra_steel_plate',
//             E: 'gtceu:terra_steel_ring',
//             F: 'gtceu:terra_steel_bolt',
//             G: '#forge:tools/hammers'
//         })
//     event.shaped(
//         Item.of('botania:terra_pick', 1), [
//             "ABA",
//             "ACA",
//             " D "
//         ], {
//             A: 'gtceu:terra_steel_plate',
//             B: 'botania:manasteel_pick',
//             C: 'botania:mana_tablet',
//             D: 'botania:livingwood_twig',
//         })
//     event.shaped(
//         Item.of('botania:terrasteel_helmet', 1), [
//             "ABA",
//             "BCB",
//             "EDE"
//         ], {
//             A: 'botania:livingwood_twig',
//             B: 'gtceu:terra_steel_plate',
//             C: 'botania:manasteel_helmet',
//             D: 'botania:rune_spring',
//             E: 'gtceu:terra_steel_foil'
//         })
//     event.shaped(
//         Item.of('botania:terrasteel_chestplate', 1), [
//             "ABA",
//             "CDC",
//             "EFE"
//         ], {
//             A: 'botania:livingwood_twig',
//             B: 'botania:rune_summer',
//             C: 'gtceu:double_terra_steel_plate',
//             D: 'botania:manasteel_chestplate',
//             E: 'gtceu:terra_steel_screw',
//             F: 'gtceu:small_terra_steel_gear'
//         })
//     event.shaped(
//         Item.of('botania:terrasteel_leggings', 1), [
//             "ABA",
//             "CDC",
//             "EFE"
//         ], {
//             A: 'gtceu:terra_steel_rod',
//             B: 'botania:manasteel_leggings',
//             C: 'gtceu:terra_steel_plate',
//             D: 'botania:rune_autumn',
//             E: 'gtceu:terra_steel_foil',
//             F: 'gtceu:terra_steel_ring'
//         })
//     event.shaped(
//             Item.of('botania:terrasteel_boots', 1), [
//                 "A A",
//                 "BCB",
//                 "DED"
//             ], {
//                 A: 'botania:livingwood_twig',
//                 B: 'gtceu:terra_steel_rod',
//                 C: 'botania:manasteel_boots',
//                 D: 'gtceu:terra_steel_foil',
//                 E: 'botania:rune_winter',
//             })
//         //endoflame
//     event.custom({
//             "type": "botania:petal_apothecary",
//             "ingredients": [{
//                     "tag": "botania:petals/brown"
//                 },
//                 {
//                     "tag": "botania:petals/brown"
//                 },
//                 {
//                     "tag": "botania:petals/red"
//                 },
//                 {
//                     "tag": "botania:petals/light_gray"
//                 },
//                 {
//                     "item": "botania:rune_fire"
//                 }
//             ],
//             "output": {
//                 "item": "botania:endoflame"
//             },
//             "reagent": {
//                 "tag": "botania:seed_apothecary_reagent"
//             }
//         })
//         //pure daisy
//     event.custom({
//             "type": "botania:petal_apothecary",
//             "ingredients": [{
//                     "tag": "botania:petals/white"
//                 },
//                 {
//                     "tag": "botania:petals/yellow"
//                 },
//                 {
//                     "tag": "botania:petals/white"
//                 },
//                 {
//                     "item": "minecraft:dandelion"
//                 }
//             ],
//             "output": {
//                 "item": "botania:pure_daisy"
//             },
//             "reagent": {
//                 "item": "minecraft:fern"
//             }
//         })
//         .id('botania:petal_apothecary/pure_daisy')
//     event.recipes.gtceu.forming_press('central_rune_holder')
//         .EUt(30)
//         .duration(100)
//         .itemInputs(['gtceu:terra_steel_plate', '2x gtceu:terra_steel_screw'])
//         .itemOutputs('mythicbotany:central_rune_holder')
//     event.recipes.gtceu.forming_press('rune_holder')
//         .EUt(30)
//         .duration(100)
//         .itemInputs(['gtceu:steel_plate', '2x gtceu:steel_screw'])
//         .itemOutputs('mythicbotany:rune_holder')
//     event.replaceInput({ id: 'botania:mana_spreader' }, 'minecraft:copper_ingot', 'minecraft:dispenser')

//     function mana_infusion(event, input, output, mana) {
//         event.custom({
//             "type": "botania:mana_infusion",
//             "input": {
//                 "item": input
//             },
//             "mana": mana,
//             "output": {
//                 "item": output
//             }
//         })
//         event.recipes.gtceu.mana_reactor(output)
//             .itemInputs(input)
//             .itemOutputs(output)
//             .inputFluids(Fluid.of('gtceu:mana', mana / 50))
//             .EUt(120)
//             .duration(20)
//             .circuit(0)
//     }
//     // event.custom({
//     //   "type": "botania:mana_infusion",
//     //   "input": {
//     //     "tag": 'minecraft:wool'
//     //   },
//     //   "mana": 3000,
//     //   "output": {
//     //     "item": 'cold_sweat:goat_fur'
//     //   }
//     // })
//     //manasteel
//     mana_infusion(event, 'minecraft:iron_ingot', 'botania:manasteel_ingot', 3000)
//     mana_infusion(event, 'minecraft:iron_block', 'botania:manasteel_block', 27000)
//     mana_infusion(event, 'gtceu:resistor', 'kubejs:mana_resistor', 3000)
//     mana_infusion(event, 'gtceu:capacitor', 'kubejs:mana_capacitor', 3000)
//     mana_infusion(event, 'gtceu:diode', 'kubejs:mana_diode', 4000)
//     mana_infusion(event, 'gtceu:transistor', 'kubejs:mana_transistor', 4000)
//     mana_infusion(event, 'gtceu:inductor', 'kubejs:mana_inductor', 5000)

//     function runic_altar(event, input, output, mana) {
//         event.custom({
//             "type": "botania:runic_altar",
//             "ingredients": input.map(item => {
//                 return Item.of(item).toJson()
//             }),
//             "mana": mana,
//             "output": Item.of(output).toJson()
//         })
//         event.recipes.gtceu.mana_reactor(output.split(':')[1])
//             .itemInputs(input)
//             .itemOutputs(output)
//             .inputFluids(Fluid.of('gtceu:mana', mana / 50))
//             .duration(mana / 1000)
//             .EUt(120)
//     }

//     function elven_trade(event, input, output) {
//         event.custom({
//             "type": "botania:elven_trade",
//             "ingredients": input.map(item => {
//                 return Item.of(item).toJson()
//             }),
//             "output": Item.of(output).toJson()
//         })
//         event.recipes.gtceu.mana_reactor(output)
//             .itemInputs(input)
//             .itemOutputs(output)
//             .inputFluids(Fluid.of('gtceu:mana', 10))
//             .duration(20)
//             .EUt(480)
//             .circuit(3)
//     }
//     //elvenquartz
//     elven_trade(event, ['botania:quartz_mana'], 'botania:quartz_elven')
//         //elementiumingot
//     elven_trade(event, ['botania:manasteel_ingot', 'botania:manasteel_ingot'], 'botania:elementium_ingot')
//     elven_trade(event, ['botania:manasteel_block', 'botania:manasteel_block'], 'botania:elementium_block')
//     elven_trade(event, ['kubejs:mana_resistor', 'kubejs:mana_resistor'], 'kubejs:advanced_mana_resistor')
//     elven_trade(event, ['kubejs:mana_inductor', 'kubejs:mana_inductor'], 'kubejs:advanced_mana_inductor')
//     elven_trade(event, ['kubejs:mana_capacitor', 'kubejs:mana_capacitor'], 'kubejs:advanced_mana_capacitor')
//     elven_trade(event, ['kubejs:mana_transistor', 'kubejs:mana_transistor'], 'kubejs:advanced_mana_transistor')
//     elven_trade(event, ['kubejs:mana_diode', 'kubejs:mana_diode'], 'kubejs:advanced_mana_diode')

//     elven_trade(event, ['botania:quartz_elven', 'botania:quartz_elven'], 'extrabotany:elementium_quartz')

//     function terra_plate(event, input, output, mana) {
//         event.custom({
//             "type": "botania:terra_plate",
//             "ingredients": input.map(item => {
//                 return Item.of(item).toJson()
//             }),
//             "mana": mana,
//             "result": Item.of(output).toJson()
//         })
//         event.custom({
//             "type": "mythicbotany:infuser",
//             "fromColor": 255,
//             "group": "infuser",
//             "ingredients": input.map(item => {
//                 return Item.of(item).toJson()
//             }),
//             "mana": mana,
//             "output": Item.of(output).toJson(),
//             "toColor": 65280
//         })
//         event.recipes.gtceu.mana_reactor(output)
//             .itemInputs(input)
//             .itemOutputs(output)
//             .inputFluids(Fluid.of('gtceu:mana', mana / 50))
//             .circuit(2)
//             .EUt(480)
//             .duration(mana / 1250)
//     }
//     //terra_steel
//     terra_plate(event, ['botania:manasteel_ingot', 'botania:mana_pearl', 'botania:mana_diamond', 'botania:rune_mana'], 'botania:terrasteel_ingot', 500000)
//     terra_plate(event, ['kubejs:mana_resistor', 'kubejs:mana_capacitor', 'kubejs:mana_diode', 'gtceu:good_electronic_circuit', 'kubejs:mana_cpu_chip'], 'kubejs:mana_electronic_circuit', 100000)
//     terra_plate(event, ['biomesoplenty:blood_bucket', 'biomesoplenty:eyebulb', 'botania:rune_fire'], 'bloodmagic:life_essence_bucket', 50000)
//     terra_plate(event, ['gtceu:lv_combustion', 'gtceu:mana_steel_gear', '#gtceu:circuits/mv', 'botania:rune_fire', 'botania:rune_air', 'botania:rune_mana'], 'ctnhcore:mana_generator_turbine_tier1', 10000)
//     terra_plate(event, ['gtceu:elementium_gear', 'mythicbotany:alfheim_rune', 'mythicbotany:muspelheim_rune', 'gtceu:steam_large_turbine', 'ctnhcore:mana_generator_turbine_tier1', 'kubejs:general_circuit_ev'], 'ctnhcore:mana_generator_turbine_tier2', 100000)
//     event.recipes.gtceu.mana_reactor('life_essence')
//         .itemInputs(['biomesoplenty:eyebulb', 'botania:rune_fire'])
//         .inputFluids(Fluid.of('gtceu:mana', 1000))
//         .inputFluids(Fluid.of('biomesoplenty:blood', 4000))
//         .outputFluids(Fluid.of('bloodmagic:life_essence_fluid', 4000))
//         .circuit(2)
//         .EUt(480)
//         .duration(40)
//         //mana_reactor
//     event.recipes.gtceu.mana_reactor('hydroangeas')
//         .itemInputs('botania:hydroangeas')
//         .inputFluids(Fluid.of('minecraft:water', 8000))
//         .outputFluids(Fluid.of('gtceu:mana', 800))
//         .duration(600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('kekimurus')
//         .notConsumable('botania:kekimurus')
//         .itemInputs('minecraft:cake')
//         .outputFluids(Fluid.of('gtceu:mana', 280))
//         .duration(500)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('munchdew')
//         .notConsumable('botania:munchdew')
//         .itemInputs('16x #minecraft:leaves')
//         .outputFluids(Fluid.of('gtceu:mana', 64))
//         .duration(80)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('rosa_arcana')
//         .notConsumable('botania:rosa_arcana')
//         .inputFluids(Fluid.of('enderio:xp_juice', 2000))
//         .outputFluids(Fluid.of('gtceu:mana', 150))
//         .duration(100)
//         .EUt(7)
//         //热爆花
//     event.recipes.gtceu.mana_reactor('entropinnyum1')
//         .notConsumable('botania:entropinnyum')
//         .itemInputs('minecraft:tnt')
//         .outputFluids(Fluid.of('gtceu:mana', 180))
//         .duration(100)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('entropinnyum2')
//         .notConsumable('botania:entropinnyum')
//         .itemInputs('gtceu:industrial_tnt')
//         .outputFluids(Fluid.of('gtceu:mana', 750))
//         .duration(100)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('entropinnyum3')
//         .notConsumable('botania:entropinnyum')
//         .itemInputs('gtceu:dynamite')
//         .outputFluids(Fluid.of('gtceu:mana', 400))
//         .duration(100)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('entropinnyum4')
//         .notConsumable('botania:entropinnyum')
//         .itemInputs('gtceu:powderbarrel')
//         .outputFluids(Fluid.of('gtceu:mana', 90))
//         .duration(100)
//         .EUt(7)
//         //粘球草
//     event.recipes.gtceu.mana_reactor('narslimmus')
//         .notConsumable('botania:narslimmus')
//         .itemInputs('64x minecraft:slime_ball')
//         .outputFluids(Fluid.of('gtceu:mana', 240))
//         .duration(250)
//         .EUt(7)
//         //炽玫瑰
//     event.recipes.gtceu.mana_reactor('thermalily')
//         .notConsumable('botania:thermalily')
//         .inputFluids(Fluid.of('minecraft:lava', 10000))
//         .outputFluids(Fluid.of('gtceu:mana', 480))
//         .duration(900)
//         .EUt(7)
//         //石中姬
//     //圆石石头
//     event.recipes.gtceu.mana_reactor('stonesia_cobblestone')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('320x #forge:cobblestone')
//         .outputFluids(Fluid.of('gtceu:mana', 32))
//         .duration(800)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_stone')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('320x #forge:stone')
//         .outputFluids(Fluid.of('gtceu:mana', 64))
//         .duration(800)
//         .EUt(7)
//     //矿物
//     event.recipes.gtceu.mana_reactor('stonesia_apatite')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:apatite_dust')
//         .itemInputs('640x #forge:stone')
//         .outputFluids(Fluid.of('gtceu:mana', 320))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_lapis_lazuli')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x minecraft:lapis_lazuli')
//         .itemInputs('640x #forge:stone')
//         .outputFluids(Fluid.of('gtceu:mana', 928))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_ruby')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:ruby_dust')
//         .itemInputs('640x #forge:stone')
//         .outputFluids(Fluid.of('gtceu:mana', 928))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_sapphire')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:sapphire_dust')
//         .itemInputs('640x #forge:stone')
//         .outputFluids(Fluid.of('gtceu:mana', 928))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_sulfur')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:sulfur_dust')
//         .itemInputs('640x #forge:stone')
//         .outputFluids(Fluid.of('gtceu:mana', 928))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_coal')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x minecraft:coal')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 976))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_copper')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:copper_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1024))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_tin')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:tin_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1024))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_redstone')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x minecraft:redstone')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1056))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_quartz')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x minecraft:quartz')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1088))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_zinc')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:zinc_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1088))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_iron')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:iron_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1184))
//         .duration(1600)
//         .EUt(7)
//         event.recipes.gtceu.mana_reactor('stonesia_silver')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:silver_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1245))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_diamond')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:diamond_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1440))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_cinnabar')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:cinnabar_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1504))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_nickel')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:nickel_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1536))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_gold')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:gold_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1856))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_tungsten')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:tungsten_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1856))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_lead')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:lead_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1856))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_uranium')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:uranium_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1856))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_iridum')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:iridum_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1856))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_platinum')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:platinum_metal_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1856))
//         .duration(1600)
//         .EUt(7)
//     event.recipes.gtceu.mana_reactor('stonesia_nsmium')
//         .notConsumable('extrabotany:stonesia')
//         .itemInputs('160x gtceu:nsmium_dust')
//         .itemInputs('640x #forge:stone') 
//         .outputFluids(Fluid.of('gtceu:mana', 1856))
//         .duration(1600)
//         .EUt(7)
//         //双子兰
//     event.recipes.gtceu.mana_reactor('twinstar')
//         .chancedInput('extrabotany:twinstar',5,5)
//         .notConsumable('minecraft:water_bucket')
//         .notConsumable('minecraft:lava_bucket')
//         .outputFluids(Fluid.of('gtceu:mana', 39))
//         .duration(1500)
//         .EUt(2)
//         //彼方兰
//     Ingredient.of('#forge:foods').getItemTypes().forEach(food => {
//         if (food.toString() != 'pumpkin_pie') {
//             let nutrition = food.getFoodProperties().getNutrition()
//             let saturation = food.getFoodProperties().getSaturationModifier()
//             let rate = nutrition + saturation / 2
//             event.recipes.gtceu.mana_reactor(food.toString() + '_gourmaryllis')
//                 .EUt(7)
//                 .itemInputs(food.asIngredient().getItemIds())
//                 .notConsumable('botania:gourmaryllis')
//                 .outputFluids(Fluid.of('gtceu:mana', 3 * Math.floor(Math.pow(rate, 2))))
//                 .duration(30 * rate / 2)
//         }
//     })

//     //瓶装末地空气
//     event.recipes.gtceu.canner('minecraft:ender_air_bottle')
//         .itemInputs('minecraft:glass_bottle')
//         .inputFluids(Fluid.of('gtceu:ender_air', 250))
//         .itemOutputs('botania:ender_air_bottle')
//         .duration(20)
//         .EUt(8)

//     //custom
//     runic_altar(event, ['minecraft:kelp', '#minecraft:boats', 'minecraft:sugar_cane', 'minecraft:fishing_rod', 'minecraft:lily_pad', 'ars_nouveau:blue_archwood_log'], "2x botania:rune_water", 6000)
//     runic_altar(event, ['gtceu:andesite_alloy_ingot', 'gtceu:calcite_dust', 'minecraft:sandstone', 'minecraft:clay_ball', 'alexscaves:limestone', 'ars_nouveau:green_archwood_log'], "2x botania:rune_earth", 6000)
//     runic_altar(event, ['ars_nouveau:red_archwood_log', 'minecraft:magma_block', 'minecraft:gunpowder', 'minecraft:crimson_fungus', 'minecraft:blaze_powder', 'create:blaze_cake'], "2x botania:rune_fire", 6000)
//     runic_altar(event, ['minecraft:dandelion', 'create:white_sail', 'ars_nouveau:purple_archwood_log', 'create:propeller', 'minecraft:feather', 'minecraft:string'], "2x botania:rune_air", 6000)
//     runic_altar(event, ['botania:quartz_mana', 'botania:mana_powder', 'botania:manaweave_cloth', 'botania:mana_bottle', 'botania:mana_glass', 'botania:mana_cookie'], "botania:rune_mana", 8000)
//     runic_altar(event, ['botania:rune_water', 'botania:rune_fire', 'twilightforest:root', 'minecraft:moss_block', 'minecraft:cherry_sapling', 'twilightforest:hollow_oak_sapling'], "botania:rune_spring", 10000)
//     runic_altar(event, ['botania:rune_earth', 'botania:rune_air', 'twilightforest:cicada', 'create:propeller', 'minecraft:melon_slice', 'minecraft:lilac'], "botania:rune_summer", 10000)
//     runic_altar(event, ['botania:rune_fire', 'botania:rune_air', 'twilightforest:fallen_leaves', 'minecraft:wheat', 'farmersdelight:straw'], "botania:rune_autumn", 10000)
//     runic_altar(event, ['botania:rune_water', 'botania:rune_earth', '#minecraft:wool', 'minecraft:snow_block', 'twilightforest:arctic_fur', 'gtceu:ice_dust'], "botania:rune_winter", 10000)
//     runic_altar(event, ['botania:rune_spring', 'botania:rune_earth', 'botania:rune_pride', 'botania:alfheim_portal', 'botania:terrasteel_ingot'], "mythicbotany:vanaheim_rune", 20000)
//     runic_altar(event, ['botania:rune_air', 'botania:rune_summer', 'botania:rune_lust', '#minecraft:leaves', 'botania:elementium_ingot'], "mythicbotany:alfheim_rune", 20000)
//     runic_altar(event, ['botania:rune_earth', 'botania:rune_spring', 'botania:rune_greed', 'minecraft:grass_block', 'botania:manasteel_ingot'], "mythicbotany:midgard_rune", 20000)

//     event.shaped(
//         Item.of("botania:natura_pylon", 1), [
//             "ADA",
//             "ABA",
//             "CDC"
//         ], {
//             A: "gtceu:terra_steel_foil",
//             B: "botania:mana_pylon",
//             C: "gtceu:terra_steel_ring",
//             D: "botania:mana_pearl"
//         }).id('botania:natura_pylon')
//     event.custom({
//         "type": "botania:petal_apothecary",
//         "ingredients": [{
//                 "item": "alexscaves:primal_magma"
//             },
//             {
//                 "tag": "botania:petals/red"
//             },
//             {
//                 "tag": "botania:petals/gray"
//             },
//             {
//                 "tag": "botania:petals/gray"
//             },
//             {
//                 "item": "gtceu:industrial_tnt"
//             },
//             {
//                 "item": "gtceu:ultra_mana_ingot"
//             },
//             {
//                 "item": "botania:rune_wrath"
//             },
//             {
//                 "item": "botania:rune_fire"
//             }
//         ],
//         "output": {
//             "item": "botania:entropinnyum"
//         },
//         "reagent": {
//             "tag": "botania:seed_apothecary_reagent"
//         }
//     }).id('botania:petal_apothecary/entropinnyum')
// })