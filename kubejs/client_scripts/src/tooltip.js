import { $EventHandlerImplCommon$LevelEventAttachment } from "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

ItemEvents.tooltip(tooltip => {

    tooltip.addAdvanced('kubejs:temperature_keeping_device',
        /**
         * 
         * @param {import("packages/net/minecraft/world/item/$ItemStack").$ItemStack$Type} item
         * @param {Boolean} advanced
         * @param {import("packages/dev/ftb/mods/ftblibrary/util/$TooltipList").$TooltipList$Type} text
         */
        (item, advanced, text) => {
            let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
            let { energyStored, maxEnergyStored } = energy
            var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
            var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
            text.add(1, Text.translate('item.ctnh.durabilityofenergy', energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
            /*for(let index = 1; index < text.length; index++){
                let component = text.get(index)
                if(component.getString() == 'showenergy'){
                    var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
                    var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
                    text.set(index, component.translatable('item.ctnh.durabilityofenergy',energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
                    //text.set(index, component.translatable('item.ctnh.durabilityofenergy',maxDamage-damageValue, maxDamage).green())
                }
                
            }*/
        })
})

function unitChanger(number) {
    var unit = ""
    var newNumber = number

    for (let index = 0; index <= 2; index++) {
        newNumber = newNumber / 1000
        if (newNumber <= 1) {
            switch (index) {
                default: unit = ""
                    break;
                case 1: unit = "k"
                    break;
                case 2: unit = "M"
                    break;
            }
            break
        }
    }
    newNumber = Math.floor(newNumber * 100000) / 100
    return { newNumber: newNumber, unitName: unit }
}

ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:scp_500', (item, advanced, text) => {
        text.add(1, Text.translate('kubejs.scp_500.0'))
        text.add(2, Text.translate('kubejs.scp_500.1'))
    })
    event.addAdvanced('kubejs:scp_500_base', (item, advanced, text) => {
        text.add(1, Text.translate('kubejs.scp_500_base.0'))
    })
    event.add('kubejs:broken_temperature_keeping_device', Text.translate('ctnh.broken_temperature_keeping_device'))
    event.add('enderio:basic_energy_conduit', Text.translate('ctnh.basic_energy_conduit'))
    event.add('enderio:enhanced_energy_conduit', Text.translate('ctnh.enhanced_energy_conduit'))
    event.add('enderio:vibrant_energy_conduit', Text.translate('ctnh.vibrant_energy_conduit'))
    event.add('enderio:ender_energy_conduit', Text.translate('ctnh.ender_energy_conduit'))
    event.add('enderio:melodic_energy_conduit', Text.translate('ctnh.melodic_energy_conduit'))
    event.add('enderio:stellar_energy_conduit', Text.translate('ctnh.stellar_energy_conduit'))
    event.add('kubejs:circuit_resonatic_ulv', Text.translate('ctnh.circuit_resonatic_ulv'))
    event.add('kubejs:circuit_resonatic_lv', Text.translate('ctnh.circuit_resonatic_lv'))
    event.add('kubejs:circuit_resonatic_mv', Text.translate('ctnh.circuit_resonatic_mv'))
    event.add('kubejs:circuit_resonatic_hv', Text.translate('ctnh.circuit_resonatic_hv'))
    event.add('kubejs:circuit_resonatic_ev', Text.translate('ctnh.circuit_resonatic_ev'))
    event.add('kubejs:circuit_resonatic_iv', Text.translate('ctnh.circuit_resonatic_iv'))
    event.add('kubejs:circuit_resonatic_luv', Text.translate('ctnh.circuit_resonatic_luv'))
    event.add('kubejs:circuit_resonatic_zpm', Text.translate('ctnh.circuit_resonatic_zpm'))
    event.add('kubejs:circuit_resonatic_uv', Text.translate('ctnh.circuit_resonatic_uv'))
    event.add('kubejs:circuit_resonatic_uhv', Text.translate('ctnh.circuit_resonatic_uhv'))
    event.add('kubejs:circuit_resonatic_uev', Text.translate('ctnh.circuit_resonatic_uev'))
    event.add('kubejs:circuit_resonatic_uiv', Text.translate('ctnh.circuit_resonatic_uiv'))
    event.add('kubejs:mana_electronic_circuit', Text.translate('ctnh.circuit_mana_hv').red())
    event.add('kubejs:mana_integrated_circuit', Text.translate('ctnh.circuit_mana_ev'))
    event.add('kubejs:echo_processor', Text.translate('ctnh.circuit_echo_zpm').darkAqua())
    event.add('kubejs:echo_processor_assembly', Text.translate('ctnh.circuit_echo_uv').darkAqua())
    event.add('kubejs:echo_processor_computer', Text.translate('ctnh.circuit_echo_uhv').darkAqua())
    event.add('kubejs:echo_processor_mainframe', Text.translate('ctnh.circuit_echo_uev').darkAqua())
    event.add('kubejs:uhv_voltage_coil', Text.translate('ctnh.uhv_voltage_coil').white())

    event.add('gtceu:nan_certificate',Text.yellow('1.2.1版本毕业证明'))

    event.add('hostilenetworks:deep_learner',Text.translate('ctnh.hostilenetworks.deep_learner').yellow())
    event.add('hostilenetworks:sim_chamber',Text.translate('ctnh.hostilenetworks.sim_chamber').yellow())

    //Snow_city's cautions:
    //event.add('gtceu:ender_fluid_link_cover', '§4暂未实装')
    event.add(['gtceu:item_tag_filter', 'gtceu:fluid_tag_filter'], Text.red("非语句 [!] 不可用"))
    event.add('gtceu:nightvision_goggles', '§7用Gregtech的 [Armor Mode Switch] 键开启.')
    event.add(['gtceu:lp_steam_macerator', 'gtceu:hp_steam_macerator', 'gtceu:steam_grinder', 'gtceu:lv_macerator', 'gtceu:mv_macerator', 'ctpp:smashing_factory'], '§4研磨副产物只能通过HV及以上的电压获得！')
    event.addAdvanced('tconstruct:crafting_station', (item, advanced,text) => {
        text.add(1, '§4请不要将工作站连接到任何带有堆叠升级的容器中.')
        text.add(2, '§4此举动不会吞物品，但会导致工作站无法识别到大多出堆叠大于64的物品.')
    })
})
