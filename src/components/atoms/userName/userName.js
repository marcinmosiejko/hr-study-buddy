import React from 'react';
import styled from 'styled-components';

const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const UserName = ({ name, attendance }) => (
  <div>
    <StyledName>{name}</StyledName>
    <StyledAttendance>attendance: {attendance}</StyledAttendance>
  </div>
);

export default UserName;
