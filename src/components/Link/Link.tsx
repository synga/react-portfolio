import React from 'react';
import { LinkInterface } from './Link.interface';
import './Link.css';

function Link(props: { link: LinkInterface }) {
  return (
    <a className="link" href={props.link.link} target="_blank" rel="noreferrer">
      {props.link.nome}
    </a>
  );
}

export default Link;
