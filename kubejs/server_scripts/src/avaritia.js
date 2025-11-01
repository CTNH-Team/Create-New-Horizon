ServerEvents.recipes(event => {
    event.remove({output: 'botania:creative_pool'})
    event.remove({output: 'avaritia:star_fuel'})
    event.remove({output: 'enderio:creative_power'})
    event.remove({id: 'avaritia:botania_mana_tablet'})
    remove_recipes_id(event, [
        'avaritia:infinity_ingot',
        'avaritia:infinity_catalyst_eternal',
        'avaritia:infinity_catalyst',
        /avaritia:(.*)neutron_collector/,
        /avaritia:(.*)neutron_compressor/,
        'avaritia:extreme_crafting_table'
    ])
})