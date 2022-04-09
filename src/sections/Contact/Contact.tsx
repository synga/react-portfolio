import React from 'react';

import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Sobre</h2>
      <p className="contact__text">
        Esta precisando de algo? Querendo conversar? Quer trocar ideias? Tem
        alguma proposta? Precisando de alguma ajuda? Então me chame no meu{' '}
        <a
          className="contact__link"
          href="https://www.linkedin.com/in/gabrielapbarreto/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          LinkedIn{' '}
        </a>
        e vamos conversar.
        <br />
        Quer ver mais do meu trabalho além dos projetos aqui? De uma olhada no
        meu
        <a
          className="contact__link"
          href="https://github.com/synga"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          GitHub{' '}
        </a>
        e veja no que estou trabalhando, além de contribuições. Uma outra
        alternativa é meu perfil no
        <a
          className="contact__link"
          href="https://stackoverflow.com/users/7325327/gabriel-barreto"
          title="Stack Overflow"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Stack Overflow{' '}
        </a>
        onde você poderá ver algumas respostas e contribuições.
        <br />
        Gostou e quer aprender comigo? Veja meus cursos na
        <a
          className="contact__link"
          href="https://www.udemy.com/user/gabrielbarreto2/"
          title="Udemy"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Udemy
        </a>
        .
      </p>
    </section>
  );
}

export default Contact;
