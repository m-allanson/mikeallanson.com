import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const CodeBlock = (props) => (
  // eslint-disable-next-line react/no-danger
  <div is="code" dangerouslySetInnerHTML={{ __html: props.children }} />
);

const components = {
  codeblock: CodeBlock,
};

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <Helmet>
        <html lang="en" />
        {/* <link
          type="font/woff2"
          href="fonts/IBMPlexSerif-Regular.woff2"
          rel="preload"
          as="font"
          crossorigin="anonymous"
        />
        <link
          type="font/woff2"
          href="fonts/IBMPlexSerif-Italic.woff2"
          rel="preload"
          as="font"
          crossorigin="anonymous"
        /> */}
        <link
          type="font/woff2"
          href="fonts/IBMPlexSerif-Bold.woff2"
          rel="preload"
          as="font"
          crossorigin="anonymous"
        />
        {/* <link
          type="font/woff2"
          href="fonts/IBMPlexSerif-BoldItalic.woff2"
          rel="preload"
          as="font"
          crossorigin="anonymous"
        /> */}

        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪲</text></svg>"
        />
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
