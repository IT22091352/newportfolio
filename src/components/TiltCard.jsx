import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const TiltCard = ({ children, className = '' }) => {
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
      onMouseEnter={() => {}}
      whileHover={{ z: 50 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
