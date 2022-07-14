---
title: For...in or For...of
date: 2021-02-13
---

I can never remember which is which when it comes to `for...in` and `for...of`.

One iterates over values and one over properties. But which is which? Lucky you, future me, you'll find out if you keep reading.

## The difference

> The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
>
> The for...of statement iterates over values that the iterable object defines to be iterated over.
>
> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in)

Thank you, MDN (always).

In short:

- _in_ for properties
- _of_ for values

## Other looping methods

You might want `for()`, `map()` or `forEach()` instead.

See MDN for [a few other looping approaches](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) that you might not want.
