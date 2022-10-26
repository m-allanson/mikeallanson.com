---
title: Visitor Pattern Example
date: 2022-08-12
---

A short refresher on using the Visitor pattern.

The Visitor pattern allows functionality to be added to a class without modifying the class.

It's useful when you have a collection of classes (Elements) that may need additional groups of functionality. A Visitor can implement functionality that applies to a group of Elements, avoiding the need to change every Element.

A simple Visitor pattern in TypeScript:

```ts
// The Element
abstract class Elem {
  abstract accept<T>(visitor: Visitor<T>): T;
}

// The Visitor
interface Visitor<T> {
  visitHello(element: Hello): T;
  visitWorld(element: World): T;
}

// Elem implementations
class Hello extends Elem {
  readonly hello = "hello";

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitHello(this);
  }
}

class World extends Elem {
  readonly world = "world";

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitWorld(this);
  }
}

// Visitor implementation
// Create new Visitor implementations to apply different functionality to Elem classes
class HelloWorlder implements Visitor<string> {
  run(element: Elem) {
    return element.accept(this);
  }

  visitHello(element: Hello): string {
    return `visitHello says: ${element.hello.toUpperCase()} world!`;
  }

  visitWorld(element: World): string {
    return `visitWorld says: hello ${element.world.toUpperCase()}!`;
  }
}

// Usage
const worlder = new HelloWorlder();
console.log(worlder.run(new World()));
console.log(worlder.run(new Hello()));
```

[Run on the TypeScript Playground](https://www.typescriptlang.org/play?#code/PTAEBUAsFNQUQDbQLbQHYBcBQBDARgM4YBOOAxhqGQjgQfEsqAN5aij5GkUdlnQAHDAB5wAPgAUANwCWBGRgD2xAFygAanIXLRYgJRrwAbiwBfLFhmZoxAGblYm+UuK6WbULOcAJaAgSKEn4o6Bhqvv6KBhAm7F4KAOrKCAAmQYyhaknEqdHGZhYgDCigMsgCGZg4GDKKaAQW1LT0EQGg0AAeGOgp9IglrOzE0DgpdQgAnqAwkaAAvKAA5DMBix4e5PxCutJaLmpO2q7iee7sQ9AYAK7EaJ57ygB08RitgRiQcnoe5uZYTXRQNlUu0uj0+owzqBhqNxlMAO7JFLzJaInIpNYbPiCETiXbOZQHB7HfSGKEXa63e4E4jPPbAtIfL4-ApYIqHFylcqVDDVWpoNlgADCMO6oDQ0HhGmJXIqISqNTq9CUHAEFSmKRktlsNlCoFsVzQFH5OAQCimKv6TABBGgDRtoDeDJssp59A5Oi4VgA5mIocRDel5WFisg9OToZcbndgqhMI9NjiJEyCHpYqA-nE9m8g3GQ29ol60N6I8NKXcAAYvN6gAg4CYENQAEmYsdCjxWikeSgAqmqbELaNAJHpTKA0akAIQVlkeF4M3OZIFIwskH2lqNUqv0pG1+uN6Z+NottvxicpbuKPsCAdDkemacsv5kJWUc8uhYSqVOpE2Ecmf4lUUJBHgCb0JHfWkAzQCQv2XdERz0b4X3qYDoFAxRwMgx5oNgyVHSPQIkL0IA)

The above script will output:

```
visitWorld says: hello WORLD!
visitHello says: HELLO world!
```

## References

- [Chapter 5.3 of Crafting Interpreters](https://craftinginterpreters.com/representing-code.html#working-with-trees) contains a good description
- [Visitor pattern on Wikipedia](https://en.wikipedia.org/wiki/Visitor_pattern)
