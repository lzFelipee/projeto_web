import { createGlobalStyles } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f8;
    color: #333;
    line-height: 1.6;
  }

  h1, h2 {
    color: #2a2a2a;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
