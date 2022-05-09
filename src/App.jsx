import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
