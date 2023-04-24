import React from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import DefaultPage from './components/DefaultPage';


const App =()=>{
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/signup" element={ <Signup/>} />
        <Route path="/dashboard" element={ <Dashboard/>} />
        <Route path="*" element={ <DefaultPage/>} />
      </Routes>
    </div>
  )
}

export default App;
