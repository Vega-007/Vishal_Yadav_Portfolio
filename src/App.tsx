import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  // Start in Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Force the dark class on the very first load
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Toggle the 'dark' class on the HTML element for Tailwind's dark: prefix
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen w-full overflow-x-hidden flex flex-col relative transition-colors duration-500 
      ${isDarkMode 
        ? 'bg-[#050505] selection:bg-white selection:text-black' 
        : 'bg-white selection:bg-black selection:text-white'
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className={`py-6 md:py-10 px-6 border-t flex flex-col sm:flex-row items-center justify-center gap-4 text-[10px] md:text-xs tracking-[0.2em] font-semibold uppercase mt-12 transition-colors duration-300 
        ${isDarkMode 
          ? 'border-white/5 text-[#525252]' 
          : 'border-gray-200 text-gray-400'
        }`}
      >
        <div>© {new Date().getFullYear()} VISHAL YADAV</div>
      </footer>
    </div>
  );
}

export default App;