import { useState, forwardRef } from 'react';

/**
 * Optimized Image component with lazy loading and WebP support
 * Falls back to JPG on browsers that don't support WebP
 * @param src - Base image path (without extension)
 * @param alt - Alt text for accessibility
 * @param className - Tailwind classes
 * @param priority - Load immediately if true (for above-the-fold images)
 */
const OptimizedImage = forwardRef(
  ({ src, alt, className, priority = false, webpSrc, jpgSrc, ...props }, ref) => {
    const [imageSrc, setImageSrc] = useState(priority ? (webpSrc || src) : null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      // Fallback to JPG if WebP fails
      if (imageSrc?.includes('.webp')) {
        setImageSrc(jpgSrc || src.replace('.webp', '.jpg'));
      }
    };

    return (
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          ref={ref}
          src={jpgSrc || src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      </picture>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
