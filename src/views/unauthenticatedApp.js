import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Wrapper } from './unauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Wrapper onSubmit={handleSubmit(signIn)}>
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
      </Wrapper>
    </>
  );
};

export default UnauthenticatedApp;
