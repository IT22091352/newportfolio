import { motion } from 'framer-motion';

const ShimmerButton = ({ children, className = '', isShimmer = true, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isShimmer && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={{
            x: ['0%', '200%'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
          style={{ pointerEvents: 'none' }}
        />
      )}
      <span className="relative z-10 block">{children}</span>
    </motion.button>
  );
};

export default ShimmerButton;
