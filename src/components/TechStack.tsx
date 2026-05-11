import { motion } from 'framer-motion';
import { 
  Code2, 
  MonitorSmartphone, 
  ShoppingCart, 
  Search 
} from 'lucide-react';

const skills = [
  { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vite', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'Responsive Design', category: 'Frontend', IconComponent: MonitorSmartphone },
  { name: 'Python', category: 'Backend & AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Node.js', category: 'Backend & AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Firebase', category: 'Backend & AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'Shopify', category: 'E-commerce', icon: 'https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-svg-vector.svg' },
  { name: 'E-commerce', category: 'E-commerce', IconComponent: ShoppingCart },
  { name: 'Razorpay', category: 'Tools', icon: 'https://w7.pngwing.com/pngs/88/578/png-transparent-razorpay-logo-thumbnail-tech-companies-thumbnail.png'},
  { name: 'Cloudinary', category: 'Tools', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtwRIgdokhEH5l5OiPcUG58zgF3gnVRkB3g&s' },
  { name: 'Android Studio', category: 'Mobile Dev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Java', category: 'Mobile Dev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'SEO', category: 'Skills', IconComponent: Search },
];

export default function TechStack() {
  const firstRow = skills.slice(0, 7);
  const secondRow = skills.slice(7);

  return (
    <section className="py-24 md:py-32 px-6 sm:px-12 md:px-20 lg:px-32 relative bg-gray-50 dark:bg-transparent border-y border-gray-200 dark:border-white/[0.05] transition-colors duration-300 overflow-hidden" id="techstack">
      <div className="max-w-[1440px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (003) TECH STACK
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
            Technical Proficiency.
          </h2>
        </motion.div>

        <div className="relative overflow-hidden w-full max-w-6xl mx-auto [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex flex-col gap-6">
            <motion.div
              className="flex gap-6 w-max"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ opacity: { duration: 1.2 }, filter: { duration: 1.2 }, x: { ease: "linear", duration: 30, repeat: Infinity } }}
            >
              {[...firstRow, ...firstRow].map((skill, index) => (
                <motion.div
                  key={`row1-${skill.name}-${index}`}
                  whileHover={{ y: -5 }}
                  className="relative w-[160px] sm:w-[200px] flex-shrink-0 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.05] rounded-2xl sm:rounded-3xl p-5 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:border-blue-500/20 dark:hover:border-white/10 transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center bg-white dark:bg-[#111111] rounded-2xl shadow-sm border border-black/[0.05] dark:border-white/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 relative">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm" />
                    ) : skill.IconComponent ? (
                      <skill.IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-gray-700 dark:text-[#a3a3a3]" />
                    ) : (
                      <Code2 className="w-8 h-8 sm:w-9 sm:h-9 text-gray-400 dark:text-[#525252]" />
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white mb-1 transition-colors duration-300 z-10 relative tracking-tight">{skill.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-[#888888] font-semibold transition-colors duration-300 z-10 relative">{skill.category}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-6 w-max"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{ opacity: { duration: 1.2, delay: 0.2 }, filter: { duration: 1.2, delay: 0.2 }, x: { ease: "linear", duration: 35, repeat: Infinity } }}
            >
              {[...secondRow, ...secondRow].map((skill, index) => (
                <motion.div
                  key={`row2-${skill.name}-${index}`}
                  whileHover={{ y: -5 }}
                  className="relative w-[160px] sm:w-[200px] flex-shrink-0 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.05] rounded-2xl sm:rounded-3xl p-5 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:border-blue-500/20 dark:hover:border-white/10 transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center bg-white dark:bg-[#111111] rounded-2xl shadow-sm border border-black/[0.05] dark:border-white/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 relative">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm" />
                    ) : skill.IconComponent ? (
                      <skill.IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-gray-700 dark:text-[#a3a3a3]" />
                    ) : (
                      <Code2 className="w-8 h-8 sm:w-9 sm:h-9 text-gray-400 dark:text-[#525252]" />
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white mb-1 transition-colors duration-300 z-10 relative tracking-tight">{skill.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-[#888888] font-semibold transition-colors duration-300 z-10 relative">{skill.category}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
