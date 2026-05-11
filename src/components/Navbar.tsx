import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 sm:py-6 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#222222] transition-colors duration-300"
    >
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
        <a href="#" className="text-black dark:text-white font-extrabold text-2xl tracking-tight">VY.</a>
        
        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-600 dark:text-[#888888]">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
          <a href="#techstack" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#111111] text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <a href="#contact" className="hidden sm:inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-base font-bold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
