import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    color: #333;
    line-height: 1.6;
    background-color: #f4f4f9;
    width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Removido o padding do #root para evitar problemas de largura */
  }

  /* Títulos */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px; /* Margem inferior para todos os títulos */
  }

  /* Parágrafos */
  p {
    margin-bottom: 20px; /* Margem inferior para parágrafos */
  }

  /* Inputs e botões */
  input, button {
    margin: 10px 0; /* Margem superior e inferior */
  }

  /* Listas */
  ul, ol {
    margin-bottom: 20px;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 15px;
    }

    p, ul, ol {
      margin-bottom: 15px;
    }

    input, button {
      margin: 8px 0;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 10px;
    }

    p, ul, ol {
      margin-bottom: 10px;
    }

    input, button {
      margin: 6px 0;
    }
  }
`;

export default GlobalStyles;
