import React from 'react';

export default () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#header" className="navigation__link">
            Cabeçalho
          </a>
        </li>
        <li className="navigation__item">
          <a href="#tech" className="navigation__link">
            Meu Stack
          </a>
        </li>
        <li className="navigation__item">
          <a href="#projects" className="navigation__link">
            Meus Projetos
          </a>
        </li>
        <li className="navigation__item">
          <a href="#form" className="navigation__link">
            Entre em Contato!
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
