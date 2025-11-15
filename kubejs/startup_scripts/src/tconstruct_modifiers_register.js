/**
 * @param { Internal.RecipesEventJS } event 
 * @param { string } modifiername - 能力名
 * @param { number } amount_per_item - 添加能力所需物品数
 * @param { number } needed_per_level - 升级所需物品系数
 * @param { string } input - 输入物品ID
 * @param { number } maxlevel - 最高等级
 * @param { number } tools - 可添加升级的装备类型
 * @param { string } slots_type - 升级槽位类型
 * @param { number } slots_amount - 所需槽位
 */
function modifiers_upgrade(event, modifiername, amount_per_item, needed_per_level, input, maxlevel, tools, slots_type, slots_amount) {
    let slotsObj = {};
    slotsObj[slots_type] = slots_amount;
    const modifier = {
        "type": "tconstruct:incremental_modifier",
        "allow_crystal": false,
        "amount_per_item": amount_per_item,
        "input": {
            "item": input
        },
        "level": {
            "max": maxlevel
        },
        "needed_per_level": needed_per_level,
        "result": "kubejs:" + modifiername,
        "slots": slotsObj,
        "tools": [
            {
                "tag": "tconstruct:modifiable/" + tools
            }
        ]
    };
    // 注册配方
    JsonIO.write(`kubejs/data/tconstruct/recipes/tools/modifier/upgrade/${slots_type}_${modifiername}.json`,modifier);
}

TConJSEvents.modifierRegistry((event) => {
    event.createEmpty("kubejs:snowcity");
    event.createEmpty("kubejs:fortification");
    event.createEmpty("kubejs:global_traveler");
})

StartupEvents.postInit(event => {
    modifiers_upgrade(event, "global_traveler", 1, 1, 'explorerscompass:explorerscompass', 1, 'harvest', 'abilities', 1);
    modifiers_upgrade(event, "fortification", 1, 1, 'twilightforest:fortification_scepter', 5, 'armor', "upgrades", 1);
});