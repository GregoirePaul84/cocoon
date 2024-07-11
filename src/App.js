// Import de libs externes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

// Import des composants
import MainContainer from './container/MainContainer';
import Success from './components/success/Success';

export function App() {

  return (
    <>
      <CssBaseline />
      <BrowserRouter basename="/cocoon">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

