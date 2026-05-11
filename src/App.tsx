import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col relative">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-12 px-6 md:px-12 border-t border-gray-200 dark:border-white/5 flex items-center justify-center text-sm sm:text-base tracking-[0.2em] font-semibold text-gray-500 dark:text-[#525252] uppercase mt-20 transition-colors duration-300">
        <div>© {new Date().getFullYear()} VISHAL YADAV</div>
      </footer>
    </div>
  );
}

export default App;
