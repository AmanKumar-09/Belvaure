import { useState } from 'react'

import './App.css'
import Header2 from './components/Header2.jsx'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header2/>
    <Footer/>
      
    </>
  )
}

export default App
