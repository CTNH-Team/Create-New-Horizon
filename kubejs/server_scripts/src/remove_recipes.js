ServerEvents.recipes(event => {
    remove_recipes_type(event, [
        "twilightforest:uncrafting_table",
        "ad_astra:compressing",
        "ad_astra:refining",
        "ad_astra:compressing",
        "ad_astra:alloying",
        "ad_astra:cryo_freezing",
        "createdieselgenerators:hammering",
    ])
    remove_recipes_id(event, [
        "create:pressing/iron_ingot",
        "create:crafting/materials/andesite_alloy_from_zinc",
        "create:crafting/materials/andesite_alloy",
        "farmersdelight:paper_from_tree_bark",
        "create:pressing/sugar_cane",
        "create:crafting/kinetics/water_wheel",
        "create:crafting/kinetics/large_water_wheel",
        "create:crafting/kinetics/mechanical_drill",
        "gtceu:shapeless/dust_brass",
        "gtceu:shapeless/dust_bronze",
        "gtceu:shapeless/potin_dust",
        "create:crafting/kinetics/mechanical_mixer",
        "create:crafting/materials/rose_quartz",
        "create:crafting/materials/electron_tube",
        "create:crafting/materials/copper_ingot",
        "create:crafting/kinetics/deployer",
        "create:crafting/kinetics/contraption_controls",
        "create:crafting/appliances/slime_ball",
        "create:mechanical_crafting/crushing_wheel",
        "create_new_age:shaped/redstone_magnet",
        "create_new_age:shapeless/energiser_t1",
        "minecraft:lightning_rod",
        "create_new_age:pressing/overcharged_gold",
        "create_new_age:pressing/overcharged_iron",
        "enderio:void_chassis",
        "gtceu:shaped/vacuum_tube",
        "gtceu:shaped/steam_turbine_lv",
        "tfmg:sequenced_assembly/steel_mechanism",
        "tfmg:sequenced_assembly/turbine_engine",
        "tfmg:distillation/heavy_oil",
        "create:milling/charcoal",
        "botania:mana_fluxfield",
        "gtceu:shapeless/iron_magnetic_stick",
        "alexscaves:azure_neodymium_ingot",
        "alexscaves:scarlet_neodymium_ingot",
        "create:crafting/kinetics/mechanical_bearing",
        "biomesoplenty:tnt_from_bop_sand",
        "mynethersdelight:tnt_alt",
        "enderio:alloy_smelting/pulsating_alloy_ingot",
        "enderio:alloy_smelting/vibrant_alloy_ingot",
        "enderio:alloy_smelting/copper_alloy_ingot",
        "enderio:alloy_smelting/redstone_alloy_ingot",
        "enderio:alloy_smelting/end_steel_ingot",
        "enderio:alloy_smelting/dark_steel_ingot",
        "enderio:alloy_smelting/conductive_alloy_ingot",
        "tetranichematerials:red_gold_powder",
        "gtceu:shaped/steam_turbine_mv",
        "gtceu:shaped/steam_turbine_hv",
        "enderio:copper_ingot_from_smelting",
        "tetranichematerials:copper_ingot_from_powder_smelting",
        "bloodmagic:smelting/ingot_copper",
        "tetranichematerials:copper_ingot_from_powder_blasting",
        "bloodmagic:smelting/blasting_ingot_copper",
        "enderio:iron_ingot_from_blasting",
        "tetranichematerials:iron_ingot_from_powder_blasting",
        "bloodmagic:smelting/ingot_iron",
        "enderio:iron_ingot_from_smelting",
        "tetranichematerials:iron_ingot_from_powder_smelting",
        "enderio:gold_ingot_from_smelting",
        "tetranichematerials:gold_ingot_from_powder_smelting",
        "bloodmagic:smelting/ingot_gold",
        "bloodmagic:smelting/blasting_ingot_gold",
        "tetranichematerials:gold_ingot_from_powder_blasting",
        "tetranichematerials:steel_ingot_from_powder_blasting",
        "tetranichematerials:steel_powder",
        "extendedcrafting:handheld_table",
        "create_new_age:shaped/layered_magnet",
        "enderio:stick",
        "enderio:wood_gear",
        "enderio:wood_gear_corner",
        "enderio:stirling_generator",
        "minecraft:iron_trapdoor",
        "create:mixing/brass_ingot",
        "ad_astra:wrench",
        "gtceu:combustion_generator/raw_oil",
        "createdieselgenerators:basin_fermenting/fermented_spider_eye",
        "createoreexcavation:vein_finder",
        "functionalstorage:oak_drawer_alternate_x1",
        "functionalstorage:oak_drawer_alternate_x2",
        "functionalstorage:oak_drawer_alternate_x4",
        "javd:portal_block",
        "tetranichematerials:grave_steel_ingot",
        "create_new_age:shaped/netherite_magnet",
        "create_new_age:shaped/fluxuated_magnetite",
        "gtceu:assembler/oak_stairs",
        "gtceu:assembler/spruce_stairs",
        "gtceu:assembler/birch_stairs",
        "gtceu:assembler/jungle_stairs",
        "gtceu:assembler/acacia_stairs",
        "gtceu:assembler/dark_oak_stairs",
        "gtceu:assembler/mangrove_stairs",
        "gtceu:assembler/cherry_stairs",
        "gtceu:assembler/bamboo_stairs",
        "gtceu:assembler/crimson_stairs",
        "gtceu:assembler/warped_stairs",
        "gtceu:extractor/extract_ammonium_chloride_dust",
        "enderio:void_chassis",
        "hostilenetworks:sim_chamber",
        "hostilenetworks:loot_fabricator",
        "hostilenetworks:deep_learner",
        "hostilenetworks:framework",
        "ae2things:cells/disk_drive_1k",
        "vintageimprovements:pressing/cobalt_ingot",
        "vintageimprovements:pressing/rhodium_ingot",
        "vintageimprovements:pressing/uranium_ingot",
        "vintageimprovements:pressing/rose_gold_ingot",
        "vintageimprovements:pressing/vanadium_ingot",
        "vintageimprovements:pressing/invar_ingot",
        "vintageimprovements:pressing/lead_ingot",
        "vintageimprovements:pressing/tin_ingot",
        "vintageimprovements:pressing/andesite_alloy",
        "vintageimprovements:pressing/bronze_ingot",
        "vintageimprovements:pressing/silver_ingot",
        "vintageimprovements:pressing/platinum_ingot",
        "vintageimprovements:pressing/palladium_ingot",
        "vintageimprovements:pressing/zinc_ingot",
        "vintageimprovements:pressing/nickel_ingot",
        "vintageimprovements:pressing/osmium_ingot",
        "aether:aether_saddle",
        "gtceu:extruder/nan_certificate",
        "vintageimprovements:pressurizing/sulfuric_acid",
        "vintageimprovements:pressurizing/sulfur_trioxide_alt",
        "vintageimprovements:pressurizing/sulfur_trioxide",
        "vintageimprovements:pressurizing/sulfur_dioxide",
        "vintageimprovements:craft/sulfur_items_to_block",
        "enderio:sag_milling/ender_pearl",
        "gtceu:electrolyzer/decomposition_electrolyzing_clay",
        "expatternprovider:circuit_cutter",
        "createdieselgenerators:compression_molding/bucket",
        "sophisticatedstorage:backpack_stack_upgrade_omega_tier_from_storage_stack_upgrade_omega_tier",
        "sophisticatedstorage:stack_upgrade_omega_tier",
        "sophisticatedstorage:void_upgrade",
        "extrabotany:terra_plate/the_universe",
        "gtceu:electrolyzer/decomposition_electrolyzing_wolframite",
        "gtceu:electrolyzer/decomposition_electrolyzing_tarkianite",
        "gtceu:electrolyzer/decomposition_electrolyzing_rheniite",
        "gtceu:electrolyzer/decomposition_electrolyzing_palladium_sulfide",
        "gtceu:electrolyzer/decomposition_electrolyzing_ruthenium_amalgam",
        "gtceu:electrolyzer/decomposition_electrolyzing_osmium_iron_spinel",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_rail",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_powered_rail",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_activator_rail",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_detector_rail",
        "gtceu:electric_blast_furnace/blast_high_temp_wrought_precursor",
        "gtceu:electric_blast_furnace/blast_high_temp_wrought_precursor_gas",
        "gtceu:vacuum_freezer/cool_hot_high_temp_wrought_precursor_ingot",
        "tconstruct:smeltery/melting/metal/iron/ingot_1",
        "tconstruct:smeltery/melting/metal/gold/powered_rail",
        "tconstruct:smeltery/melting/metal/iron/nugget_3",
        "tconstruct:smeltery/seared/melter",
        "tconstruct:smeltery/casting/seared/smeltery_controller",
        "tconstruct:smeltery/melting/glass/sand",
        "tconstruct:smeltery/melting/glass/sand_cast",
        "tconstruct:smeltery/scorched/alloyer",
        "tconstruct:tables/cast_chest",
        "sophisticatedstorage:controller",
        "sophisticatedstorage:void_upgrade",
        "vintageimprovements:grinder_polishing/rose_quartz",
        "vintageimprovements:craft/belt_grinder",
        "vintageimprovements:craft/grinder_belt",
        "create:pressing/juperium_ingot",
        "create:pressing/saturlyte_ingot",
        "create:pressing/radium_ingot",
        "create:pressing/electrolyte_ingot",
        "create:pressing/plutonium_ingot",
        "create:pressing/neptunium_ingot",
        "create:pressing/uranium_ingot",
        "gtceu:shaped/bronze_primitive_blast_furnace",
        "gtceu:smelting/wrought_iron_nugget",
        //工作台制作箔和弹簧
        /gtceu:shaped\/foil_(.*)/,
        /gtceu:shaped\/spring_(.*)/,
        //末影之眼块合成末影之眼
        'gtceu:shapeless/block_decompress_ender_eye',
        'gtceu:forge_hammer/hammer_ender_eye_block_to_gem',
        //非中央厨房南瓜派配方
        'gtceu:shapeless/pumpkin_pie_from_dough',
        'deep_aether:pumpkin_pie',
        'aether:moa_egg_pumpkin_pie',
        //湿件研究站
        'gtceu:research_station/1x_gtceu_wetware_processor_assembly',
        'gtceu:research_station/1x_gtceu_wetware_processor_computer',
        //铁板方块
        'ad_astra:iron_plating',
        //压肉块
        'biofactory:compacting/flesh_block_from_flesh_bits'
    ])
    remove_recipes_output(event, [
        "create:cart_assembler",
        "create:portable_storage_interface",
        "create:rotation_speed_controller",
        "create:belt_connector",
        "angelblockrenewed:angel_block",
        "create:goggles",
        "tetranichematerials:lockwood_ingot",
        "create:shaft",
        "create:encased_fan",
        "create:windmill_bearing",
        "create:depot",
        "create:mechanical_press",
        "create:large_cogwheel",
        "create_new_age:carbon_brushes",
        "create_new_age:generator_coil",
        "tfmg:screw",
        "create:spout",
        "tfmg:turbine_blade",
        "thermal:constantan_ingot",
        "create:cogwheel",
        "create:millstone",
        "enderio:soularium_ingot",
        "enderio:energetic_alloy_ingot",
        "ad_astra:desh_fluid_pipe",
        "ad_astra:ostrum_fluid_pipe",
        "ad_astra:fluid_pipe_duct",
        "tconstruct:seared_brick",
        "tconstruct:grout",
        "tconstruct:puny_smelting",
        "tconstruct:seared_fuel_tank",
        "tconstruct:seared_fuel_gauge",
        "tconstruct:seared_ingot_tank",
        "tconstruct:seared_ingot_gauge",
        'botania:lens_normal',
        'botania:lens_magnet',
        /vintageimprovements:(.*)_sheet/,
        /vintageimprovements:(.*)_rod/,
        /vintageimprovements:(.*)_wire/,
        /gtceu:high_temp_wrought_precursor_(.*)/,
        'gtceu:small_high_temp_wrought_precursor_dust',
        'gtceu:tiny_high_temp_wrought_precursor_dust',
        /mae2:(.*)x_crafting_accelerator/

    ])
    remove_recipes_input(event, [
        "thermal:constantan_ingot"
    ])

    event.remove({ id: /thermal:parts(.*)_gear/ })
    event.remove({ output: /botania:apothecary_(.*)/ })
    event.remove({ output: /gtceu:(.*)_gem/, type: "minecraft:crafting_shapeless", input: /gtceu:flawless_(.*)_gem/ })
    event.remove({ type: "create:mixing", output: "create:andesite_alloy" })
    event.remove({ output: "#forge:plates", type: "minecraft:crafting_shaped" })
    event.remove({ output: "#forge:chipped_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:flawed_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:flawless_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:exquisite_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ mod: "ad_astra", type: "minecraft:smelting", output: "#forge:ingots" })
    event.remove({ mod: "ad_astra", type: "minecraft:smelting", output: "#forge:gems" })
    event.remove({ mod: "ad_extendra", type: "minecraft:smelting", output: "#forge:ingots" })
    event.remove({ mod: "ad_extendra", type: "minecraft:smelting", output: "#forge:gems" })
    event.remove({ mod: "createmetallurgy", not: { type: "createmetallurgy:belt_grinder" } })
    event.remove({ mod: "aether", type: "minecraft:crafting_shaped", id: /aether:skyroot_(.*)/ })
    event.remove({ id: "gtceu:large_chemical_reactor/raw_palladium_separation" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_niobium_oxide" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_tantalite_oxide" })
    event.remove({ id: "gtceu:centrifuge/rare_earth_separation" })
    event.remove({ id: "gtceu:shaped/casing_hsse_sturdy" })
    event.remove({ id: "gtceu:assembler/casing_hsse_sturdy" })
    event.remove({ id: "gtceu:shaped/diamond_sword" })
    event.remove({ id: "gtceu:electric_blast_furnace/titanium_from_tetrachloride" })
    event.remove({ id: "gtceu:chemical_reactor/titaniumtetrachloride" })
    event.remove({ id: "gtceu:electrolyzer/tungstic_acid_electrolysis" })
    event.remove({ id: "gtceu:mixer/graphene" })
    event.remove({ id: "gtceu:create_mixer/graphene" })
    event.remove({ id: "ars_nouveau:novice_spell_book" })
    event.remove({ id: "gtceu:neutron_activator/naquadah" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_chloride" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_dioxide_dissolving" })
    event.remove({ id: "gtceu:electric_blast_furnace/iridium_metal_residue_processh" })
    event.remove({ id: "gtceu:centrifuge/iridium_metal_residue_separation" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_chloride" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_chloride_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/raw_platinum_separation" })
    event.remove({ id: "gtceu:chemical_reactor/raw_platinum_separation" })
    event.remove({ id: "gtceu:electric_blast_furnace/refined_platinum_salt_dust_ebf" })
    event.remove({ id: "gtceu:electric_blast_furnace/iridium_metal_residue_process" })
    event.remove({ id: "gtceu:centrifuge/platinum_group_sludge_dust" })
    event.remove({ id: "gtceu:smelting/smelt_dust_bedrock_dust_to_ingot" })
    event.remove({ id: "gtceu:arc_furnace/arc_bedrock_dust_dust" })
    event.remove({ id: "vintageimprovements:curving/iron_sheet" })
    event.remove({ id: "gtceu:chemical_reactor/indium_concentrate_separation" })
    event.remove({ id: "gtceu:chemical_reactor/indium_concentrate_separation_4x" })
    event.remove({ id: "gtceu:large_chemical_reactor/indium_concentrate_separation_4x" })
    event.remove({ id: "gtceu:large_chemical_reactor/indium_concentrate_separation_4x" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_aluminium_sulfite" })
    event.remove({ id: "ironfurnaces:augments/augment_generator" })
    event.remove({ id: "ironfurnaces:rainbow_plating" })
    event.remove({ id: "gtceu:large_chemical_reactor/phosphoric_acid_from_pentoxide" })
    event.remove({ id: "gtceu:bender/bend_graphite_ir_plate_ingot_to_double_plate" })
    event.remove({ id: "gtceu:shaped/large_bronze_boiler" })
    event.remove({ id: "gtceu:chemical_reactor/soda_ash_from_carbon_dioxide" })
    event.remove({ id: "gtceu:electric_blast_furnace/blast_adamantite" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_to_plate" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_gear" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_block" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_to_ingot" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_small_gear" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_to_nugget" })
    event.remove({ id: "gtceu:bender/bend_graphite_ir_plate_plate_to_double_plate" })
    event.remove({ id: "gtceu:shaped/plate_double_graphite_ir_plate" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_dioxide_dissolving" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_chloride_separation" })
    event.remove({ id: "gtceu:dehydrator/xenoauric_fluoroantimonic_acid" })
    event.remove({ id: "createdieselgenerators:distillation/acid" })
    event.remove({ id: "gtceu:assembly_line/energy_hatch_uhv" })
    event.remove({ id: "gtceu:rocket_engine/rp_1_mixed_fuel" })
    event.remove({ id: "gtceu:rocket_engine/methylhydrazine_nitrate_rocket_fuel" })
    event.remove({ id: "gtceu:rocket_engine/udmh_rocket_fuel" })
    event.remove({ id: "gtceu:rocket_engine/dense_hydrazine_mixed_fuel" })
    event.remove({ id: "gtceu:gas_turbine/coal_gas" })
    event.remove({ id: "gtceu:gas_turbine/wood_gas" })
    event.remove({ id: "gtceu:combustion_generator/naphtha" })
    event.remove({ id: "gtceu:combustion_generator/diesel" })
    event.remove({ id: "gtceu:combustion_generator/light_fuel" })
    event.remove({ id: "gtceu:shaped/filter_casing_sterile" })
    event.remove({ id: "gtceu:shaped/maintenance_hatch_cleaning" })
    event.remove({ id: "gtceu:kinetic_mixer/kinetic_mixer/graphene" })
    event.remove({ id: "create:kjs/2cy39ggyi10fg4iscosa1udto" })
    event.remove({ id: "extendedcrafting:black_iron_ingot" })
    event.remove({ id: "extendedcrafting:basic_component" })
    event.remove({ id: "extendedcrafting:advanced_component" })
    event.remove({ id: "extendedcrafting:advanced_catalyst" })
    event.remove({ id: "extendedcrafting:basic_catalyst" })
    event.remove({ id: "extendedcrafting:elite_catalyst" })
    event.remove({ id: "extendedcrafting:elite_component" })
    event.remove({ id: "extendedcrafting:crystaltine_component" })
    event.remove({ id: "extendedcrafting:crystaltine_catalyst" })
    event.remove({ id: "extendedcrafting:ultimate_component" })
    event.remove({ id: "extendedcrafting:ultimate_catalyst" })
    event.remove({ id: "extendedcrafting:redstone_component" })
    event.remove({ id: "extendedcrafting:redstone_catalyst" })
    event.remove({ id: "ad_astra:steel_rod" })
    event.remove({ id: "vintageimprovements:craft/steel_rod" })
    event.remove({ id: "extendedcrafting:flux_crafter" })
    event.remove({ id: "extendedcrafting:flux_alternator" })
    event.remove({ id: "vintageimprovements:craft/nickel_rod" })
    event.remove({ id: "vintageimprovements:craft/sulfur_item_to_nuggets" })
    event.remove({ id: "vintageimprovements:craft/sulfur_nuggets_to_item" })
    event.remove({ id: "vintageimprovements:craft/sulfur_block_to_items" })
    event.remove({ id: "extendedcrafting:ender_alternator" })
    event.remove({ id: "extendedcrafting:ender_crafter" })
    event.remove({ id: "extendedcrafting:ender_catalyst" })
    event.remove({ id: "extendedcrafting:ender_component" })
    event.remove({ id: "gtceu:chemical_reactor/calcite_from_quicklime" })
    event.remove({ id: "gtceu:extractor/extract_osmium_tetroxide_dust" })
    event.remove({ id: "gtceu:combustion_generator/light_fuel" })
    event.remove({ id: "gtceu:combustion_generator/diesel" })
    event.remove({ id: "gtceu:combustion_generator/biodiesel" })
    event.remove({ id: "gtceu:combustion_generator/cetane_diesel" })
    event.remove({ id: "gtceu:gas_turbine/benzene" })
    event.remove({ id: "gtceu:gas_turbine/nitrobenzene" })
    event.remove({ id: "gtceu:electric_blast_furnace/iro2" })
    event.remove({ id: "gtceu:large_chemical_reactor/hydrogen_peroxide" })
})