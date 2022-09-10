import React from 'react'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'



import Welcome from './pages/Welcome'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import DashBoard from './pages/DashBoard'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Routes>
    </BrowserRouter>
  )
}
