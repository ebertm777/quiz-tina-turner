import React from 'react';
import { render } from 'react-dom';

import App from './App';
import GlobalStyle from './styles/globalStyle';

render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('info-app'),
);
