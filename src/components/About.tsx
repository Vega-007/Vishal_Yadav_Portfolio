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
    /* ULTRA-MINIMIZED: Reduced py to 12/16 and limited padding to lg:px-16 */
    <section className="py-12 md:py-16 px-6 sm:px-10 md:px-12 lg:px-16 relative transition-colors duration-300 overflow-hidden" id="about">
      <div className="max-w-[1100px] w-full mx-auto"> {/* Narrowed max-width further */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <div className="text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (002) ABOUT ME
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left Column - RE-SIZED Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            /* MAJOR CHANGE: Reduced width from 5/12 to 3.5/12 and applied max-width */
            className="w-full lg:w-[32%] flex-shrink-0 max-w-[320px] lg:max-w-full mx-auto lg:mx-0"
          >
            {/* Added soft rounded corner rounded-xl */}
            <div className="aspect-[4/5] bg-gray-100 dark:bg-[#111111] rounded-xl border border-black/[0.05] dark:border-white/[0.05] overflow-hidden relative shadow-lg transition-colors duration-300 group">
              <img 
                src={profile}
                alt="Vishal Yadav H S" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[68%] flex flex-col pt-0 lg:pt-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              /* Sizing tightened: 3xl/4xl on desktop */
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.2] transition-colors duration-300"
            >
              Architecting intelligent, high-performance software systems for the modern web.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-600 dark:text-[#a1a1aa] text-sm md:text-base leading-relaxed transition-colors duration-300"
              >
                I am an MCA student specializing in Generative AI at SRMIST, Chennai. My approach combines deep technical precision with a product-first mentality.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-600 dark:text-[#a1a1aa] text-sm md:text-base leading-relaxed transition-colors duration-300"
              >
                I don't just write code; I architect robust backends in Python and dynamic interfaces in React, creating ecosystems that are scalable, secure, and intuitive.
              </motion.p>
            </div>

            {/* Stats Section - Mini Sizing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-black/[0.05] dark:border-white/[0.05] transition-colors duration-300"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-0.5 transition-colors duration-300"><AnimatedCounter from={0} to={5} duration={2} /><span className="text-lg text-gray-500">+</span></div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Projects Shipped</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-0.5 transition-colors duration-300"><AnimatedCounter from={0} to={100} duration={2.5} /><span className="text-lg text-gray-500">%</span></div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Commitment</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-0.5 transition-colors duration-300">{"<"}<AnimatedCounter from={999} to={200} duration={2} /><span className="text-lg text-gray-500">ms</span></div>
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Latency</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}