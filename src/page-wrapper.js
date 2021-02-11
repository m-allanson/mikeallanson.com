import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => (
    <div
      class="bg-gray-900"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
};

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <Helmet>
        <html lang="en" />
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪲</text></svg>"
        ></link>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="TODO!! Here is my lovely placeholder description"
        />
        <title>🪲🪲🪲</title>
      </Helmet>
      <header role="banner">
        <a href="/" aria-label="Mike Allanson">
          Mike Allanson
        </a>
      </header>
      <main>{props.children}</main>
    </MDXProvider>
  );
}
