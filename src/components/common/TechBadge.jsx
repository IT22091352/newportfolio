import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ icon, name, color, delay = 0, subtitle }) => {
  return (
    <motion.div
      className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${color}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 20px rgba(34, 211, 238, 0.12)'
      }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-cyan-100">{icon}</span>
      <span className="flex-1">
        <span className="block text-sm font-semibold text-slate-50">{name}</span>
        {subtitle && <span className="mt-1 block text-xs leading-5 text-slate-300">{subtitle}</span>}
      </span>
    </motion.div>
  );
};

export default TechBadge;
