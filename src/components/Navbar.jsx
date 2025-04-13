import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-custom py-3' : 'bg-transparent py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text"
        >
          Chathuka Dilakshana
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Skills', 'Experience', 'Projects',  'Contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                to={item.toLowerCase()} 
                smooth={true} 
                duration={500} 
                offset={-80}
                className={`font-medium cursor-pointer transition-colors duration-300 ${scrolled ? 'text-white hover:text-primary-400' : 'text-white/90 hover:text-white'}`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          
          <motion.div 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-dark-800/95 backdrop-blur-sm shadow-custom"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item.toLowerCase()} 
              smooth={true} 
              duration={500}
              offset={-80}
              className="block py-3 px-6 text-white/90 hover:text-white hover:bg-dark-700 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
