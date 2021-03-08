import './App.css';
import NavbarBS from './Components/Navbar.js';
import Hero from './Components/Hero.js';
import About from './Components/About.js';
import Skills from './Components/Skills.js';
import Projects from './Components/Projects.js';
import Footer from './Components/Footer.js';

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
