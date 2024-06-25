// Import de libs externes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './container/MainContainer';
import { CssBaseline } from '@mui/material';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import theme from '@styles/theme';

// Import des composants

export function App() {

  return (
    <>
      <CssBaseline />
      {/*<ThemeProvider theme={theme}>*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContainer />} />
          </Routes>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;

