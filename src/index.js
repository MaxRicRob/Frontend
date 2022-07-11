import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.lightGreen[700],
      footer: colors.grey[200],
      header: colors.lightGreen[50],
      loading: colors.lightGreen[400],
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);