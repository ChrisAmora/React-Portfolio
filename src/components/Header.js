import React from 'react';

export default () => (
    <React.Fragment>
      <header className='header'>
        <h1 className='header__title'>alert('Bem vindo ao meu site!')</h1>
        <h3 className='header__subtitle'>switch ('time')
        &#123;
          case Estudando:
            console.log('Web Developer');
            break;
          case Trabalhando:
            console.log('Web Dev');
            break;
          case Github:
            console.log('Sleeping');
            break;
          case lala:
            console.log('Waiting');
            break;
          default: console.log('Secret!');
          &#125;
        </h3>
      </header>
    </React.Fragment>
);

