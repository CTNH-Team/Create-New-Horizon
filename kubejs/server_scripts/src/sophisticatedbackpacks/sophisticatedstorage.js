ServerEvents.recipes(event => {
    let material = ['basic', 'copper', 'iron', 'gold', 'diamond', 'netherite']
    let item = ['#minecraft:planks', 'minecraft:copper_ingot', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:diamond']
    for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j <= 5; j++) {
            event.remove({ output: `sophisticatedstorage:${material[i]}_to_${material[j]}_tier_upgrade` })
            if (j != 1) {
                if (j == i + 1) {
                    event.shaped(
                        Item.of(`sophisticatedstorage:${material[i]}_to_${material[j]}_tier_upgrade`, 1), [
                        "DBE",
                        "BAB",
                        "CBC"
                    ], {
                        A: `${item[i]}`,
                        B: `gtceu:${material[j]}_plate`,
                        C: `gtceu:${material[j]}_rod`,
                        D: `gtceu:${material[j]}_screw`,
                        E: `gtceu:${material[j]}_bolt`,
                    })
                }
                else {
                    event.shaped(
                        Item.of(`sophisticatedstorage:${material[i]}_to_${material[j]}_tier_upgrade`, 1), [
                        "DBE",
                        "BAB",
                        "CBC"
                    ], {
                        A: `sophisticatedstorage:${material[i]}_to_${material[j - 1]}_tier_upgrade`,
                        B: `gtceu:${material[j]}_plate`,
                        C: `gtceu:${material[j]}_rod`,
                        D: `gtceu:${material[j]}_screw`,
                        E: `gtceu:${material[j]}_bolt`,
                    })
                }
            }
        }
    }
    event.shaped(
        Item.of(`sophisticatedstorage:basic_to_copper_tier_upgrade`, 1), [
        "DBE",
        "BAB",
        "CBC"
    ], {
        A: '#minecraft:planks',
        B: `gtceu:bronze_plate`,
        C: `gtceu:bronze_rod`,
        D: `gtceu:bronze_screw`,
        E: `gtceu:bronze_bolt`,
    })

    // event.remove({ output: /sophisticatedstorage:(.*)_barrel/})
    // event.remove({ output: /sophisticatedstorage:limited_(.*)_barrel/})
    // event.remove({ output: /sophisticatedstorage:(.*)_chest/})
    // event.remove({ output: /sophisticatedstorage:(.*)_shulker_box/})
})

ServerEvents.recipes(event => {

    // 第一个输入的 tag → 对应材料
    var tags = [
        'forge:ingots/copper',
        'forge:ingots/iron',
        'forge:ingots/gold',
        'forge:gems/diamond'
    ];

    var materials = [
        'bronze',
        'iron',
        'gold',
        'diamond'
    ];

    event.forEachRecipe({ type: "sophisticatedstorage:storage_tier_upgrade" }, recipe => {

        var json = recipe.json;

        var key = json.get("key");
        var pattern = json.get("pattern");
        var result = json.get("result");
        //console.log(key);
        //console.log(pattern);
        //console.log(result);


        if (!key || !pattern || !result) {
            //console.log("[upgrade] ❌ JSON结构不完整:", recipe.getId());
            return;
        }

        // 输出物品
        var out = result.get("item").getAsString();
        if (!out) {
            //console.log("[upgrade] ❌ result 中无 item:", recipe.getId());
            return;
        }

        // 展开 pattern → 9格输入
        var ingList = [];
        if(pattern.size() < 2) return;
        var line = String(pattern.get(1).getAsString());
        //console.log(line);
        //console.log(line.length)
        for (var j = 0; j < line.length; j++) {
            var ch = line.charAt(j);
            var ing = key.get(ch);
            //console.log(ing);
            if (ing) ingList.push(ing);
        }

        if (ingList.length < 3) {
            //console.log("[upgrade] ❌ 输入不足 3 项:", recipe.getId());
            return;
        }

        var firstIng = ingList[0];
        var secondIng = ingList[1];
        
        //console.log("firstIng:", firstIng)
        //console.log("secondIng:", secondIng)
        // 第一个输入必须是 tag
        var firstTag = firstIng.get("tag").getAsString();
        if (!firstTag) {
            //console.log("[upgrade] ❌ 第一个输入不是 tag:", recipe.getId());
            return;
        }

        var index = tags.indexOf(firstTag);
        if (index < 0) {
            //console.log("[upgrade] ❌ tag 未匹配:", firstTag);
            return;
        }

        var material = materials[index];

        // console.log("[upgrade] ✔ 修改:", recipe.getId(),
        //     " tag:", firstTag,
        //     " material:", material,
        //     " output:", out);

        // 删除旧的
        let recipeId = recipe.getId();
        event.remove({ id: recipeId });
        
        if(recipeId.includes('iron') && !recipeId.includes('copper')) return;

        // 重写新配方
        let r = event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            condtions: recipe.json.get("conditions"),
            key:{
                A:{
                    item: secondIng.get("item").getAsString()
                },
                B:{
                    item: "gtceu:" + material + "_plate"
                },
                C:{
                    item: "gtceu:" + material + "_rod"
                },
                D:{
                    item: "gtceu:" + material + "_screw"
                },
                E:{
                    item: "gtceu:" + material + "_bolt"
                }
            },
            pattern: [
                "DBE",
                "BAB",
                "CBC"
            ],
            result:{
                item: out
            }
        }).id(recipeId);
        //console.log(r.json);

        //JsonIO.write("kubejs/export/" + recipe.getPath() + ".json", r.json);
    });

    event.forEachRecipe({ type: "sophisticatedstorage:storage_tier_upgrade_shapeless" }, recipe => {
        var json = recipe.json;

        var ingredients = json.get("ingredients");
        var result = json.get("result");
        

        if(ingredients.get(1).get("tag").getAsString() != 'forge:ingots/netherite') return;
        
        let firstIng = ingredients.get(0);

        let recipeId = recipe.getId();
        var material = 'netherite';

        event.remove({ id: recipeId });

        let r = event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            condtions: recipe.json.get("conditions"),
            key:{
                A:{
                    item: firstIng.get("item").getAsString()
                },
                B:{
                    item: "gtceu:" + material + "_plate"
                },
                C:{
                    item: "gtceu:" + material + "_rod"
                },
                D:{
                    item: "gtceu:" + material + "_screw"
                },
                E:{
                    item: "gtceu:" + material + "_bolt"
                }
            },
            pattern: [
                "DBE",
                "BAB",
                "CBC"
            ],
            result:{
                item: result.get("item").getAsString()
            }
        }).id(recipeId);
        
        //JsonIO.write("kubejs/export/" + recipe.getPath() + ".json", r.json);
    });
});







ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting(
        "sophisticatedstorage:controller",
        [
            "EEAEE",
            "EFBFE",
            "ECGDE",
            "EFBFE",
            "EEEEE"],
        {
        A: "sophisticatedstorage:storage_link",

        B: "sophisticatedstorage:basic_tier_upgrade",

        C: 'sophisticatedstorage:storage_output',

        D: 'sophisticatedstorage:storage_input',
        
        E: 'create:andesite_casing',

        F: 'ctpp:steel_mechanism',

        G: '#forge:chests'
    }
    )
})