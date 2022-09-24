import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/UsersListItem/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { useState } from 'react';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;

    case 'SUBTRACT':
      return state - 1;

    default:
      return state;
  }
  return state;
};

const AddUser = () => {
  const [value, dispatch] = useReducer(reducer, 0);
  // const [formValues, setFormValues] = useState(initialFormState);

  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    // setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    // handleAddUser(formValues);
    // setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>{value}</Title>
      <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
      <button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      {/* <FormField
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
      <Button type="submit">Add</Button> */}
    </ViewWrapper>
  );
};

export default AddUser;
