import * as React from "react";
import { graphql } from "gatsby";

export default function ProjectPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents } = markdownRemark;
  const { cdate, mdate, slug, title, tags } = frontmatter;

  return (
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
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        cdate(formatString: "MMMM DD, YYYY")
        mdate
        slug
        title
        tags
      }
    }
  }
`;
