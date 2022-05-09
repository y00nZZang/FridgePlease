import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
