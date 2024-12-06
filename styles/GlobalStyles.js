import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500&family=Raleway:wght@400;600&display=swap');

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif; /* Default font for body */
    color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
  }

  h1, h2, h3 {
    font-family: 'Cabinet Grotesk', sans-serif; /* Use Cabinet Grotesk, fallback to sans-serif */
    color: rgba(0, 0, 0, 0.9); /* Black with 90% opacity */
    font-weight: 400; /* Regular weight */
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    color: gray;
  }
`;

export default GlobalStyles;
