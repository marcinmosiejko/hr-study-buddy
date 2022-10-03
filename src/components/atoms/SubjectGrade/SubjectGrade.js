import React from 'react';
import { Wrapper } from './SubjectGrade.styles';
import Average from '../Average/Average';

const SubjectGrade = () => {
  return (
    <Wrapper>
      <p>Modern Economy</p>
      <Average average={3.9} />
    </Wrapper>
  );
};

export default SubjectGrade;
