---
title: Change a commit's parent
date: 2021-08-16
---

Occasionally I want to move some commits from one branch to another. I do this rarely enough that I forget how to do it each time, but often enough that I know I'll need to do it again.

There are some detailed Stack Overflow answers that dig into different ways to do it. But I find them tricky to understand and follow, mainly because I _know_ this is something I've done in the past without much fuss.

Here it is:

```git
git rebase --onto <new-parent-ref> <old-parent-ref> <target-branch-ref>
```

If you skip the third argument, the current `HEAD` is used instead.

There are some great examples in the [git docs](https://git-scm.com/docs/git-rebase).

Here's an example from the docs that covers my most common use-case. With branches like:

```shell
 o---o---o---o---o  main
         \
          o---o---o---o---o  next
                           \
                            o---o---o  topic
```

And a desired layout of:

```shell
o---o---o---o---o  main
        |            \
        |             o--o--o  topic
         \
          o---o---o---o---o  next
```

You can use the following command:

```git
git rebase --onto main next topic
```

Note that the refs can be commit hashes as well as branch names (does this apply to `<target-branch-ref>`?).

Thanks git!
