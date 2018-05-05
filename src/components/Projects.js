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
          <img
            className="card__site__container__img"
            src={img1}
          />
          <div className="card__site__container__text">
            <a href="https://react-pollarizer.herokuapp.com/" target="_blank"><h2 className='card__site__container__text--title comment'>Pollarizer()</h2></a>
            <p>
            Imagine que você queira um rápido feedback de seu público. Qual o melhor sabor de sorvete? Qual o melhor professor da academia? Quem irá ganhar o brasileirão 2018?
            Pollarizer é uma ferramenta que com apenas alguns cliques, você poderá iniciar uma votação e acompanhar em tempo real os resultados.
            Site completo, com Backend em Node, Mongo, Express, possuindo autenticação com JWT. Frontend feita com React/Redux, utilizando Sass e Bootstrap, "bundled" com Webpack
            </p>
          </div>
        </div>
      </div>
      <div className="card__site">
        <Charmander className="card__site__svg" />
        <div className="card__site__container">
          <img
            className="card__site__container__img"
            src={img2}
          />
          <div className="card__site__container__text">
            <a href="http://arcane-depths-98903.herokuapp.com/" target="_blank"><h2 className='card__site__container__text--title comment'>Climático()</h2></a>
            <p>
            Climático me mostrou como é incrível trabalhar com React. Foi meu primeiro projeto. Me aproveitando da fabulosa OpenWeatherMap API, acessada com o Axios.
            Criei um simples site, onde é possível fornecer uma cidade e receber a previsão do tempo. A UI foi feita com Foundation.
            </p>
          </div>
        </div>
      </div>
      <div className="card__site">
        <Squirtle className="card__site__svg" />
        <div className="card__site__container">
          <img
            className="card__site__container__img"
            src={img3}
          />
          <div className="card__site__container__text">
            <a href="https://react-expenses92.herokuapp.com/" target="_blank"><h2 className='card__site__container__text--title comment'>Expenser()</h2></a>
            <p>
            Expenser é uma ferramenta para organizar e contabilizar seus gastos.
            Utilizando das mais novas ferramentas do Javascript através do Babel Loader, Database na nuvem com o Firebase e testes com o Jest, Expenser é um
            site simples, rápido e eficiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
