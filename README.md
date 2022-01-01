## TODO

### Yes

- add `tags` to all frontmatter
- a11y double check (stylelint-a11y?)
- styles for quote blocks
- responsivitivity
- "🪲🪲🪲" is not a very helpful page title
- meta tags / og data
- properly update readme
- add RSS feed
- streamline the 'new post' workflow to be less manual. Maybe modify `dg` tool from https://egghead.io/courses/creating-a-digital-garden-cli-with-rust-34b8 
- dark mode toggle
- dark mode styles :D
- automate dependency updates

### Maybe?

- A whole load of design stuff, like...
- markers on the big links? arrows?
- heading link icons / text?
- custom prism styles?
- font size balancing? See: https://fontdrop.info/ and https://codepen.io/simonjhearne/pen/rNMGJyr
- Or, just some sort of cohesive approach to the design?
- figure out how to hook to an Obsidian vault for writing. (Maybe, what about MDX?) Check this out https://dev.to/bathrobe/creating-a-diy-digital-garden-with-obsidian-and-gatsby-378e
- background/header image on posts? hash post content and use hash as a seed for something generative? e.g. https://coolbackgrounds.io/ (triangilify) or https://jasonwebb.github.io/2d-differential-growth-experiments/experiments/07%20-%20bounds/

### Done
- ~give this a proper home. I guess replace https://github.com/m-allanson/portfolio~
- ~sort by date~
- ~tidy CSS~
- ~focus reset should use @supports focus-visible for safari~
- ~shrink / remove font files~

# Welcome to your new Toast site!

## scripts

### npm run postinstall

The postinstall script will run whenever you install the dependencies for a project. It handles converting any legacy 3rd party commonjs dependencies into browser-runnable ESM. The resulting ESM files are placed in `./public/web_modules/*` and can be cached if you wish (as long as you re-run postinstall when you install new dependencies).

### npm run build

```shell
npm run build
```

The build command runs the CSS build (Tailwind) and the site build (Toast).

### npm run build:css

The CSS build compiles (and purges) Tailwind via PostCSS.

```shell
npm run build:css
```

`postcss-cli` hasn't enabled node v12+ ESM yet, so we have to put our config in a special folder. This folder is `legacy-commonjs` and the only reason it is special is that it has a `package.json` with a single field: `"type": "commonjs"`, which tells node that the files in that folder are all CommonJS files (that is, they use `require()` and not `import`).

### npm run build:site

The site build command runs a full Toast build and outputs the results in `public/`.

```shell
npm run build:site
```
