import { createGlobalStyle } from 'styled-components';

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

h3 {
    margin-bottom: 20px;
}
`;
