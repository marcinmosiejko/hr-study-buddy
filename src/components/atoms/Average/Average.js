import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = ({ average, isBig = false }) => (
  <StyledAverage isBig={isBig} average={average}>
    {average}
  </StyledAverage>
);

export default Average;
