import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './componentes/login/Login'
import Register from './componentes/register/Register'
import Dashboard from './componentes/dashboard/Dashboard'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route
      path='login'
      element={<Login></Login>}>
        </Route>
        <Route
      path='register'
      element={<Register></Register>}>
        </Route>
        <Route
      path='dashboard'
      element={<Dashboard></Dashboard>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
