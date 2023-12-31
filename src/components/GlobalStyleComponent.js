import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul{
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  text-decoration: none;
}
`;