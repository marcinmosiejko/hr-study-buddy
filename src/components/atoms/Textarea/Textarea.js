import styled from 'styled-components';

export const Textarea = styled.textarea`
  padding: 15px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
