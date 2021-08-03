import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router';
import theme from './theme';

import { ThemeProvider } from '@nexys/material-components';

ReactDOM.render(
  <ThemeProvider theme={theme} withCssBaseline>
    <AppRouter />
  </ThemeProvider>,
  document.getElementById('root')
);
