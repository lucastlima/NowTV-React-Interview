import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
    box-sizing: border-box;
    height: 100%;
}

*, *::before, *::after {
    box-sizing: inherit;
}


body {
    margin: 0;
    height: 100%;
    font-family: 'Nunito', sans-serif;
}

#root {
    height: 100%;
}

h1, h2, h3, h4, h5, p {
    margin: 0.2rem;
  }

`;
