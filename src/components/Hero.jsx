import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Hero = () => {
  const roles = [
    "Software Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Full Stack Engineer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const heroImage = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80';

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsAnimating(true);
      }, 320);
    }, 2600);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 text-white md:pt-28">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Workspace desk setup" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-slate-950/65" />
      </div>

      <div className="relative container flex min-h-[calc(100vh-5rem)] items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-block"
            >
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-slate-100 uppercase backdrop-blur-md">
                Intern Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 
              className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Building elegant digital products with performance, clarity, and craft.
            </motion.h1>

            <motion.p
              className="mb-2 text-sm uppercase tracking-[0.22em] text-slate-300/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Chathuka Dilakshana
            </motion.p>
            
            <div className="mb-8 flex h-10 items-center overflow-hidden">
              <span className="mr-3 text-base text-slate-300 sm:text-lg">Focused on</span>
              <AnimatePresence mode="wait">
                {isAnimating && (
                  <motion.span 
                    key={roles[currentRoleIndex]}
                    className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-base font-semibold text-transparent sm:text-xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            
            <motion.p 
              className="mb-10 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              I design and ship robust web experiences with a clean product mindset. My approach blends engineering depth with thoughtful UX to create interfaces that feel polished, fast, and human.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <Link 
                to="projects" 
                smooth={true} 
                duration={800}
                offset={-90}
              >
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Projects
                </motion.button>
              </Link>
              
              <Link 
                to="contact" 
                smooth={true} 
                duration={800}
                offset={-90}
              >
                <motion.button
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let us Connect
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a href="https://github.com/IT22091352" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition-colors hover:text-white" aria-label="GitHub profile">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/chathuka-dilakshana-006315284" target="_blank" rel="noopener noreferrer" className="text-slate-300 transition-colors hover:text-white" aria-label="LinkedIn profile">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel animate-float p-4">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5">
                <img
                  src="/assets/pictures/profilePIC1.JPG"
                  alt="Chathuka Dilakshana"
                  className="h-[520px] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
