---
title: Loading Modules in the Browser
date: 2021-07-26
---

Use:

```js
<script type="module" src="myFile.js"></script>
```

The `defer` attribute is automatically implied. `defer` allows the browser to download and parse the script in parallel with HTML parsing. The script is executed after the document has been parsed, but before `DOMContentLoaded`.

Scripts will execute in the order they appear in the document.

## The `async` attribute

Use the `async` attribute like this:

```js
<script type="module" src="myFile.js" async></script>
```

The `async` attribute causes the script to execute as soon as it's been downloaded. Interrupting HTML parsing if necessary.

This disables 'in-order' execution of the script. It will execute as soon as possible.

## More info

- [The `<script>` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [`<script>` cheatsheet](https://gist.github.com/jakub-g/385ee6b41085303a53ad92c7c8afd7a6)
- [JavaScript modules on v8.dev](https://v8.dev/features/modules#module-vs-script)
