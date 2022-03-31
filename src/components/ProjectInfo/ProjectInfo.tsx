import React from 'react';
import { ProjectInterface } from '../../sections/Projects/Project.interface';
import './ProjectInfo.css';

function ProjectInfo(props: Partial<ProjectInterface>) {
  return (
    <article className="info">
      <p className="info__year">{props.ano}</p>
      <p className="info__duration">{props.duracao}</p>
      <p className="info__description">{props.descricao}</p>
      <p className="info__tecnologies">
        <strong>Tecnologias:</strong> {props.tecnologias}
      </p>
    </article>
  );
}

export default ProjectInfo;
