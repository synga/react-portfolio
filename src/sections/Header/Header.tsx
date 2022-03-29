import React from 'react';

import Images from '../../assets/images/sources';
import Picture from '../../components/Picture/Picture';
import './Header.css';

function Header() {
  return (
    <section className="header">
      <h1 className="header__title">GabrielBarretoDev</h1>
      <Picture
        alt="Um desenho meu, sentado em frente ao computador"
        images={Images.header}
        className="right"
      />
    </section>
  );
}

export default Header;
