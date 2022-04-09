import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const CodeBlock = (props) => (
  // eslint-disable-next-line react/no-danger
  <div is="code" {...props} />
);

const Wrapper = ({ children }) => (
  <article is="post" class="flow">
    {children}
  </article>
);

const BlockQuote = ({ children }) => (
  <blockquote class="flow">{children}</blockquote>
);

const components = {
  codeblock: CodeBlock,
  wrapper: Wrapper,
  blockquote: BlockQuote,
};

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <Helmet>
        <html lang="en" />
        <link
          type="font/woff2"
          href="fonts/ibm-plex-serif-v9-latin-700.woff2"
          rel="preload"
          as="font"
          crossorigin="anonymous"
        />
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
        <title>{props.title ? `${props.title} 🪲 ` : ""}mikeallanson.com</title>
      </Helmet>
      <header role="banner">
        <a href="/" aria-label="Mike Allanson">
          Mike Allanson
        </a>
      </header>
      <main>{props.children}</main>
      <footer is="mainFooter">
        <a href="https://github.com/m-allanson/mikeallanson.com">
          Source available on GitHub
        </a>
      </footer>
    </MDXProvider>
  );
}
