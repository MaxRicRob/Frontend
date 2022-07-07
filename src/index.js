import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.lightGreen[800],
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router />
    </ThemeProvider>
  </React.StrictMode>
);