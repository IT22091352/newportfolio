import { motion } from 'framer-motion';

const AnimatedOrbs = () => {
  const orbVariant = (duration, delay = 0) => ({
    animate: {
      x: [0, 50, -30, 20, 0],
      y: [0, -40, 20, -35, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
    },
    transition: {
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
      delay,
    },
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cyan Orb - Top Left */}
      <motion.div
        className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-600/40 to-cyan-400/20 blur-3xl"
        {...orbVariant(15, 0)}
      />

      {/* Purple Orb - Bottom Right */}
      <motion.div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-l from-purple-600/30 to-pink-500/20 blur-3xl"
        {...orbVariant(18, 2)}
      />

      {/* Cyan Accent Orb - Center-Right */}
      <motion.div
        className="absolute -right-64 top-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-500/10 blur-3xl"
        {...orbVariant(20, 1)}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(34,211,238,.05)_25%,rgba(34,211,238,.05)_26%,transparent_27%,transparent_74%,rgba(34,211,238,.05)_75%,rgba(34,211,238,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
    </div>
  );
};

export default AnimatedOrbs;
