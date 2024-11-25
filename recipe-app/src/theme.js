// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' if implementing dark mode
    primary: {
      main: '#ff7043', // Warm orange color
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffab40', // Lighter orange
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          ':hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});

export default theme;
