let ingots = ["copper", "bronze", "tin", "steel", "iron", "gold", "diamond", "brass", "zinc", "golden", "lead", "silver", "sulfur", "cinnabar", "niter", "apatite", "niter", "nickel"]
let mods = ["ad_astra", "create"]
let components = ["deep", "raw", "deepslate"]

WorldgenEvents.remove(event => {
	for (let i of ingots) {
		for (let m of mods) {
			for (let c of components) {
				event.removeOres(props => {
					props.blocks = [`${m}:${c}_${i}_ore`, `${m}:${i}_ore`]
				})
			}
		}
	}
})



WorldgenEvents.remove(event => {
  //event.printFeatures("", "minecraft:plains")
  event.removeOres(props => {
				props.blocks = [
          "mythicbotany:elementium_ore",
          "mythicbotany:dragonstone_ore",
          "mythicbotany:gold_ore",]
				})
  
  event.removeFeatureById("underground_ores", [     
    "aether:gravitite_ore",
    "aether:gravitite_ore_buried",
    "aether:ambrosium_ore",
    "aether:zanite_ore",
    "aether:gravitite_ore_buried",
    "create_new_age:magnetite",
    "create_new_age:ore_thorium",
    "ad_astra:moon_iron_ore",
    "ad_astra:deepslate_desh_ore",
    "ad_astra:moon_desh_ore",
    "ad_astra:moon_cheese_ore",
    "ad_astra:moon_ice_shard_ore",
    "ad_astra:mars_diamond_ore",
    "ad_astra:mars_ice_shard_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:mars_ostrum_ore",
    "twilightforest:legacy_coal_ore",
    "twilightforest:legacy_iron_ore",
    "twilightforest:legacy_gold_ore",
    "twilightforest:legacy_redstone_ore",
    "twilightforest:legacy_diamond_ore",
    "twilightforest:legacy_lapis_ore",
    "twilightforest:legacy_copper_ore",
    
    "createmetallurgy:wolframite_ore"
  ])
})


GTCEuStartupEvents.registry("gtceu:tag_prefix", event => {
	event.create("jupiter_stone", "ore")
		.stateSupplier(() => Block.getBlock("adastra:jupiter_stone").defaultBlockState())
		.baseModelLocation("ad_extendra:block/jupiter_stone")
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(ItemGenerationCondition.hasOreProperty)
})
