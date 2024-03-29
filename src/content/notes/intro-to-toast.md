---
title: Intro to Toast
date: 2021-02-11
---

toast is "an ES Modules based Jamstack framework". See [toast.dev for more info](https://www.toast.dev/).

## Getting started

Run `npx create-toast minimal` to create a barebones Toast site. Or `npx create-toast` to create a default starter that has Tailwind and MDX configured.

You can view [the official starters in this repo](https://github.com/toastdotdev/starters).

### Add a static page

By default Toast will check the `/src/pages/` directory, turning each `.js` file into an html page at build time. Your `.js` file should export a Preact component.

The minimal starter gives you a `/src/pages/index.js` file, which builds to `/public/index.html`.

### Provide data to pages

The `/src/pages/` directory is great for static pages. What about adding external data to your pages?

You can use a `toast.js` file in the root of your project to hook into Toast's page creation process.

A minimal `toast.js` file can look like this:

```js
export const sourceData = async ({ setDataForSlug }) => {
  const componentSrc = `
import { h } from "preact";
export default props => <div>
  <h1>Hello, world</h1>
</div>
`;

  const pageArgs = {
    component: {
      mode: "source",
      value: componentSrc,
    },
  };

  await setDataForSlug("/my-page", pageArgs);

  return;
};
```

The key parts here are:

- exporting a `sourceData` function
- calling the `setDataForSlug` function

When Toast builds your site, it checks to see if your `toast.js` file exports a `sourceData` function. If yes, Toast will run your `sourceData()`, passing in Toast's `setDataForSlug` function. [You can check the Toast source to see how this is done](https://github.com/toastdotdev/toast/blob/5ba6eb1bc0b3e8ea4e84394eca407b71fd13a6c2/toast-node-wrapper/toast-source-data.mjs#L9-L12).

You're free to source your data however you like. When your data is ready, use `setDataForSlug` to provide the data for each slug (aka page).

#### setDataForSlug

`setDataForSlug` is used to create pages and provide them with data.

`setDataForSlug` requires `slug` and `pageArgs` parameters. `slug` sets the URL path for your created page. `pageArgs` defines how to render the page.

`pageArgs` is an object with two top level keys:

```js
{
  component: {},
  data: {}
}
```

- `component` describes the component that will be used to render the page
- `data` provides any data that's needed to render the page

> Note: `pageArgs` can have other keys, you can [read more about `pageArgs` in the Toast repo](https://github.com/toastdotdev/toast/issues/29).

Calling `setDataForSlug` multiple times for the same `slug` will cause Toast to merge the `pageArgs` from every call.

Toast uses the same `setDataForSlug` API when creating pages from files in your `/src/pages/` directory.

The above two points mean that you can push data into your filesystem components. For example:

```js
// /src/pages/index.js
import { h } from "preact";

export default (props) => {
  return (
    <div>
      <h1>The Smallest Toast Example</h1>
      <p>This page built at {props.buildTime}</p>
    </div>
  );
};
```

```js
// toast.js
export const sourceData = async ({ setDataForSlug }) => {
  await setDataForSlug("/", {
    data: {
      buildTime: new Date(),
    },
  });
};
```

This will create a page at `/my-page` that displays the time that the page was built.

Here's the same example, except passing the component in to `setDataForSlug`:

```js
export const sourceData = async ({ setDataForSlug }) => {
  const componentSrc = `
import { h } from "preact";
export default props => <div>
  <h1>Hello, world. {props.builtAt}</h1>
</div>
`;

  const pageArgs = {
    component: {
      mode: "source",
      value: componentSrc,
    },
    data: {
      builtAt: new Date(),
    },
  };

  await setDataForSlug("/my-page", pageArgs);

  return;
};
```

#### Wrap pages

Create a component at `/src/page-wrapper.js` and Toast will use it to wrap all of your pages. The [default starter](https://github.com/toastdotdev/starters/blob/a35cf2bd4cbe25514e39708c2c9953ccd4a801be/default/src/page-wrapper.js) uses the page wrapper to:

- add a [Context provider](https://reactjs.org/docs/context.html#contextprovider) for MDX
- add a `<link>` tag to the page `<head>` (via [React Helmet](https://github.com/nfl/react-helmet)):

```js
import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => <div class="bg-gray-900" {...props} />,
};

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <div>
        <Helmet>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        {props.children}
      </div>
    </MDXProvider>
  );
}
```

The page content is available in `props.children`.

~~Remember `pageArgs` from before? You can use `pageArgs` to set a page wrapper programmatically.~~

~~In your `sourceData` function:~~

```js
// toast.js
await setDataForSlug("/", {
  wrapper: {
    mode: "source",
    value: `
import { h } from "preact";
export default props => (
  <div style={{backgroundColor: 'hotpink';}}>
    {props.children}
  </div>
)
`,
  },
});
```

Programmatically setting the wrapper component is not implemented yet (using `toast@0.3.43`).

### Static assets

The contents of `/static` will be copied into the root of the output directory (`/public`).

The file `/static/fonts/my-font-file.woff2` will be available at the URL `/fonts/my-font-file.woff2` in your built site.

### Toast sites

- [alexstrand.dev](https://alexstrand.dev/) ([src](https://github.com/ajstrand/personal-site))
- [christopherbiscardi.com](https://www.christopherbiscardi.com/) ([src](https://github.com/ChristopherBiscardi/christopherbiscardi.github.com/tree/pure-mdx/packages/www))
- [jacobbolda.com](https://www.jacobbolda.com/) ([src](https://github.com/jbolda/jacobbolda.com))
- [jason.af](https://www.jason.af/) ([src](https://github.com/jlengstorf/jason.af))
- [lannonbr.com](https://lannonbr.com/) ([src](https://github.com/lannonbr/Portfolio))
- learnwithjason/scenes([src](https://github.com/learnwithjason/scenes))
- [learnwithjason.dev](https://learnwithjason.dev)([src](https://github.com/learnwithjason/learnwithjason.dev))
- maxcell/prince-toast([src](https://github.com/maxcell/prince-toast))
- [talves/toast-template](https://github.com/talves/toast-template) (this is a template rather than a site)
- this site :) ([src](https://github.com/m-allanson/garden))
- [toast.dev](https://www.toast.dev/) ([src](https://github.com/toastdotdev/www.toast.dev))
