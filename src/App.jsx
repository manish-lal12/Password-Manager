import React from 'react';
import './App.css';
import PasswordTester from './pages/PasswordTester';
import PassGen from './pages/PassGen';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Manager from './pages/Manager';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/password-generator" element={<PassGen />} />
        <Route path="/password-tester" element={<PasswordTester />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/manager" element={
          () => {
            window.location.href = 'https://www.google.com';
            return null;
        }}/>      */}
        </Routes>
    </>
  );
}
export default App;
