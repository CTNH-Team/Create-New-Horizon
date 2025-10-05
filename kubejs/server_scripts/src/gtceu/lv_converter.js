ServerEvents.recipes(event => {
    let transitional = 'gtceu:lv_machine_hull'
    event.recipes.create.sequenced_assembly([
            'gtceu:lv_1a_energy_converter'
        ], 'gtceu:lv_machine_hull', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:red_alloy_single_cable']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:tin_single_cable']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:tin_single_cable']),
            event.recipes.createDeploying(transitional, [transitional, '#gtceu:circuits/lv']),
    ]).transitionalItem("gtceu:lv_machine_hull")
        .loops(1)

    
    event.recipes.create.sequenced_assembly([
            'gtceu:lv_4a_energy_converter'
        ], 'gtceu:lv_1a_energy_converter', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:red_alloy_quadruple_cable']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:tin_quadruple_cable']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:tin_quadruple_cable']),
            event.recipes.createDeploying(transitional, [transitional, '#gtceu:circuits/lv']),
    ]).transitionalItem("gtceu:lv_1a_energy_converter")
        .loops(1)

    event.recipes.create.sequenced_assembly([
            'gtceu:lv_16a_energy_converter'
        ], 'gtceu:lv_4a_energy_converter', [
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:red_alloy_hex_cable']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:tin_hex_cable']),
            event.recipes.createDeploying(transitional, [transitional, 'gtceu:tin_hex_cable']),
            event.recipes.createDeploying(transitional, [transitional, '#gtceu:circuits/lv']),
    ]).transitionalItem("gtceu:lv_4a_energy_converter")
        .loops(1)
})