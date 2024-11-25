import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Normalize styles across browsers */}
    <App />
  </ThemeProvider>
);
