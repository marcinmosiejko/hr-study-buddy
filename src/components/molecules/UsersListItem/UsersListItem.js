import React from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/average/Average';
import UserName from 'components/atoms/userName/userName';
import Button from 'components/atoms/button/Button';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, attendance, average = '0%' } }) => (
  <Wrapper>
    <Average average={average} />
    <UserName name={name} attendance={attendance} />
    <Button />
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
