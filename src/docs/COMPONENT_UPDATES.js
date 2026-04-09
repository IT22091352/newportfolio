/**
 * COMPONENT UPDATE GUIDE - Specific changes needed for each file
 * 
 * Copy-paste ready code snippets to update your existing components
 */

export const COMPONENT_UPDATES = {
  // ==========================================
  // 1. HERO.JSX UPDATES
  // ==========================================
  'Hero.jsx': `
    /**
     * CHANGE 1: Update imports to use optimized components
     */
    // REMOVE these imports:
    // import AnimatedOrbs from './AnimatedOrbs';
    // import TiltCard from './TiltCard';
    
    // ADD these imports:
    import AnimatedOrbsOptimized from './AnimatedOrbsOptimized';
    import TiltCardOptimized from './TiltCardOptimized';
    import OptimizedImage from './OptimizedImage';
    
    /**
     * CHANGE 2: Replace component in JSX
     */
    // In the background section, change:
    // FROM: <AnimatedOrbs />
    // TO: <AnimatedOrbsOptimized />
    
    // In the profile card, change:
    // FROM: <TiltCard className="...">
    // TO: <TiltCardOptimized className="...">
    
    /**
     * CHANGE 3: Update profile image if you have one
     */
    // FROM:
    // <img src={profileImg} alt="Profile" className="..." />
    
    // TO:
    <OptimizedImage
      src={profileImg}
      alt="Profile"
      className="w-full h-full object-cover round-full"
      priority={true}  // This is above-the-fold, load immediately
    />
  `,

  // ==========================================
  // 2. PROJECTS.JSX UPDATES
  // ==========================================
  'Projects.jsx': `
    /**
     * CHANGE 1: Add code-splitting optimization
     */
    // In App.js, not Projects.jsx - use React.lazy()
    // const LazyProjects = lazy(() => import('./components/Projects'));
    
    /**
     * CHANGE 2: Ensure FilterBar is imported
     */
    import FilterBar from './FilterBar';
    
    /**
     * CHANGE 3: Update image components in ProjectCard
     * (if ProjectCard uses plain <img> tags)
     */
    import OptimizedImage from './OptimizedImage';
  `,

  // ==========================================
  // 3. ABOUT.JSX UPDATES
  // ==========================================
  'About.jsx': `
    /**
     * CHANGE 1: Replace any <img> tags with OptimizedImage
     */
    import OptimizedImage from './OptimizedImage';
    
    // FROM:
    // <img src={aboutImg} alt="About me" />
    
    // TO:
    <OptimizedImage
      src={aboutImg}
      alt="About me"
      className="w-full h-auto"
      // priority={true} if above-the-fold
    />
  `,

  // ==========================================
  // 4. APP.JS UPDATES (MOST IMPORTANT)
  // ==========================================
  'App.js': `
    /**
     * CHANGE 1: Add this import at the top
     */
    import { Suspense, lazy, useEffect } from 'react';
    import {
      loadOptimizedGoogleFonts,
      setupDNSPrefetch,
      initEmailJS,
    } from './config/externalServicesConfig';
    
    /**
     * CHANGE 2: Add lazy component definitions
     */
    const LazySkills = lazy(() => import('./components/Skills'));
    const LazyExperience = lazy(() => import('./components/Experience'));
    const LazyProjects = lazy(() => import('./components/Projects'));
    
    /**
     * CHANGE 3: Create loading fallback
     */
    const LoadingFallback = () => (
      <div className="min-h-96 bg-slate-950 flex items-center justify-center">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-slate-800 rounded w-64"></div>
          <div className="h-4 bg-slate-800 rounded w-52"></div>
          <div className="h-4 bg-slate-800 rounded w-48"></div>
        </div>
      </div>
    );
    
    /**
     * CHANGE 4: Add useEffect for optimizations
     */
    useEffect(() => {
      loadOptimizedGoogleFonts();
      setupDNSPrefetch();
      initEmailJS().catch(err => {
        console.log('EmailJS will load when Contact form is used');
      });
    }, []);
    
    /**
     * CHANGE 5: Wrap lazy components with Suspense
     */
    // In your JSX where you render components:
    
    // OLD:
    // <Skills />
    // <Experience />
    // <Projects />
    
    // NEW:
    <Suspense fallback={<LoadingFallback />}>
      <LazySkills />
    </Suspense>
    
    <Suspense fallback={<LoadingFallback />}>
      <LazyExperience />
    </Suspense>
    
    <Suspense fallback={<LoadingFallback />}>
      <LazyProjects />
    </Suspense>
  `,

  // ==========================================
  // 5. PROJECTCARD.JSX UPDATES
  // ==========================================
  'ProjectCard.jsx': `
    /**
     * CHANGE: Ensure project images use OptimizedImage
     */
    import OptimizedImage from './OptimizedImage';
    
    // If you have an <img> tag in the card:
    // FROM:
    // <img src={project.image} alt={project.title} />
    
    // TO:
    <OptimizedImage
      src={project.image}
      webpSrc={getOptimizedImageUrl(project.image, { format: 'webp' })}
      alt={project.title}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  `,

  // ==========================================
  // 6. CONTACT.JSX OR EMAILJS UPDATES
  // ==========================================
  'Contact.jsx': `
    /**
     * CHANGE: Initialize EmailJS lazily (not in component mount)
     */
    import { initEmailJS } from '../config/externalServicesConfig';
    
    // In your Email send handler:
    const handleSendEmail = async (e) => {
      e.preventDefault();
      
      try {
        // EmailJS will be initialized if not already done
        await initEmailJS();
        
        // Now send email (your existing logic)
        // await emailjs.send(...);
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    };
  `,

  // ==========================================
  // 7. ANY ANIMATED COMPONENT UPDATES
  // ==========================================
  'AnimatedComponents.jsx': `
    /**
     * CHANGE: Use media queries for conditional animations
     */
    import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMediaQuery';
    
    function MyAnimatedComponent() {
      const isMobile = useIsMobile();
      const prefersReduced = usePrefersReducedMotion();
      
      // Skip complex animations on mobile or accessibility setting
      const shouldReduceMotion = isMobile || prefersReduced;
      
      return (
        <motion.div
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 1] }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          className="will-change-transform"  // GPU acceleration
        >
          Content
        </motion.div>
      );
    }
  `,

  // ==========================================
  // 8. TAILWIND.CONFIG.JS VERIFICATION
  // ==========================================
  'tailwind.config.js': `
    // Make sure your config has this:
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
      ],
      // ^ This ensures only used styles are included!
      
      darkMode: 'class',
      
      theme: {
        extend: {
          // Your custom extensions...
        },
      },
      
      plugins: [],
    }
    
    // Verify JIT mode is enabled (should be default in v3+)
  `,

  // ==========================================
  // 9. PACKAGE.JSON BUILD SCRIPTS
  // ==========================================
  'package.json': `
    // Make sure your scripts section has:
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "build:analyze": "source-map-explorer 'build/static/js/*.js'",
      // Optional: performance analysis
      "lighthouse": "lighthouse https://yourportfolio.com --view"
    },
    
    // After optimization, run:
    // npm run build               (Creates optimized production build)
    // npm run build:analyze       (Shows bundle breakdown)
    
    // Dependencies to keep:
    "dependencies": {
      "react": "^19.0.0",
      "react-dom": "^19.0.0",
      "framer-motion": "^10.0.0",    // Keep your animation library
      "react-router-dom": "^6.0.0",   // For routing
      "tailwindcss": "^3.0.0"         // Keep Tailwind
      // Only keep libraries you actively use!
    }
  `,
};

// ============================================================================
// QUICK REFERENCE - Copy these code blocks into your components
// ============================================================================

export const QUICK_UPDATES = {
  // Add this to any component that should skip animation on mobile
  useMediaQueryPattern: `
    import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMediaQuery';
    
    const isMobile = useIsMobile();
    const prefersReduced = usePrefersReducedMotion();
    
    if (isMobile || prefersReduced) {
      // Simple, lightweight animation
      return <SimpleVersion />;
    }
    
    // Complex, desktop-only animation
    return <DesktopVersion />;
  `,

  // Add will-change to frequently animated elements
  willChangePattern: `
    <motion.div
      className="will-change-transform"  // Enables GPU acceleration
      animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
    >
      This element animates smoothly on all devices
    </motion.div>
  `,

  // Replace all images with this pattern
  optimizedImagePattern: `
    import OptimizedImage from '../components/OptimizedImage';
    
    <OptimizedImage
      src="image-url.jpg"
      alt="Description"
      className="w-full h-auto"
      loading="lazy"
      decoding="async"
      priority={false}  // Set to true for above-the-fold images
    />
  `,

  // Wrap expensive components for code-splitting
  lazyLoadingPattern: `
    import { Suspense, lazy } from 'react';
    
    const LazyComponent = lazy(() => import('./ExpensiveComponent'));
    
    const LoadingFallback = () => (
      <div className="h-96 bg-slate-950 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
    
    <Suspense fallback={<LoadingFallback />}>
      <LazyComponent />
    </Suspense>
  `,
};

// ============================================================================
// TESTING CHECKLIST - Verify your optimizations work
// ============================================================================

export const TESTING_CHECKLIST = `
✅ TESTING YOUR OPTIMIZATIONS

1. Check Build Size:
   npm run build
   → Total size should be < 120KB (gzipped)

2. Test Code-Splitting:
   - Open DevTools Network tab
   - Open site in private/incognito mode
   - Scroll down to Projects section
   - Should see chunk load in Network tab (0.chunk.js)

3. Test Mobile Performance:
   - DevTools → Lighthouse → Analyze page load
   - Target: Performance 85+
   - Open DevTools → Performance tab
   - Record site interaction → Check 60 FPS

4. Test Accessibility:
   - DevTools → Lighthouse → a11y audit
   - Check: prefers-reduced-motion is respected
   - Test: Don't see any animations if motion disabled

5. Test on Real Devices:
   - Slow 3G connection (DevTools)
   - iPad or Android tablet
   - Old phone (iPhone 8 or older)
   - iPhone 14+ (check Web Vitals)

6. Test Lazy Images:
   - DevTools → Sources → set breakpoint in OptimizedImage
   - Scroll image into view
   - Should trigger lazy loading

7. Monitor Web Vitals:
   - Install: npm install web-vitals
   - Uncomment in App.js useEffect
   - Check metrics in console

8. Final Lighthouse Check:
   - Use Google PageSpeed Insights
   - OR use WepageTest.org
   - Target scores:
     * Performance: 90+
     * Accessibility: 95+
     * Best Practices: 90+
     * SEO: 95+
`;

export default COMPONENT_UPDATES;
