import React from 'react';
import { Wrapper } from './SubjectGrade.styles';
import Average from '../Average/Average';

const SubjectGrade = ({ subject, average }) => {
  return (
    <Wrapper>
      <p>{subject}</p>
      <Average average={average} />
    </Wrapper>
  );
};

export default SubjectGrade;
