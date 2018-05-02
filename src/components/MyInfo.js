import React from 'react';
import Meowth from '../../public/images/svg/meowth.svg';
import Pokeball from '../../public/images/svg/pokeballs.svg';
import skills from '../helper/skills';

export default () => (
    <React.Fragment>
      <article className='main'>
        <Meowth className='main__svg' />
        <h5>
          <span className='func'>Function </span><span className='func-name'>helloWorld </span>() &#123;
            <div className='default-text'>'Olá, meu nome é Christiano, sou de Belo Horizonte, MG! Formado em economia, Web Developer por paixão.'
              <p>Adoro desenvolver sites responsivos, sempre utilizando as mais novas tecnologias do mercado</p>
            </div>
            &#125;
        </h5>
      </article>
      <h2 className='comment'>/* As tecnologias que uso*/ </h2>
      <article className='tech'>
        <div className='tech__skills'>
        {
          skills.map((skill, index) => <span key={index} className='button'>{skill.name}</span>)
        }
      </div>
      <Pokeball className='tech__svg' />
      </article>
    </React.Fragment>
);

