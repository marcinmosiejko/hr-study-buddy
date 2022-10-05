import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%,
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1 ;

  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  height: 60px;
  padding-right: 25px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
  }
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  padding-right: 25px;
  text-align: right;

  &:link,
  &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};

    position: relative;
  }

  &:active,
  &:hover {
    color: ${({ theme }) => theme.colors.darkPurple};
  }

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    position: absolute;
    content: '';
    width: 18px;
    height: 3px;
    top: 50%;
    right: 0;
    padding-left: 7px;
    transform: translate(0, -50%);
    background-color: ${({ theme }) => theme.colors.darkPurple};
    transition: all 0.2s ease-in-out;
  }
`;
