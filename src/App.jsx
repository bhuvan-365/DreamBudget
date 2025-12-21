import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import HomeMain from './components/Homepage/homemain'
import Footer from './components/footer'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
