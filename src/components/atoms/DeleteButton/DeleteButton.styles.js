import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border: none;
  align-self: start;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
