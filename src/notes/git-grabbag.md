---
title: Git Grabbag
date: 2022-10-14
---

Recently I've had reason to do a bit more git slicing and dicing than usual. Here are a few notes to myself for next time.

## Investigate commits affecting a path since a date

### A graph of relevant commits

```
git log --since="2.weeks" --graph -- path/to/file/or/dir
```

### A list of affected files

```
git log --since="2022-10-20" --name-status --oneline -- path/to/file/or/dir
```

### A deduplicated list of all affected files

```
git log --since="2022-10-20" --name-status --oneline -- path/to/file/or/dir | grep "path/to/file/or/dir" | sort | uniq
```

### Diff change since a date

```
git diff 'develop@{2022-10-20}' HEAD -- path/to/file/or/dir
```

Replace `develop` with any branch name, or `HEAD`.

The date can be a variety of formats:

- "2008-01-15"
- "2 years 1 day 3 minutes ago"

As usual, [the official docs](https://www.git-scm.com/docs/git-log) are very comprehensive.

## Partial stash

`git stash` records the current state of your working directory. But sometimes it's useful to split your changes up into multiple stashes.

Pushing a stash with a message and pathspec allows you to stash specific files with a message:

```
git stash push -m "My message" path/to/file/or/dir
```

## Apply changes from a particular stash

If you've created multiple stashes, you might want to apply the changes from a particular stash.

Stashes can be listed with their names:

```
git stash list
stash@{0}: WIP on develop: c74abac Remove stray characters: Come back to this
stash@{1}: WIP on develop: c74abac Remove stray characters: Some other message
stash@{2}: WIP on develop: c74abac Remove stray characters: My message
```

> Each stash entry is listed with its name (e.g. stash@{0} is the latest entry, stash@{1} is the one before, etc.), the name of the branch that was current when the entry was made, and a short description of the commit the entry was based on.

From [the git stash docs](https://www.git-scm.com/docs/git-stash#Documentation/git-stash.txt-listltlog-optionsgt).

Find the message you want, then use the stash index to operate on that stash. e.g.

```
git stash apply 2
```

To apply the "My message" stash.

## Working with submodules

Setup:

```
git submodule init
git submodule update
```

Escape hatch:

```
git submodule deinit -f .
```
