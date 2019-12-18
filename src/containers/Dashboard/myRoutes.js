import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '.';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    JSON.parse(window.localStorage.getItem('user'))
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const Routes = () => (
  <React.Fragment>
    <Switch>
      <PrivateRoute path="/" exact render={() => <Redirect to="/dashboard" />} />
      <PrivateRoute path="/omr/dashboard" component={Dashboard} />
      {/* <PrivateRoute path="/omr/addbranch" component={Branch} />
      <PrivateRoute path="/omr/addsubject" component={Subject} /> */}
    </Switch>
  </React.Fragment>
);

export default Routes;
