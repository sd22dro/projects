// src/theme.js
import { createTheme } from '@mui/material/styles';

// Create a custom theme with your desired color palette and typography
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7043', // Warm orange color
    },
    secondary: {
      main: '#ffab40', // Lighter orange
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;
