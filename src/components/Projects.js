import React from 'react';
import Bullbasaur from '../../public/images/svg/charmander.svg';
import Charmander from '../../public/images/svg/bullbasaur.svg';
import Squirtle from '../../public/images/svg/squirtle.svg';

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
            src="/images/download.jpg"
          />
          <div className="card__site__container__text">
            <h2 className='card__site__container__text--title comment'>Pollarizer()</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              excepturi repellendus rerum sunt hic a beatae repudiandae, aperiam
              soluta vitae quidem praesentium adipisci id blanditiis iure quae
              facilis facere! Ipsum?
            </p>
          </div>
        </div>
      </div>
      <div className="card__site">
        <Charmander className="card__site__svg" />
        <div className="card__site__container">
          <img
            className="card__site__container__img"
            src="/images/weather-3.jpg"
          />
          <div className="card__site__container__text">
            <h2 className='card__site__container__text--title comment'>Climático()</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              minus repellendus eius voluptates nam? Exercitationem temporibus,
              quo at blanditiis optio excepturi eos officia. Necessitatibus ipsa
              et sed! Eius, quam odio.
            </p>
          </div>
        </div>
      </div>
      <div className="card__site">
        <Squirtle className="card__site__svg" />
        <div className="card__site__container">
          <img
            className="card__site__container__img"
            src="/images/expenses-x.jpg"
          />
          <div className="card__site__container__text">
            <h2 className='card__site__container__text--title comment'>Expenser()</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              nemo, voluptatum aut perspiciatis rthrthhrtrrhrofficiis ipsum, id
              deleniti commodi ipsa minus voluptarthtrhrthrthrthtes, quisquam
              consequatur voluptatem dolores impedit ducimus unde magni
              accusantium!
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
