import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-gray-950 text-white font-poppins scroll-smooth">
      <Header />
      <main className="px-4 md:px-16 lg:px-32 py-12 space-y-20">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

