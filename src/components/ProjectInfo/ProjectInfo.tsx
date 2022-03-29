import React from 'react';
import { ProjectInterface } from '../../sections/Projects/Project.interface';
import './ProjectInfo.css';

function ProjectInfo(props: Partial<ProjectInterface>) {
  return (
    <article>
      <p>{props.ano}</p>
      <p>{props.duracao}</p>
      <p>{props.descricao}</p>
      <p>{props.tecnologias}</p>
    </article>
  );
}

export default ProjectInfo;
