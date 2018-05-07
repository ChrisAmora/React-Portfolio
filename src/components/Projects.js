import React from 'react';
import Bullbasaur from '../images/svg/bullbasaur.svg';
import Charmander from '../images/svg/charmander.svg';
import Squirtle from '../images/svg/squirtle.svg';
import img1 from '../images/img_1.jpg';
import img2 from '../images/img_2.jpg';
import img3 from '../images/img_3.jpg';

export default () => (
  <React.Fragment>
    <h2 className="comment big-space" id="projects">
      <span className="element">sites</span>.<span className="console">
        filter
      </span>(<span className="element">site</span> =>{' '}
      <span className="element">site.tipo</span> ==={' '}
      <span className="element">React</span>)
    </h2>
    <div className="card">
      <div className="card__site">
        <Bullbasaur className="card__site__svg" />
        <div className="card__site__container">
          <img className="card__site__container__img" src={img1} />
          <div className="card__site__container__text">
            <a href="https://react-pollarizer.herokuapp.com/" target="_blank">
              <h2 className="card__site__container__text--title comment">
                Pollarizer()
              </h2>
            </a>
            <p>
              Imagine que você queira um rápido feedback de seu público. Qual o
              melhor sabor de sorvete? Qual o melhor professor da academia? Quem
              irá ganhar o Brasileirão 2018? Com Pollarizer, em
              apenas alguns cliques, você poderá iniciar uma votação e
              acompanhar em tempo real os resultados. Site completo, com Back-end
              feita em Node, Mongo, Express, possuindo autenticação com JWT. Front-end
              criada com React/Redux, utilizando Sass e Bootstrap.
            </p>
          </div>
        </div>
      </div>
      <div className="card__site">
        <Charmander className="card__site__svg" />
        <div className="card__site__container">
          <img className="card__site__container__img" src={img2} />
          <div className="card__site__container__text">
            <a href="http://arcane-depths-98903.herokuapp.com/" target="_blank">
              <h2 className="card__site__container__text--title comment">
                Climático()
              </h2>
            </a>
            <p>
              Climático me mostrou como é incrível trabalhar com React. Utilizando-me da fabulosa OpenWeatherMap API,
              acessada com o Axios. Criei um simples site, onde é possível
              digitar uma cidade e receber a previsão do tempo. A UI foi feita
              utilizando Foundation.
            </p>
          </div>
        </div>
      </div>
      <div className="card__site">
        <Squirtle className="card__site__svg" />
        <div className="card__site__container">
          <img className="card__site__container__img" src={img3} />
          <div className="card__site__container__text">
            <a href="https://react-expenses92.herokuapp.com/" target="_blank">
              <h2 className="card__site__container__text--title comment">
                Expenser()
              </h2>
            </a>
            <p>
              Expenser é uma ferramenta simples, rápida e eficiente, utilizada para organizar e contabilizar seus
              gastos. Orientado pelo professor Andrew Mead, utilizei-me das mais novas ferramentas do Javascript,
              com o auxílio do Babel Loader. O app conta com Database na nuvem propiciada pelo Firebase e testes
              com o Jest.
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
