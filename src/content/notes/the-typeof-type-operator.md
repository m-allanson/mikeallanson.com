---
title: The `typeof` Type Operator
date: 2021-10-28
tags:
  - typescript
---

this is part 2 of my notes from working through the [_Beginner 1_ exercise from TypeScript's _Type | Treat 2021_](https://www.typescriptlang.org/play?#gist/927ccc66ae3022dc64c4f650109b937a-1). [Part 1 can be found here](/notes/literal-types-and-as-const)

## `typeof`

[TypeScript's `typeof` operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html) can be used in a _type context_ to refer to the type of a variable or property. It's a complement to JavaScript's `typeof` operator, which works similarly but in an _expression context_.

Use `typeof` to refer to the type of the provided value.

## Type Index Syntax

When using [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html), there's a convenient helper for capturing the type of an array's elements. It looks something like `typeof MyArray[number]`.

## All Together

Putting all these features together gives us an approach to this problem. In short, the answer looks something like this:

```ts
const MyArray = ["a", "b", "c"] as const;

type Letter = (typeof MyArray)[number];
//   ^? type Letter = "a" | "b" | "c"
```

[Playground link](https://www.typescriptlang.org/play?ssl=4&ssc=8&pln=1&pc=1#code/MYewdgzgLgBAsgTwIICcUEMEwLwwNowDk6hANEQEZlHCEwC6M6EMokUA3AFBdQIAOAUxgAZQVCiCUOGHyEgAZvGRpMeMAFcAthSn1uAegMwTAPQD8XIA)
