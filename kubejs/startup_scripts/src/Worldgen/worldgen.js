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
// WorldgenEvents.add(event =>{
//   event.addOre(ore => {
//     ore.id = "kubejs:venus_ochrum" // (optional, but recommended) custom id for the feature
//     ore.biomes = {id:"ad_astra:venus_wastelands"}
//     ore.addTarget("ad_astra:venus_stone", "create:ochrum") // replace anything in the vanilla stone_ore_replaceables tag with Glowstone

//     ore.count([15, 40])             
//       .squared()                    
//       .triangleHeight(				      
//         anchors.aboveBottom(15),    
//         anchors.absolute(64)	      
//       )								             

//     ore.size = 9                           
//     ore.noSurface = 0                     
//     ore.worldgenLayer = "underground_ores"  
//     ore.chance = 0							            
//   })
// })
WorldgenEvents.remove(event => {
  //event.printFeatures("", "minecraft:plains")
  event.removeOres(props => {
    props.blocks = "tfmg:bauxite"
    props.blocks = "minecraft:nether_gold_ore"
    props.blocks = "mythicbotany:elementium_ore"
    props.blocks = "mythicbotany:dragonstone_ore"
    props.blocks = "mythicbotany:gold_ore"
    props.blocks = "create:ochrum"
	  props.blocks = "createmetallurgy:wolframite_ore"
    props.blocks = "sakuratinker:eezo_ore"
	  props.blocks = "sakuratinker:terracryst_ore"
	  props.blocks = "sakuratinker:terracryst_ore_deepslate"
	  props.blocks = "sakuratinker:prometheum_ore"
	  props.blocks = "sakuratinker:prometheum_ore_deepslate"
	  props.blocks = "sakuratinker:orichalcum_ore"
	  props.blocks = "sakuratinker:orichalcum_ore_deepslate"
  })
  event.removeFeatureById("raw_generation", [
    "ad_astra:moon_iron_ore",
    "ad_astra:deepslate_desh_ore",
    "ad_astra:moon_desh_ore",
    "ad_astra:moon_cheese_ore",
    "ad_astra:moon_ice_shard_ore",
    "ad_astra:mars_diamond_ore",
    "ad_astra:mars_ice_shard_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:mars_ostrum_ore"
  ])
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
    "ad_astra:mars_ostrum_ore"
  ])
  event.removeFeatureById("underground_decoration", [
    "sakuratinker:eezo_ore",
	  "sakuratinker:terracryst_ore",
	  "sakuratinker:terracryst_ore_deepslate",
	  "sakuratinker:prometheum_ore",
	  "sakuratinker:prometheum_ore_deepslate",
	  "sakuratinker:orichalcum_ore",
	  "sakuratinker:orichalcum_ore_deepslate"
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
