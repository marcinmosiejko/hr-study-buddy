import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import FormField from 'components/molecules/UsersListItem/FormField/FormField';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import { Button } from 'components/atoms/Button/Button';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);

    setFormValues(initialFormState);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
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
      </Wrapper>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users?.map((userData, i) => (
            <UsersListItem
              deleteUser={deleteUser}
              index={i}
              key={Object.values(userData).join('')}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
