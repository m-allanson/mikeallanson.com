---
title: Literal Types and `as const`
date: 2021-10-27
tags:
  - typescript
---

these are my notes from working through the [_Beginner 1_ exercise from TypeScript's _Type | Treat 2021_](https://www.typescriptlang.org/play?#gist/927ccc66ae3022dc64c4f650109b937a-1).

## Literal Types

TypeScript will create literal types for values where possible. For example, the type of `const myString = 'a string'` will be `a string`. Because the variable is a string, and it's declared with `const` then its value (and therefore its type) must always be `a string`.

For arrays, TS will type the array based on the primitive types of the array's values. e.g. `const myArray = ['a', 'b', 'c']` will be typed as `string[]`.

## Tuple Types

TS also has [_Tuple Types_](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types), which are:

> another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

If I know `myArray` won't change, I can define its type like:

```ts
type MyArray = ["a", "b", "c"];

const myArray: MyArray = ["a", "b", "c"];

// Now this will error
myArray.push("d");
// Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'.
```

[TS Playground link](https://www.typescriptlang.org/play?#code/C4TwDgpgBAsiCCAnRBDEUC8UDaByFuANFLgEZEkDGuAugNwBQDlA9gHYDOwUAtgsmgBcsfqnRY8BYmQq5qNJnyRiAdGACuHABYAKXFpQHcASiA)

## Type Assertions

TS allows you to assert the type of a value, which is useful when you have more information than the TS compiler.

```ts
// type 1
const myNum = getIntLessThanTwo() as 1;
```

## `const` Assertions

Building on type assertions, TS introduced [`const` assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions), which act as a shortcut for literally typing a value.

```ts
// Type '"hello"'
let x = "hello" as const;

// Type 'readonly [10, 20]'
let y = [10, 20] as const;

// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
```

## Literally typing an array

Pulling together the above info we've got three ways to literally type an array.

```ts
type MyArray = ["a", "b", "c"];

// type ["a", "b", "c"]
const firstArray: MyArray = ["a", "b", "c"];

// type ["a", "b", "c"]
const secondArray = ["a", "b", "c"] as ["a", "b", "c"];

// type readonly ["a", "b", "c"]
const thirdArray = ["a", "b", "c"] as const;
```

Note that `thirdArray`'s type has a `readonly` modifier. I'm not sure what the practical difference is in this simple example.

## To Be Continued

This gets us through the first part half of the answer. [To be continued...](/the-typeof-type-operator)
