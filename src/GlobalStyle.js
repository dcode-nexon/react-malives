import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  ol,ul,li {
    list-style: none;
  }
  a {
    outline: 0; text-decoration: none; color: #555
  }
  img {
    border: 0;
  }  
`;

export default GlobalStyle;
