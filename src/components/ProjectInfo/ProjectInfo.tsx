import React from 'react';
import { ProjectInterface } from '../../sections/Projects/Project.interface';
import './ProjectInfo.css';

function ProjectInfo(props: Partial<ProjectInterface>) {
  return (
    <article className="info">
      <p className="info__year">
        Realizado em {props.ano}, projeto com {props.duracao} até a conclusão
      </p>
      <p className="info__description">{props.descricao}</p>
      <p className="info__tecnologies">
        <strong>Tecnologias:</strong> {props.tecnologias}
      </p>
    </article>
  );
}

export default ProjectInfo;
