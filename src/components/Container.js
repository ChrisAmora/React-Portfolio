import React from 'react';
import Form from './Form';
import Header from './Header';
import Nav from './Nav';
import Particles from './Particles';
import Projects from './Projects';
import Tech from './Tech';

export default () => (
  <React.Fragment>
    <Particles />
    <Nav />
    <Header />
    <Tech />
    <Projects />
    <Form />
  </React.Fragment>
);
