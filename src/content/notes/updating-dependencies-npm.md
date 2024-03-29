---
title: Updating Dependencies (npm)
date: 2021-02-23
---

## With npm

You can use npm to view outdated dependencies with the `outdated` command:

- `npm outdated`

Which will output something like:

```shell
❯ npm outdated
Package                            Current    Wanted    Latest
@graphql-codegen/cli                1.20.0    1.20.0    1.20.1
@graphql-codegen/typescript         1.20.0    1.20.0    1.21.0
@types/koa                          2.11.6    2.13.0    2.13.0
@types/koa__router                   8.0.3     8.0.4     8.0.4
@types/node                       14.14.21  14.14.31  14.14.31
@typescript-eslint/eslint-plugin    4.13.0    4.15.2    4.15.2
@typescript-eslint/parser           4.13.0    4.15.2    4.15.2
@urql/core                          1.16.1    1.16.2     2.0.0
bullmq                              1.14.0    1.14.7    1.14.7
concurrently                         5.3.0     5.3.0     6.0.0
eslint                              7.18.0    7.20.0    7.20.0
graphql                             15.4.0    15.5.0    15.5.0
ioredis                             4.19.4    4.22.0    4.22.0
koa-better-http-proxy                0.2.5     0.2.8     0.2.8
shopify-api-node                     3.6.1     3.6.5     3.6.5
typescript                           4.1.3     4.1.5     4.1.5
```

Use `npm install <packagename>` to update a package's _in range_ dependencies.

## Update all dependencies

Often you want to update to newer versions than those allowed in your `package.json`, or just want to update _everything_.

Use [`npm-check-updates`](https://github.com/raineorshine/npm-check-updates) for this.

Run once in interactive mode:

- `npx npm-check-updates -i`

Then select the packages you want to update. This will update your `package.json` only. You still need to install the updated versions. Like this:

- `npm install`
