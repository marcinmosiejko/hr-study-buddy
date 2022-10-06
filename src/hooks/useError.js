import React, { useCallback, useContext, useState } from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback((message) => {
    setError(message);

    // resets error message after animation (that lasts around 6sec) by setting error to null, which will remove error message from root component so that when there's new error to be displayed, the error message is rendered into root component again -> there's new animation and error is shown
    setTimeout(() => {
      setError(null);
    }, 7000);
  }, []);

  return (
    <ErrorContext.Provider value={{ error, dispatchError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!errorContext)
    throw Error('useError needs to be used inside ErrorContext');

  return errorContext;
};
