import React from 'react';
import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
// import AddUser from './AddUser';
import Dashboard from './Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';

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

const UnauthenticatedApp = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(signIn)}
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
        <Button type="submit">Sign in</Button>
        {/* {loginError && <span>{loginError}</span>} */}
        <br />
        <br />
        <span>login: teacher@studybuddy.com</span>
        <br />
        <span>password: Test1234</span>
      </form>
    </>
  );
};

const Root = () => {
  const { user } = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
