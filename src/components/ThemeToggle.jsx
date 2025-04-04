import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-dark-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
