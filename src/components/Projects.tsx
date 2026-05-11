import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TLAluminiumFabrication from '../assets/tl.png';
import EventBuddy from '../assets/eventbuddy.png';
import Lakshayaa from '../assets/lakshayaa.png';
import HaptiClock from '../assets/haptic.jpg';

const projects = [
 {
  title: 'TL Aluminium Fabrication',
  description: 'Designed and developed a fully responsive business website for TL Aluminium Fabrication to showcase their aluminium fabrication services, projects, and client offerings with a clean and professional interface. Implemented lead generation features including customer inquiry forms with data handling integration, optimized performance for faster loading speeds, improved mobile responsiveness, and enhanced overall user experience to strengthen the company’s digital presence and client conversion.',
  tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design', 'SEO', 'Lead Generation'],
  link: 'https://tlaluminiumfabrication.com/',
  github: '#',
  image: [TLAluminiumFabrication],
},
 {
  title: 'EventBuddy',
  description: 'Developed a full-stack event management platform designed to simplify event creation, registration, and management for students and organizers. Built with role-based authentication for Admin, Organizer, and Student dashboards, featuring real-time event updates, event registration, brochure uploads, attendance management, and responsive modern UI/UX. Integrated Firebase for authentication and backend data handling, along with Cloudinary for media storage and optimized performance across devices.',
  tags: ['React', 'Firebase', 'Node.js', 'Cloudinary', 'Role-Based Authentication'],
  link: 'https://eventbuddy-2070c.web.app/',
  github: '#',
  image: [EventBuddy],
},
  {
  title: 'Lakshayaa Collections',
  description: 'Developed and fully managed a complete Shopify e-commerce website for Lakshayaa Collections with a modern, responsive, and performance-optimized design. Handled end-to-end setup including product management, custom UI enhancements, Razorpay payment gateway integration, mobile optimization, SEO improvements, and overall store performance to deliver a seamless shopping experience.',
  tags: ['Shopify', 'Razorpay', 'E-commerce', 'SEO', 'Responsive Design'],
  link: 'https://lakshayaacollections.com/',
  github: '#',
  image: [Lakshayaa],
},
{
  title: 'HaptiClock',
  description: 'A touch-first Android application developed to provide tactile and haptic-based time feedback through an intuitive and accessible user experience. Built using Android Studio with a modern mobile UI, the app includes interactive time selectors, training mode functionality, real-time system clock synchronization, and responsive haptic interactions designed to improve usability and user engagement. Focused on performance optimization, smooth interaction flow, and clean visual design for a seamless Android experience.',
  tags: ['Android Studio', 'Java', 'XML', 'Haptic Feedback', 'Mobile UI/UX'],
  platform: 'Android',
  link: '#',
  github: '#',
  image: [HaptiClock],
},
];

export default function Projects() {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-12 md:px-20 lg:px-32 relative transition-colors duration-300" id="projects">
      <div className="max-w-[1440px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (004) PROJECTS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
            Featured Projects.
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(15px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 aspect-video bg-gray-100 dark:bg-[#111111] rounded-[2rem] border border-black/[0.05] dark:border-white/[0.05] overflow-hidden relative group shadow-2xl transition-colors duration-300">
                <img 
                  src={project.image as unknown as string} 
                  alt={project.title} 
                  className={`w-full h-full ${project.title === 'HaptiClock' ? 'object-contain py-8' : 'object-cover'} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]`}
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-sm font-bold tracking-[0.2em] text-gray-400 dark:text-[#555] mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300 mb-6">{project.title}</h3>
                <p className="text-gray-600 dark:text-[#a1a1aa] text-lg sm:text-xl leading-relaxed transition-colors duration-300 mb-8 max-w-2xl">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 bg-gray-100 dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.05] rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase text-black dark:text-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:gap-4 hover:pr-6 text-sm sm:text-base whitespace-nowrap group/btn">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-45 transition-transform duration-300" /> Live Demo
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
