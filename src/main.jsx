import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Only import BrowserRouter here
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: 'SF Pro Text, Roboto, sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter> {/* ONLY ONE BrowserRouter HERE */}
        <App /> {/* App component is rendered directly */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);