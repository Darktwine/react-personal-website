import React from 'react'
import NavbarBS from './Components/Navbar.js';
import Hero from './Components/Hero.js';
import About from './Components/About.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Footer from './Components/Footer.js';
import './App.css';


function App() {
  return (
    <div>
      <NavbarBS />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
