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
      /* Scaled down py-5/6 to py-3/4 for a sleeker profile */
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 sm:py-4 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#222222] transition-colors duration-300"
    >
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        <a href="#" className="text-black dark:text-white font-extrabold text-xl tracking-tighter">VY.</a>
        
        {/* Reduced text size from text-lg to text-sm and gap-8 to gap-10 for better spacing */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-gray-500 dark:text-[#888888] uppercase">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors duration-300">About</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors duration-300">Experience</a>
          <a href="#techstack" className="hover:text-black dark:hover:text-white transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors duration-300">Projects</a>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={toggleTheme}
            /* Scaled icon size from w-6 to w-5 */
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#111111] text-gray-500 dark:text-gray-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* Scaled Contact button from py-3 to py-2 and text-base to text-sm */}
          <a 
            href="#contact" 
            className="hidden sm:inline-block px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-sm"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}