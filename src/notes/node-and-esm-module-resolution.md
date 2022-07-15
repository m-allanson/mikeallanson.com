---
title: Node and ESM module resolution
date: 2021-03-01
---

## The short version

- Include a `"type": "module"` in the `package.json` for the imported module.

OR

- Set the file extension of the imported module to `.mjs`.

## The longer version

I was a bit confused about this, so created a repo to shore up my understanding: [github.com/m-allanson/node-esm-resolution](https://github.com/m-allanson/node-esm-resolution).

If you're writing a package and want to export CommonJS and ESM versions, here's [a good overview by Dr. Axel Rauschmayer](https://2ality.com/2019/10/hybrid-npm-packages.html).

And [some further information, including potential pitfalls of dual-format packages in Node's docs](https://nodejs.org/api/packages.html#packages_dual_commonjs_es_module_packages).
