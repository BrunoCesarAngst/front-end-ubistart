import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway|Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F3F5F9 0% 0% no-repeat padding-box;
    opacity: 1;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    // font: Regular 14px/16px Raleway, sans-serif;
  }

  #root {
    width: 0 auto;
    height: 2174px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
