import React from 'react'
import './App.css'
import PasswordTester from './pages/PasswordTester'
import PassGen from './pages/PassGen'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/password-generator' element={<PassGen/>}/>
      <Route path='/password-tester' element={<PasswordTester/>}/>
    </Routes>
    {/* <HomePage/> */}
    {/* <PassGen/> */}
    {/* <PasswordTester/> */}
    </>
  )
}
export default App