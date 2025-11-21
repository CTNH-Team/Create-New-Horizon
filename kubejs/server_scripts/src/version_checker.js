if (!global.worldName) global.worldName = {};
PlayerEvents.tick(event => {
    if (global.worldname) return
    let worldName = event.player.level.toString()
    let saveName = worldName.match(/\[(.*)\]/)[1]
    global.worldName = saveName
})
ServerEvents.loaded(event => {
    let currentVersion = JsonIO.read('modpack_version.json').version
    console.log(`Modpack version ${currentVersion}`)
    let saveName = global.worldName
    JsonIO.writeAndCreateDirectories("saves/last_login_version.json", {version:currentVersion,worldName:saveName})
    console.log(`Saved version ${currentVersion} for world ${saveName}`)
})