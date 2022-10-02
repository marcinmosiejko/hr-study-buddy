import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HeaderContainer = styled.header`
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MainContainer = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};

  padding: 0 30px;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const CourseContainer = styled.div``;

export const GradesContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
  }
`;
