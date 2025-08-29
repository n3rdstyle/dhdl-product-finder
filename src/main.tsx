import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { MerchantExport } from './pages/MerchantExport.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/for-hoehle-der-loewen" element={<App />} />
        <Route path="/for-hoehle-der-loewen/" element={<App />} />
        <Route path="/merchant-export" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)