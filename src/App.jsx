import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import User from './Screens/User'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='newuser' element={<User/>} />
      </Routes>
    </>
  )
}

export default App
