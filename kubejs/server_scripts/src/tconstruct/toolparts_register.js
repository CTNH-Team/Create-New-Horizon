ServerEvents.highPriorityData((event) => {
    //雪城钢
    addTConMaterial(event, "gtceu:snow_steel", (builder) => {
        builder.visibility(2, false) // 这里也可以用.tier(tier: number)方法和.hidden(hidden: boolean)方法, .visibility(tier: number, hidden: boolean)方法只是把这俩给合并了
            .craftable(false)
            .sortOrder(26)
            .head(114514, 8.101, 19.19, "minecraft:diamond")
            .platingHelmet(19.19, 114514 , 10, 8)
            .platingChestplate(19.19, 114514 , 10, 8)
            .platingLeggings(19.19, 114514 , 10, 8)
            .platingBoots(19.19, 114514 , 10, 8)
            .handle(1.25, 1.25, 1.25, 1.25)
            .binding()
            .limb(1.25, 1.25, 1.25, 1.25)
            .grip(1.25, 1.25, 1.25)
            .platingShield(114514, 1.25, 1.25, 1.25)
            .maille()
            .shieldCore()
            .setTraits((builder) => {
                builder.addTrait("tconstruct:head", "kubejs:snowcity", 1)
                    .addTrait("tconstruct:armor", "kubejs:fortification", 1)
                    .addTrait("tconstruct:shield_core", "kubejs:fortification", 2)
            })
    })
})
