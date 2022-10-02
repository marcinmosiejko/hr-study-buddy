import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 600px;
  padding: 30px;
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  ${'' /* border: 1px solid ${({ theme }) => theme.colors.grey}; */}
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  z-index: 999;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 50, 100, 0.4);
  backdrop-filter: blur(2px);
  z-index: 998;
`;
