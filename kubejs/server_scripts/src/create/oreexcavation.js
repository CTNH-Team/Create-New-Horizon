ServerEvents.recipes(event => {
    event.remove({ id: /createoreexcavation:ore_vein_type(.*)/ })
    event.remove({ id: /createoreexcavation:drilling\/(.*)/ })
    event.shaped(
        Item.of('createoreexcavation:vein_finder', 1), [
        " AB",
        " CA",
        "C  "
    ], {
        A: "minecraft:amethyst_shard",
        B: "gtceu:wrought_iron_gear",
        C: "minecraft:stick"
    })
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.iron_vein'), 'gtceu:raw_goethite').placement(64, 8, 1666484).id('kubejs:iron_vein').alwaysFinite().veinSize(20, 100).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.copper_vein'), 'minecraft:raw_copper').placement(80, 8, 465123).id('kubejs:copper_vein').alwaysFinite().veinSize(20, 100).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.zinc_vein'), 'gtceu:raw_zinc').placement(80, 8, 235491).id('kubejs:zinc_vein').alwaysFinite().veinSize(20, 55).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.redstone_vein'), 'gtceu:raw_redstone').placement(128, 8, 178819).id('kubejs:redstone_vein').alwaysFinite().veinSize(30, 85).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.coal_vein'), 'gtceu:raw_coal').placement(80, 8, 333566).id('kubejs:coal_vein').alwaysFinite().veinSize(40, 95).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.lapis_vein'), 'gtceu:raw_lapis').placement(128, 8, 266484).id('kubejs:lapis_vein').alwaysFinite().veinSize(10, 40).biomeWhitelist('minecraft:is_overworld').priority(1)
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.oilsands_vein'), 'gtceu:raw_oilsands').placement(128, 8, 168915).id('kubejs:oilsands_vein').alwaysFinite().veinSize(30, 60).biomeWhitelist('minecraft:is_overworld').priority(1)
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.precious_alloy_vein'), 'gtceu:raw_precious_alloy').placement(80, 8, 168784).id('kubejs:precious_alloy_vein').alwaysFinite().veinSize(25, 85).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.nether_quartz_vein'), 'gtceu:raw_nether_quartz').placement(64, 8, 116564).id('kubejs:nether_quartz_vein').alwaysFinite().veinSize(25, 65).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.tin_vein'), 'gtceu:raw_tin').placement(80, 8, 177784).id('kubejs:tin_vein').alwaysFinite().veinSize(20, 100).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.diamond_vein'), 'gtceu:raw_diamond').placement(128, 8, 1715514).id('kubejs:diamond_vein').alwaysFinite().veinSize(25, 85).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.salt_vein'), 'gtceu:raw_salt').placement(64, 8, 168784).id('kubejs:salt_vein').alwaysFinite().veinSize(25, 65).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.magnetite_vein'), 'gtceu:raw_magnetite').placement(64, 8, 264664).id('kubejs:magnetite_vein').alwaysFinite().veinSize(30, 100).biomeWhitelist('minecraft:is_overworld')

    event.recipes.createoreexcavation.vein(Text.translate('ctnh.beryllium_vein'), 'gtceu:raw_beryllium').placement(144, 8, 6889134).id('kubejs:beryllium_vein').alwaysFinite().veinSize(20, 80).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.molybdenum_vein'), 'gtceu:raw_molybdenum').placement(256, 8, 7739134).id('kubejs:molybdenum_vein').alwaysFinite().veinSize(30, 60).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.topaz_vein'), 'gtceu:raw_topaz').placement(64, 8, 667734).id('kubejs:topaz_vein').alwaysFinite().veinSize(30, 65).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.sulfur_vein'), 'gtceu:raw_sulfur').placement(60, 8, 7984516).id('kubejs:sulfur_vein').alwaysFinite().veinSize(40, 100).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.nickel_vein'), 'gtceu:raw_nickel').placement(128, 8, 2649365).id('kubejs:nickel_vein').alwaysFinite().veinSize(20, 60).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.saltpeter_vein'), 'gtceu:raw_saltpeter').placement(128, 8, 689495).id('kubejs:saltpeter_vein').alwaysFinite().veinSize(20, 70).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.pyrolusite_vein'), 'gtceu:raw_pyrolusite').placement(192, 8, 7789695).id('kubejs:pyrolusite_vein').alwaysFinite().veinSize(20, 70).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.certus_vein'), 'gtceu:raw_certus_quartz').placement(128, 8, 7964355).id('kubejs:certus_vein').alwaysFinite().veinSize(30, 80).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.ancient_debris_vein'), 'minecraft:ancient_debris').placement(256, 8, 9984655).id('kubejs:ancient_debris_vein').alwaysFinite().veinSize(20, 45).biomeWhitelist('minecraft:is_nether')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.seawater_vein'), 'gtceu:seawater_bucket').placement(64, 8, 12345678).id
    ('kubejs:seawater_vein').alwaysFinite().veinSize(3000, 8000).biomeWhitelist('minecraft:is_ocean').biomeWhitelist('minecraft:is_overworld')

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_goethite').withChance(0.5),
        Item.of('gtceu:raw_yellow_limonite').withChance(0.25),
        Item.of('gtceu:raw_hematite').withChance(0.15),
        Item.of('gtceu:raw_malachite').withChance(0.1)], 'kubejs:iron_vein', 300)
        .id("kubejs:iron_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(192)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_chalcopyrite').withChance(0.4),
        Item.of('minecraft:raw_iron').withChance(0.15),
        Item.of('gtceu:raw_pyrite').withChance(0.25),
        Item.of('minecraft:raw_copper').withChance(0.2)], 'kubejs:copper_vein', 300)
        .id("kubejs:copper_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(192)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_zinc').withChance(0.4),
        Item.of('minecraft:raw_copper').withChance(0.4),
        Item.of('gtceu:raw_yellow_limonite').withChance(0.1),
        Item.of('gtceu:raw_malachite').withChance(0.1)], 'kubejs:zinc_vein', 300)
        .id("kubejs:zinc_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(256)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_redstone').withChance(0.4),
        Item.of('gtceu:raw_ruby').withChance(0.3),
        Item.of('gtceu:raw_cinnabar').withChance(0.3)], 'kubejs:redstone_vein', 400)
        .id("kubejs:redstone_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(192)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_coal').withChance(1)], 'kubejs:coal_vein', 100)
        .id("kubejs:coal_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(192)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_lazurite').withChance(0.4),
        Item.of('gtceu:raw_sodalite').withChance(0.4),
        Item.of('gtceu:raw_lapis').withChance(0.1),
        Item.of('gtceu:raw_calcite').withChance(0.1)], 'kubejs:lapis_vein', 400)
        .id("kubejs:lapis_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(256)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_oilsands').withChance(1)], 'kubejs:oilsands_vein', 300)
        .id("kubejs:oilsands_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(192)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_precious_alloy').withChance(0.4),
        Item.of('gtceu:raw_silver').withChance(0.2),
        Item.of('gtceu:raw_tin').withChance(0.2),
        Item.of('minecraft:raw_copper').withChance(0.2)], 'kubejs:precious_alloy_vein', 400)
        .id("kubejs:precious_alloy_vein1")
        .drill('createoreexcavation:diamond_drill')
        .fluid('gtceu:lubricant 50')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_nether_quartz').withChance(0.5),
        Item.of('gtceu:raw_quartzite').withChance(0.4),
        Item.of('gtceu:raw_opal').withChance(0.1)], 'kubejs:nether_quartz_vein', 400)
        .id("kubejs:nether_quartz_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_tin').withChance(0.7),
        Item.of('gtceu:raw_cassiterite').withChance(0.3)], 'kubejs:tin_vein', 300)
        .id("kubejs:tin_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(192)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_diamond').withChance(0.4),
        Item.of('gtceu:raw_graphite').withChance(0.4),
        Item.of('gtceu:raw_coal').withChance(0.2)], 'kubejs:diamond_vein', 400)
        .id("kubejs:diamond_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_magnetite').withChance(0.6),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(0.2),
        Item.of('gtceu:raw_precious_alloy').withChance(0.2)], 'kubejs:magnetite_vein', 300)
        .id("kubejs:magnetite_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(256)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_rock_salt').withChance(0.3),
        Item.of('gtceu:raw_salt').withChance(0.3),
        Item.of('gtceu:raw_lepidolite').withChance(0.2),
        Item.of('gtceu:raw_spodumene').withChance(0.2)], 'kubejs:salt_vein', 300)
        .id("kubejs:salt_vein1")
        .fluid('gtceu:lubricant 50')
        .stress(192)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_beryllium').withChance(0.6),
        Item.of('gtceu:raw_emerald').withChance(0.4)], 'kubejs:beryllium_vein', 200)
        .id("kubejs:beryllium_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(288)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_molybdenum').withChance(0.2),
        Item.of('gtceu:raw_wulfenite').withChance(0.5),
        Item.of('gtceu:raw_molybdenite').withChance(0.2),
        Item.of('gtceu:raw_powellite').withChance(0.1)], 'kubejs:molybdenum_vein', 300)
        .id("kubejs:molybdenum_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_nickel').withChance(0.3),
        Item.of('gtceu:raw_garnierite').withChance(0.4),
        Item.of('gtceu:raw_cobaltite').withChance(0.2),
        Item.of('gtceu:raw_pentlandite').withChance(0.1)], 'kubejs:nickel_vein', 250)
        .id("kubejs:nickel_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_topaz').withChance(0.3),
        Item.of('gtceu:raw_blue_topaz').withChance(0.3),
        Item.of('gtceu:raw_chalcocite').withChance(0.2),
        Item.of('gtceu:raw_bornite').withChance(0.2)], 'kubejs:topaz_vein', 400)
        .id("kubejs:topaz_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:netherite_drill')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_sulfur').withChance(0.6),
        Item.of('gtceu:raw_pyrite').withChance(0.15),
        Item.of('gtceu:raw_sphalerite').withChance(0.25)], 'kubejs:sulfur_vein', 200)
        .id("kubejs:sulfur_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(288)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_saltpeter').withChance(0.3),
        Item.of('gtceu:raw_diatomite').withChance(0.3),
        Item.of('gtceu:raw_electrotine').withChance(0.2),
        Item.of('gtceu:raw_alunite').withChance(0.2)], 'kubejs:saltpeter_vein', 300)
        .id("kubejs:saltpeter_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_pyrolusite').withChance(0.3),
        Item.of('gtceu:raw_grossular').withChance(0.4),
        Item.of('gtceu:raw_tantalite').withChance(0.3)], 'kubejs:pyrolusite_vein', 300)
        .id("kubejs:pyrolusite_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:netherite_drill')
        .stress(768)

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_certus_quartz').withChance(0.45),
        Item.of('gtceu:raw_quartzite').withChance(0.25),
        Item.of('gtceu:raw_barite').withChance(0.3)], 'kubejs:certus_vein', 300)
        .id("kubejs:certus_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:diamond_drill')
        .stress(512)

    event.recipes.createoreexcavation.drilling(
        [Item.of('minecraft:ancient_debris').withChance(0.1),
        Item.of('gtceu:raw_sulfur').withChance(0.35),
        Item.of('gtceu:raw_precious_alloy').withChance(0.3),
        Item.of('gtceu:raw_nether_quartz').withChance(0.25)], 'kubejs:ancient_debris_vein', 400)
        .id("kubejs:ancient_debris_vein1")
        .fluid('gtceu:lubricant 50')
        .drill('createoreexcavation:netherite_drill')
        .stress(1024)
    
    event.recipes.createoreexcavation.extracting(
        { fluid: 'gtceu:seawater', amount: 1000 }, 'kubejs:seawater_vein', 250 )
        .id('kubejs:seawater_extraction')
        .fluid('gtceu:lubricant 50')
        .stress(192)
    
})

