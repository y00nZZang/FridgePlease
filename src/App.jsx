import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './lib/hoc/PrivateRoute';

// import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<TestPage />} />
      </Route>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
