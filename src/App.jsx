import React, { useState } from 'react'
import "./css/App.css"
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import Home from './Home';
import Skill from './Skill';
import About from './About';
import ProjectSection from './ProjectSection';
import Contact from './contect';
import ScrollScene from './components/ScrollScene';

const App = () => {
  return (
    <AnimatePresence>
      <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <Nav />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative"
        >
          <ScrollScene />
          <Home />
          <Skill />
          <About />
          <ProjectSection />
          <Contact />
        </motion.main>
      </div>
    </AnimatePresence>
  );
};

export default App;