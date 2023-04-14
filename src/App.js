import './App.scss';
import liff from '@line/liff';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail'

function App() {
  //在最初第一頁(App)設定init，後續的頁面都可以在await liff.ready後使用，
  useEffect(() => {
    async function init() {
      try {
        await liff.init({
          liffId: "1660858533-loqWyNQE" // 請用自己的 liffId
        })
      } catch (err) {
        // 發生錯誤
        console.log(err.code, err.message)
        alert(err.message)
      }
    }
    init()
  }, [])
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
