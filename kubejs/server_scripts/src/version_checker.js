PlayerEvents.loggedIn((event) => {
    let worldName = event.player.level.toString()
    let saveName = worldName.match(/\[(.*)\]/)[1]
    let currentVersion = JsonIO.read('modpack_version.json').version
    JsonIO.write("saves/last_login_version.json", {version:currentVersion,worldName:saveName})
})