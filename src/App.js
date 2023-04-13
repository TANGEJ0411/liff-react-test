import logo from './logo.svg';
import './App.scss';
import liff from '@line/liff';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail'

function App() {
  return (
    <div className="wrap position-relative">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
