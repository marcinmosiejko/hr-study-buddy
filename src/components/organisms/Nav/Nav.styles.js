import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

export const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 100vh;

  padding-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 30px;

  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSize.m};

  .logo,
  .link {
    font-weight: 700;
    padding-right: 25px;
  }

  .link {
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
  }

  .link:first-child {
    height: 80px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .link.active {
    &:link,
    &:visited {
      &::after {
        position: absolute;
        content: '';
        width: 18px;
        height: 3px;
        top: 50%;
        right: 0;
        padding-left: 3px;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.colors.darkPurple};
      }
    }
  }
`;
