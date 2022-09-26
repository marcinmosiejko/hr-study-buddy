import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearInputValues: 'CLEAR INPUT VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return { ...state, [action.field]: action.value };
    case actionTypes.clearInputValues:
      return { ...action.initialValues };
    case actionTypes.consentToggle:
      return { ...state, consent: !state.consent };
    case actionTypes.throwError:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearInputValues, initialValues });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({
      type: actionTypes.throwError,
      errorMessage,
    });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleToggleConsent,
    handleThrowError,
  };
};
