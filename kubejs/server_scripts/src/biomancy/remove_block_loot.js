LootJS.modifiers((event) => {
    //console.log('Removing Biomancy flesh block drops');
    event.addBlockLootModifier('#ctnhbio:growable_block')
        .removeLoot(ItemFilter.ALWAYS_TRUE);
});
