import React from 'react';
import Header from './Header';
import Particles from './Particles';
import Main from './MyInfo';
import Card from './Card';
import Projetos from './Projetos';

export default () => (
    <React.Fragment>
      <Particles/>
        <Header />
        <Main />
        <Projetos />
    </React.Fragment>
);

