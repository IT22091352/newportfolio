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
  loading,
  fetchPriority,
  sizes,
  srcSet,
}) => {
  const resolvedLoading = loading || (priority ? 'eager' : 'lazy');
  const resolvedFetchPriority = fetchPriority || (priority ? 'high' : 'low');

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={resolvedLoading}
      fetchPriority={resolvedFetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      decoding="async"
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
      onLoad={(e) => {
        e.target.style.transition = 'opacity 0.3s ease-in-out';
        e.target.style.opacity = '1';
      }}
    />
  );
};

export default OptimizedResponsiveImage;
