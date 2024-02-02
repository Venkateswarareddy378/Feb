import React from 'react'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      {/* <NavBar/>
      <Home/>
      <About/> */}
    </div>
  )
}

export default App