import React from 'react';
import './ProjectContainer.css';
import { ProjectInterface } from '../../sections/Projects/Project.interface';

import Link from '../Link/Link';
import { LinkInterface } from '../Link/Link.interface';
import Picture from '../Picture/Picture';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

const createLinkElements = (links: LinkInterface[]) => {
  return links.map((link, index) => <Link link={link} key={index} />);
};

const createPictureElement = (image: string, name: string) => {
  const avif = image.replaceAll('png', 'avif');
  const webp = image.replaceAll('png', 'webp');
  const images = {
    avif,
    webp,
    png: image,
  };

  return <Picture images={images} alt={name} />;
};

function ProjectContainer(props: { project: ProjectInterface }) {
  console.log(props.project);
  return (
    <aside className="project">
      <h3 className="project__title">{props.project.nome}</h3>
      <div className="project__picture">
        {createPictureElement(props.project.foto, props.project.nome)}
      </div>
      <ProjectInfo {...props.project} />
      <div className="project__links">
        {props.project.links && createLinkElements(props.project.links)}
      </div>
    </aside>
  );
}

export default ProjectContainer;
