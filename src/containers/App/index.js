import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Public from '../../components/Public/public';
import Dashboard from '../../containers/Dashboard';
import Login from '../../containers/Login/index';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    JSON.parse(window.localStorage.getItem('user'))
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  console.log('app called')
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/public" component={Public} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {JSON.parse(window.localStorage.getItem('user'))
        ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
      </Switch>
    </BrowserRouter>
  )
}

export default App;