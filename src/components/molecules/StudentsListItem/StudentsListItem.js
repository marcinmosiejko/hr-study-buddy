import React from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/Average/Average';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import {
  Wrapper,
  StyledName,
  StyledAttendance,
} from './StudentsListItem.styles';
import { UserShape } from 'types';

const StudentsListItem = ({
  userData: { name, attendance, average = '0%' },
}) => {
  return (
    <Wrapper>
      <Average average={average} />
      <div>
        <StyledName>{name}</StyledName>
        <StyledAttendance>attendance: {attendance}</StyledAttendance>
      </div>
      <DeleteButton />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
