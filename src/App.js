import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
  <Header />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Contact />
</div>
  );
}

export default App;

