/**
 * Configuration for External Services Optimization
 * Loads EmailJS and Google Fonts with non-blocking async patterns
 */

// EmailJS Configuration - Load asynchronously
export const initEmailJS = async () => {
  try {
    // Dynamically import EmailJS only when needed
    const emailjs = await import('@emailjs/browser');

    emailjs.init({
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
    });

    return emailjs;
  } catch (error) {
    console.warn('EmailJS initialization failed:', error);
    return null;
  }
};

/**
 * Load Google Fonts with font-display: swap
 * Prevents layout shift and improves perceived performance
 */
export const loadOptimizedGoogleFonts = () => {
  if (document.querySelector('link[href*="fonts.googleapis.com"]')) {
    return; // Already loaded
  }

  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://fonts.googleapis.com';
  document.head.appendChild(link);

  const link2 = document.createElement('link');
  link2.rel = 'preconnect';
  link2.href = 'https://fonts.gstatic.com';
  link2.crossOrigin = 'anonymous';
  document.head.appendChild(link2);

  const link3 = document.createElement('link');
  link3.href =
    'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap';
  link3.rel = 'stylesheet';
  link3.media = 'print';
  link3.onload = function () {
    this.media = 'all';
  };
  document.head.appendChild(link3);
};

/**
 * Optimize image CDN URLs to WebP with fallback
 * Example: Convert images to WebP format for better compression
 */
export const getOptimizedImageUrl = (url, options = {}) => {
  const {
    quality = '80', // 1-100
    width, // Image width for responsive optimization
  } = options;

  const isRemoteUrl = /^https?:\/\//i.test(url);

  // If URL is from Unsplash, use their built-in optimization
  if (url.includes('unsplash.com') && isRemoteUrl) {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.set('auto', 'format');
    parsedUrl.searchParams.set('fit', 'crop');
    parsedUrl.searchParams.set('q', quality);

    if (width) {
      parsedUrl.searchParams.set('w', String(width));
    }

    return parsedUrl.toString();
  }

  // If URL is from istockphoto, keep as-is (already optimized)
  if (url.includes('istockphoto.com') || url.includes('istock')) {
    return url;
  }

  // For local images, return as-is
  return url;
};

/**
 * Resolve a local asset path to a CDN URL when one is configured.
 * Supports Cloudinary or ImageKit style base URLs provided through env vars.
 */
export const getCdnImageUrl = (path) => {
  const cdnBaseUrl =
    process.env.REACT_APP_IMAGE_CDN_BASE_URL ||
    process.env.REACT_APP_CLOUDINARY_BASE_URL ||
    process.env.REACT_APP_IMAGEKIT_BASE_URL;

  if (!cdnBaseUrl || /^https?:\/\//i.test(path)) {
    return path;
  }

  return `${cdnBaseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};

/**
 * Preload critical resources
 * Call this in app initialization or on route change
 */
export const preloadCriticalResources = () => {
  // Preload Google Fonts
  const fontPreconnect = document.createElement('link');
  fontPreconnect.rel = 'preconnect';
  fontPreconnect.href = 'https://fonts.gstatic.com';
  fontPreconnect.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreconnect);
};

/**
 * Enable DNS prefetch for external services
 */
export const setupDNSPrefetch = () => {
  const services = [
    'https://api.emailjs.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  services.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};
