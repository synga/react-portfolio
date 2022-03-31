import React from 'react';
import { PictureInterface } from './Picture.interface';
import './Picture.css';

function Picture(props: PictureInterface) {
  return (
    <picture
      className={
        'picture' +
        (props.modifiers?.position
          ? ` picture--${props.modifiers.position}`
          : '')
      }
    >
      <source srcSet={props.images.avif} />
      <source srcSet={props.images.webp} />
      <img
        className={
          'picture__image' +
          (props.modifiers?.imageWidth
            ? `--${props.modifiers?.imageWidth}`
            : '')
        }
        src={props.images.png}
        alt={props.alt}
      />
    </picture>
  );
}

export default Picture;
