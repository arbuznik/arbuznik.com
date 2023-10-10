import React from "react";
import { projects } from "../../constants/projects";
import ProjectSnippet from "../../components/ProjectSnippet";
import SEOHead from "../../components/SEOHead";

const ProjectsPage = () => {
  return (
    <section>
      <h1>Projects&nbsp;&nbsp;🛠</h1>
      <div className="projects-list">
        {projects
          .filter((project) => !project.designOnly)
          .map((project) => (
            <ProjectSnippet key={project.id} project={project} />
          ))}
      </div>
      <h2>Little to no code, but it's all about the looks&nbsp;&nbsp;🌝</h2>
      <div className="projects-list">
        {projects
          .filter((project) => project.designOnly)
          .map((project) => (
            <ProjectSnippet key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

export const Head = (props) => (
  <SEOHead
    pathname={props.location.pathname}
    title="Projects"
    description="Web apps by Nikita Arbuzov"
  />
);

export default ProjectsPage;
