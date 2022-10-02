import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  p {
    width: 150px;
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
`;
