import React from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/Average/Average';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledName, StyledAttendance } from './UsersListItem.styles';

const UsersListItem = ({
  deleteUser,
  userData: { name, attendance, average = '0%' },
}) => (
  <Wrapper>
    <Average average={average} />
    <div>
      <StyledName>{name}</StyledName>
      <StyledAttendance>attendance: {attendance}</StyledAttendance>
    </div>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    average: PropTypes.string,
  }),
};

export default UsersListItem;
