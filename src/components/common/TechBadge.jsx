import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ icon, name, color, delay = 0 }) => {
  return (
    <motion.div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-opacity-10 border border-opacity-20 ${color}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
      }}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-xs font-medium">{name}</span>
    </motion.div>
  );
};

export default TechBadge;
