import React from "react";
import SEO from "../components/seo/SEO";
import { Link } from "gatsby";
import ExternalIcon from "../images/external-icon";
import { projects } from "../constants/constants";

const ProjectsPage = () => {
  return (
    <section>
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map(
          ({
            id,
            name,
            description,
            year,
            demoURL,
            articleURL,
            codeURL,
            codeBackendURL,
          }) => (
            <article className="project-snippet" key={id}>
              <div className="project-snippet-heading">
                <h2>{name}</h2>
                <p className="project-snippet-year">{year}</p>
              </div>
              <p className="project-snippet-description">{description}</p>
              <ul className="project-snippet-links">
                <li className="project-snippet-demo-link-container">
                  <a
                    className="project-snippet-demo-link"
                    href={demoURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                    <ExternalIcon />
                  </a>
                </li>
                <li>
                  <Link className="project-snippet-link" to={articleURL}>
                    Article
                  </Link>
                </li>
                <li>
                  <a
                    className="project-snippet-link"
                    href={codeURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                    <ExternalIcon />
                  </a>
                </li>
                {codeBackendURL && (
                  <li>
                    <a
                      className="project-snippet-link"
                      href={codeBackendURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      API Source
                      <ExternalIcon />
                    </a>
                  </li>
                )}
              </ul>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export const Head = (props) => (
  <SEO
    pathname={props.location.pathname}
    title="Projects"
    description="Web apps by Nikita Arbuzov"
  />
);

export default ProjectsPage;
