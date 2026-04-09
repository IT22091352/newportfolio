import { motion } from 'framer-motion';

const FilterBar = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          className="relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated Background Highlight */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/20 rounded-lg"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              activeFilter === category
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{ originX: 0 }}
          />

          {/* Border Highlight */}
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-cyan-400"
            initial={{ opacity: 0 }}
            animate={
              activeFilter === category
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: 'none' }}
          />

          {/* Text */}
          <motion.span
            className="relative z-10 block"
            initial={{ color: 'rgba(226, 232, 240, 0.5)' }}
            animate={
              activeFilter === category
                ? { color: 'rgba(34, 211, 238, 1)' }
                : { color: 'rgba(226, 232, 240, 0.5)' }
            }
            transition={{ duration: 0.3 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.span>

          {/* Subtle Glow on Active */}
          {activeFilter === category && (
            <motion.div
              className="absolute inset-0 bg-cyan-500/10 blur-lg rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ pointerEvents: 'none' }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FilterBar;
