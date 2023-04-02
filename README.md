# About

This is my website, a continual work in progress.

Expect to find things that are broken or half-finished.

This version of the site is built with [Astro.js](https://astro.build/) and a heavy sprinkle ideas from https://buildexcellentwebsit.es.

Earlier versions were built with Eleventy ([v2 branch](https://github.com/m-allanson/mikeallanson.com/tree/v2)), and Toast ([v1 branch](https://github.com/m-allanson/mikeallanson.com/tree/v1)).

## Credits

Forked from: https://github.com/withastro/astro/tree/latest/examples/blog

Architecture from: https://glitch.com/edit/#!/build-excellent-websites project. See https://buildexcellentwebsit.es/ for more info on the principals behind it. Or watch the talk: https://heypresents.com/talks/be-the-browser-s-mentor-not-its-micromanager

## Todo

Rough todo notes. I might or might not do any of these.

- Check internal links. There's a couple at least that are broken
- Check RSS / reader view
- Check sitemap?
- A11y review
- Add CSP?
- ~~Dark mode~~
- ~~Fiddle with fonts~~ Enough for now. Not sure if I've made it better or worse.
- ~~Notes not posts~~
- ~~Quote block styles~~ Good enough for now
- ~~Page titles~~
- ~~Add link to GitHub~~
- ~~Add footer~~
- ~~Redirects for old pages?~~
- ~~Choose colours instead of using the defaults~~
- ~~Check email works~~

Original ~11ty/eleventy-base-blog~ Astro Starter Kit Blog README follows...

# Astro Starter Kit: Blog

```
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://user-images.githubusercontent.com/4677417/186189140-4ef17aac-c3c9-4918-a8c2-ce86ba1bb394.png)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
