import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Hero = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className={darkMode ? 'bg-gray-800' : 'bg-white'}>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">¡Hola! Soy [Tu Nombre]</h1>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Desarrollador Web Frontend
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};