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
    /* Reduced py-24/32 to py-16/24 and padding to lg:px-24 */
    <section className="py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 relative bg-gray-50 dark:bg-transparent border-y border-gray-200 dark:border-white/[0.05] transition-colors duration-300 overflow-hidden" id="techstack">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (003) TECH STACK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
            Technical Proficiency.
          </h2>
        </motion.div>

        <div className="relative overflow-hidden w-full max-w-6xl mx-auto [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex flex-col gap-4">
            {[ 
              { data: firstRow, direction: ["0%", "-50%"], speed: 30, delay: 0 },
              { data: secondRow, direction: ["-50%", "0%"], speed: 35, delay: 0.2 }
            ].map((row, rowIdx) => (
              <motion.div
                key={rowIdx}
                className="flex gap-4 w-max"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                animate={{ x: row.direction }}
                transition={{ 
                  opacity: { duration: 1.2, delay: row.delay }, 
                  filter: { duration: 1.2, delay: row.delay }, 
                  x: { ease: "linear", duration: row.speed, repeat: Infinity } 
                }}
              >
                {[...row.data, ...row.data].map((skill, index) => (
                  <motion.div
                    key={`${rowIdx}-${skill.name}-${index}`}
                    whileHover={{ y: -3 }}
                    /* Reduced width from 200px to 170px and padding to p-4 */
                    className="relative w-[140px] sm:w-[170px] flex-shrink-0 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.05] rounded-xl sm:rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-500 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Kept logo container/image size exactly the same as requested */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center bg-white dark:bg-[#111111] rounded-xl shadow-sm border border-black/[0.05] dark:border-white/[0.05] group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 z-10 relative">
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm" />
                      ) : skill.IconComponent ? (
                        <skill.IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-gray-700 dark:text-[#a3a3a3]" />
                      ) : (
                        <Code2 className="w-8 h-8 sm:w-9 sm:h-9 text-gray-400 dark:text-[#525252]" />
                      )}
                    </div>
                    {/* Reduced font from text-base to text-xs/sm and category to text-[10px] */}
                    <h3 className="text-xs sm:text-sm font-extrabold text-gray-900 dark:text-white mb-0.5 transition-colors duration-300 z-10 relative tracking-tight">{skill.name}</h3>
                    <span className="text-[10px] text-gray-500 dark:text-[#666] font-bold transition-colors duration-300 z-10 relative uppercase tracking-tighter">{skill.category}</span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}