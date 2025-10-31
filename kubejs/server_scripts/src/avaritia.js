ServerEvents.recipes(event => {
    event.remove({output: 'botania:creative_pool'})
    event.remove({output: 'avaritia:star_fuel'})
    event.remove({output: 'enderio:creative_power'})
    event.remove({id: 'avaritia:botania_mana_tablet'})
})