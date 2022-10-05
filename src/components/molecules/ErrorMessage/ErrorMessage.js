import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from './ErrorMessage.styles';
import PropTypes from 'prop-types';

const defaultErrorMessage =
  'Something went wrong. Please try again or contact our supprt.';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title as="h2">Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
