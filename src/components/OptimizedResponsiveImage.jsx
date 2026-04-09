/**
 * Optimized image component for production deployments
 * - Native lazy loading (defers off-screen images)
 * - Aspect ratio preservation (avoids layout shift)
 * - Async decoding (prevents blocking main thread)
 * - Vercel compatible
 */

const OptimizedResponsiveImage = ({ 
  src, 
  alt, 
  width = 480, 
  height = 480, 
  className = '',
  priority = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      // CRITICAL: lazy loading defers image load until visible in viewport
      // On Vercel, this cuts initial page load time significantly
      loading={priority ? 'eager' : 'lazy'}
      // Async decoding prevents image painting from blocking JS
      decoding="async"
      // Prevent layout shift by maintaining aspect ratio before image loads
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
      // When image finally loads, use smooth transition
      onLoadStart={(e) => {
        e.target.style.opacity = '0.7';
      }}
      onLoad={(e) => {
        e.target.style.transition = 'opacity 0.3s ease-in-out';
        e.target.style.opacity = '1';
      }}
    />
  );
};

export default OptimizedResponsiveImage;
