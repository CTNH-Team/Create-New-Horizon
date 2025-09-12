let $CBRecipeCapabilities = Java.loadClass('com.moguang.ctnhbio.registry.CBRecipeCapabilities');

// 需要完全移除的物品
const REMOVE_ITEMS = [
    'biomancy:mineral_fragment',
    'biomancy:gem_fragments',
    'biomancy:stone_powder'
];

// 需要转换为流体的物品（原物品 -> GT流体）
const FLUID_CONVERSIONS = {
    'biomancy:regenerative_fluid': 'ctnhbio:regenerative_fluid',
    'biomancy:withering_ooze': 'ctnhbio:withering_ooze',
    'biomancy:hormone_secretion': 'ctnhbio:hormone_secretion',
    'biomancy:toxin_extract': 'ctnhbio:toxin_extract',
    'biomancy:bile': 'ctnhbio:bile',
    'biomancy:volatile_fluid': 'ctnhbio:volatile_fluid'
};

// 流体转换比例 (1物品 = 25mB)
const FLUID_CONVERSION_RATE = 25;

ServerEvents.recipes(event => {
    // 处理所有biomancy分解配方
    processDecomposingRecipes(event);
});

/**
 * 处理所有分解配方
 */
function processDecomposingRecipes(event) {
    event.forEachRecipe({ type: "biomancy:decomposing" }, recipe => {
        try {
            let originalId = recipe.getId().toString();
            let recipeData = preprocessRecipeData(recipe, originalId);
            
            if (!recipeData) {
                console.log(`[跳过] 配方 ${originalId} 数据无效`);
                return;
            }

            // 第一步：移除指定物品
            let afterFirstStep = removeItemsFromOutputs(recipeData.outputs, REMOVE_ITEMS);
            
            // 如果没有剩余输出，移除配方
            if (afterFirstStep.remainingOutputs.length === 0) {
                event.remove({ id: originalId });
                console.log(`[移除] 配方 ${originalId} - 移除所有输出后无有效输出`);
                return;
            }

            // 第二步：检查是否需要转换为流体
            let fluidConversions = findFluidConversions(afterFirstStep.remainingOutputs);
            
            if (fluidConversions.length > 0) {
                // 情况2：有需要转换的流体
                event.remove({ id: originalId });
                createConvertedGTRecipe(
                    event, 
                    recipeData, 
                    afterFirstStep.remainingOutputs, 
                    fluidConversions
                );
                console.log(`[转换] 配方 ${originalId} -> ${recipeData.id} (转换 ${fluidConversions.length} 个流体)`);
            } else if (afterFirstStep.removedCount > 0) {
                // 情况3：移除了部分物品但没有流体转换
                event.remove({ id: originalId });

                createModifiedGTRecipe(
                    event, 
                    recipeData, 
                    afterFirstStep.remainingOutputs
                );
                console.log(`[修改] 配方 ${originalId} -> ${recipeData.id} (移除了 ${afterFirstStep.removedCount} 个物品)`);
            } else {
                // 情况4：直接迁移
                // event.remove({ id: originalId });
                createGTRecipe(event, recipeData);
                console.log(`[迁移] 配方 ${originalId} -> ${recipeData.id}`);
            }

        } catch (e) {
            console.log(`[错误] 处理配方 ${recipe.getId()} 时出错: ${e.message}`);
        }
    });
}

/**
 * 从输出中移除指定物品
 */
function removeItemsFromOutputs(outputs, itemsToRemove) {
    let remainingOutputs = [];
    let removedCount = 0;
    
    for (let output of outputs) {
        if (itemsToRemove.includes(output.item)) {
            removedCount++;
        } else {
            remainingOutputs.push(output);
        }
    }
    
    return {
        remainingOutputs: remainingOutputs,
        removedCount: removedCount
    };
}

/**
 * 查找需要转换为流体的输出
 */
function findFluidConversions(outputs) {
    let conversions = [];
    
    for (let output of outputs) {
        if (FLUID_CONVERSIONS[output.item]) {
            conversions.push({
                original: output.item,
                target: FLUID_CONVERSIONS[output.item],
                count: output.count,
                countRange: output.countRange
            });
        }
    }
    
    return conversions;
}

/**
 * 预处理配方数据
 */
function preprocessRecipeData(recipe, recipeId) {
    try {
        let json = recipe.json;
        let ingredient = json.get("ingredient");
        if (!ingredient) return null;

        // 处理输入
        let input = null;
        if (ingredient.get("item")) {
            input = ingredient.get("item").getAsString();
        } else if (ingredient.get("tag")) {
            input = `#${ingredient.get("tag").getAsString()}`;
        }

        // 处理输出
        let results = json.get("results");
        if (!results || results.size() === 0) return null;

        let outputs = [];
        for (let i = 0; i < results.size(); i++) {
            let result = results.get(i);
            let item = result.get("item").getAsString();
            if (!item) continue;

            let countRange = result.get("countRange");
            let processedRange = null;
            
            if (countRange) {
                let type = countRange.get("type").getAsString();
                if (type === "constant") {
                    // 处理constant类型
                    let value = countRange.get("value").getAsNumber();
                    processedRange = {
                        min: value,
                        max: value
                    };
                } else if (type === "uniform") {
                    // 处理uniform类型
                    processedRange = {
                        min: Math.max(countRange.get("min").getAsNumber() || 1, 1),
                        max: Math.max(countRange.get("max").getAsNumber() || 1, 1)
                    };
                }
            }

            outputs.push({
                item: item,
                count: result.get("count") || 1,
                countRange: processedRange
            });
        }

        return {
            id: recipeId.replace('biomancy:', 'ctnhbio:'),
            input: input,
            outputs: outputs,
            processingTime: json.get("processingTime") || 100,
            nutrientsCost: json.get("nutrientsCost") || 1
        };
    } catch (e) {
        console.log(`[错误] 预处理配方数据时出错: ${e.message}`);
        return null;
    }
}

/**
 * 创建转换后的GT配方（含流体转换）
 */
function createConvertedGTRecipe(event, recipeData, remainingOutputs, conversions) {
    try {
        let builder = event.recipes.gtceu.decomposer(recipeData.id)
            .itemInputs(recipeData.input)
            .EUt(128)
            .input($CBRecipeCapabilities.NUTRIENT, recipeData.nutrientsCost)
            .duration(recipeData.processingTime);

        // 添加非转换输出
        remainingOutputs.forEach(output => {
            if (!FLUID_CONVERSIONS[output.item]) {
                if (output.countRange) {
                    builder.itemOutputsRanged(output.item, output.countRange.min, output.countRange.max);
                } else {
                    builder.itemOutputs(Item.of(output.item, output.count));
                }
            }
        });

        // 添加流体输出
        conversions.forEach(conversion => {
            if (conversion.countRange) {
                builder.outputFluidsRanged(
                    Fluid.of(conversion.target, 1),
                    Math.max(conversion.countRange.min * FLUID_CONVERSION_RATE, 1) ,
                    conversion.countRange.max * FLUID_CONVERSION_RATE
                );
            } else {
                builder.outputFluids(Fluid.of(conversion.target, conversion.count * FLUID_CONVERSION_RATE));
            }
        });

    } catch (e) {
        console.log(`[错误] 创建转换配方 ${recipeData.id} 失败: ${e.message}`);
    }
}

/**
 * 创建修改后的GT配方（移除了部分物品）
 */
function createModifiedGTRecipe(event, recipeData, remainingOutputs) {
    try {
        let builder = event.recipes.gtceu.decomposer(recipeData.id)
            .itemInputs(recipeData.input)
            .EUt(32)
            .input($CBRecipeCapabilities.NUTRIENT, recipeData.nutrientsCost)
            .duration(recipeData.processingTime);

        // 添加剩余的输出
        remainingOutputs.forEach(output => {
            if (output.countRange) {
                builder.itemOutputsRanged(output.item, output.countRange.min, output.countRange.max);
            } else {
                builder.itemOutputs(Item.of(output.item, output.count));
            }
        });

    } catch (e) {
        console.log(`[错误] 创建修改配方 ${recipeData.id} 失败: ${e.message}`);
    }
}

/**
 * 创建普通GT配方（直接迁移）
 */
function createGTRecipe(event, recipeData) {
    try {
        let builder = event.recipes.gtceu.decomposer(recipeData.id)
            .itemInputs(recipeData.input)
            .EUt(32)
            .input($CBRecipeCapabilities.NUTRIENT, recipeData.nutrientsCost)
            .duration(recipeData.processingTime);

        recipeData.outputs.forEach(output => {
            if (output.countRange) {
                builder.itemOutputsRanged(output.item, output.countRange.min, output.countRange.max);
            } else {
                builder.itemOutputs(Item.of(output.item, output.count));
            }
        });

    } catch (e) {
        console.log(`[错误] 创建GT配方 ${recipeData.id} 失败: ${e.message}`);
    }
}