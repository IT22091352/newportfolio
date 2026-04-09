import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import NotFound from './components/NotFound';
import PremiumBackground from './components/PremiumBackground';
import CursorFollower from './components/CursorFollower';
import CustomCursor from './components/CustomCursor';
import { loadOptimizedGoogleFonts, setupDNSPrefetch, initEmailJS } from './config/externalServicesConfig';

// Code-split heavy sections
const LazySkills = lazy(() => import('./components/Skills'));
const LazyExperience = lazy(() => import('./components/Experience'));
const LazyProjects = lazy(() => import('./components/Projects'));

// Loading fallback for lazy sections
const LoadingFallback = () => (
  <div className="min-h-96 bg-slate-950 flex items-center justify-center">
    <div className="animate-pulse space-y-3 w-3/4">
      <div className="h-4 bg-slate-800 rounded w-full"></div>
      <div className="h-4 bg-slate-800 rounded w-5/6"></div>
      <div className="h-4 bg-slate-800 rounded w-4/6"></div>
    </div>
  </div>
);

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

  // Initialize performance optimizations on mount
  useEffect(() => {
    // Load Google Fonts without blocking render
    loadOptimizedGoogleFonts();
    
    // Setup DNS prefetch for external services
    setupDNSPrefetch();
    
    // Lazy-load EmailJS (used only in Contact form)
    initEmailJS().catch(err => {
      console.log('EmailJS will load when Contact form is used');
    });
  }, []);

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
                  {/* Load Hero and About immediately (above fold) */}
                  <Hero />
                  <About />
                  
                  {/* Lazy-load heavy sections (only when scrolled into view) */}
                  <Suspense fallback={<LoadingFallback />}>
                    <LazySkills />
                  </Suspense>
                  
                  <Suspense fallback={<LoadingFallback />}>
                    <LazyExperience />
                  </Suspense>
                  
                  <Suspense fallback={<LoadingFallback />}>
                    <LazyProjects />
                  </Suspense>
                  
                  {/* Load Contact immediately (call to action) */}
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
