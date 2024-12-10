import React from 'react';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Cards from './components/Cards.jsx';
import ContactMe from './components/ContactMe.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Cards />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
