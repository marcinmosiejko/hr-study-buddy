import React, { useContext, useEffect, useReducer, useRef } from 'react';
import FormField from 'components/molecules/UsersListItem/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

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
      return initialFormState;
    case actionTypes.consentToggle:
      return { ...state, consent: !state.consent };
    case actionTypes.throwError:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.focus();
  });

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (!formValues.consent) {
      dispatch({
        type: actionTypes.throwError,
        errorMessage: 'You need to give consent',
      });
      return;
    }

    handleAddUser(formValues);
    dispatch({ type: actionTypes.clearInputValues });
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>

      <FormField
        ref={ref}
        label="Name"
        id="name"
        name="name"
        onChange={handleInputChange}
        value={formValues.name}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        onChange={handleInputChange}
        value={formValues.attendance}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        onChange={handleInputChange}
        value={formValues.average}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        onChange={() => dispatch({ type: actionTypes.consentToggle })}
        value={formValues.consent}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
