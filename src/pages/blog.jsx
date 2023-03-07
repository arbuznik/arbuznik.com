import React from "react";
import SEO from "../components/seo/SEO";
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
