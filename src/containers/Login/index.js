import React, { useEffect, useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Typography, makeStyles, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withRouter } from 'react-router-dom';

import { db } from '../../firebase';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  // Current date & time
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;

  const time = hours + ':' + minutes + ' ' + ampm;
  const date = dd + '/' + mm + '/' + yyyy;

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('user'))) {
      props.history.push('/dashboard');
    }
  }, [props, user])

  const changeUsernameHandler = (e) => {
    setUserName(e.target.value);
  }

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  }

  const signInHandler = () => {
    const user = {
      isUser: true,
      username: userName,
      password: password,
      date,
      time
    }
    setUser(true)

    const profile = {
      isLoggedin: true,
      username: userName,
      password: password,
      date: date,
      time: time
    }

    db.collection("user").doc("profile").set({
      profile
    }, { merge: true })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    window.localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <form className={classes.form} noValidate> */}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="uName"
          label="User Name"
          name="uName"
          autoComplete="uName"
          autoFocus
          value={userName || ''}
          onChange={changeUsernameHandler}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password || ''}
          onChange={changePasswordHandler}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={signInHandler}
          disabled={!userName || !password}
        >
          Sign In
        </Button>
        {/* </form> */}
      </div>
    </Container>
  );
}

export default withRouter(Login);