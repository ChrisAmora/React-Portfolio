import React from 'react';

export default class Nav extends React.Component {
  checkBox = React.createRef();
  clickHandler = () => {
    this.checkBox.current.checked = false;
  };
  render() {
    return (
      <div className="navigation">
      <input ref={this.checkBox} type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a onClick={this.clickHandler} href="#header" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a onClick={this.clickHandler} href="#tech" className="navigation__link">
              Stack
            </a>
          </li>
          <li className="navigation__item">
            <a onClick={this.clickHandler} href="#projects" className="navigation__link">
              Projetos
            </a>
          </li>
          <li className="navigation__item">
            <a onClick={this.clickHandler} href="#form" className="navigation__link">
              Entre em Contato!
            </a>
          </li>
        </ul>
      </nav>
    </div>
    );
  }
}
