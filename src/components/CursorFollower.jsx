import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const CursorFollower = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { stiffness: 120, damping: 20, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (!isFinePointer) {
      return undefined;
    }

    const handleMove = (event) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };

    window.addEventListener('pointermove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-9 w-9 rounded-full border border-cyan-300/25 bg-cyan-300/10 blur-[1px] shadow-[0_0_30px_rgba(34,211,238,0.25)] md:block"
      style={{ x: springX, y: springY }}
    />
  );
};

export default CursorFollower;
