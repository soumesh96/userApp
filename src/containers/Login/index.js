import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Grid,
  TextField,
  withWidth,
  withStyles,
  Typography,
  Divider,
  Button,
  Paper
} from '@material-ui/core';

// import { Paper } from '../../utility/ui';
import styles from './Login.styles';
import loginImg from '../../assets/marketingPhoto.jpg';

import { useAlert, useAuth } from '../../utility/customHooks';

const Login = ({ classes, width: brkPoint }) => {
  const emailRef = useRef();
  const passRef = useRef();

  const alert = useAlert();
  const auth = useAuth();

  const getRenderBasedView = () => {
    const loginHandler = () => {
      const username = emailRef.current.value;
      const password = passRef.current.value;

      if (!username.length && !password.length) {
        alert.warning('Please Fill All Fields');
        return;
      }

      auth.login(username, password);
    };

    const loginPaper = (
      <Paper className={classes.paper} squared>
        <Typography variant="h3" className={classes.heading}>Login</Typography>
        <Divider className={classes.divider} />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={8} className={classes.item}>
            <TextField
              autoFocus
              label="User Name"
              margin="normal"
              variant="outlined"
              fullWidth
              inputRef={emailRef}
            />
          </Grid>
          <Grid item xs={8} className={classes.item}>
            <TextField
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              fullWidth
              inputRef={passRef}
            />
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={8}>
            <div className={classes.loginButton}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={loginHandler}
              >
                Login
              </Button>
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="caption" className={classes.caption}>Please Contact Your Admin In case You dont have Credentials</Typography>
      </Paper>
    );
    if (['xs', 'sm'].includes(brkPoint)) {
      return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
          <Grid item xs={8}>
            {loginPaper}
          </Grid>
        </Grid>
      );
    }
    const loginPaperClass = classNames(classes.paper, classes.loginPaper);
    return (
      <Grid container alignItems="center" justify="center" className={classes.root}>
        <Grid item md={5} lg={5}>
          <Paper className={loginPaperClass} squared>
            <div style={{
              height: '100%',
              width: '100%',
              backgroundSize: 'cover',
              backgroundImage: `url(${loginImg})`,
            }}
            >
              <div style={{ backgroundColor: 'rgb(30, 30, 21, 0.5)', width: '100%', height: '100%' }} />
            </div>
          </Paper>
        </Grid>
        <Grid item md={5} lg={5}>
          {loginPaper}
        </Grid>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      {getRenderBasedView()}
    </React.Fragment>
  );
};

Login.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(Login));
