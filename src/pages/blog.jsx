import React from "react";
import SEO from "../components/seo/SEO";
import { graphql } from "gatsby";
import BlogSnippet from "../components/blog-snippet/BlogSnippet";

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <section className="blog">
      <h1>Blog&nbsp;&nbsp;📝</h1>
      {allMarkdownRemark.edges.map(({ node }) => (
        <BlogSnippet key={node.id} post={node} />
      ))}
    </section>
  );
};

export const Head = (props) => (
  <SEO pathname={props.location.pathname} title="Blog" />
);

export default Blog;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { cdate: DESC } }
      filter: { fileAbsolutePath: { regex: "//blog/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            cdate(formatString: "MMM YYYY")
            mdate(formatString: "MMM YYYY")
            slug
            title
            tags
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
        }
      }
    }
  }
`;
