import React from 'react';

import { useAuth } from '../../../utility/customHooks';
import PageNotFound from '../../../components/PageNotFound';

const AdminApp = React.lazy(() => import(/* webpackChunkName: 'ADMIN' */'./Admin'));

const roleBasedApp = (role) => {
  switch (role.toLowerCase()) {
    case 'admin':
      return <AdminApp />;
    default:
      return <PageNotFound />;
  }
};

const Routes = () => {
  const { user } = useAuth();
  return (
    <React.Fragment>
      {roleBasedApp(user.role)}
    </React.Fragment>
  );
};

export default Routes;
