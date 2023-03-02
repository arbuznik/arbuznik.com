import React from "react";
import { graphql, Link } from "gatsby";

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <section className="blog">
      <h1>Blog</h1>
      {allMarkdownRemark.edges.map(({ node }) => (
        <div className="blog-entry" key={node.id}>
          <p className="blog-entry-date">{node.frontmatter.cdate}</p>
          <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
        </div>
      ))}
    </section>
  );
};

export default Blog;

export const pageQuery = graphql`
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
            mdate
            isPublished
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
