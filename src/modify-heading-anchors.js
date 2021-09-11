import { headingRank } from "hast-util-heading-rank";
import visit from "unist-util-visit";

export default function label() {
  /*
    Toast's default headings look something like this:

    <h2 class="" id="loading-modules-in-the-browser">
      <a class="headingLinkAnchor" href="#loading-modules-in-the-browser">
        <heading-link-icon class="heading-link-icon"></heading-link-icon>
      </a>
      Loading Modules in the Browser
    </h2>

    I want to put the heading text inside the anchor, and to remove the <heading-link-icon> element. Like this:

    <h2 is="postHeading" id="loading-modules-in-the-browser">
      <a href="#loading-modules-in-the-browser">
        Loading Modules in the Browser
      </a>
    </h2>

    No link is needed for h1's, as they are already the post title. They can have this structure:

    <h1 is="postHeading" id="loading-modules-in-the-browser">
        Loading Modules in the Browser
    </h1>
  */

  return (tree) =>
    visit(tree, "element", (node /*, index, parent*/) => {
      if (headingRank(node)) {
        const text = node.children.find((n) => n.type === "text");
        const anchor = node.children.find((n) => n.tagName === "a");

        node.properties.is = "postHeading";
        anchor.children = [text];
        delete anchor.properties.className;

        // add links to h2 -> h6 only
        node.children = headingRank(node) > 1 ? [anchor] : [text];
        return node;
      }
    });
}
