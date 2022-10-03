import styled from 'styled-components';

export const StyledAverage = styled.div`
  background-color: ${({ theme, average }) => {
    if (+average >= 4) return `${theme.colors.success}`;
    if (+average < 3) return `${theme.colors.error}`;
    return `${theme.colors.warning}`;
  }};

  width: ${({ isBig }) => (isBig ? '64px' : '34px')};
  height: ${({ isBig }) => (isBig ? '64px' : '34px')};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.m};
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
`;
