/**
 * IMPLEMENTATION CHECKLIST - Step-by-step optimization process
 */

export const OPTIMIZATION_CHECKLIST = `
╔════════════════════════════════════════════════════════════════════════════╗
║                    PORTFOLIO OPTIMIZATION CHECKLIST                        ║
╚════════════════════════════════════════════════════════════════════════════╝

📦 PHASE 1: SETUP (Do First)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Review PERFORMANCE_GUIDE.js in src/docs/
☐ Review MIGRATION_GUIDE.js for step-by-step instructions
☐ Install performance monitoring:
  npm install web-vitals
☐ Add useMediaQuery hook to your project
☐ Create optimized component versions

🖼️ PHASE 2: IMAGE OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Replace all <img> tags with <OptimizedImage />
☐ Add loading="lazy" to below-the-fold images
☐ Compress profile pictures with TinyPNG or Squoosh
☐ Update project image URLs to use Unsplash optimization:
  https://images.unsplash.com/...?auto=format&fit=crop&q=80&w=1000
☐ Test WebP support in different browsers
☐ Add responsive srcSet for different breakpoints

⚙️ PHASE 3: CODE SPLITTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Update App.js to use React.lazy() for Projects/Experience/Skills
☐ Wrap lazy components with Suspense
☐ Create LoadingFallback component
☐ Test that sections load smoothly when scrolled into view
☐ Monitor Network tab to confirm chunks load on-demand

🎬 PHASE 4: ANIMATION OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Update Hero.jsx to use AnimatedOrbsOptimized
☐ Update Hero.jsx to use TiltCardOptimized
☐ Replace TiltCard in Projects with TiltCardOptimized
☐ Use useIsMobile hook to disable complex animations on mobile
☐ Use usePrefersReducedMotion to respect accessibility settings
☐ Test on real mobile devices (not just DevTools)
☐ Profile animations with Chrome DevTools Performance tab

🎨 PHASE 5: CSS & BUNDLE OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Verify Tailwind content purge is working:
  tailwind.config.js has content: ["./src/**/*.{js,jsx}"]
☐ Add will-change: transform to frequently animated elements
☐ Check for unused imports from framer-motion and lucide-react
☐ Use tree-shakeable named imports only
☐ Run bundle analysis:
  npm run build
  npx source-map-explorer 'build/static/js/*.js'
☐ Identify and remove/replace large dependencies

🌐 PHASE 6: EXTERNAL SERVICES OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Update App.js to call loadOptimizedGoogleFonts()
☐ Update App.js to call setupDNSPrefetch()
☐ Update App.js to lazily initialize EmailJS
☐ Verify fonts load with <link rel="preconnect">
☐ Enable DNS prefetch for external domains
☐ Test that Contact form works with lazy EmailJS

📊 PHASE 7: PERFORMANCE TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Run npm run build and check output size
☐ Use Lighthouse in Chrome DevTools:
  - Target: Performance 90+, Accessibility 95+
  - Mobile: 80+, Desktop: 90+
☐ Test on real devices:
  - Old phone (2020 or older)
  - Slow 3G connection (DevTools)
  - Firefox, Safari, Edge browsers
☐ Monitor Core Web Vitals:
  - FCP (First Contentful Paint): < 1.8s
  - LCP (Largest Contentful Paint): < 2.5s
  - CLS (Cumulative Layout Shift): < 0.1
  - FID (First Input Delay): < 100ms
☐ Use PageSpeed Insights for field data

✅ PHASE 8: DEPLOYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Enable gzip compression on server
☐ Enable Brotli compression (if supported)
☐ Set proper cache headers for static assets
☐ Enable HTTP/2 on your hosting
☐ Set up CDN for static assets (CloudFlare, AWS CloudFront)
☐ Monitor Lighthouse scores post-deployment
☐ Setup performance monitoring (Sentry, New Relic)
☐ Create performance budget to track regressions

═════════════════════════════════════════════════════════════════════════════

EXPECTED IMPROVEMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bundle Size Reduction:
  Before: ~140 KB (gzipped)
  After:  ~100 KB (gzipped)  [~28% reduction]

Performance Score:
  Before: 70-80 (mobile)
  After:  85-95 (mobile)     [+15-25 points]

First Contentful Paint:
  Before: 2.5-3.5s
  After:  1.2-1.8s           [~40-50% faster]

Largest Contentful Paint:
  Before: 3.0-4.0s
  After:  1.8-2.5s           [~40-50% faster]

Mobile Experience:
  Before: Janky animations, slow interactions
  After:  Smooth 60fps, responsive touch

═════════════════════════════════════════════════════════════════════════════

MONITORING & MAINTENANCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Check performance metrics weekly:
   - Google PageSpeed Insights
   - WebPageTest
   - Chrome DevTools Lighthouse

2. Monitor bundle size on each build:
   - npm run build outputs size info
   - Set performance budgets to prevent regressions

3. Test on real devices monthly:
   - Old Android phone
   - Old iPhone (iPhone 8 or older)
   - Various tablets

4. Keep dependencies updated:
   - npm outdated
   - Review breaking changes
   - Test thoroughly before deploying

═════════════════════════════════════════════════════════════════════════════
`;

// Quick reference for common optimizations
export const QUICK_REFERENCE = {
  'Lazy Load Image': `
    <OptimizedImage
      src={url}
      alt="description"
      loading="lazy"
      className="w-full h-auto"
    />
  `,

  'UseMediaQuery Hook': `
    const isMobile = useIsMobile(768);
    const prefersReduced = usePrefersReducedMotion();
    
    if (isMobile || prefersReduced) {
      // Simple animation
    } else {
      // Complex animation
    }
  `,

  'Code Split Component': `
    const LazySkills = lazy(() => import('./Skills'));
    
    <Suspense fallback={<LoadingFallback />}>
      <LazySkills />
    </Suspense>
  `,

  'Enable GPU Acceleration': `
    className="will-change-transform"
    // Only use on animated elements!
  `,

  'Optimize Google Fonts': `
    import { loadOptimizedGoogleFonts } from './config/externalServicesConfig';
    
    useEffect(() => {
      loadOptimizedGoogleFonts();
    }, []);
  `,

  'Tree-Shakeable Imports': `
    // ❌ Bad
    import * as framer from 'framer-motion';
    
    // ✅ Good
    import { motion, AnimatePresence } from 'framer-motion';
  `,
};

export default OPTIMIZATION_CHECKLIST;
