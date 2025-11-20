//ServerEvents.recipes(event => {
//    let fluidmaterials = ['precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium',
//                         'molybdenum', 'brass', 'gold', 'iron', 'bronze', 'copper', 'cobalt', 'manganese', 'slag']
//    fluidmaterials.forEach(fluidmaterial => {
//        tconstruct_casting_all(event, fluidmaterial)
//    })//批量注册匠魂浇筑配方
//
//})
ServerEvents.tags('minecraft:fluid', event => {
	// 标签id，流体id
	let fluidmaterials = ['precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium',
						 'molybdenum', 'brass', 'gold', 'iron', 'bronze', 'copper', 'cobalt', 
						 'manganese', 'slag', 'steel', 'aluminium', 'uranium', 'osmium', 'invar',
						'eleectrum', 'platinum', 'tungsten', 'rose_gold', 'electrum']
	fluidmaterials.forEach(fluidmaterial => {
		event.remove('tconstruct:glass','tconstruct:glass')
		event.removeAll(`tconstruct:${fluidmaterial}`)
	})
})
//浇筑
ServerEvents.recipes(event => {
    event.recipes.tconstruct.casting_table(
		'gtceu:andesite_alloy_ingot', 
		Fluid.of('gtceu:andesite_alloy', 144), 
		'tconstruct:ingot_cast', 
		false, 90
	)

	event.recipes.tconstruct.casting_table(
		'createmetallurgy:foundry_unit',
		Fluid.of('gtceu:wrought_iron', 144), 
		'createdieselgenerators:distillation_controller', 
		false, 90
	)

	event.recipes.tconstruct.casting_table(
		'gtceu:rubber_ingot', 
		Fluid.of('gtceu:rubber', 144), 
		'tconstruct:ingot_cast', 
		false, 90
	)
	
	event.recipes.tconstruct.casting_table(
		'gtceu:snow_steel_ingot', 
		Fluid.of('gtceu:snow_steel', 144), 
		'tconstruct:ingot_cast', 
		false, 90
	)

	event.recipes.tconstruct.casting_table(
		'gtceu:wrought_iron_ingot', 
		Fluid.of('gtceu:wrought_iron', 144), 
		'tconstruct:ingot_cast', 
		false, 90
	)

})
//合金
ServerEvents.recipes(event => {
	event.recipes.tconstruct.alloy(
		Fluid.of('gtceu:brass', 576), 
		[
			Fluid.of('gtceu:zinc', 432),
			Fluid.of('gtceu:copper', 144)
		],
		605
	)

	event.recipes.tconstruct.alloy(
		Fluid.of('gtceu:bronze', 576), 
		[
			Fluid.of('gtceu:tin', 432),
			Fluid.of('gtceu:copper', 144)
		],
		605
	)
})
//融化
ServerEvents.recipes(event => {
	//熔融粘土
	event.recipes.tconstruct.melting(
		Fluid.of("tconstruct:clay", 125),
		"gtceu:fireclay_dust",
		1000,
		200
	)
	//橡胶
	event.recipes.tconstruct.melting(
		Fluid.of('gtceu:rubber', 144),
		'kubejs:rubber_powder',
		400,
		90
	)
	//玻璃
	event.recipes.tconstruct.melting(
		Fluid.of('gtceu:glass', 72),
		'gtceu:glass_dust',
		800,
		90
	)
	//锻铁
	event.recipes.tconstruct.melting(
		Fluid.of('gtceu:wrought_iron', 32),
		'minecraft:iron_nugget',
		600,
		10
	)
	event.recipes.tconstruct.melting(
		Fluid.of('gtceu:wrought_iron', 16),
		'gtceu:wrought_iron_nugget',
		600,
		5
	)
	//贵金属
	event.recipes.tconstruct.melting(
		Fluid.of('gtceu:gold', 64),
		'gtceu:precious_alloy_ingot',
		800,
		40
	)

	//燃料
	melting_fuels(event, 100, 25, 2300, ['gtceu:raw_bio_diesel', 25])//生物柴油
	melting_fuels(event, 100, 50, 3500, ['gtceu:diesel', 5])//柴油
	melting_fuels(event, 200, 75, 5000, ['gtceu:cetane_boosted_diesel', 1])//高十六烷值柴油
	melting_fuels(event, 100, 125, 3800, ['gtceu:gasoline', 25])//汽油
	melting_fuels(event, 200, 200, 4700, ['gtceu:high_octane_gasoline', 1])//高辛烷值汽油
	melting_fuels(event, 200, 30, 4000, ['gtceu:blaze', 100])//烈焰烈焰
	melting_fuels(event, 200, 500, 5700, ['gtceu:pyrotheum', 1])//烈焰之炽焱
	melting_fuels(event, 114514, 1919, 8100, ['gtceu:snow_steel', 999])//雪城钢

})

//合成
ServerEvents.recipes(event => {
    for (let rcp of [
        ['tconstruct:seared_fuel_tank', [" BAB "," BCB "," BCB "," BBB "], {C: "tconstruct:seared_glass"}],
        ['tconstruct:seared_melter', ["BBBBB","BAAAB","BACAB","BADAB","BBBBB"], {C: "create:precision_mechanism", D: "createmetallurgy:foundry_basin"}],
		    ['tconstruct:smeltery_controller', ["BBBBB","BEEEB","BECEB","BADAB","BBBBB"], {C: "tconstruct:seared_melter", D: "ctpp:steel_mechanism", E: "gtceu:rubber_ingot"}]

    ])
    {
        let result = rcp[0],
            recipe = rcp[1],
            target = {A: "tconstruct:seared_brick", B: "tconstruct:seared_bricks"}
        Object.assign(target, rcp[2]);
        event.recipes.create.mechanical_crafting(result, recipe, target);
    }
	event.recipes.create.mixing('8x kubejs:heatproof_smelting_brick_dust', ['4x gtceu:fireclay_dust', '4x kubejs:grout_dust'])//耐热冶炼砖粉
	event.smelting("tconstruct:seared_brick", "kubejs:heatproof_smelting_brick_dust")//焦黑砖
	event.shapeless(Item.of('tconstruct:puny_smelting', 1), ['minecraft:book', 'kubejs:grout_dust'])
	//砖泥粉
	event.shaped(Item.of('kubejs:grout_dust', 2), [
		'CB ',
		'A  ',
		'   '
		],
    	{
		A: '#forge:gravel',
		B: '#forge:sand',
		C: 'gtceu:clay_dust'
	})
	event.shaped(Item.of('kubejs:grout_dust', 8), [
		'CBB',
		'BBA',
		'AAA'
		],
    	{
		A: '#forge:gravel',
		B: '#forge:sand',
		C: 'gtceu:clay_dust'
	})
	event.shaped(Item.of('tconstruct:cast_chest', 1), [
		' A ',
		'CDC',
		'CBC'
		],
    	{
		A: 'tconstruct:ingot_cast',
		B: 'tconstruct:seared_bricks',
		C: 'tconstruct:seared_brick',
		D: '#forge:chests/wooden'
	})

	
})
