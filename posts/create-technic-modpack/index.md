---
path: /create-technic-modpack
title: "Create Technic Modpack & Server"
date: "2021-01-23"
tags:
  [
    "Minecraft",
    "Gaming",
    "Technic Launcher",
    "Modded Minecraft",
    "Forge Mod Loader",
  ]
source: "https://technicpack.zendesk.com/hc/en-us/articles/204199345-How-to-make-a-Minecraft-modpack"
---

## Create Modpack

### Folder Structure

Create a folder e.g. `modpack` and create subfolders called `bin`, `config` and `mods`.

### Install Forge

Download the [Forge Installer](http://files.minecraftforge.net/) and `Extract` it into your `modpack/bin` folder. Rename the extracted jar-file to `modpack.jar`.

> Note: This did not work for me (Forge would not load mods when starting the game). I solved it by installing a modpack using the same version of Minecraft from Technic Launcher and copying the `modpack.jar` from there.

### Install Mods

Download all the desired mods and place them in `modpack/mods`.

### Generate Config Files

In order to generate all the necessary config files, the mods need to be installed and run on a client. Use the same Forge Installer as before and use `Install Client`. Now start Minecraft Launcher and launch the newly created profile. Quit Minecraft as soon as it has finished starting up. Copy everything from `.minecraft/config` to `modpack/config`.

> Tip: If your `.minecraft` folder is cluttered from previous mod installations you can start Minecraft Launcher with a custom directory: `path/to/MinecraftLauncher.exe --workDir path/to/alternative/.minecraft`

### Create Archive

Archive all the contents of `modpack` into `modpack.zip`.

### Host Modpack

The modpack needs to be publicly hosted and the zip-file must be directly accessible. One possibility is using Dropbox. Upload `modpack.zip`, create a share link and change the `dl` param to `dl=1` to enable direct download.

### Publish on Technic

[Login](https://www.technicpack.net/) and create a new modpack. Enter all the necessary information and most importantly the Dropbox url you created.

## Create Server

In order to play your modpack on a server all the mods have to be installed on the server as well (unless stated otherwise).

### Install Forge Server

To set up a Forge server create a `modpack-server` directory. Use the same Forge Installer as before and `Install Server` into your newly created folder.

### Install Mods

Copy your mods into the `modpack-server/mods` folder.

### Create Start Script

Create a new file `start.bat` and set its content to:

```
java -Xmx10G -Xms10G -jar server.jar nogui
pause
```

Make sure your Forge server jar is called `server.jar`.
