import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import NotFound from './components/NotFound';

function App() {
  // Create a mock resume URL for the About component
  useEffect(() => {
    // Create a global variable with a mock resume URL
    window.resumeUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    
    // Smooth scroll implementation
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence>
          <div className="relative dark:bg-dark-900">
            <ParticlesBackground />
            
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    {/* <Blog /> */}
                    <Contact />
                  </motion.main>
                  <Footer />
                </>
              } />
              
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
