import React from 'react';
import { StyledName, StyledAttendance } from './userName.styles';

const UserName = ({ name, attendance }) => (
  <div>
    <StyledName>{name}</StyledName>
    <StyledAttendance>attendance: {attendance}</StyledAttendance>
  </div>
);

export default UserName;
