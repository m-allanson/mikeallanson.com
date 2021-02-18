"use strict";

import has from "hast-util-has-property";
import rank from "hast-util-heading-rank";
import visit from "unist-util-visit";

// Add 'aria-labelledBy' attribute
// Add 'is' attribute
// Replace child elements with a <span>#</span> element
export default function label() {
  return (tree) =>
    visit(tree, "element", (node, index, parent) => {
      if (rank(parent) && has(parent, "id") && node.tagName === "a") {
        delete node.properties.className;
        node.properties = {
          ...node.properties,
          ariaLabelledBy: parent.properties.id,
          is: "headingLinkAnchor",
        };
        node.children = [
          {
            type: "element",
            tagName: "span",
            children: [
              {
                type: "text",
                value: "#",
              },
            ],
          },
        ];
        return node;
      }
    });
}
