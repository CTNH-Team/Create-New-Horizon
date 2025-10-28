ServerEvents.recipes(event => {
    //坠星配方
    event.recipes.gtceu.assembler('meteor_capturer')
        .itemInputs(['2x #gtceu:circuits/luv', '2x gtceu:tungsten_steel_frame', 'gtceu:ev_field_generator', '4x gtceu:tungsten_steel_plate', '4x bloodmagic:largebloodstonebrick', 'kubejs:endslate'])
        .inputFluids(Fluid.of('gtceu:epoxy', 576))
        .itemOutputs('ctnhcore:meteor_capturer')
        .EUt(7680)
        .duration(100)
    event.recipes.gtceu.meteor_capturer('stone_iron')
        .itemInputs('minecraft:iron_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 128000))
        .itemOutputs('256x gtceu:iron_ore', '64x gtceu:hematite_ore', '64x gtceu:yellow_limonite_ore',
            '64x gtceu:pyrite_ore', '64x gtceu:magnetite_ore', '64x gtceu:goethite_ore'
        )
        .addData('radius', 6)
        .addData('rock', 'minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('stone_copper')
        .itemInputs('minecraft:copper_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 128000))
        .itemOutputs('256x gtceu:copper_ore', '64x gtceu:chalcopyrite_ore', '64x gtceu:tetrahedrite_ore', '64x gtceu:bornite_ore', '64x gtceu:chalcocite_ore')
        .addData('radius', 5)
        .addData('rock', 'minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('exquisite_gems_red')
        .itemInputs('gtceu:exquisite_ruby_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 192000))
        .itemOutputs('64x gtceu:ruby_ore', '64x gtceu:almandine_ore', '64x gtceu:cinnabar_ore',
            '64x gtceu:pyrope_ore', '64x gtceu:realgar_ore', '64x gtceu:red_garnet_ore'
        )
        .addData('radius', 6)
        .addData('rock', 'minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('stone_gems_blue')
        .itemInputs('gtceu:exquisite_sapphire_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 192000))
        .itemOutputs('64x gtceu:blue_topaz_ore', '64x gtceu:diamond_ore', '64x gtceu:lazurite_ore',
            '64x gtceu:sodalite_ore', '64x gtceu:sapphire_ore', '64x gtceu:lapis_ore', '64x gtceu:apatite_ore'
        )
        .addData('radius', 6)
        .addData('rock', 'minecraft:stone')
        .EUt(1920)
        .duration(400);
    event.recipes.gtceu.meteor_capturer('stone_gems_green')
        .itemInputs('gtceu:exquisite_green_sapphire_gem')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 192000))
        .itemOutputs('64x gtceu:emerald_ore', '64x gtceu:green_sapphire_ore', '64x gtceu:malachite_ore',
            '64x gtceu:olivine_ore', '64x gtceu:monazite_ore'
        )
        .addData('radius', 6)
        .addData('rock', 'minecraft:stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('andesite')
        .itemInputs('gtceu:andesite_alloy_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 128000))
        .itemOutputs('64x minecraft:andesite', '64x gtceu:zinc_ore', '64x gtceu:copper_ore',
            '64x gtceu:tin_ore', '256x gtceu:iron_ore'
        )
        .addData('radius', 6)
        .addData('rock', 'minecraft:andesite')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('end_al')
        .itemInputs('gtceu:mv_emitter')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 256000))
        .itemOutputs('256x gtceu:endstone_aluminium_ore', '256x gtceu:endstone_bauxite_ore', '256x gtceu:endstone_cryolite_ore', '64x gtceu:endstone_ilmenite_ore')
        .addData('radius', 8)
        .addData('rock', 'minecraft:end_stone')
        .EUt(1920)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('end_w')
        .itemInputs('gtceu:tungsten_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 1024000))
        .itemOutputs('512x gtceu:endstone_scheelite_ore', '512x gtceu:endstone_tungstate_ore')
        .addData('radius', 8)
        .addData('rock', 'minecraft:end_stone')
        .EUt(7680)
        .duration(400);
    event.recipes.gtceu.meteor_capturer('pt')
        .itemInputs('gtceu:hv_emitter')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 1024000))
        .itemOutputs('64x gtceu:moon_stone_palladium_ore_ore', '256x gtceu:moon_stone_platinum_ore_ore', '128x gtceu:moon_stone_cooperite_ore',
            '64x gtceu:moon_stone_pentlandite_ore', '64x gtceu:moon_stone_tetrahedrite_ore'
        )
        .addData('radius', 8)
        .addData('rock', 'ad_astra:moon_stone')
        .EUt(7680)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('mars_pt')
        .itemInputs('gtceu:luv_assembler')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 1024000))
        .itemOutputs('64x gtceu:mars_stone_palladium_ore_ore', '256x gtceu:mars_stone_platinum_ore_ore', '64x gtceu:mars_stone_cooperite_ore',
            '64x gtceu:mars_stone_iridium_ore', '64x gtceu:mars_stone_osmium_ore', '64x gtceu:mars_stone_copper_ore'
        )
        .addData('radius', 8)
        .addData('rock', 'ad_astra:mars_stone')
        .EUt(30720)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('mars_ti')
        .itemInputs('gtceu:iv_emitter')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 1024000))
        .itemOutputs('512x gtceu:mars_stone_ilmenite_ore', '256x gtceu:mars_stone_bauxite_ore', '128x gtceu:mars_stone_rutile_ore', '64x gtceu:mars_stone_titanium_ore')
        .addData('radius', 8)
        .addData('rock', 'ad_astra:mars_stone')
        .EUt(7680)
        .duration(400);

    event.recipes.gtceu.meteor_capturer('mars_radioactive')
        .itemInputs('gtceu:naquadria_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 4096000))
        .itemOutputs('2048x gtceu:mars_stone_naquadah_oxide_mixture_ore', '1024x gtceu:mars_stone_uranium_ore', '1024x gtceu:mars_stone_plutonium_ore')
        .addData('radius', 12)
        .addData('rock', 'ad_astra:mars_stone')
        .EUt(122880)
        .duration(800);

    event.recipes.gtceu.meteor_capturer('stone_oil')
        .itemInputs('gtceu:oil_bucket')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 256000))
        .itemOutputs('1024x gtceu:oilsands_ore')
        .addData('radius', 9)
        .addData('rock', 'minecraft:stone')
        .EUt(7680)
        .duration(800);
    event.recipes.gtceu.meteor_capturer('mana_dust')
        .itemInputs('9x gtceu:mana_plus_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 192000))
        .itemOutputs('2560x gtceu:livingrock_mana_fused_ore', )
        .addData('radius', 6)
        .addData('rock', 'botania:livingrock')
        .EUt(1920)
        .duration(400);
    event.recipes.gtceu.meteor_capturer("ln")
        .itemInputs('9x gtceu:indium_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 1024000))
        .itemOutputs('2560x gtceu:netherrack_galena_ore')
        .itemOutputs('2560x gtceu:netherrack_sphalerite_ore')
        .addData('radius', 9)
        .addData('rock', 'minecraft:netherrack')
        .EUt(30720)
        .duration(400);
    event.recipes.gtceu.meteor_capturer("naquadah")
        .itemInputs('gtceu:zpm_emitter')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 1024000))
        .itemOutputs('512x gtceu:naquadah_oxide_mixture_ore')
        .itemOutputs('128x gtceu:enriched_naquadah_oxide_mixture_ore')
        .itemOutputs('32x gtceu:naquadria_oxide_mixture_ore')
        .addData('radius', 9)
        .addData('rock', 'minecraft:stone')
        .EUt(200000)
        .duration(400);
    event.recipes.gtceu.meteor_capturer("coal")
        .itemInputs('64x gtceu:coke_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 192000))
        .itemOutputs('5120x gtceu:coal_ore')
        .itemOutputs('5120x gtceu:graphite_ore')
        .addData('radius', 9)
        .addData('rock', 'minecraft:stone')
        .EUt(1920)
        .duration(400);
    event.recipes.gtceu.meteor_capturer("accient")
        .itemInputs('144x gtceu:nether_star_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 384000))
        .itemOutputs('1024x minecraft:ancient_debris')
        .itemOutputs('2048x gtceu:nether_gold_ore')
        .addData('radius', 9)
        .addData('rock', 'minecraft:netherrack')
        .EUt(12222)
        .duration(400);
    event.recipes.gtceu.meteor_capturer('star')
        .itemInputs('1x kubejs:zenith_star')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 1920000))
        .itemOutputs('45x apotheosis:infused_breath')
        .itemOutputs('64x ars_nouveau:source_gem_block')
        .chancedOutput('32x ars_nouveau:source_gem_block', 8000, 4000)
        .chancedOutput('32x apotheosis:infused_breath', 8000, 4000)
        .chancedOutput('2x mythicbotany:alfsteel_ingot', 6000, 1000)
        .chancedOutput('16x botania:manasteel_ingot', 6000, 1000)
        .chancedOutput('2x botania:elementium_ingot', 6000, 1000)
        .chancedOutput('ctnhcore:starlight_rune', 8000, 2000)
        .chancedOutput('2x botania:rune_mana', 6000, 2000)
        .chancedOutput('gtceu:mana_plus_ingot', 6000, 1000)
        .chancedOutput('gtceu:mana_super_plus_ingot', 6000, 1000)
        .chancedOutput('gtceu:ultra_mana_ingot', 6000, 1000)
        .chancedOutput('64x gtceu:mars_stone_dust', 4000, 1000)
        .chancedOutput('64x gtceu:mars_stone_dust', 4000, 2000)
        .chancedOutput('64x gtceu:moon_stone_dust', 4000, 2000)
        .chancedOutput('64x gtceu:moon_stone_dust', 100, 1)
        .chancedOutput('64x botania:quartz_elven', 6000, 2000)
        .chancedOutput('64x botania:dragonstone', 6000, 2000)
        .chancedOutput('64x botania:elf_glass', 6000, 4000)
        .addData('radius', 6)
        .addData('rock', 'botania:livingrock')
        .EUt(131072 * 2)
        .duration(400);
    let ctnh = event.recipes.gtceu
})