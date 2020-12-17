---
path: /raspberry-pi-mount-nas
title: "Raspberry Pi mount NAS"
date: "2020-12-17"
tags: ["Raspberry Pi", "NAS"]
---

The following command will mount the network drive:

```bash
sudo mount -t nfs 192.168.2.28:/volume1/NAS /volume1/NAS
```

