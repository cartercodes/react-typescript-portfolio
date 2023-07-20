import React from 'react';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Work from './components/work';

import './App.css';

const App: React.FC = () => {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
  );
}

export default App;