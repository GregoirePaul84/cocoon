import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1500,
      xl: 1824
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {  // Assurez-vous d'appliquer les styles au bon sélecteur
          maxWidthLg: 'none',
          maxWidthXl: 'none'
        }
      }
    }
  }
});


export default theme;