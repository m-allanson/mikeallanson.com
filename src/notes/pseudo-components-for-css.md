---
title: Pseudo "Components" for CSS
date: 2021-03-06
---

There are many many CSS naming conventions. Most methodologies are aimed at encapsulating your styles and / or restricting the cascade. They are all different ways to _contain complexity_.

Here's another one: repurposing the `is` attribute to give a name to the thing being styled.

## What's the deal then?

This approach uses CSS nesting and the `is` attribute to scope styles to your named "components". Name a component by adding an `is="my-name"` attribute to your HTML element. Then scope styles to your component by nesting all your CSS selectors inside the `is` attribute.

## Why this is useful

This technique scopes styles to your defined "components". It's easy to delete your CSS because styles can't leak outside of the component. You can use the CSS cascade _within_ components. You can use a linter (like stylelint) to enforce this usage pattern in your project.

## What does this look like?

Well _me_, I'm glad I asked. Here's an HTML card "component":

```html
<div is="card">
  <h2>Impunity</h2>
  <p>Exemption or freedom from punishment, harm, or loss</p>
  <a href="https://www.merriam-webster.com/word-of-the-day/impunity-2021-03-06">
    Full definition
  </a>
</div>
```

And some CSS:

```css
@use postcss-nested;

div[is="card"] {
  border: 2px solid hotpink;
  border-radius: 6%;
  max-width: 10em;
  padding: 1em;
  font-family: sans-serif;

  & h2 {
    margin: 0;
  }

  & a {
    color: hotpink;

    &:hover {
      color: tomato;
      text-decoration: none;
    }

    &:focus {
      border: 2px solid hotpink;
    }
  }
}
```

[Link to Codepen](https://codepen.io/m-allanson/pen/jOVvwGy?editors=1100)

Note that the CSS is using [postcss-nested](https://github.com/postcss/postcss-nested). You can do similar nesting with SCSS or Less. There's also a [CSS Working Group draft for the `&` selector](https://drafts.csswg.org/css-nesting-1/).

## Aside - What is `is`?

`is` is [an attribute from the Web Components spec](https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element). It's used to define a _customized built-in element_. But we're not writing Web Components here, it's just a handy attribute to use as a CSS target.

## Drawbacks

- This could be confusing if you're already using Web Components on the site
- Overloading an existing attribute is not necessarily obvious
- The `is` attribute is not implemented in Safari or Opera. Your styles will be applied as expected, but your HTML document will technically be invalid. There are a lot of invalid HTML documents out there, so this doesn't seem like a major downer `¯\_(ツ)_/¯`
