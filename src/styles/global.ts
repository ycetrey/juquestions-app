import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  body{
    background: repeating-linear-gradient(
      -45deg,
      #fff,
      #fff 5px,
      #fafafa 5px,
      #fafafa 10px
    );
    color:#312e38;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
  }

  button{
    cursor:pointer;
  }

`;
