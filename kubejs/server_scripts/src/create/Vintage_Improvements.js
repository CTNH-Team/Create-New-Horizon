ServerEvents.tags('item', event => {
    event.add('vintageimprovements:curving_heads', 'gtceu:small_gear_extruder_mold')
    event.add('vintageimprovements:curving_heads', 'gtceu:gear_extruder_mold')
})

ServerEvents.recipes((event) => {
    const { vintageimprovements } = event.recipes

    let ingot = ['iron', 'gold','steel','copper']//不同的弹簧
        for (let i of ingot) {
        vintageimprovements.coiling(`gtceu:${i}_spring`, [`gtceu:long_${i}_rod`])
        vintageimprovements.coiling(`gtceu:small_${i}_spring`, [`gtceu:${i}_rod`])
    }
    let ingot1 = ['gold','steel','copper','silver','bronze']//不同的金属箔
        for (let i of ingot1) {
        event.recipes.vintageimprovementsHammering(Item.of(`3x gtceu:${i}_foil`),`#forge:plates/${i}`,3)
    }

    function addTurningRecipes(metal, ingot, rodTime, boltTime, screwTime) {
    // ingot -> rod
    vintageimprovements.turning(`2x gtceu:${metal}_rod`, ingot)
        .processingTime(rodTime)

    // rod -> 2x bolt
    vintageimprovements.turning(`3x gtceu:${metal}_bolt`, `gtceu:${metal}_rod`)
        .processingTime(boltTime)

    // bolt -> screw
    vintageimprovements.turning(`gtceu:${metal}_screw`, `gtceu:${metal}_bolt`)
        .processingTime(screwTime)
}

// 定义配方
addTurningRecipes("iron", "minecraft:iron_ingot", 20, 40, 40)
addTurningRecipes("copper", "minecraft:copper_ingot", 20, 40, 40)
addTurningRecipes("gold", "minecraft:gold_ingot", 200, 40, 100)
addTurningRecipes("red_alloy", "gtceu:red_alloy_ingot", 100, 40, 40)
addTurningRecipes("bronze", "gtceu:bronze_ingot", 60, 40, 40)
addTurningRecipes("wrought_iron", "gtceu:wrought_iron_ingot", 60, 40, 40)
addTurningRecipes("steel", "gtceu:steel_ingot", 100, 40, 40)
addTurningRecipes("brass", "gtceu:brass_ingot", 60, 40, 40)
addTurningRecipes("potin", "gtceu:potin_ingot", 60, 40, 40)


    let ingot2 = ['iron', 'bronze','wrought_iron','steel','brass',]
    for (let i of ingot2) {
        event.recipes.create.sequenced_assembly([//齿轮(前小后大)
            `gtceu:small_${i}_gear`], 
            `gtceu:${i}_plate`, [
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_rod`]),
            vintageimprovements.curving(`gtceu:${i}_plate`, `gtceu:${i}_plate`).head('gtceu:small_gear_extruder_mold'),])
            .transitionalItem(`gtceu:${i}_plate`)
            .loops(1)
        event.recipes.create.sequenced_assembly([
            `gtceu:${i}_gear`], 
            `gtceu:${i}_plate`, [
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_plate`]),        
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_rod`]),
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_plate`]),
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_rod`]),    
            vintageimprovements.curving(`gtceu:${i}_plate`, `gtceu:${i}_plate`).head('gtceu:gear_extruder_mold'),])
            .transitionalItem(`gtceu:${i}_plate`)
            .loops(1)}

    event.recipes.create.sequenced_assembly([//粗青铜合金大齿轮
            `gtceu:potin_gear`], 
            `gtceu:potin_plate`, [
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_plate`]),        
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_rod`]),
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_plate`]),
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_rod`]),    
            vintageimprovements.curving(`gtceu:potin_plate`, `gtceu:potin_plate`).head('gtceu:gear_extruder_mold'),])
            .transitionalItem(`gtceu:potin_plate`)
            .loops(1)

    event.recipes.create.sequenced_assembly([//铜小齿轮
        'gtceu:small_copper_gear'], 
        'gtceu:copper_plate', [
        event.recipes.createDeploying('gtceu:copper_plate', ['gtceu:copper_plate', 'gtceu:copper_rod']),
        vintageimprovements.curving('gtceu:copper_plate', 'gtceu:copper_plate').head('gtceu:small_gear_extruder_mold'),])
        .transitionalItem('gtceu:copper_plate')
        .loops(1)
    
    
    })