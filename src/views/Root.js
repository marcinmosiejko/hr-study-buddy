import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './unauthenticatedApp';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';

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
