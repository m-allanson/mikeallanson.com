---
title: Minify JavaScript with esbuild
date: 2021-02-12
updated: 2021-09-11
---

> _Update 2021-09-11:_ [`esbuild v0.9.0`](https://github.com/evanw/esbuild/releases/tag/v0.9.0) removed support for the `startService` API used in this post. For `esbuild v0.12.26`, [this script](https://github.com/m-allanson/mikeallanson.com/blob/8a36ff8b3c3c21d4f478025a342dbd0e06ba4b9d/scripts/minify-js.js) is working for me.

[esbuild's website](https://esbuild.github.io/) says it's:

> An extremely fast JavaScript bundler

I want to minify some code without worrying about bundling. esbuild can do that too.

Some [recent minification benchmarks](https://github.com/privatenumber/minification-benchmarks) mark it significantly faster than most other bundlers, and within a few percent on output filesize.

Sounds good to me!

Here's how I'm using it:

```js
import esbuild from "esbuild";
import fs from "fs/promises";

async function* getFiles(path = `./`) {
  const entries = await fs.readdir(path, { withFileTypes: true });

  for (let file of entries) {
    if (file.isDirectory()) {
      yield* getFiles(`${path}${file.name}/`);
    } else {
      yield path + file.name;
    }
  }
}

async function main(dir) {
  const options = {
    format: "esm",
    minify: true,
    target: "es2020",
  };

  try {
    for await (const filePath of getFiles(dir)) {
      if (filePath.endsWith(".js")) {
        const fileContents = await fs.readFile(filePath, "utf-8");
        const transformed = await service.transform(fileContents, options);
        await fs.writeFile(filePath, transformed.code);
      }
    }
  } finally {
    service.stop();
  }
}

await main("public/");
```

This uses [esbuild's Service API](https://esbuild.github.io/api/#js-specific-details), to start a long running esbuild server, then pushes files through to esbuild to be minified.

While reading the Service API docs again, I realised that we don't have to minify each file one-by-one. We can shove all the files through to esbuild and let it process them in parallel. Here's a second version that does that. It creates an array of promises, with each promise responsible for minifying one file.

```js
import esbuild from "esbuild";
import fs from "fs/promises";

async function* getFiles(path = `./`) {
  const entries = await fs.readdir(path, { withFileTypes: true });

  for (let file of entries) {
    if (file.isDirectory()) {
      yield* getFiles(`${path}${file.name}/`);
    } else {
      yield path + file.name;
    }
  }
}

const minifyOptions = {
  format: "esm",
  minify: true,
  target: "es2020",
};

async function minifyFile(filePath, minifier) {
  const fileContents = await fs.readFile(filePath, "utf-8");
  const transformed = await minifier.transform(fileContents, minifyOptions);
  return await fs.writeFile(filePath, transformed.code);
}

async function main(dir) {
  let minifier = await esbuild.startService();
  let promises = [];

  try {
    for await (const filePath of getFiles(dir)) {
      if (filePath.endsWith(".js")) {
        promises.push(minifyFile(filePath, minifier));
      }
    }

    await Promise.all(promises);
  } finally {
    minifier.stop();
  }
}
```

On my machine this minified ten files in ~22 milliseconds, vs ~35 milliseconds for the first version.

I'd have to run this script millions of times to see any benefit from this optimisation. But at least I can confidently state my official conclusion: esbuild is pretty neat.

## Minifying other file types

`esbuild` has bundling support for CSS. I haven't (yet) tested whether I can use it to _minify_ CSS. Maybe it will handle JSON too?
