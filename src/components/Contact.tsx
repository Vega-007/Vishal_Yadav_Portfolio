import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react'; // Adding an icon for a professional touch

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzmZz9qxk1uvpA5Ln67F8qLM0w2JaEnkKN6DFtxjJxwJiSJdVIaBF6MeKTfuXD0s7Vj/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      let data = null;
      try {
        data = await response.json();
      } catch (e) { /* Not JSON */ }

      if (response.ok && (!data || data.result !== 'error')) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        setErrorMessage(data?.error || 'Failed to send message.');
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 relative bg-gray-50 dark:bg-transparent border-t border-gray-200 dark:border-white/[0.05] transition-colors duration-300 overflow-hidden" id="contact">
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (006) CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
            Get In Touch.
          </h2>
        </motion.div>

        <div className="w-full flex flex-col gap-8 sm:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.05] p-6 sm:p-10 md:p-12 rounded-[1.5rem] transition-colors duration-300 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-[#888888] uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-[#222222] text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm md:text-base"
                    placeholder="Vega"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-[#888888] uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-[#222222] text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm md:text-base"
                    placeholder="vega@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-[#888888] uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-[#222222] text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* REFINED BUTTON: Added md:w-max, rounded-full, and text-xs for a sleeker look */}
              <div className="flex justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-max px-10 py-3.5 bg-blue-600 dark:bg-white text-white dark:text-black text-xs md:text-sm font-black uppercase tracking-widest rounded-full hover:bg-blue-700 dark:hover:bg-gray-200 transition-all duration-300 disabled:opacity-70 shadow-lg flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'Sending...' : isSuccess ? 'Success!' : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-600 dark:text-red-500 text-xs md:text-sm font-medium text-center">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { href: "https://www.linkedin.com/in/vishal-yadav-vega7/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png", label: "LinkedIn" },
              { href: "https://www.instagram.com/vegasic_007/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/250px-Instagram_logo_2016.svg.png", label: "Instagram" },
              { href: "mailto:vvishalyadav2302@gmail.com", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/3840px-Gmail_icon_%282020%29.svg.png", label: "Gmail" }
            ].map((link, idx) => (
              <a key={idx} href={link.href} className="flex items-center justify-center gap-3 flex-1 text-gray-600 dark:text-[#a1a1aa] hover:text-blue-600 dark:hover:text-white transition-all duration-300 p-4 px-6 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl rounded-[1.2rem] border border-black/[0.05] dark:border-white/[0.05] hover:shadow-xl hover:-translate-y-1 group min-w-[160px]">
                <img src={link.icon} alt={link.label} className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm md:text-base tracking-tight">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}