/**
 * @param { Internal.RecipesEventJS } event 
 * @param { number } duration - 燃烧时间
 * @param { number } rate - 熔炼速度(mb/t)
 * @param { number } temperature - 燃料温度(熔点)
 * @param { [string, number] } fuel_fluid - 输入流体[ID, 数量]
 */
function melting_fuels(event, duration, rate, temperature, fuel_fluid) {

    const recipe = {
        "type": "tconstruct:melting_fuel",
        "duration": duration,
        "fluid": {
            "amount": fuel_fluid[1],
            "fluid": fuel_fluid[0]
        },
        "rate": rate,
        "temperature": temperature
    };
    // 注册配方
    event.custom(recipe);
}