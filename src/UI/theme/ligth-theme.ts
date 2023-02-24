import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9661ff',
      main: '#6B2AEE',
      dark: '#581ECD',
    },
    secondary: {
      light: '#2bfff2',
      main: '#02E709',
      dark: '#1dd6cb',
    },
    text: {
      primary: '#707070',
      secondary: '#9b9b9b',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#FFC107',
    },
    success: {
      main: '#4caf50',
    },
    grey: {
      50: '#fafafa',
      100: '#f0f0f0',
      200: '#d9d9dd',
      300: '#c4c4c4',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
  },
  shape: {
    borderRadius: 3,
  },
});

export default theme;
