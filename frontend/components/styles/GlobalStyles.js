import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,400&display=swap');
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
  }

  .container {
    max-width: 100rem;
    margin: auto;
  }

  ::selection {
    background-color: rgba(16, 29, 44, 0.75);
    color: #dce6de;
  }
`;

export default GlobalStyles;
