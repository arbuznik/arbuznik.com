import * as React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo/SEO";
import Comments from "../components/comments/Comments";

const ProjectPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents } = markdownRemark;
  const { cdate, title } = frontmatter;

  return (
    <>
      <section className="post">
        <article>
          <h1>{title}</h1>
          <p className="timestamp">{cdate.toLocaleString()}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        {tableOfContents && (
          <aside className="post-toc-container">
            <p className="post-toc-header">{title}</p>
            <div
              className="post-toc"
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          </aside>
        )}
      </section>
      <section id="comments">
        <h3 className="comments-header">Comments</h3>
        <Comments />
      </section>
    </>
  );
};

export const Head = (props) => (
  <SEO
    pathname={props.location.pathname}
    postType={props.pageContext.postType}
    description={props.data.markdownRemark.excerpt}
    title={props.data.markdownRemark.frontmatter.title}
    dateModified={props.data.markdownRemark.frontmatter.mdate}
    datePublished={props.data.markdownRemark.frontmatter.cdate}
  />
);

export default ProjectPostTemplate;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      excerpt
      frontmatter {
        cdate(formatString: "MMMM DD, YYYY")
        mdate(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
      }
    }
  }
`;
