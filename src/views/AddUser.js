import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/UsersListItem/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';

const AddUser = ({ handleAddUser, handleInputChange, formValues }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
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
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape(UserShape),
};

export default AddUser;
