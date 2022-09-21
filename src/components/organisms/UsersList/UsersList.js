import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper, StyledTitle } from 'assets/styles/globalStyle';
import { StyledList } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <ViewWrapper>
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
    </ViewWrapper>
  );
};

UsersList.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string,
  }),
  deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
