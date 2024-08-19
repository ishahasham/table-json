import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import User from './Screens/User'
import EditUser from "./Screens/EditUser";

function App() {


  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='newuser' element={<User/>} />
        <Route path="editUser/:id" element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
