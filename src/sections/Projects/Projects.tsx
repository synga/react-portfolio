import React from 'react';
import { ProjectInterface } from './Project.interface';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';

import './Project.css';

/**
 * Itera um array de projetos e devolve os componentes
 */
const createProjectElements = (projects: ProjectInterface[]) => {
  return projects.map((project) => (
    <ProjectContainer project={project} key={project.ordem} />
  ));
};

function Projects(props: { projects: ProjectInterface[] }) {
  return (
    <section className="projects">
      <h2>Veja no que já trabalhei!</h2>
      {createProjectElements(props.projects)}
    </section>
  );
}

export default Projects;
