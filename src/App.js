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
import WhatsAppFloat from './components/WhatsAppFloat';
import NotFound from './components/NotFound';

function App() {
  const pageTransition = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: 'easeOut' }
  };

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          <div className="relative min-h-screen dark:bg-slate-950">
            
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <motion.main {...pageTransition}>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    {/* <Blog /> */}
                    <Contact />
                  </motion.main>
                  <Footer />
                  <WhatsAppFloat />
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
