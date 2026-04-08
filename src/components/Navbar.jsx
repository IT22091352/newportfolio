import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.24
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <motion.nav 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className={`container relative transition-all duration-300 ${scrolled ? 'glass-panel shadow-custom py-3' : 'py-2.5'}`}>
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50"
            >
              Chathuka Dilakshana
            </motion.div>
        
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={600}
                    spy={true}
                    hashSpy={true}
                    activeClass="nav-link-active"
                    offset={-90}
                    className="nav-link cursor-pointer text-sm tracking-wide text-slate-600 dark:text-slate-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
        
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full bg-slate-900 p-2 text-white dark:bg-slate-100 dark:text-slate-900"
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </motion.button>
            </div>
        </div>
        <motion.div className="nav-scroll-progress" style={{ scaleX: smoothProgress }} />
      </div>
      
      {isOpen && (
        <motion.div 
            className="container md:hidden mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
            <div className="glass-panel overflow-hidden py-2">
              {navItems.map((item) => (
                <Link 
                  key={item}
                  to={item.toLowerCase()} 
                  smooth={true} 
                  duration={500}
                  offset={-90}
                  className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
