import React from 'react'

import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import BackTopBtn from "./Components/BackTopBtn"


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  )
}

export default App
