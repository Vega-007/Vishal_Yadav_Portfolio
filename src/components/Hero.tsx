import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 relative pt-32 transition-colors duration-300 overflow-hidden w-full">
      
      {/* Subtle Background Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-black/5 dark:bg-white/5 rounded-full blur-[100px] md:blur-[120px] -z-10 transition-colors duration-300 pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8"
      >
        {/* <span className="w-12 h-[1px] bg-gray-500" /> CHENNAI, INDIA */}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[9vw] sm:text-[10vw] lg:text-[8vw] leading-[0.9] font-black tracking-tighter text-gray-900 dark:text-white mb-16 uppercase max-w-full overflow-hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all duration-500 cursor-default"
      >
        VISHAL YADAV
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-gray-200 dark:border-[#222222] pb-16">
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-[#a1a1aa] max-w-2xl font-normal leading-relaxed transition-colors duration-300"
        >
          <span className="font-bold text-gray-900 dark:text-white">Builder. Developer. Problem Solver.</span><br className="hidden sm:block" />
          I’m an MCA student at SRMIST, Chennai, specializing in Generative AI and scalable software systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center text-lg whitespace-nowrap"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "linear" }}
        className="mt-12 flex flex-col items-center justify-center absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-10 h-10 border border-gray-400 dark:border-[#555] rounded-full flex items-center justify-center mb-4">
          <motion.span 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gray-500 rounded-full" 
          />
        </div>
        <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
