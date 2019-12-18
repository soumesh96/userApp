import Dashboard from '../../../Dashboard';

const routes = {
  defaultPath: '/dashboard/',
  pages: [
    {
      path: '/dashboard/',
      exact: false,
      component: Dashboard,
    },
    // {
    //   path: '/register/',
    //   exact: true,
    //   component: Registration,
    // },
  ],
};

export default routes;
