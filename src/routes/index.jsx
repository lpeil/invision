import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './privateRoute';

import HomePage from '../pages/Home';
import SignPage from '../pages/Sign';
import NotFoundPage from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" auth exact component={HomePage} />
      <PrivateRoute path="/sign" exact component={SignPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
