// 使用示例
ServerEvents.highPriorityData(event => {
     /**
     * 注册一个 Hostile Neural Networks Data Model
     * @param {string} entityId - 实体 ID，例如 "minecraft:zombie"
     * @param {Array<string>} variants - 可选变体列表
     */
    function createDataModel(entityId, color, variants) {
        if (!variants) variants = [];

        const [modid, entityName] = entityId.split(":")

        const data = {
            entity: entityId,
            variants: variants,
            name: `entity.${entityId.replace(":", ".")}`,
            name_color: color,
            gui_scale: 1,
            gui_x_offset: 0,
            gui_y_offset: 0,
            gui_z_offset: 0,
            sim_cost: 128,
            input: { item: "hostilenetworks:prediction_matrix" },
            base_drop: { item: "hostilenetworks:overworld_prediction" },
            trivia: `hostilenetworks.trivia.${entityName}`,
            fabricator_drops: [
                { item: "minecraft:string", count: 32 },
                { item: "minecraft:spider_eye", count: 16 },
                { item: "minecraft:cobweb", count: 4 },
                { optional: "true", item: "silentgear:fine_silk", count: 3 },
                { optional: "true", item: "reliquary:chelicerae", count: 2 }
            ]
        };

        event.addJson(`hostilenetworks:data_models/${modid}/${entityName}`, data)

        console.log(`✅ 已注册 Data Model: ${entityName}`);
    }

    createDataModel('aether:moa', "#061011")
    createDataModel('alexsmobs:cachalot_whale',"#1b54aa")
    createDataModel('aether:aerwhale', "#2e5f8a")
    createDataModel('aether:phyg', "#7f4f2f")
    createDataModel('aether:mimic', "#4b2e1f")
    createDataModel('biomancy:primordial_flesh_blob', "#6a2e2e")
})