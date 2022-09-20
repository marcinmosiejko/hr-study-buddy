import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  &:not(:first-child) {
    padding-top: 24px;
  }

  &:not(:last-child) {
    padding-bottom: 24px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: lightgrey;
    }
  }
`;
