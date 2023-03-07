import React from "react";
import SEO from "../components/seo/SEO";
import { Link } from "gatsby";
import ExternalIcon from "../images/external-icon";

const projects = [
  {
    id: 1,
    name: "Know your name",
    description: "Make assumptions on person given the game",
    year: 2021,
    demoURL: "https://arbuznik.github.io/know-your-name/",
    articleURL: "/projects/know-your-name/",
    codeURL: "https://github.com/arbuznik/know-your-name",
  },
  {
    id: 0,
    name: "Bulls and Cows",
    description: "Classic game of numbers",
    year: 2021,
    demoURL: "https://arbuznik.github.io/bulls-and-cows/",
    articleURL: "/projects/bulls-and-cows/",
    codeURL: "https://github.com/arbuznik/bulls-and-cows",
  },
];

const ProjectsPage = () => {
  return (
    <section>
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map(
          ({ id, name, description, year, demoURL, articleURL, codeURL }) => (
            <article className="project-snippet" key={id}>
              <div className="project-snippet-heading">
                <h2>{name}</h2>
                <p className="project-snippet-year">{year}</p>
              </div>
              <p className="project-snippet-description">{description}</p>
              <ul className="project-snippet-links">
                <li>
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
