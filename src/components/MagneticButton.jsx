import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MagneticButton = ({ children, className = '', strength = 22, disabled = false, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 18, mass: 0.18 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const glow = useTransform(springX, [-strength, 0, strength], [-6, 0, 6]);

  const handleMouseMove = (event) => {
    if (!ref.current || disabled) {
      return;
    }

    const bounds = ref.current.getBoundingClientRect();
    const nextX = event.clientX - (bounds.left + bounds.width / 2);
    const nextY = event.clientY - (bounds.top + bounds.height / 2);

    x.set(nextX * 0.28);
    y.set(nextY * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, filter: glow ? 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.12))' : 'none' }}
      whileHover={{ scale: disabled ? 1 : 1.04 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <span {...props}>
        {children}
      </span>
    </motion.span>
  );
};

export default MagneticButton;
