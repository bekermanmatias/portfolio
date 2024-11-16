// src/components/Portfolio.js
import React from 'react';
import { Navbar } from './layout/Navbar';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { projectsData } from '../constants/projects';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar />
      <Hero />
      <Projects projects={projectsData} />
    </div>
  );
};

export default Portfolio;