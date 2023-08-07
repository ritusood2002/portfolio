import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>


      <Navbar />
      <Home />
      <About />
      <Skill/>
      <Contact/>
      <Footer />

    </>
  )
}

export default App