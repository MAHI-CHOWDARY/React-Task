import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signUp' element={<Signup/>} />
            <Route path='/profile' element={<Account/>} />
        </Routes>
    </div>
  )
}

export default App
