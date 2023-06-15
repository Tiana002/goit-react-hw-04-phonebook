import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 50px;

  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background: linear-gradient(60deg, rgba(247, 212, 238, 1) 15%, rgba(199, 163, 204, 1) 25%, rgba(208, 212, 196, 1) 40%, rgba(197, 192, 192, 1) 65%, rgba(254, 249, 249, 1) 90%, rgba(255, 255, 255, 1) 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

input {
  padding: 5px;
  margin-top: 5px;

  border-radius: 5px;

}

button {
  font-size: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
}

h1,
h2 {
  text-align: center;
}

p {
  margin: 0;
}

span {
  font-size: 12px;
  color: #403d3d;
}

`;
