import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {
    console.log('Loading state has changed');
  }, [isLoading]);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading data...' : 'Users list'}</h1>
      <ul>
        {users?.map((userData, i) => (
          <UsersListItem
            deleteUser={deleteUser}
            index={i}
            key={Object.values(userData).join('')}
            userData={userData}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
