ServerEvents.recipes(event => {
    event.recipes.create.compacting('createmetallurgy:graphite_blank_mold', '2x gtceu:graphite_dust') // 石墨坯模
    Object.entries ({ // 三种铸模
        "createmetallurgy:graphite_ingot_mold" : ["B","A"],
        "createmetallurgy:graphite_plate_mold" : ["A","B"],
        "createmetallurgy:graphite_nugget_mold": ["B A"],
        "kubejs:graphite_block_mold": ["A B"]
    }).forEach(([result, recipe]) => {
        event.shaped(Item.of(result, 1), recipe, {
            A: "#forge:tools/hammers",
            B: "createmetallurgy:graphite_blank_mold"
        })
    });
	//耐火砂浆 铸造盆 熔铸盖 玻璃熔铸盖配方
    event.recipes.create.mixing('4x createmetallurgy:refractory_mortar', 
                                ['2x gtceu:fireclay_dust', 'minecraft:sand', 'minecraft:gravel'])
    for (var rcp of [['createmetallurgy:foundry_basin', ["A   A","AB BA","ABCBA","ABBBA","AAAAA"], {C: "kubejs:steel_casing"}],
        ['createmetallurgy:foundry_lid', ["AA AA","ABCBA","ABBBA","A   A"], {C: "ctpp:basic_mechanism"}]]){
        var result = rcp[0],
            recipe = rcp[1],
            target = {A: "gtceu:andesite_alloy_plate", B: "createmetallurgy:refractory_mortar"}
        Object.assign(target, rcp[2]);
        event.recipes.create.mechanical_crafting(result, recipe, target);
    }

    //event.shaped(Item.of("createmetallurgy:casting_basin", 1), 
    //            ["A A", "A A", "ABA"], 
    //            {A: "gtceu:andesite_alloy_plate", B: "gtceu:double_andesite_alloy_plate"})
    //event.shaped(Item.of("createmetallurgy:casting_table", 1), 
    //            ["ABA", "A A", "A A"], 
    //            {A: "gtceu:andesite_alloy_plate", B: "gtceu:double_andesite_alloy_plate"})
    event.shaped(Item.of("createmetallurgy:sturdy_whisk", 1), 
                [" A ", "BCB", "DBD"], 
                {A: "create:shaft", B: "gtceu:obsidian_plate", C: "create:whisk", D: "gtceu:wrought_iron_plate"})
    event.shaped(Item.of("createmetallurgy:foundry_mixer", 1), 
                ["ABA", "CDC", " E "], 
                {A: "ctpp:basic_mechanism", B: "create:shaft", C: "create:copper_casing", D: "create:large_cogwheel", E: "createmetallurgy:sturdy_whisk"})
    event.shaped(Item.of("createmetallurgy:sandpaper_belt", 2), 
                ["AAA", "AAA"], 
                {A: "#create:sandpaper"})
    event.shaped(Item.of("createmetallurgy:mechanical_belt_grinder", 1), 
                ["AAA", "BCB", "DBD" ], 
                {A: "createmetallurgy:sandpaper_belt", B: "create:andesite_casing", C: "ctpp:basic_mechanism", D: "create:shaft"})
    event.shaped(Item.of("createmetallurgy:foundry_basin", 1), 
                ["A A", "ABA", "AAA" ], 
                {A: "tconstruct:seared_brick", B: "create:andesite_casing"})
    event.shaped(Item.of("createmetallurgy:foundry_lid", 1), 
                ["AAA", "ABA", "A A" ], 
                {A: "tconstruct:seared_brick", B: "create:andesite_casing"})
    //粉碎矿物得产物和其概率
    let materials = ['hematite', 'magnetite', 'precious_alloy', 'copper', 'diamond', 'tin', 'silver', 'vanadium_magnetite',
        'spodumene', 'rock_salt', 'salt', 'lepidolite', 'lazurite', 'lapis', 'sodalite', 'calcite', 'graphite', 'coal', 'zinc', 'gold',
        'cassiterite', 'chalcopyrite', 'pyrite', 'iron', 'yellow_limonite', 'malachite', 'oilsands', 'goethite', 'nether_quartz',
        'quartzite', 'opal', 'redstone', 'ruby', 'cinnabar', 'nickel', 'lead', 'pentlandite', 'realgar', 'yellow_garnet', 'red_garnet',
        'basaltic_mineral_sand', 'granitic_mineral_sand', 'beryllium', 'molybdenum', 'molybdenite', 'garnierite', 'pentlandite', 'cobaltite',
        'topaz', 'blue_topaz', 'sulfur', 'chalcocite', 'bornite', 'sphalerite', 'sulfur', 'saltpeter', 'diatomite', 'electrotine', 'alunite',
        'grossular', 'pyrolusite', 'tantalite', 'certus_quartz', 'barite','spessartine','gypsum']
    let materials2 = ['nether_quartz', 'quartzite', 'coal', 'cassiterite', 'salt', 'rock_salt', 'lepidolite', 'blue_topaz', 'saltpeter', 'certus_quartz', 'emerald']
    let materials3 = ['alunite', 'grossular','spessartine']
    let materials4 = ['yellow_garnet', 'red_garnet']
    let materials6 = ['lazurite', 'lapis', 'sodalite']
    let materials5 = ['redstone', 'electrotine']
    materials.forEach(material => {
        if (materials2.includes(material))
            event.recipes.create.crushing([`2x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.6)], `gtceu:raw_${material}`)
        else if (materials3.includes(material))
            event.recipes.create.crushing([`3x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.9)], `gtceu:raw_${material}`)
        else if (materials4.includes(material))
            event.recipes.create.crushing([`5x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.2)], `gtceu:raw_${material}`)
        else if (materials5.includes(material))
            event.recipes.create.crushing([`6x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.5)], `gtceu:raw_${material}`)
        else if (materials6.includes(material))
            event.recipes.create.crushing([`7x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.8)], `gtceu:raw_${material}`)
        else if (material == 'iron' || material == 'copper' || material == 'gold')
            event.recipes.create.crushing([`gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.3)], `minecraft:raw_${material}`)
        else
            event.recipes.create.crushing([`gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.3)], `gtceu:raw_${material}`)
        event.recipes.create.crushing([`gtceu:impure_${material}_dust`, Item.of(`gtceu:impure_${material}_dust`).withChance(0.3)], `gtceu:crushed_${material}_ore`)
        event.recipes.create.splashing(`gtceu:purified_${material}_ore`, `gtceu:crushed_${material}_ore`)
        if (material != 'redstone')
            event.recipes.create.splashing(`gtceu:${material}_dust`, `gtceu:impure_${material}_dust`)
        else
            event.recipes.create.splashing(Item.of(`minecraft:redstone`), `gtceu:impure_${material}_dust`)
    })

    metallurgy(event, `gtceu:rubber_ingot`, 40, [{"fluid": `gtceu:rubber`, "amount": 144}], "superheated")
    //特殊矿物的统一处理
    let ingots = ['precious_alloy', 'silver' , 'nickel', 'lead', 'beryllium', 'molybdenum']
    ingots.forEach(material => {
        event.recipes.create.splashing([`11x gtceu:${material}_nugget`, Item.of(`gtceu:${material}_nugget`, 2).withChance(0.4)], `gtceu:purified_${material}_ore`)
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:${material}`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 100}],"superheated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:${material}`, "amount": 144}], "superheated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:${material}`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 50}], "superheated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:${material}`, "amount": 144}], "superheated")
        metallurgy(event, `gtceu:${material}_ingot`, 80, [{"fluid": `gtceu:${material}`, "amount": 144}], "superheated")
    })
    //一般矿物的统一处理
    // Copper/Iron/Gold Ingot
    let minecraftIngots = ['iron', 'copper', 'gold',]
    minecraftIngots.forEach(material => {
        if (material != 'copper') 
            event.recipes.create.splashing([`11x minecraft:${material}_nugget`, Item.of(`minecraft:${material}_nugget`, 2).withChance(0.4)], `gtceu:purified_${material}_ore`)
        else
            event.recipes.create.splashing([`11x gtceu:copper_nugget`, Item.of(`gtceu:copper_nugget`, 2).withChance(0.4)], `gtceu:purified_copper_ore`)
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:${material}`, "amount": 108},
                                                         {"fluid": "gtceu:slag", "amount": 100}], "heated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:${material}`, "amount": 144}],"heated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:${material}`, "amount": 144},
                                                          {"fluid": "gtceu:slag", "amount": 50}],"heated")
        metallurgy(event, `minecraft:${material}_ingot`, 80, [{"fluid": `gtceu:${material}`,"amount": 144}],"heated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:${material}`,"amount": 144}],"heated")
    })
    let gtceuIngots = ['tin','zinc']
    gtceuIngots.forEach(material => {
        event.recipes.create.splashing([`11x gtceu:${material}_nugget`, Item.of(`gtceu:${material}_nugget`, 2).withChance(0.4)], `gtceu:purified_${material}_ore`)
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:${material}`, "amount": 108},
                                                         {"fluid": "gtceu:slag", "amount": 100}], "heated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:${material}`, "amount": 144}],"heated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:${material}`, "amount": 144},
                                                          {"fluid": "gtceu:slag", "amount": 50}],"heated")
        metallurgy(event, `gtceu:${material}_ingot`, 80, [{"fluid": `gtceu:${material}`,"amount": 144}],"heated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:${material}`,"amount": 144}],"heated")
    })

    // Gems 洗涤
    let gems = ['salt', 'rock_salt', 'lazurite', 'ruby', 'cinnabar', 'opal', 'quartzite', 'realgar', 'topaz', 'blue_topaz', 'grossular','spessartine']
    gems.forEach(material => {
        event.recipes.create.splashing([Item.of(`gtceu:flawless_${material}_gem`).withChance(0.2), Item.of(`gtceu:${material}_gem`).withChance(0.4), Item.of(`gtceu:flawed_${material}_gem`).withChance(0.4)], `gtceu:purified_${material}_ore`)
    })
    event.recipes.create.splashing([Item.of(`gtceu:flawless_nether_quartz_gem`).withChance(0.2), Item.of(`minecraft:quartz`).withChance(0.4), Item.of(`gtceu:flawed_nether_quartz_gem`).withChance(0.4)], `gtceu:purified_nether_quartz_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_diamond_gem`).withChance(0.2), Item.of(`minecraft:diamond`).withChance(0.4), Item.of(`gtceu:flawed_diamond_gem`).withChance(0.4)], `gtceu:purified_diamond_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_coal_gem`).withChance(0.2), Item.of(`minecraft:coal`).withChance(0.4), Item.of(`gtceu:flawed_coal_gem`).withChance(0.4)], `gtceu:purified_coal_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_lapis_gem`).withChance(0.2), Item.of(`minecraft:lapis_lazuli`).withChance(0.4), Item.of(`gtceu:flawed_lapis_gem`).withChance(0.4)], `gtceu:purified_lapis_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_emerald_gem`).withChance(0.2), Item.of(`minecraft:emerald`).withChance(0.4), Item.of(`gtceu:flawed_emerald_gem`).withChance(0.4)], `gtceu:purified_emerald_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_certus_quartz_gem`).withChance(0.2), Item.of(`ae2:certus_quartz_crystal`).withChance(0.4), Item.of(`gtceu:flawed_certus_quartz_gem`).withChance(0.4)], `gtceu:purified_certus_quartz_ore`)
    //以下是对金属的不同标签原矿处理
    //Iron
    let iron = ['hematite', 'magnetite', 'yellow_limonite', 'pyrite', 'goethite', 'basaltic_mineral_sand', 'granitic_mineral_sand']
    iron.forEach(material => {
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:iron`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 125}],"heated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:iron`, "amount": 144}],"heated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:iron`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 75}],"heated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:iron`, "amount": 144}],"heated")
    })

    //Copper
    let copper = ['chalcopyrite', 'malachite', 'chalcocite', 'bornite']
    copper.forEach(material => {
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:copper`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 125}], "heated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:copper`, "amount": 144}], "heated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:copper`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 75}], "heated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:copper`, "amount": 144}   ], "heated")
    })
    
    // Zinc
    let zinc = ['sphalerite']
    zinc.forEach(material => {
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:zinc`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 125}], "superheated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:zinc`, "amount": 144}], "superheated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:zinc`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 75}], "superheated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:zinc`, "amount": 144}], "superheated")
    })

    // Molybdenum 
    let molybdenum = ['molybdenite']
    molybdenum.forEach(material => {
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:molybdenum`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 125}], "superheated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:molybdenum`, "amount": 144}], "superheated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:molybdenum`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 75}], "superheated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:molybdenum`, "amount": 144}], "superheated")
    })

    // Nickle
    let nickel = ['garnierite', 'pentlandite']
    nickel.forEach(material => {
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:nickel`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 125}], "superheated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:nickel`, "amount": 144}], "superheated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:nickel`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 75}], "superheated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:nickel`, "amount": 144}], "superheated")
    })

    // Cobalt
    let cobalt = ['cobaltite']
    cobalt.forEach(material => {
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:cobalt`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 125}], "superheated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:cobalt`, "amount": 144}], "superheated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:cobalt`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 75}], "superheated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:cobalt`, "amount": 144}], "superheated")
    })

    // Manganese
    let manganese = ['pyrolusite']
    manganese.forEach(material => {
        metallurgy(event, `gtceu:crushed_${material}_ore`, 40, [{"fluid": `gtceu:manganese`, "amount": 108},
                                                                {"fluid": "gtceu:slag", "amount": 125}], "superheated")
        metallurgy(event, `gtceu:purified_${material}_ore`, 40, [{"fluid": `gtceu:manganese`, "amount": 144}], "superheated")
        metallurgy(event, `gtceu:impure_${material}_dust`, 40, [{"fluid": `gtceu:manganese`, "amount": 144},
                                                                {"fluid": "gtceu:slag", "amount": 75}], "superheated")
        metallurgy(event, `gtceu:${material}_dust`, 40, [{"fluid": `gtceu:manganese`, "amount": 144}], "superheated")
    })
    //合金配方
    alloy(event, [{"fluid": "gtceu:copper", "amount": 432},
                  {"fluid": "gtceu:zinc", "amount": 144}], 200, [{"fluid": "gtceu:brass", "amount": 576}], "heated")
    alloy(event, [{"fluid": "gtceu:copper", "amount": 432},
                  {"fluid": "gtceu:tin", "amount": 144}], 200, [{"fluid": "gtceu:bronze", "amount": 576}], "heated")
    alloy(event, [{"fluid": "gtceu:bronze", "amount": 576},
                  {"fluid": "gtceu:lead", "amount": 72}], 400, [{"fluid": "gtceu:potin", "amount": 648}], "heated")
    alloy(event, [{"fluid": "gtceu:iron", "amount": 144},
                  {"fluid": "gtceu:tin", "amount": 144}], 100, [{"fluid": "gtceu:tin_alloy", "amount": 288}], "heated")
    //对安山合金粉的处理
    event.recipes.createmetallurgy.melting(Fluid.of('gtceu:andesite_alloy', 144), 'gtceu:andesite_alloy_dust', 90, 'heated')
    event.recipes.createmetallurgy.melting(Fluid.of('gtceu:andesite_alloy', 144), 'gtceu:andesite_alloy_ingot', 90, 'superheated')
    event.recipes.createmetallurgy.casting_in_table('gtceu:andesite_alloy_ingot', [Fluid.of('gtceu:andesite_alloy', 144), 'createmetallurgy:graphite_ingot_mold'], 90)
    event.recipes.createmetallurgy.casting_in_basin('gtceu:andesite_alloy_block', Fluid.of('gtceu:andesite_alloy', 1296), 120)
    
    remove_recipes_id(event, ['create:crushing/raw_copper'])
    remove_recipes_output(event, ['create:crushed_raw_lead',
                                  'create:crushed_raw_copper',
                                  'create:crushed_raw_iron',
                                  'create:crushed_raw_uranium',
                                  'create:crushed_raw_gold',
                                  'create:crushed_raw_zinc',
                                  'create:crushed_raw_osmium',
                                  'create:crushed_raw_platinum',
                                  'create:crushed_raw_silver',
                                  'create:crushed_raw_tin',
                                  'create:crushed_raw_nickel'])
    
    event.recipes.createmetallurgy.casting_in_table('createmetallurgy:foundry_unit',
        [Fluid.of('gtceu:wrought_iron', 288), 'createdieselgenerators:distillation_controller'], 90)
})

//玻璃
ServerEvents.recipes(event => {
    metallurgy(event, `gtceu:glass_dust`, 40, [{"fluid": `tconstruct:molten_glass`, "amount": 125}],"heated")
})

// 熔铸多方块
ServerEvents.recipes(event => {
    let transitional = 'gtceu:firebricks'
    event.recipes.create.sequenced_assembly([
            '2x createmetallurgy:industrial_crucible'
        ], 'gtceu:firebricks', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:wrought_iron_plate']),
            event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:rubber', 144)]),
            event.recipes.createPressing(transitional, [transitional]),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:wrought_iron_screw']),
            event.recipes.createCutting(transitional, [transitional]),
        ]).transitionalItem(transitional)
        .loops(2)
})
// 工业坩埚
ServerEvents.recipes(event => {
    bulkMetallurgy(
        event,
        'ctnhcore:refined_iron_ingot',
        ['gtceu:steel', 1152],
        3600,
        25,
        50
    )
})
