import React from 'react';
import Meowth from '../images/svg/meowth.svg';
import Pokeball from '../images/svg/pokeballs.svg';
import skills from '../helper/skills';
import Github from '../images/svg/github.svg';
import Linkedin from '../images/svg/linkedin.svg';
import Gmail from '../images/svg/gmail.svg';

export default () => (
  <React.Fragment>
    <article className="main">
      <Meowth className="main__svg" />
      <h5>
        <span className="func">Function </span>
        <span className="func-name">helloWorld </span>() &#123;
        <div className="default-text">
          <span className="func">return </span>'Olá, meu nome é Christiano, sou
          de Belo Horizonte, MG. Formado em economia, Web Developer por paixão.
          <p>
            Adoro desenvolver sites responsivos, sempre utilizando as mais novas
            tecnologias do mercado, sendo React meu xodó!!'
          </p>
        </div>
        &#125;
      </h5>
      <div className="main__info">
        <a
          className="main__info__container"
          href="http://www.linkedin.com/in/christianoamora"
          target="_blank"
        >
          <Linkedin className="main__info__container__svg" />
        </a>
        <a
          className="main__info__container"
          href="mailto:christiano.amora@gmail.com"
          target="_blank"
        >
          <Gmail className="main__info__container__svg" />
        </a>
        <a
          className="main__info__container"
          href="https://github.com/ChrisAmora"
          target="_blank"
        >
          <Github className="main__info__container__svg" />
        </a>
      </div>
    </article>
    <h2 className="comment big-space" id="tech">
      /*Lista das tecnologias que utilizo*/{' '}
    </h2>
    <article className="tech">
      <div className="tech__skills">
        {skills.map((skill, index) => (
          <span key={index} className={`button button--${skill.type}`}>
            {skill.name}
          </span>
        ))}
      </div>
      <Pokeball className="tech__svg" />
    </article>
  </React.Fragment>
);
