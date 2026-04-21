import { useState } from 'react'
import './App.css'
import Home from './features/home/Home'
import Navbar from './layout/Navbar'
import Skills from './features/skills/Skills'
import About from './features/about/About'
import Contact from './features/contact/Contact'
import Projects from './features/projects/Projects'
import Work from './features/work/Work'

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Work/>
      <About/>
      <Contact />
    </>
  )
}

export default App
