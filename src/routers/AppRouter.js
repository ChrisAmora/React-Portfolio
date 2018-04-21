import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';

const history = createHistory();


export default (
  <Router history={history} >
    <Switch>
      <Route path='/' component={Header} />
    </Switch>
  </Router>
);

