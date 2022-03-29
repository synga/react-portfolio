import React from 'react';
import { PictureInterface } from './Picture.interface';
import './Picture.css';

function Picture(props: PictureInterface) {
  return (
    <picture
      className={
        'picture' + (props.className ? ` picture--${props.className}` : '')
      }
    >
      <source srcSet={props.images.avif} />
      <source srcSet={props.images.webp} />
      <img className="picture__image" src={props.images.png} alt={props.alt} />
    </picture>
  );
}

export default Picture;
