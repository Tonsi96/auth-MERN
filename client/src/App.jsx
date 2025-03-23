import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { EmailVerify, Home, Login, ResetPassword } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}
