---
title: A Rendering Bug in Safari
date: 2021-02-18
---

I found a mysterious Safari rendering issue while working on this site.

At first I thought I must have written some wonky CSS, so I attempted to create a [minimal reproduction on CodeSandbox](https://kh4qf.csb.app).

The reproduction gave me enough understanding to search through the WebKit bug tracker. Say hello to known issue number [156684](https://bugs.webkit.org/show_bug.cgi?id=156684).

The bug report described the exact cause of the issue, which gave me the information needed to [work around it](https://github.com/m-allanson/garden/pull/1).

Then everyone lived happily ever after.

The end 🎉
