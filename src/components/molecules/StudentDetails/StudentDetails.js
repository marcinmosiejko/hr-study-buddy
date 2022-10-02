import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import Average from 'components/atoms/Average/Average';
import {
  Wrapper,
  ButtonsContainer,
  HeaderContainer,
  MainContainer,
  CourseContainer,
  GradesContainer,
} from './StudentDetails.styles';
import { SecondaryTitle } from 'components/atoms/SecodnaryTitle/SecodnaryTitle';
import SubjectGrade from 'components/atoms/SubjectGrade/SubjectGrade';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const StudentDetails = ({ student: { name, group, attendance, average } }) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Average isBig average={average} />
        <Title>{name}</Title>
        <ButtonsContainer>
          <DeleteButton />
          <DeleteButton />
          <DeleteButton />
        </ButtonsContainer>
      </HeaderContainer>
      <MainContainer>
        <CourseContainer>
          <SecondaryTitle>Course</SecondaryTitle>
          <p>Economy and Finances</p>
        </CourseContainer>
        <GradesContainer>
          <SecondaryTitle>Average grades:</SecondaryTitle>
          <SubjectGrade />
          <SubjectGrade />
          <SubjectGrade />
        </GradesContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default StudentDetails;
