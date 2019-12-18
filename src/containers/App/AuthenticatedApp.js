import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Dashboard from '../Dashboard';
import PageNotFound from '../../components/PageNotFound';

function AuthenticatedApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default AuthenticatedApp;
