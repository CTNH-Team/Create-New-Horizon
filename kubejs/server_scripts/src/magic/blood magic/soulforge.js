ServerEvents.recipes(event => {
  let removeid = ['bloodmagic:soulforge/demon_crucible',
    'bloodmagic:soulforge/demon_crystallizer',
    'bloodmagic:soul_forge',
    'bloodmagic:soulforge/demon_pylon']
  removeid.forEach(r => {
    event.remove({ id: r })
  })
  function soulforge(event,input,output,drain,mindrain){
    event.custom({
      "type": "bloodmagic:soulforge",
      "drain": drain,
      "input0": Item.of(input[0]).toJson(),
      "input1": Item.of(input[1]).toJson(),
      "input2": Item.of(input[2]).toJson(),
      "input3": Item.of(input[3]).toJson(),
      "minimumDrain": mindrain,
      "output": {
        "item": output
      }
    })
    event.recipes.gtceu.hellforge(output)
    .itemInputs(input)
    .itemOutputs(output)
    .EUt(mindrain===0?30:mindrain*20)
    .duration(200)
    .addDataNumber('minimumDrain',mindrain)
    .addDataNumber('drain',drain)
  }
  soulforge(event,['minecraft:cauldron','bloodmagic:reagentvoid','bloodmagic:reagentsight','bloodmagic:reinforcedslate'],'bloodmagic:demoncrucible',100,400)
  soulforge(event,['bloodmagic:soulforge','bloodmagic:reagentmagnetism','bloodmagic:reagentbloodlight','botania:mana_glass'],'bloodmagic:demoncrystallizer',100,500)
  soulforge(event,['bloodmagic:reagentsuppression','bloodmagic:reagentteleposition','bloodmagic:demoncrucible','bloodmagic:demoncrystallizer'],'bloodmagic:demonpylon',50,400)
  soulforge(event,['botania:rune_water','botania:rune_fire','minecraft:wheat_seeds','minecraft:cherry_sapling'],'botania:rune_spring',50,200)
  soulforge(event,['botania:rune_earth','botania:rune_air','farmersdelight:melon_popsicle','gtceu:ice_dust'],'botania:rune_summer',50,200)
  soulforge(event,['botania:rune_fire','botania:rune_air','minecraft:apple','minecraft:honey_bottle'],'botania:rune_autumn',50,200)
  soulforge(event,['botania:rune_water','botania:rune_earth','minecraft:snow_block','minecraft:packed_ice'],'botania:rune_winter',50,200)

  event.custom({
    "type": "bloodmagic:soulforge",
    "drain": 150,
    "input0": Item.of('enderio:empty_soul_vial').toJson(),
    "input1": Item.of('gtceu:nether_star_block').toJson(),
    "input2": Item.of('bloodmagic:reagentbloodlight').toJson(),
    "input3": Item.of('bloodmagic:reagentbinding').toJson(),
    "minimumDrain": 400,
    "output": Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:wither"}}}}').toJson()
  })
  event.recipes.gtceu.hellforge('filled_soul_vial')
    .itemInputs(['enderio:empty_soul_vial','gtceu:nether_star_block','bloodmagic:reagentbloodlight','bloodmagic:reagentbinding'])
    .itemOutputs(Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:wither"}}}}'))
    .EUt(8000)
    .duration(200)
    .addDataNumber('minimumDrain',400)
    .addDataNumber('drain',150)
  event.recipes.extendedcrafting.shaped_table('bloodmagic:soulforge', [
    "     ",
    "A   A",
    "BCDCB",
    "EFGFE",
    "H I H"
  ], {
    A: 'gtceu:dark_steel_plate',
    B: 'gtceu:dark_steel_ingot',
    C: 'gtceu:dark_steel_block',
    D: 'bloodmagic:blankslate',
    E: 'botania:elf_glass_pane',
    F: 'gtceu:small_terra_steel_gear',
    G: 'gtceu:dark_steel_gear',
    H: 'gtceu:dark_steel_rod',
    I: 'botania:rune_fire'
  })
})
