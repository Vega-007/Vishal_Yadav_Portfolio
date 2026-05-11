import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import profile from '../assets/profile-pic.jpg';

function AnimatedCounter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.floor(value).toString();
        }
      }
    });
    return () => controls.stop();
  }, [from, to, inView, duration]);
  
  return <span ref={nodeRef}>{from}</span>;
}

export default function About() {
  return (
    /* Scaled py-24/32 down to py-16/24 and reduced max padding to lg:px-24 */
    <section className="py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 relative transition-colors duration-300 overflow-hidden" id="about">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (002) ABOUT ME
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 flex-shrink-0"
          >
            <div className="aspect-[4/5] bg-gray-100 dark:bg-[#111111] rounded-[1.5rem] border border-black/[0.05] dark:border-white/[0.05] overflow-hidden relative shadow-xl transition-colors duration-300 group">
              <img 
                src={profile}
                alt="Vishal Yadav H S" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12 flex flex-col pt-2 lg:pt-4">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              /* Reduced from text-6xl to text-5xl for better desktop scaling */
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.15] transition-colors duration-300"
            >
              Architecting intelligent, high-performance software systems for the modern web.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
              <motion.p
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-600 dark:text-[#a1a1aa] text-base md:text-lg leading-relaxed transition-colors duration-300"
              >
                I am an MCA student specializing in Generative AI at SRMIST, Chennai. My approach combines deep technical precision with a product-first mentality.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-600 dark:text-[#a1a1aa] text-base md:text-lg leading-relaxed transition-colors duration-300"
              >
                I don't just write code; I architect robust backends in Python and dynamic interfaces in React, creating ecosystems that are scalable, secure, and intuitive.
              </motion.p>
            </div>

            {/* Stats Section - Adjusted gaps and text sizes */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 pt-10 border-t border-black/[0.05] dark:border-white/[0.05] transition-colors duration-300"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-1 transition-colors duration-300"><AnimatedCounter from={0} to={5} duration={2} /><span className="text-xl text-gray-500">+</span></div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Projects Shipped</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-1 transition-colors duration-300"><AnimatedCounter from={0} to={100} duration={2.5} /><span className="text-xl text-gray-500">%</span></div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Commitment</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-1 transition-colors duration-300">{"<"}<AnimatedCounter from={999} to={200} duration={2} /><span className="text-xl text-gray-500">ms</span></div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Latency</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}