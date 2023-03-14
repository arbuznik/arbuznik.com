import React from "react";
import ExternalIcon from "../../images/external-icon";
import { Link } from "gatsby";

const ProjectSnippet = ({ project }) => {
  const {
    id,
    name,
    description,
    year,
    demoURL,
    articleURL,
    codeURL,
    codeBackendURL,
  } = project;

  return (
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
  );
};

export default ProjectSnippet;
