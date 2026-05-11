import { motion } from 'framer-motion';

export default function Hero() {
  return (
    /* Scaled down pt-32 to pt-24 and lg:px-32 to lg:px-24 */
    <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 relative pt-24 transition-colors duration-300 overflow-hidden w-full">
      
      {/* Subtle Background Glow - Scaled down for 100% zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-black/5 dark:bg-white/5 rounded-full blur-[80px] md:blur-[100px] -z-10 transition-colors duration-300 pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6"
      />

      <motion.h1
        initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        /* REDUCED FONT SIZE: 
           From 9vw/10vw/8vw to fluid sizes that don't break the layout.
        */
        className="text-[12vw] sm:text-[9vw] lg:text-[7.5vw] leading-[0.85] font-black tracking-tighter text-gray-900 dark:text-white mb-12 uppercase max-w-full overflow-hidden hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all duration-500 cursor-default"
      >
        VISHAL YADAV
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-gray-200 dark:border-[#222222] pb-12">
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          /* Reduced text size from text-2xl to text-xl for standard desktop */
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-[#a1a1aa] max-w-xl font-normal leading-relaxed transition-colors duration-300"
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
            className="px-6 py-3 md:px-8 md:py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center text-base md:text-lg whitespace-nowrap shadow-lg"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator - Scaled down for mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "linear" }}
        className="mt-8 flex flex-col items-center justify-center absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 border border-gray-400 dark:border-[#555] rounded-full flex items-center justify-center mb-3">
          <motion.span 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-500 rounded-full" 
          />
        </div>
        <span className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase"></span>
      </motion.div>
    </section>
  );
}