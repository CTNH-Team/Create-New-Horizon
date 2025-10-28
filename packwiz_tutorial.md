## Install mods
use `packwiz curseforge install [url]` to add a pw.toml file to your game.  
Then use `bash fixup.sh mods/[the new mod you add]` to fill the right download url of it.  
Finally run `java -jar packwiz-installer-bootstrap.jar pack.toml` to download missing mods.
## packwiz refresh
Every time you finish changing something, you'd better run `packwiz refresh` to refresh the pack before submit.
## fix missing mods
You can find that what you pulled from the repository in the mods file folder is all pw.toml files, we should run `java -jar packwiz-installer-bootstrap.jar pack.toml` to download missing mods. If it report some warning, don't care and just click `continue`.
## Tutorial
[网址](https://packwiz.infra.link/tutorials/creating/getting-started/)