ServerEvents.tags('item',event =>{
    event.remove('twilightforest:portal/activator','#forge:gems/diamonds')
    Ingredient.of("#forge:exquisite_gems").itemIds.forEach((id) =>{
        event.add('alexscaves:deep_one_barters',id)
    })
    let foods = ['farmersdelight:wheet_dough','farmersdelight:rough_pasta','farmersdelight:pumpkin_slice', 'farmersdelight:cabbage_leaf',
        'farmersdelight:minced_beef', 'farmersdelight:beef_patty', 'farmersdelight:chicken_cuts', 'farmersdelight:cooked_chicken_cuts', 'farmersdelight:bacon',
        'farmersdelight:cooked_bacon', 'farmersdelight:cod_slice','farmersdelight:cooked_cod_slice', 'farmersdelight:salmon_slice',
        'farmersdelight:cooked_salmon_slice', 'farmersdelight:mutton_chops', 'farmersdelight:cooked_mutton_chops', 'farmersdelight:ham', 'farmersdelight:smoked_ham',
        'farmersdelight:pie_crust', 'farmersdelight:cake_slice','farmersdelight:apple_pie_slice', 'farmersdelight:sweet_berry_cheesecake_slice', 
        'farmersdelight:chocolate_pie_slice', 'farmersdelight:sweet_berry_cookie', 'farmersdelight:honey_cookie', 'farmersdelight:melon_popsicle', 
        'farmersdelight:glow_berry_custard', 'farmersdelight:fruit_salad','farmersdelight:mixed_salad', 'farmersdelight:nether_salad', 'farmersdelight:barbecue_stick', 
        'farmersdelight:egg_sandwich', 'farmersdelight:chicken_sandwich', 'farmersdelight:hamburger', 'farmersdelight:bacon_sandwich', 'farmersdelight:mutton_wrap', 
        'farmersdelight:dumplings', 'farmersdelight:kelp_roll', 'farmersdelight:kelp_roll_slice', 'farmersdelight:cooked_rice', 'farmersdelight:bone_broth', 
        'farmersdelight:beef_stew', 'farmersdelight:chicken_soup', 'farmersdelight:vegetable_soup', 'farmersdelight:fish_stew', 'farmersdelight:fried_rice',
        'farmersdelight:pumpkin_soup', 'farmersdelight:baked_cod_stew', 'farmersdelight:noodle_soup', 'farmersdelight:bacon_and_eggs', 'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop', 'farmersdelight:mushroom_rice', 'farmersdelight:roasted_mutton_chops', 'farmersdelight:vegetable_noodles',
        'farmersdelight:steak_and_potatoes', 'farmersdelight:ratatouille', 'farmersdelight:squid_ink_pasta', 'farmersdelight:grilled_salmon', 
        'farmersdelight:roast_chicken', 'farmersdelight:stuffed_pumpkin', 'farmersdelight:honey_glazed_ham', 'farmersdelight:shepherds_pie','farmersdelight:dog_food', 
        'twilightdelight:hydra_piece', 'twilightdelight:raw_venison_rib', 'twilightdelight:cooked_venison_rib', 'twilightdelight:raw_meef_slice', 'twilightdelight:cooked_meef_slice', 
        'twilightdelight:raw_tomahawk_smeak', 'twilightdelight:cooked_tomahawk_smeak', 'twilightdelight:raw_insect','twilightdelight:cooked_insect', 'twilightdelight:torchberry_cookie', 
        'twilightdelight:naga_chip', 'twilightdelight:chocolate_wafer', 'twilightdelight:experiment_113', 'twilightdelight:chocolate_113', 'twilightdelight:milky_113', 
        'twilightdelight:glow_113', 'twilightdelight:honey_113','twilightdelight:experiment_110', 'twilightdelight:meef_wrap', 'twilightdelight:ghast_burger', 
        'twilightdelight:hydra_burger', 'twilightdelight:berry_stick', 'twilightdelight:glowstew', 'twilightdelight:mushgloom_sauce', 'twilightdelight:glow_venison_rib_with_pasta', 
        'twilightdelight:mushgloom_meef_pasta','twilightdelight:fried_insect', 'twilightdelight:thousand_plant_stew', 'twilightdelight:grilled_ghast', 
        'twilightdelight:grilled_tomahawk_smeak', 'twilightdelight:borer_tear_soup', 'twilightdelight:ghast_brain_salad', 'twilightdelight:plate_of_lily_chicken', 
        'twilightdelight:plate_of_fiery_snakes', 'twilightdelight:plate_of_meef_wellington','twilightdelight:thorn_rose_tea', 'twilightdelight:torchberry_juice', 
        'twilightdelight:phytochemical_juice', 'twilightdelight:glacier_ice_tea', 'twilightdelight:torchberry_pie_slice', 'twilightdelight:aurora_pie_slice', 
        'nethersdelight:hoglin_loin', 'nethersdelight:hoglin_sirloin', 'nethersdelight:hoglin_ear','nethersdelight:strider_slice', 'nethersdelight:grilled_strider', 
        'nethersdelight:ground_strider', 'nethersdelight:warped_moldy_meat', 'nethersdelight:strider_moss_stew', 'nethersdelight:plate_of_stuffed_hoglin_snout', 
        'nethersdelight:plate_of_stuffed_hoglin_ham', 'nethersdelight:plate_of_stuffed_hoglin_roast', 'nethersdelight:nether_skewer','nethersdelight:magma_gelatin', 'nethersdelight:propelpearl']
    foods.forEach(food =>{
        event.add('forge:foods',food)
    })
    event.add('forge:stripped_logs','gtceu:stripped_rubber_log')
})
ServerEvents.tags('item', event => {
    event.add('curios:curio', 'tiab:time_in_a_bottle')
})
ServerEvents.tags('block_entity_type', event => {
    event.add('tconstruct:side_inventories', 'sophisticatedstorage:controller')
    event.add('tconstruct:side_inventories', 'sophisticatedstorage:chest')
    event.add('tconstruct:side_inventories', /sophisticatedstorage:(.*)_chest/)
    event.add('tconstruct:side_inventories', 'sophisticatedbackpacks:backpack')
    event.add('tconstruct:side_inventories', /sophisticatedbackpacks:(.*)_backpack/)
})

ServerEvents.tags('fluid',event =>{
    event.add('createdieselgenerators:pumpjack_output','gtceu:impure_oil')
    event.remove('createdieselgenerators:pumpjack_output','createdieselgenerators:crude_oil')
})

ServerEvents.tags("entity_type", event => {
    let AllBosses = ['twilightforest:swarm_spider',
        'twilightforest:hedge_spider',
        'minecraft:wither',
        'minecraft:ender_dragon',
        'alexscaves:luxtructosaurus',
        'alexscaves:tremorzilla',
        'ars_nouveau:wilden_boss',
        'artifacts:mimic',
        'cataclysm:ender_guardian',
        'cataclysm:ignis',
        'cataclysm:netherite_monstrosity',
        'cataclysm:the_harbinger',
        'cataclysm:the_leviathan',
        'cataclysm:ancient_remnant',
        'twilightforest:naga',
        'twilightforest:lich',
        'twilightforest:minoshroom',
        'twilightforest:hydra',
        'twilightforest:knight_phantom',
        'twilightforest:ur_ghast',
        'twilightforest:yeti_alpha',
        'twilightforest:snow_queen']
    AllBosses.forEach(boss => {
            event.add("ars_nouveau:drygmy_blacklist", boss)
            event.add("ars_nouveau:jar_blacklist", boss)
            event.add("ars_nouveau:jar_release_blacklist", boss)
    })
})

ServerEvents.tags('block', event => {
  const suffixes = [
    "input_hatch",
    "output_hatch",
    "input_bus",
    "output_bus",
    "laser_target",
    "laser_source",
    "transmitter_hatch",
    "receiver_hatch",
    "maintenance_hatch",
    "parallel_hatch",
    "import_bus",
    "export_bus"
  ]

  // 构造正则表达式，例如 .*(input_hatch|output_hatch|...)
  const regex = new RegExp(`.*(${suffixes.join("|")})$`)

  // 添加符合正则的所有物品到标签
  event.add('forge:hatch', regex)
})
