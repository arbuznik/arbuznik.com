import React from "react";
import SEOHead from "../components/SEOHead";
import { graphql, Link } from "gatsby";
import ProjectSnippet from "../components/ProjectSnippet";
import BlogSnippet from "../components/BlogSnippet";
import { projects } from "../constants/projects";
import "../styles/styles.css";
import "../styles/prism.css";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <>
      <section className="section-content">
        <h1>Hi!&nbsp;&nbsp;👋</h1>
        <p className="intro">
          As I'm learning to code, I realized that I understand better how
          something works if I read enough information about the subject and
          present it in the form of a concise note, written with my own words.
          Here you will find a selection of <Link to="/blog">such notes</Link>,
          as well as <Link to="/projects">projects</Link> that I have made. I
          made them public because it helps my motivation to study and make more
          notes. I also hope they will help you on your learning curve.
        </p>
      </section>
      <section>
        <div className="index-section-subheader">
          <h2>Projects&nbsp;&nbsp;🛠</h2>
          <Link className="index-section-link" to="/projects">
            View all
          </Link>
        </div>
        <div className="projects-list">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectSnippet key={project.id} project={project} />
            ))}
        </div>
      </section>
      <section className="blog">
        <div className="index-section-subheader">
          <h2>Recent posts&nbsp;&nbsp;👨‍💻</h2>
          <Link
            className="index-section-link index-section-link_type_blog"
            to="/blog"
          >
            View all
          </Link>
        </div>
        {allMarkdownRemark.edges.map(({ node }) => (
          <BlogSnippet key={node.id} post={node} />
        ))}
      </section>
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { cdate: DESC } }
      filter: { fileAbsolutePath: { regex: "//blog/" } }
      limit: 10
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

export const Head = () => <SEOHead />;

export default IndexPage;
