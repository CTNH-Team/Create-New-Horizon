GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    const LocalizationUtils = Java.loadClass('com.lowdragmc.lowdraglib.utils.LocalizationUtils')
    const FormattingUtil = Java.loadClass('com.gregtechceu.gtceu.utils.FormattingUtil')
    const $ICoilType = Java.loadClass("com.gregtechceu.gtceu.api.block.ICoilType")
    const $I18n = LDLib.isClient() ? Java.loadClass("net.minecraft.client.resources.language.I18n") : null
    GTRecipeTypes.register('vacuum_sintering', 'multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
        .addDataInfo(data => {
            return LocalizationUtils.format("gtceu.recipe.temperature", FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
            if (LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
        .setUiBuilder((recipe, widgetGroup) => {
            /**@param {$List_} items*/
            let temp = recipe.data.getInt("ebf_temp");
            let items = new $ArrayList()
            items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => coil.getKey().getCoilTemperature() >= temp).map(coil => new $ItemStack(coil.getValue().get())).toList());
            widgetGroup.addWidget(new SlotWidget(new CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false));
        })
    GTRecipeTypes.register('crystallizer', 'multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
        .addDataInfo(data => {
            return LocalizationUtils.format("gtceu.recipe.temperature", FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
            if (LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
        .setUiBuilder((recipe, widgetGroup) => {
            /**@param {$List_} items*/
            let temp = recipe.data.getInt("ebf_temp");
            let items = new $ArrayList()
            items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => coil.getKey().getCoilTemperature() >= temp).map(coil => new $ItemStack(coil.getValue().get())).toList());
            widgetGroup.addWidget(new SlotWidget(new CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false));
        })
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    const CoilWorkableElectricMultiblockMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine')
    event.create('vacuum_sintering_tower', 'multiblock', (holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('vacuum_sintering')
        .recipeModifier((machine, recipe) => {
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine, recipe)
            let parallel = 1
            if (newrecipe.duration < 1) {
                parallel = 1 / newrecipe.duration
            }
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "AAAAA", "A###A", "#####", "#####", "#####") 
            .aisle("ABBBA", "ABBBA", "ABBBA", "#BBB#", "#BBB#", "#####") 
            .aisle("AAAAA", "CBBBC", "DBEBD", "DB#BD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "ABBBA", "ABEBA", "#B#B#", "#BBB#", "##C##") 
            .aisle("AAAAA", "CBBBC", "DBEBD", "DB#BD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "ABBBA", "ABEBA", "#B#B#", "#BBB#", "##C##") 
            .aisle("AAAAA", "CBBBC", "DBEBD", "DB#BD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "ABBBA", "ABEBA", "#B#B#", "#BBB#", "##C##") 
            .aisle("AAAAA", "CBBBC", "DB@BD", "DBBBD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "AA#AA", "A###A", "#####", "#####", "#####")  
            .where("A", Predicates.blocks("gtceu:heatproof_machine_casing"))
            .where("#", Predicates.any())
            .where("B", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where("D", Predicates.blocks("gtceu:tungsten_steel_frame"))
            .where("E", Predicates.heatingCoils())
            .build()
        )
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .workableCasingRenderer('gtceu:block/casings/gcym/high_temperature_smelting_casing', 'gtceu:block/multiblock/implosion_compressor', false)

    event.create('crystallizer', 'multiblock', (holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('crystallizer')
        .recipeModifier((machine, recipe) => {
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine, recipe)
            let parallel = 1
            if (newrecipe.duration < 1) {
                parallel = 1 / newrecipe.duration
            }
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##AAAAA##", "###BCB###", "###BBB###", "#########", "#########", "#########", "#########", "#########", "#########") 
            .aisle("#AAAAAAA#", "##AACAA##", "###AAA###", "####D####", "####D####", "####D####", "####D####", "####A####", "#########") 
            .aisle("AAAAAAAAA", "#ADCCCDA#", "##DAAAD##", "##D###D##", "##D###D##", "##D###D##", "##D#A#D##", "##AAAAA##", "####A####") 
            .aisle("AAACCCAAA", "BACEEECAB", "BAAAEAAAB", "####F####", "####F####", "####F####", "###AEA###", "##AAAAA##", "###ABA###") 
            .aisle("AAACCCAAA", "CCCEGECCC", "BAAEGEAAB", "#D#FGF#D#", "#D#FGF#D#", "#D#FGF#D#", "#DAEEEAD#", "#AAACAAA#", "##ABCBA##") 
            .aisle("AAACCCAAA", "BACEEECAB", "BAAAEAAAB", "####F####", "####F####", "####F####", "###AEA###", "##AAAAA##", "###ABA###") 
            .aisle("AAAAAAAAA", "#ADCCCDA#", "##DAAAD##", "##D###D##", "##D###D##", "##D###D##", "##D#A#D##", "##AAAAA##", "####A####") 
            .aisle("#AAAAAAA#", "##AACAA##", "###AAA###", "####D####", "####D####", "####D####", "####D####", "####A####", "#########") 
            .aisle("##AAAAA##", "###B@B###", "###BBB###", "#########", "#########", "#########", "#########", "#########", "#########")  
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:sturdy_machine_casing"))
            .where("B", Predicates.blocks("gtceu:heat_vent"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
            .where("D", Predicates.blocks("gtceu:tungsten_frame"))
            .where("E", Predicates.heatingCoils())
            .where("F", Predicates.blocks("gtceu:laminated_glass"))
            .where("G", Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .build()
        )
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_sturdy_hsse', 'gtceu:block/multiblock/implosion_compressor', false)
})