import { motion } from 'framer-motion';
import { useState } from 'react';

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
      // NOTE: Your previous URL had two URLs pasted together! I've separated out the first one.
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzmZz9qxk1uvpA5Ln67F8qLM0w2JaEnkKN6DFtxjJxwJiSJdVIaBF6MeKTfuXD0s7Vj/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      // Google Apps script might return a JSON payload with result: "error"
      let data = null;
      try {
        data = await response.json();
      } catch (e) {
        // Not JSON
      }

      if (response.ok && (!data || data.result !== 'error')) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        console.error('Form submission failed', data);
        setErrorMessage(data?.error || 'Failed to send message. Check the Google Script execution logs.');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrorMessage(error.message || 'Network error. Please check your connection or the Script URL.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 sm:px-12 md:px-20 lg:px-32 relative bg-gray-50 dark:bg-transparent border-t border-gray-200 dark:border-white/[0.05] transition-colors duration-300 overflow-hidden" id="contact">
      <div className="max-w-[1440px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
            (006) CONTACT
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
            Get In Touch.
          </h2>
        </motion.div>

        <div className="w-full flex flex-col gap-12 sm:gap-16">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.05] p-8 sm:p-12 md:p-16 rounded-[2rem] transition-colors duration-300 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="name" className="text-sm sm:text-base font-semibold text-gray-700 dark:text-[#888888] transition-colors duration-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-[#222222] text-gray-900 dark:text-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:border-white/50 transition-all duration-300 text-base sm:text-lg"
                    placeholder="Vega"
                  />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <label htmlFor="email" className="text-sm sm:text-base font-semibold text-gray-700 dark:text-[#888888] transition-colors duration-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-[#222222] text-gray-900 dark:text-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:border-white/50 transition-all duration-300 text-base sm:text-lg"
                    placeholder="vega@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label htmlFor="message" className="text-sm sm:text-base font-semibold text-gray-700 dark:text-[#888888] transition-colors duration-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-[#222222] text-gray-900 dark:text-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:border-white/50 transition-all duration-300 resize-none text-base sm:text-lg"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 bg-blue-600 dark:bg-white text-white dark:text-black text-base sm:text-lg font-bold rounded-lg sm:rounded-xl hover:bg-blue-700 dark:hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:hover:bg-blue-600 dark:disabled:hover:bg-white shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent Successfully!' : 'Send Message'}
              </motion.button>
              {errorMessage && (
                <div className="p-3 sm:p-4 bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/50 rounded-lg sm:rounded-xl text-red-600 dark:text-red-500 text-sm sm:text-base font-medium text-center transition-colors duration-300">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>

          {/* Social Info */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <a href="https://www.linkedin.com/in/vishal-yadav-vega7/" className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto flex-1 text-gray-600 dark:text-[#a1a1aa] hover:text-blue-600 dark:hover:text-white transition-all duration-300 p-6 px-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-black/[0.05] dark:border-white/[0.05] hover:shadow-2xl hover:-translate-y-1 group min-w-[200px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-base sm:text-lg tracking-tight">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/vegasic_007/" className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto flex-1 text-gray-600 dark:text-[#a1a1aa] hover:text-pink-600 dark:hover:text-white transition-all duration-300 p-6 px-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-black/[0.05] dark:border-white/[0.05] hover:shadow-2xl hover:-translate-y-1 group min-w-[200px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/250px-Instagram_logo_2016.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210403190622" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-base sm:text-lg tracking-tight">Instagram</span>
            </a>
            <a href="mailto:vvishalyadav2302@gmail.com" className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto flex-1 text-gray-600 dark:text-[#a1a1aa] hover:text-red-500 dark:hover:text-white transition-all duration-300 p-6 px-8 bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-black/[0.05] dark:border-white/[0.05] hover:shadow-2xl hover:-translate-y-1 group min-w-[200px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/3840px-Gmail_icon_%282020%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="Mail" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-base sm:text-lg tracking-tight">Gmail</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
