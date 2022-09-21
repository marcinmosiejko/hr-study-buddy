import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');


html {
     box-sizing: border-box;
}


*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}


body {
    font-family: 'Montserrat', sans-serif;
    position: relative;
}


a, button {
    font-family: 'Montserrat', sans-serif;
}
`;

export const ViewWrapper = styled.div`
  margin: 0 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 40px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 20px;
`;
