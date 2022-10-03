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
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResultsWrapper = styled.div`
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
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  ul {
    list-style: none;
    overflow: auto;
    max-height: 250px;
  }
`;

export const SearchResultsItem = styled.li`
  padding: 12px 30px;
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colors.lightPurple : theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;
