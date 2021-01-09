---
path: /raspberry-pi-backup
title: "Raspberry Pi Backup"
date: "2020-06-28"
tags: ["Raspberry Pi", "macOS"]
source: "https://pimylifeup.com/backup-raspberry-pi/"
---

## Backup

### Connect via ssh

```bash
ssh user@host
```

Enter the password when prompted.

### Shutdown

```bash
sudo shutdown now
```

### Insert sd card into computer

Remove the sd card from the Raspberry Pi once it has powered off. Then insert it into your computer.

> These instructions work for macOS only.

### Find device name of mounted sd card

```bash
diskutil list
```

Look for a device that matches the size of your sd card. The device probably has a partition called `boot`.

The device will be called something like `/dev/disk2`.

### Make backup

```bash
sudo dd if=/dev/disk2 of=~/Desktop/backup.dmg
```

Including useful information like the current date or content of the backup in the filename might be a good idea.

> This command can take some time and will not indicate any progress - just hang on.

### Eject sd card

```bash
sudo diskutil eject /dev/disk2
```

## Restore

### Insert sd card and identify device name

Find device name as described [here](#find-device-name-of-mounted-sd-card).

### Unmount sd card

```bash
diskutil unmountDisk /dev/disk2
```

### Restore backup

```bash
sudo dd if=~/Desktop/backup.dmg of=/dev/disk2
```

> This command can take some time and will not indicate any progress - just hang on.

### Eject sd card

```bash
sudo diskutil eject /dev/disk2
```
