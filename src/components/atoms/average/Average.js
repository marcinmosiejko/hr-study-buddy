import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = ({ average }) => (
  <StyledAverage average={average}>{average}</StyledAverage>
);

export default Average;
