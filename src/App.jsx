import React from 'react'
import StringGenerator from './components/StringGenerator'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import TextTools from './pages/TextTools'
import Blog from './pages/Blog'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/texttools" element={<TextTools />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <StringGenerator />
    </>
  )
}


export default App
