import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ProfileImage from '../ui/ProfileImage';

export const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ProfileImage />
            <h1 className="text-xl font-bold">Tu Nombre</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Navigation />
          </div>
        </div>
      </div>
    </nav>
  );
};