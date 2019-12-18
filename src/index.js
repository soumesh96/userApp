import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { MuiThemeProvider } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';
import theme from './utility/theme';
import { AuthProvider, AlertProvider } from './utility/customHooks';


ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <AlertProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AlertProvider>
  </MuiThemeProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
