/**
 * Performance optimization utilities
 * Helper functions for bundle analysis and optimization
 */

/**
 * Debounce function to prevent excessive re-renders
 * Useful for event handlers like resize, scroll, etc.
 */
export const debounce = (func, wait = 200) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit execution frequency
 * Useful for scroll and resize events
 */
export const throttle = (func, limit = 200) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Preload external resources for better performance
 * @param type - 'script', 'style', 'font', 'image'
 * @param href - URL of the resource
 */
export const preloadResource = (type, href) => {
  const link = document.createElement('link');
  
  if (type === 'style') {
    link.rel = 'stylesheet';
    link.href = href;
  } else if (type === 'script') {
    link.rel = 'preload';
    link.as = 'script';
    link.href = href;
  } else if (type === 'font') {
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = href;
  } else if (type === 'image') {
    link.rel = 'preload';
    link.as = 'image';
    link.href = href;
  }

  document.head.appendChild(link);
};

/**
 * Prefetch resource for future navigation
 * Useful for next pages or sections
 */
export const prefetchResource = (href) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

/**
 * Optimize Google Fonts loading
 * Use display=swap to prevent layout shift
 */
export const loadGoogleFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

/**
 * Check if resource is critical (above the fold)
 * Use for conditional loading of animations, images, etc.
 */
export const isAboveFold = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};

/**
 * Intersection Observer helper for infinite scroll / lazy load
 * @param callback - Function to call when element enters viewport
 * @param options - IntersectionObserver options
 */
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};
