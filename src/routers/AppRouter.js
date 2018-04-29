import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Container from '../components/Container';

const history = createHistory();


export default (
  <Router history={history} >
    <Switch>
      <Route path='/' component={Container} />
    </Switch>
  </Router>
);

