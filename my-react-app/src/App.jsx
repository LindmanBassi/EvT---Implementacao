import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocaisPage from './pages/LocaisPage';
import LocaisComponent from './components/LocaisComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocaisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
