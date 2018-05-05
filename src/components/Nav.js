import React from 'react';

export default () => {
  const clickHandler = () => {
    document.querySelector('.navigation__checkbox').checked = false;
  };
  return (
    <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a onClick={clickHandler} href="#header" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a onClick={clickHandler}onClick={clickHandler} href="#tech" className="navigation__link">
            Stack
          </a>
        </li>
        <li className="navigation__item">
          <a onClick={clickHandler} href="#projects" className="navigation__link">
            Projetos
          </a>
        </li>
        <li className="navigation__item">
          <a onClick={clickHandler} href="#form" className="navigation__link">
            Entre em Contato!
          </a>
        </li>
      </ul>
    </nav>
  </div>
  );
};

