import React from 'react';
import Header from './Header';
import Particles from './Particles';
import Main from './MyInfo';
import Projetos from './Projetos';
import Form from './Form';
import Nav from './Nav';

export default () => (
    <React.Fragment>
      <Particles/>
        <Nav />
        <Header />
        <Main />
        <Projetos />
        <Form />
    </React.Fragment>
);

