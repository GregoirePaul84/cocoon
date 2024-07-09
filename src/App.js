// Import de libs externes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

// Import des composants
import MainContainer from './container/MainContainer';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export function App() {

  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <>
    {/* <div>
      {xl ? "XL Screen" : lg ? "Large Screen" : "Small Screen"}
    </div> */}
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

