import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  cursor: pointer;

  & {
    padding-top: 24px;
  }

  &:not(:last-child) {
    padding-bottom: 24px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: lightgrey;
    }
  }
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
