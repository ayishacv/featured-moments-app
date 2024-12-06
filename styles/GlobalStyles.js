import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500&family=Raleway:wght@400;600&display=swap');

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Cabinet Grotesk', sans-serif;
  }

  h1 {
    color: black;
    font-size: 32px;
  }

  p {
    font-size: 16px;
    color: gray;
  }
`;

export default GlobalStyles; 