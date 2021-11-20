---
path: /advanced-git
title: "Advanced Git"
date: "2021-11-20"
tags: ["Git", "Coding"]
source: "https://www.freecodecamp.org/news/advanced-git-interactive-rebase-cherry-picking-reflog-and-more/"
---

## Interactive Rebase

Command:

```sh
$ git rebase -i <commit>
```

`<commit>` determines how far back in history we want to go. In order to modify a specific commit we need to target at least its parent commit. Specify by commit hash or relative to HEAD (e.g. `HEAD~4`).

After running the command, all the commits in the specified range will be listed (will be applied in order from top to bottom):

```
pick 0806d19 Update index.md
pick 3c8e94c Add new post
pick 62ac5ee Work on design
pick 0c8ee86 Fix icon alignment in heading
```

Below, some instructions are displayed:

```
# Rebase 8b11454..0c8ee86 onto 8b11454 (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
```

Now we need to choose the actions we want (write at start of line; default is `pick`). Then close the editor which will start to execute the rebase.
