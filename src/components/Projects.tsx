import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TLAluminiumFabrication from '../assets/tl.png';
import EventBuddy from '../assets/eventbuddy.png';
import Lakshayaa from '../assets/lakshayaa.png';
import HaptiClock from '../assets/haptic.jpg';

const projects = [
 {
  title: 'TL Aluminium Fabrication',
  description: 'Designed and developed a fully responsive business website showcasing aluminium services and lead generation. Optimized for speed and mobile responsiveness to improve client conversion.',
  tags: ['React', 'Tailwind', 'SEO'],
  link: 'https://tlaluminiumfabrication.com/',
  github: '#',
  image: TLAluminiumFabrication, // Fixed: removed brackets
},
 {
  title: 'EventBuddy',
  description: 'Full-stack event platform featuring role-based authentication, real-time updates, and media management via Cloudinary. Built for streamlined student and organizer interaction.',
  tags: ['Firebase', 'Node.js', 'Cloudinary'],
  link: 'https://eventbuddy-2070c.web.app/',
  github: '#',
  image: EventBuddy, // Fixed: removed brackets
},
  {
  title: 'Lakshayaa Collections',
  description: 'End-to-end Shopify store management featuring custom UI enhancements, Razorpay integration, and SEO optimization for a seamless e-commerce experience.',
  tags: ['Shopify', 'Razorpay', 'E-commerce'],
  link: 'https://lakshayaacollections.com/',
  github: '#',
  image: Lakshayaa, // Fixed: removed brackets
},
{
  title: 'HaptiClock',
  description: 'A touch-first Android application providing tactile feedback through haptic interactions. Features interactive time selectors and real-time clock synchronization.',
  tags: ['Android Studio', 'Java', 'Haptics'],
  platform: 'Android',
  link: '#',
  github: '#',
  image: HaptiClock, // Fixed: removed brackets
},
];

export default function Projects() {
  return (
    /* Scaled down py-24/32 to py-16/24 and narrowed lg:px-24 */
    <section className="py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 relative transition-colors duration-300" id="projects">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (004) PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
            Featured Projects.
          </h2>
        </motion.div>

        {/* Tightened vertical spacing between project rows */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Scaled down rounded corners and border weight */}
              <div className="w-full lg:w-1/2 aspect-video bg-gray-100 dark:bg-[#111111] rounded-[1.5rem] border border-black/[0.05] dark:border-white/[0.05] overflow-hidden relative group shadow-xl transition-colors duration-300">
                <img 
                  src={project.image as string} 
                  alt={project.title} 
                  className={`w-full h-full ${project.title === 'HaptiClock' ? 'object-contain py-6' : 'object-cover'} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]`}
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-[#333] mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                {/* Reduced heading from text-5xl to text-3xl/4xl */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300 mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-[#a1a1aa] text-base md:text-lg leading-relaxed transition-colors duration-300 mb-6 max-w-xl">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-gray-100 dark:bg-white/[0.05] border border-black/[0.03] dark:border-white/[0.03] rounded-full text-[10px] font-bold tracking-widest uppercase text-black dark:text-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:gap-3 text-xs md:text-sm whitespace-nowrap group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}