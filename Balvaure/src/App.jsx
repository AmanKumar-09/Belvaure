import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import Carousel from './components/Crousel.jsx'
import Card from './components/CardData.jsx'
import CardMain from './components/CardData.jsx'
function App() {
  

  return (
    <>
    <Header/>
    <Outlet/>
   
      
    </>
  )
}

export default App
