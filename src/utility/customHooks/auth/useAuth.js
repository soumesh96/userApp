import React, {
  createContext,
  useState,
  // useLayoutEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

// import useFetch from '../useFetch';
// import CircularProgress from '../../ui/circularProgress/circularProgress';
// import urls from '../../../urls';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const {
  //   data: loggedInData,
  //   isLoading: loginLoading,
  //   doFetch: doLogin,
  // } = useFetch(JSON.parse(localStorage.getItem('user')),
  //   {
  //     errorMessage: 'Please Check Your Credentials',
  //     successMessage: 'Successfully Logged In',
  //   });

  // useLayoutEffect(() => {
  //   setUser(loggedInData);
  //   JSON.parse(localStorage.getItem('userInfo'));
  //   localStorage.setItem('userInfo', JSON.stringify(loggedInData));
  // }, [loggedInData]);

  const login = useCallback((username, password) => {
    const profile = {
      isUser: true,
      username: username,
      password: password,
      role: 'Admin'
      // date,
      // time
    }
    console.log(profile)
    setUser(profile)
    localStorage.setItem('user', JSON.stringify(profile));
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setUser(null);
  }, []);

  const actions = useMemo(() => ({
    login,
    logout,
    user,
  }), [login, logout, user]);

  // let circularProgress = null;
  // if (loginLoading) {
  //   circularProgress = <CircularProgress open />;
  // }

  const mainApp = useMemo(() => (
    <AuthContext.Provider value={actions}>
      {children}
    </AuthContext.Provider>
  ), [actions, children]);

  return (
    <React.Fragment>
      {mainApp}
      {/* {circularProgress} */}
    </React.Fragment>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: '',
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export {
  AuthProvider,
  useAuth,
};
