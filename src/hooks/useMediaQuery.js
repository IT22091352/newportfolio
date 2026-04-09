import { useEffect, useState } from 'react';

/**
 * Custom hook to detect mobile/tablet screens
 * Returns true if screen width is below breakpoint (default 768px)
 * @param breakpoint - Width in pixels (default: 768 for md breakpoint)
 */
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Debounce resize handler
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
};

/**
 * Custom hook for media query matching
 * @param query - CSS media query string (e.g., '(max-width: 768px)')
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    const handleChange = (e) => {
      setMatches(e.matches);
    };

    // Modern browsers support addEventListener
    try {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (e) {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
};

/**
 * Detects if user prefers reduced motion
 * Respects system accessibility settings
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    try {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (e) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

/**
 * Custom hook to detect if network connection is slow
 * Returns true for 2G/slow 3G connections
 */
export const useSlowConnection = () => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Check if navigator.connection is available (Chrome/Edge)
    const connection = navigator?.connection || navigator?.mozConnection || navigator?.webkitConnection;
    
    if (connection) {
      const isEffectivelySlowType = ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
      const isSlowSaveDataEnabled = connection.saveData === true;
      
      setIsSlowConnection(isEffectivelySlowType || isSlowSaveDataEnabled);

      const handleChangeEvent = () => {
        const newSlowType = ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
        const newSaveData = connection.saveData === true;
        setIsSlowConnection(newSlowType || newSaveData);
      };

      connection.addEventListener('change', handleChangeEvent);
      return () => connection.removeEventListener('change', handleChangeEvent);
    }
  }, []);

  return isSlowConnection;
};
