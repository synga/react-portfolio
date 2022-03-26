import React from 'react';
import Images from '../assets/images/sources';
import '../styles/Header.css';

function Header() {
  return (
    <section className="header">
      <h1 className="header__title">GabrielBarretoDev</h1>
      <picture className="header__picture">
        <source srcSet={Images.header.webp} />
        <source srcSet={Images.header.webp} />
        <img
          className="header__image"
          src={Images.header.png}
          alt="Um desenho meu, sentado em frente ao computador"
        />
      </picture>
    </section>
  );
}

export default Header;
