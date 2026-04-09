import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import PremiumBackground from './components/PremiumBackground';
import CursorFollower from './components/CursorFollower';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}

const AppShell = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden dark:bg-slate-950">
      <PremiumBackground />
      <CustomCursor />
      <CursorFollower />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <Navbar />
                <motion.main>
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
              </motion.div>
            }
          />

          <Route
            path="/notfound"
            element={
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <NotFound />
              </motion.div>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
