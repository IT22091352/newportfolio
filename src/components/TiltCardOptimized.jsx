import { motion } from 'framer-motion';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMediaQuery';

/**
 * Optimized TiltCard component
 * Disables 3D tilt effects on mobile devices
 * Respects prefers-reduced-motion preference
 */
const TiltCardOptimized = ({ children, className = '' }) => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  // On mobile or with reduced motion preference, just use simple scale animation
  if (isMobile || prefersReducedMotion) {
    return (
      <motion.div
        className={className}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {children}
      </motion.div>
    );
  }

  // Desktop version with full 3D tilt
  const { useRef, useEffect, useState } = require('react');
  const { useMotionValue, useSpring, useTransform } = require('framer-motion');

  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [0, 300], [8, -8]), { damping: 15, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 300], [-8, 8]), { damping: 15, stiffness: 150 });

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const xValue = event.clientX - bounds.left;
    const yValue = event.clientY - bounds.top;
    x.set(xValue);
    y.set(yValue);
  };

  const handleMouseLeave = () => {
    x.set(150);
    y.set(150);
  };

  useEffect(() => {
    if (ref.current) {
      x.set(ref.current.clientWidth / 2);
      y.set(ref.current.clientHeight / 2);
    }
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={`perspective ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: 50 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCardOptimized;
