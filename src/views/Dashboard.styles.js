import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 25px;

  h2 {
    margin: 0;
    display: block;
    width: 120px;
    ${'' /* font-size: ${({ theme }) => theme.fontSize.xl}; */}
  }

  nav {
    display: flex;
  }
`;

export const GroupLink = styled(NavLink)`
  &:not(:last-of-type) {
    margin-right: 20px;
  }

  &:link,
  &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    width: 28px;
    height: 28px;
    border-radius: 100%;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s;
  }

  &:active,
  &:hover {
    color: ${({ theme }) => theme.colors.darkPurple};
  }

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
