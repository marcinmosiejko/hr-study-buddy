import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students list</Title>
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
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
