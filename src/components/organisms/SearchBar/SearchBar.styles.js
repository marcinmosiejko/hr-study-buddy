import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  padding: 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};

  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  gap: 0;

  ${Input} {
    width: 80%;
    max-width: 900px;
    padding: 5px 30px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  fontsize: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;
