import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
// import AddUser from './AddUser';
import Dashboard from './Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate replace to="/groups" />} />
          <Route path="/groups" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          {/* <Route path="/add-user" element={<AddUser />} /> */}
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = ({ login, password }) => handleSignIn({ login, password });

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      onSubmit={handleSubmit(handleSignIn)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '12px',
      }}
    >
      <FormField
        label="login"
        name="login"
        id="login"
        {...register('login', { required: true })}
      />
      {errors.login && <span>Login is required</span>}
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">login</Button>
      {loginError && <span>{loginError}</span>}
    </form>
  );
};

const Root = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Every time we mount Root component, we check if there's a token in local storage, if it does, we pass it into axios.get as header: authorization. If that passes successfully, we get a response with a user that we set into state, which triggers rerender and the user stays logged in
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) return;

        const response = await axios.get('/me', {
          headers: { authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      // To keep user logged in
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Please provide valid user data');
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />
        )}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
