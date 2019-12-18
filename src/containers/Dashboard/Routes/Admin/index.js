import React from 'react';
import { Switch, Route } from 'react-router-dom';

import adminRoutes from './Routes';
import PageNotFound from '../../../../components/PageNotFound';

import generateRoutes from '../../../../utility/helper/generateRoutes';

const Admin = () => (
  <Switch>
    {generateRoutes(adminRoutes)}
    <Route component={PageNotFound} />
  </Switch>
);

export default Admin;
