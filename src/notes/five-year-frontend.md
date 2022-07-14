---
title: Five Year Frontend
date: 2021-03-04
---

How do you design a web app for the following constraints:

The app is based around a multiple choice survey. User responses are stored for later analysis. The app will get significant traffic around certain real-world events. It may be several years between events, where the app will get relatively low traffic. The app will be open source, with contributions encouraged. There is limited budget and developer time to maintain the app between events.

In summary:

- Built for the long term
- Traffic volume will vary significantly
- Maintenance should be simple
- Contributor friendly where possible

## Some thoughts

I'm not going to think about the backend for now, here's some musings on the frontend.

_Variable traffic volumes_ is basically a perfect usecase for serverless. Most of the time the app will have relatively low traffic, leading to lower costs.

One route to _simple maintenance_ is to have less code. Less code = less things that can break. This includes dependencies. Node.js projects in particular are notorious for having many dependencies that require regular updating. Build 'only' the simplest thing that works (easier said than done).

Tools that help with automated updates can help with this (e.g. dependabot) - regular small updates are easier to manage than rare massive updates.

Choose dependencies that are easily replaceable?

To be _contributor friendly_ lean towards more populist tech choices, to maximise the pool of potential volunteers. And use automation where possible - Tests, deployments, dependency updates. Shorten the path from 'code is written' to 'code is deployed'.

### Frontend tech options

Could you use plain HTML and non-library JavaScript? Beware writing your own undocumented, unmaintained one-off framework.

Web Components? It's the platform. Likely to be supported for a long time. What browser support is required? Can polyfill. What's the story on state management and routing? Would adding `lit` make Web Components easier to work with?

React has a good history of non-breaking changes. Backed by Facebook, likely to be around for the long term. Generally requires build tooling. Vibrant ecosystem allows choices but can result in more dependencies.

Vue can be used without tooling. Generally seen as more beginner friendly than React. Has a more integrated ecosystem (official routing, state management, test utils) which may make for smoother upgrades. Easier to go 'no build tool' (which means less dependencies) compared to React?

Preact mixes some of the upsides of Vue - easier buildless approach, an 'official' routing lib with some of the upsides of React - well known API, huge ecosystem.

Svelte / Sapper - Sapper under early development. Svelte maybe too niche to be volunteer friendly? Particularly if the app is not aimed at a developer audience. Similar to React in that you will stitch together your custom set of dependencies.

Use plain CSS for styling. CSS never goes out of style (😩😅).

## Prototyping

How to approach it? Explore the problem with plain HTML and JavaScript, document any roadblocks and then look towards Vue? What tech are the dev team experienced with? That should weigh into the decision too.

Is the data _write rarely, read often_? Can you create a 'static' API? Embed JSON files into the frontend. That pushes more work to the CDN and means backend costs are incurred more rarely.

Ensure frontend is not chatty with backend - get initial data, then manage as much as possible in the client. Only communicating with the backend when absolutely necessary.

## Conclusion

There's no real conclusion here. These are some of the things I'd think about if I were working on a project like this.
