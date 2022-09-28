import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  width: 80%;
  max-width: 900px;
  overflow: hidden;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  border-top: none;
  z-index: 999;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  ul {
    list-style: none;
    overflow: auto;
    max-height: 250px;

    li {
      padding: 12px 30px;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.lightPurple};
      }

      &:not(:last-of-type) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};
      }
    }
  }
`;
