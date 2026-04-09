/**
 * Complete performance optimization checklist and guidelines
 */

export const PERFORMANCE_CHECKLIST = {
  ASSET_OPTIMIZATION: {
    title: 'Asset Optimization',
    items: [
      {
        task: 'Image Lazy Loading',
        status: '✅ IMPLEMENTED',
        files: ['src/components/OptimizedImage.jsx'],
        usage: 'Replace <img> with <OptimizedImage loading="lazy" />',
      },
      {
        task: 'WebP Format Support',
        status: '✅ IMPLEMENTED',
        files: ['src/components/OptimizedImage.jsx'],
        usage: 'Component auto-detects and uses WebP with JPG fallback',
      },
      {
        task: 'Responsive Images',
        status: '🔧 MANUAL IMPLEMENTATION',
        suggestion: 'Use srcSet attribute for different breakpoints',
        example: 'srcSet="small.jpg 480w, medium.jpg 1024w, large.jpg 1920w"',
      },
      {
        task: 'Image Compression',
        status: '📊 RECOMMENDATION',
        suggestion: 'Use TinyPNG, ImageOptim, or Squoosh for compression',
        savings: 'Can reduce image size by 30-50%',
      },
    ],
  },

  CODE_SPLITTING: {
    title: 'Code Splitting with React.lazy()',
    status: '✅ READY TO USE',
    files: ['src/utils/lazyLoadComponents.js'],
    usage: `
      // In App.js or Router:
      import { LazyProjects, LazyExperience, LazySkillsSection } from './utils/lazyLoadComponents';
      
      <Route path="/portfolio" element={<LazyProjects />} />
      <Route path="/experience" element={<LazyExperienceSection />} />
      <Route path="/skills" element={<LazySkillsSection />} />
    `,
    benefits: [
      'Reduces initial bundle by splitting heavy sections',
      'Faster First Contentful Paint (FCP)',
      'Chunks load on-demand when sections come into view',
    ],
  },

  ANIMATION_OPTIMIZATION: {
    title: 'Mobile Animation Throttling',
    status: '✅ IMPLEMENTED',
    hooks: ['useIsMobile', 'usePrefersReducedMotion'],
    components: ['AnimatedOrbsOptimized.jsx', 'TiltCardOptimized.jsx'],
    usage: `
      import { useIsMobile, usePrefersReducedMotion } from './hooks/useMediaQuery';
      
      const MyComponent = () => {
        const isMobile = useIsMobile(768); // Custom breakpoint
        const prefersReduced = usePrefersReducedMotion();
        
        if (isMobile || prefersReduced) {
          return <SimpleFadeAnimation />;  // Light animation
        }
        return <ComplexSpringAnimation />; // Full animation
      };
    `,
    benefits: [
      'Disables heavy 3D transforms on mobile',
      'Respects system-level accessibility settings',
      'Reduces CPU/GPU load on low-end devices',
    ],
  },

  BUNDLE_SIZE_REDUCTION: {
    title: 'Tree-Shaking & Bundle Analysis',
    status: '📊 ANALYSIS NEEDED',
    steps: [
      '1. Run: npm run build -- --analyze',
      '2. Check build/report.html for large modules',
      '3. Identify unused Framer Motion imports',
      '4. Use named imports instead of default imports',
    ],
    optimization: `
      // ❌ BAD: Imports entire Framer Motion
      import * as framer from 'framer-motion';
      
      // ✅ GOOD: Tree-shakeable named imports
      import { motion, AnimatePresence } from 'framer-motion';
    `,
    unused_imports: [
      'Check for unused lucide-react icons - import only what you use',
      'Remove unused CSS classes in Tailwind config (via content purge)',
    ],
  },

  EXTERNAL_SERVICES_OPTIMIZATION: {
    title: 'EmailJS & Google Fonts Optimization',
    status: '✅ IMPLEMENTED',
    files: ['src/config/externalServicesConfig.js'],
    features: [
      'Async EmailJS initialization',
      'Non-blocking Google Fonts loading',
      'DNS prefetch for faster service resolution',
      'Font display: swap prevents layout shift',
    ],
    usage: `
      // In your App.js initialization:
      import {
        loadOptimizedGoogleFonts,
        setupDNSPrefetch,
        initEmailJS
      } from './config/externalServicesConfig';
      
      useEffect(() => {
        loadOptimizedGoogleFonts();
        setupDNSPrefetch();
        initEmailJS().then(emailjs => {
          // EmailJS is ready to use
        });
      }, []);
    `,
  },

  CSS_OPTIMIZATION: {
    title: 'Tailwind CSS & GPU Acceleration',
    status: '✅ CONFIGURED',
    tailwind_config: 'tailwind.config.js',
    optimizations: [
      {
        name: 'Content purging',
        setting: 'content: ["./src/**/*.{js,jsx,ts,tsx}"]',
        benefit: 'Removes unused CSS classes from production build',
      },
      {
        name: 'GPU acceleration for animations',
        css: 'will-change: transform; transform: translateZ(0);',
        usage: 'Add to frequently animated elements',
      },
      {
        name: 'Enable JIT (Just-In-Time)',
        note: 'Already enabled by default in Tailwind v3+',
      },
    ],
    example: `
      // Add will-change to animated elements:
      <motion.div className="will-change-transform">
        {/* Content */}
      </motion.div>
    `,
  },

  MEDIA_QUERY_HOOKS: {
    title: 'Custom Hooks for Responsive Behavior',
    status: '✅ IMPLEMENTED',
    hooks: {
      useIsMobile: {
        description: 'Returns true if screen < 768px',
        usage: 'const isMobile = useIsMobile();',
      },
      useMediaQuery: {
        description: 'Custom media query matching',
        usage: 'const isTablet = useMediaQuery("(max-width: 1024px)");',
      },
      usePrefersReducedMotion: {
        description: 'Detects accessibility setting',
        usage: 'const prefersReduced = usePrefersReducedMotion();',
      },
      useSlowConnection: {
        description: 'Detects 2G/3G connections',
        usage: 'const isSlow = useSlowConnection();',
      },
    },
  },

  PERFORMANCE_UTILITIES: {
    title: 'Utility Functions for Optimization',
    status: '✅ IMPLEMENTED',
    file: 'src/utils/performanceOptimization.js',
    functions: [
      {
        name: 'debounce(func, wait)',
        use: 'Prevent excessive function calls on scroll/resize',
      },
      {
        name: 'throttle(func, limit)',
        use: 'Limit function execution frequency',
      },
      {
        name: 'preloadResource(type, href)',
        use: 'Preload critical images, fonts, scripts',
      },
      {
        name: 'prefetchResource(href)',
        use: 'Prefetch resources for future navigation',
      },
      {
        name: 'isAboveFold(element)',
        use: 'Check if element is visible without scrolling',
      },
    ],
  },
};

/**
 * Build commands for performance analysis
 */
export const BUILD_COMMANDS = {
  analyze_bundle: 'npm run build -- --analyze',
  check_performance: 'npm run build && npx lighthouse https://localhost:3000',
  measure_metrics: 'npm run build && npm run start -- --mode=profile',
};

/**
 * Recommended Lighthouse targets
 */
export const LIGHTHOUSE_TARGETS = {
  performance: '>= 90',
  accessibility: '>= 95',
  best_practices: '>= 90',
  seo: '>= 95',
  first_contentful_paint: '< 1.8s',
  largest_contentful_paint: '< 2.5s',
  cumulative_layout_shift: '< 0.1',
  first_input_delay: '< 100ms',
};
