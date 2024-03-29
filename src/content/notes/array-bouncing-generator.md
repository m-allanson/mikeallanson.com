---
title: Array Bouncing Generator
date: 2021-02-15
---

I want to cycle through the values in an array. When I get to the end, I want to cycle _back_ through the values in reverse. I want to do this an unknown number of times.

Given an array like `[1, 2, 3, 4]`, give me the values `1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2` (etc).

You can do this with a generator function:

```js
function* bounce(values) {
  let step = -1;
  let size = values.length;
  let current = 0;

  while (true) {
    if (size < 2) {
      yield values[0];
    } else {
      yield values[current];
      // reverse direction at array boundary
      if (current === size - 1 || current === 0) step *= -1;
      current += step;
    }
  }
}
```

Usage:

```js
const myValues = [1, 2, 3, 4, 5];

const valueIterator = bounce(myValues);

let result = "";

// Bounce through the array until we have 20 values
for (let i = 0; i < 20; i++) {
  result += valueIterator.next().value;
}

// Logs "12345432123454321234"
console.log(result);
```
