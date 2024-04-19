
import './App.css';
import LoginPage from './components/pages/Login/LoginPage';
import HomePage from './components/pages/Home/HomePage'
import RegisterPage from './components/pages/registers/RegisterPage'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


//dfghj

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


