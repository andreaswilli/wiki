---
path: /edit-keyboard-layout
title: "Edit keyboard layout on Linux"
date: "2022-10-23"
tags: ["linux", "keyboard layout"]
source: "https://vi.stackexchange.com/a/12014"
---

I keep accidentally typing `Shift-Space` which inserts a non-breaking space instead of a regular space. That's why I wanted to edit my keyboard layout. The following example shows how to change `Shift-Space` to insert a regular space.

## Edit layout

On my machine (Fedora) the file is located here:

```sh
/usr/share/X11/xkb/symbols/ch
```

Search for the correct line and change it like this:

```diff
- key <SPCE> { [	space, 	nobreakspace,	nobreakspace		]	};
+ key <SPCE> { [	space, 	space,	      nobreakspace		]	};
```

## Apply changes

In order to apply the changes the layout needs to be set again. In my case:

```sh
setxkbmap ch de_mac
```
