import React from "react";
import { projects } from "../../constants/projects";
import ProjectSnippet from "../../components/ProjectSnippet";
import SEOHead from "../../components/SEOHead";

const ProjectsPage = () => {
  return (
    <section>
      <h1>Projects&nbsp;&nbsp;🛠</h1>
      <div className="projects-list">
        {projects.map((project) => (
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
