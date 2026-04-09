import { motion } from 'framer-motion';

const GhostButton = ({ children, className = '', onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative group border border-white/30 px-auto py-3 rounded-lg font-medium transition-all duration-300 ${className}`}
      whileHover={{
        borderColor: 'rgba(34, 211, 238, 0.5)',
        backgroundColor: 'rgba(34, 211, 238, 0.05)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300"
        layoutId="ghostButtonBg"
      />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
};

export default GhostButton;
