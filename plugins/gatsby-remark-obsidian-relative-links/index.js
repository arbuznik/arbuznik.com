const visit = require("unist-util-visit");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, "link", (node) => {
    if (
      node.url &&
      !node.url.startsWith("//") &&
      !node.url.startsWith("http")
    ) {
      // normalize anchor links to match gatsby-remark-autolink-headers
      node.url = decodeURIComponent(node.url)
        .replaceAll(/\s/g, "-")
        .toLowerCase();

      // remove index.md from path
      if (node.url.startsWith("../")) {
        node.url = node.url.replace("index.md", "");
      }

      // down one level for relative links
      if (!node.url.startsWith("../") && !node.url.startsWith("#")) {
        node.url = node.url.slice(3);
      }
    }
  });

  return markdownAST;
};
