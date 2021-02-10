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
        <link rel="stylesheet" href="/styles.css" />
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
