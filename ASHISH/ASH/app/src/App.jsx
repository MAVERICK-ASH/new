import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Addd from './assets/components/Addd'
import View from './assets/components/View'
import Navbar from './assets/Navbar'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      
      <Navbar />
      <Routes>
      <Route path="/add" element={<Addd />} />
      <Route path="/view" element={<View/>} />
    </Routes >
    </>
  )
}

export default App
