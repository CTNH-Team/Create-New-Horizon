ServerEvents.recipes(event => {
    //永寂龙胆
    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [{
                "tag": "botania:petals/purple"
            },
            {
                "tag": "botania:petals/purple"
            },
            {
                "tag": "botania:petals/blue"
            },
            {
                "tag": "botania:petals/blue"
            },
            {
                "item": "botania:life_essence"
            },
            {
                "item": "ctnhcore:proliferation_rune"
            },
            {
                "item": "mythicbotany:helheim_rune"
            },
            {
                "item": "botania:rune_greed"
            }
        ],
        "output": {
            "item": "extrabotany:serenitian"
        },
        "reagent": {
            "tag": "botania:seed_apothecary_reagent"
        }
    }).id('extrabotany:petal_apothecary/serenitian')
    //蕴魔瑾
    event.custom({
        "type": "botania:petal_apothecary",
        "ingredients": [{
                "tag": "botania:petals/purple"
            },
            {
                "tag": "botania:petals/purple"
            },
            {
                "tag": "botania:petals/lime"
            },
            {
                "tag": "botania:petals/lime"
            },
            {
                "tag": "botania:petals/magenta"
            },
            {
                "item": "botania:life_essence"
            },
            {
                "item": "ctnhcore:proliferation_rune"
            },
            {
                "item": "ctnhcore:twist_rune"
            },
            {
                "item": "botania:rune_greed"
            }
        ],
        "output": {
            "item": "extrabotany:enchanter"
        },
        "reagent": {
            "item": "botania:overgrowth_seed"
        }
    }).id('extrabotany:petal_apothecary/enchanter')
    //宇宙之心
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 255,
        "group": "infuser",
        "ingredients": [{
                "item": "extrabotany:the_end"
            },
            {
                "item": "extrabotany:the_origin"
            },
            {
                "item": "extrabotany:the_chaos"
            }
        ],
        "mana": 4000000,
        "output": {
            "count": 1,
            "item": "extrabotany:the_universe"
        },
        "toColor": 65280
    })
    event.remove({id: 'extrabotany:elven_trade/elementium_quartz'})
    
})