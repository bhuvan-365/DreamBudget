import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import HomeMain from './components/Homepage/homemain'
import Footer from './components/footer'

function App() {

  return (
    <>
//Navbar
      <Navbar />
//home section 
      <HomeMain />
//footer section 
      <Footer />
    </>
  )
}

export default App
