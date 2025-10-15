import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocalPage from './pages/LocalPage';
import LocalComponent from './features/local/components/LocalForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
