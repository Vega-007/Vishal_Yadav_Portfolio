import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Finari Services',
    role: 'Python Developer Intern',
    date: 'July 2024 - August 2024',
    description: 'Worked on Python-based development and automation tasks focused on web applications, backend processes, and cybersecurity-related operations. Contributed to identifying and testing web vulnerabilities using tools such as SQLMap, Vulners, and BeautifulSoup for data extraction and security analysis. Assisted in developing scalable application features, optimizing backend workflows, debugging issues, and improving overall system performance. Also collaborated on API handling, data processing, and implementing efficient coding practices to enhance project reliability and maintainability.'
  }
];

export default function Experience() {
  return (
    /* Scaled py-24/32 down to py-16/24 and narrowed padding for desktop */
    <section className="py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 relative bg-gray-50 dark:bg-transparent border-y border-gray-200 dark:border-white/[0.05] transition-colors duration-300 overflow-hidden" id="experience">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (005) EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
            Experience.
          </h2>
        </motion.div>

        <div className="w-full space-y-6 md:space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              /* Adjusted rounded corners and padding */
              className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.05] rounded-[1.5rem] p-6 sm:p-8 md:p-12 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  {/* Reduced text sizes: text-4xl -> text-3xl */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors duration-300 mb-1">{exp.role}</h3>
                  <h4 className="text-lg sm:text-xl text-gray-600 dark:text-[#a1a1aa] font-medium transition-colors duration-300">{exp.company}</h4>
                </div>
                <div className="self-start md:self-auto">
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-bold tracking-widest text-black dark:text-white px-4 py-2 bg-gray-100 dark:bg-white/[0.05] rounded-full uppercase border border-black/[0.05] dark:border-white/[0.05] transition-colors duration-300">
                    {exp.date}
                  </span>
                </div>
              </div>
              {/* Reduced text-xl -> text-lg for better body text density */}
              <p className="text-gray-600 dark:text-[#a1a1aa] text-base md:text-lg leading-relaxed transition-colors duration-300 max-w-4xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}