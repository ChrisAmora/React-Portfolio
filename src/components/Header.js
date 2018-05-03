import React from 'react';

export default () => (
  <header className="header" id="header">
    <h1 className="header__title">
      <span className="console">alert</span>(<span className="text">
        'Seja Bem Vindo!'
      </span>)
    </h1>
    <h3 className="header__text">
      <span className="element">switch</span> <span className="symbol">(</span>
      <span className="text">time</span>
      <span className="symbol">)</span>
      <span className="symbol">&#123;</span>
      <span className="element">case</span>{' '}
      <span className="text">
        profissão: <span className="symbol" />
      </span>
      <span className="console">console</span>.<span className="func">log</span>
      <span className="symbol">(</span>
      <span className="text">'webDeveloper'</span>
      <span className="symbol">)</span>;
      <span className="element">case</span>{' '}
      <span className="text">linguagemFavorita: </span>
      <span className="console">console</span>.<span className="func">log</span>
      <span className="symbol">(</span>
      <span className="text">'Javascript'</span>
      <span className="symbol">)</span>;
      <span className="element">case</span>{' '}
      <span className="text">library: </span>
      <span className="console">console</span>.<span className="func">log</span>
      <span className="symbol">(</span>
      <span className="text">'ReactJS'</span>
      <span className="symbol">)</span>;
      <span className="element">case</span>{' '}
      <span className="text">serverSide: </span>
      <span className="console">console</span>.<span className="func">log</span>
      <span className="symbol">(</span>
      <span className="text">'Node.js'</span>
      <span className="symbol">)</span>;
      <span className="element">default</span>:{' '}
      <span className="console">console</span>.<span className="func">log</span>(<span className="text">
        'Full Stack, MERN'
      </span>
      <span className="symbol">)</span>;
      <span className="symbol">&#125;</span>
    </h3>
  </header>
);
