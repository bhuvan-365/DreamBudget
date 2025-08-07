import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import HomeMain from './components/Homepage/homemain'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar />
      <HomeMain />
      <Footer />
    </>
  )
}

export default App
