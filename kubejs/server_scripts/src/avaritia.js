ServerEvents.recipes(event => {
    event.remove({output: 'botania:creative_pool'})
    event.remove({output: 'avaritia:star_fuel'})
    event.remove({output: 'enderio:creative_power'})
    event.remove({id: 'avaritia:botania_mana_tablet'})
    remove_recipes_id(event, [
        'avaritia:infinity_ingot',
        'avaritia:infinity_catalyst_eternal',
        'avaritia:infinity_catalyst',
        /avaritia:(.*)neutron_collector/,
        /avaritia:(.*)neutron_compressor/,
        'avaritia:extreme_crafting_table'
    ])
    event.recipes.avaritia.shaped_table(2,
        Item.of('ctnhcore:galaxy_meatball', 1), [
            "ABCDE",
            "FGHIJ",
            "KLMNO",
            "PQRST",
            "UVWXY"
        ], {
            A: 'minecraft:rotten_flesh',
            B: 'minecraft:spider_eye',
            C: 'ends_delight:raw_ender_mite_meat',
            D: 'minecraft:rabbit',
            E: 'minecraft:chicken',
            F: 'mynethersdelight:strider_slice',
            G: 'twilightforest:raw_meef',
            H: 'twilightforest:hydra_chop',
            I: 'ends_delight:raw_dragon_meat',
            J: 'alexsmobs:moose_ribs',
            K: 'mynethersdelight:hoglin_loin',
            L: 'alexscaves:dinosaur_chop',
            M: 'alexsmobs:void_worm_eye',
            N: 'artifacts:everlasting_beef',
            O: 'deep_aether:raw_quail',
            P: 'alexsmobs:kangaroo_meat',
            Q: 'cataclysm:blessed_amethyst_crab_meat',
            R: 'apotheosis:warden_tendril',
            S: 'biomancy:living_flesh',
            T: 'minecraft:beef',
            U: 'biomancy:flesh_bits',
            V: 'twilightdelight:raw_insect',
            W: 'twilightforest:raw_venison',
            X: Item.of('ecologics:crab_claw', '{Damage:0}'),
            Y: 'minecraft:mutton'
        })
    event.recipes.avaritia.shaped_table(2,
        Item.of('ctnhcore:primary_stew', 1), [
            "ABCDE",
            "FGHIJ",
            "KLMNO",
            "PQRST",
            "UVWXY"
        ], {
            A: 'mynethersdelight:plate_of_cold_striderloaf',
            B: 'mynethersdelight:plate_of_ghasta_with_cream',
            C: 'mynethersdelight:hot_wings_bucket',
            D: 'mynethersdelight:magma_cake_slice',
            E: 'mynethersdelight:hot_cream_cone',
            F: 'culturaldelights:eggplant_burger',
            G: 'alexsmobs:mosquito_repellent_stew',
            H: 'createcafe:oreo',
            I: 'createcafe:blood_orange_milk_tea',
            J: 'createcafe:iced_coffee',
            K: 'farmersdelight:honey_glazed_ham',
            L: 'farmersdelight:shepherds_pie',
            M: 'ctnhcore:galaxy_meatball',
            N: 'culturaldelights:exotic_roll_medley',
            O: 'ends_delight:dragon_leg_with_sauce',
            P: 'ends_delight:steamed_dragon_egg',
            Q: 'ends_delight:grilled_shulker',
            R: 'legendarysurvivaloverhaul:glistering_melon_juice',
            S: 'twilightdelight:plate_of_lily_chicken',
            T: 'twilightdelight:plate_of_fiery_snakes',
            U: 'twilightdelight:plate_of_meef_wellington',
            V: 'twilightdelight:tear_drink',
            W: 'biomancy:nutrient_bar',
            X: 'tconstruct:meat_soup',
            Y: 'mynethersdelight:plate_of_stuffed_hoglin'
        })

    event.recipes.avaritia.shaped_table(2,
        Item.of('ctnhcore:crystal_catalyst', 1), [
            "ABCDE",
            "FGHIJ",
            "KLMNO",
            "PQRST",
            "UVWXY"
        ], {
            A: Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:ancient"},gem:"apotheosis:core/warlord"}').weakNBT(),
            B: 'minecraft:totem_of_undying',
            C: 'biomancy:bio_lantern_blue',
            D: Item.of('gtceu:damascus_steel_wrench', '{Damage:0,DisallowContainerItem:0b,GT.Behaviours:{Mode:2b},GT.Tool:{AttackDamage:5.0f,AttackSpeed:-2.5f,DefaultEnchantments:[{id:"minecraft:fortune",lvl:3s}],HarvestLevel:3,MaxDamage:1023,ToolSpeed:10.0f},HideFlags:2}'),
            E: 'bloodmagic:minekey',
            F: 'alexscaves:nuclear_bomb',
            G: 'deep_aether:sun_core',
            H: 'minecraft:heart_of_the_sea',
            I: 'deep_aether:aerwhale_saddle',
            J: Item.of('tconstruct:large_plate', '{Material:"tconstruct:manyullyn"}').weakNBT(),
            K: 'cataclysm:cursed_bow',
            L: 'kubejs:platinum_metal_catalyst_shard1',
            M: 'ctnhcore:primary_stew',
            N: 'kubejs:platinum_metal_catalyst_shard2',
            O: 'cataclysm:the_incinerator',
            P: Item.of('twilightforest:lamp_of_cinders', '{Damage:0}'),
            Q: Item.of('deep_aether:slider_eye', '{Damage:0}'),
            R: 'apotheosis:infused_breath',
            S: 'deep_aether:medal_of_honor',
            T: 'ars_nouveau:wilden_tribute',
            U: 'botania:apothecary_taiga',
            V: 'alexsmobs:transmutation_table',
            W: 'ad_astra:moon_globe',
            X: Item.of('aether:valkyrie_lance', '{Damage:0}'),
            Y: 'extrabotany:pandoras_box'
        })
})