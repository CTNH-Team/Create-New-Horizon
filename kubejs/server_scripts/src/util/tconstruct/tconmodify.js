/**
 * 
 * @param {string} str 传入匠魂工具的完整nbt
 * @param {string} tofind 要匹配的特性id，加不加modid都可
 * @returns 该匠魂工具中是否有所需特性
 */
function matchModifiers(str, tofind) {
    const startKeyword = 'tic_modifiers:[';
    const startIdx = str.indexOf(startKeyword);
    const endIdx = str.indexOf(']', startIdx + startKeyword.length);
    if (startIdx != -1 && endIdx != -1) {
        const result = str.substring(startIdx, endIdx + 1);// 输出: tic_modifiers:[{level:1,name:"A"},{level:2,name:"B"}]
        if (result.includes(tofind)) return true
    }
    return false
}

/**
 * 
 * @param {string} str 传入匠魂工具的完整nbt
 * @returns 以《level:1,name:"A"》形式返回的string，不包含书名号
 */
function getAllModifiers(str) {
    // 定位到数组内容部分
    const start = str.indexOf('[{') + 1; // 跳过 [
    const end = str.lastIndexOf('}]');
    const arrayContent = str.substring(start, end); // 得到 "{...},{...}"
 
    // 分割并清理每个对象
    const result = arrayContent.split('},\\{')
        .map(item => item
            .replace('/^{|}$/g', '') // 去掉首尾可能残留的 {
            .trim()
        );
    return result
}

/**
 * 
 * @param {string} str 传入匠魂工具的完整nbt
 * @param {string} tofind 要匹配的特性id，加不加modid都可
 * @returns 特性等级，-1意味着没有这种特性
 */
function getModifierLevel(str, tofind) {
    // 定位到数组内容部分
    const start = str.indexOf('[{') + 1; // 跳过 [
    const end = str.lastIndexOf('}]');
    const arrayContent = str.substring(start, end); // 得到 "{...},{...}"
 
    // 拆分数组元素（利用 },{ 分割）
    const items = arrayContent.split('},\\{')
        .map(item => item.replace(/^\s*\\{|\}\s*$/g, '').trim());
 
    // 查找目标元素并提取等级
    for (const item of items) {
        if (!item.includes(tofind)) continue;
        return parseInt(item.split(",")[0].split(":")[1]);
    }
 
    return -1;
}

/**
 *
 * @param {Internal.Entity} player event.source.getActual()或者event.entity
 * @returns 完整NBT
 */
function getNBT(player) {
    let mainHandItem = null;
    if (player.getHandSlots().iterator().hasNext())
        mainHandItem = player.getHandSlots().iterator().next(); // 主手物品是第一个槽位
    // 检查主手物品是否为匠魂工具
    if (mainHandItem.hasTag('tconstruct:modifiable')) {
        return mainHandItem.getNbt().getAsString(); // 获取工具的NBT
    }
    return
}
