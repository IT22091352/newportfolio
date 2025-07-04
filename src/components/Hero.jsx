import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Hero = () => {
  // Professional roles that will be animated
  const roles = [
    "Software Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Full Stack Engineer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Role carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsAnimating(true);
      }, 500); // Wait for exit animation to complete
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-dark-900 to-dark-800 text-white pb-16 pt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-primary-500/20 text-primary-400 border border-primary-500/20">
                Intern Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text">Chathuka Dilakshana</span>
            </motion.h1>
            
            <div className="flex items-center h-12 overflow-hidden mb-8">
              <span className="text-lg md:text-xl text-gray-300 mr-2">And I'm a</span>
              <AnimatePresence mode="wait">
                {isAnimating && (
                  <motion.span 
                    key={roles[currentRoleIndex]}
                    className="text-lg md:text-xl bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Transforming ideas into user-centered digital experiences. A passionate IT undergraduate specializing in full-stack development and creating innovative solutions with modern technologies.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link 
                to="projects" 
                smooth={true} 
                duration={800}
                offset={-80}
              >
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore My Work
                </motion.button>
              </Link>
              
              <Link 
                to="contact" 
                smooth={true} 
                duration={800}
                offset={-80}
              >
                <motion.button
                  className="btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a href="https://github.com/IT22091352" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/chathuka-dilakshana-006315284" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 animate-float"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-xl opacity-75"></div>
              <div className="relative bg-dark-800 rounded-full p-8">
                <img 
                  src="./assets/pictures/profilePIC1.png"
                  alt="Developer illustration" 
                  className="w-full mx-auto drop-shadow-xl boarder-radius-10px-4 rounded-full border-2 border-primary-500/20"
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
