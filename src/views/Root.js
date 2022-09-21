import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/UsersList/Form/Form';
import Nav from 'components/organisms/Nav/Nav';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={<UsersList deleteUser={deleteUser} users={users} />}
            />

            <Route
              path="/add-user"
              element={
                <Form
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                  formValues={formValues}
                />
              }
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
