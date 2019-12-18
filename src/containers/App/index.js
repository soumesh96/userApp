import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { MuiThemeProvider } from '@material-ui/core/styles';

// import Public from '../../components/Public/public';
import { useAuth } from '../../utility/customHooks';
// import Dashboard from '../../containers/Dashboard';
// import Login from '../../containers/Login/index';
// import theme from '../../utility/theme';

const AuthenticatedApp = React.lazy(() => import(/* webpackChunkName: 'AUTH' */'./AuthenticatedApp'));
const UnAuthenticatedApp = React.lazy(() => import(/* webpackChunkName: 'UNAUTH' */'./UnAuthenticatedApp'));

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    JSON.parse(window.localStorage.getItem('user'))
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  console.log('app called')
  const authActions = useAuth();
  console.log('authActions', authActions)
  return (
    // <MuiThemeProvider theme={theme}>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route path="/" exact render={() => <Redirect to="/login" />} />
    //       <Route path="/login" component={Login} />
    //       <PrivateRoute path="/dashboard" component={Dashboard} />
    //       {JSON.parse(window.localStorage.getItem('user'))
    //         ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
    //     </Switch>
    //   </BrowserRouter>
    // </MuiThemeProvider>
    <React.Suspense fallback={<CircularProgress open />}>
      {authActions.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Suspense>
  )
}

export default App;