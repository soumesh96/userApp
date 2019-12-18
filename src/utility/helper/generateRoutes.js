import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const generateRoutes = (routes) => {
  const prefix = '/user';
  const { defaultPath } = routes;
  const defaultRoute = (
    <Route
      path="/user"
      exact
      key={prefix}
      render={() => <Redirect to={`${prefix}${defaultPath}`} />}
    />
  );

  const pages = routes.pages.map(item => (
    <Route path={`${prefix}${item.path}`} component={item.component} exact={item.exact} key={item.path} />
  ));
  const newPages = [defaultRoute, ...pages];
  return newPages;
};

export default generateRoutes;
