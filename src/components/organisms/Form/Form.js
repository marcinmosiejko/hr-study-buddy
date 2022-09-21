import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/UsersListItem/FormField/FormField';
import { ViewWrapper, StyledTitle } from 'assets/styles/globalStyle';
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, handleInputChange, formValues }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
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

Form.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Form;
