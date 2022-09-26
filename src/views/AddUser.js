import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const {
    formValues,
    handleInputChange,
    handleClearForm,
    handleToggleConsent,
    handleThrowError,
  } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (!formValues.consent) {
      handleThrowError('You need to give consent');
      return;
    }

    handleAddUser(formValues);
    handleClearForm();
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>

      <FormField
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
        onChange={handleToggleConsent}
        value={formValues.consent}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
