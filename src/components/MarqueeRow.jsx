import { motion } from 'framer-motion';

const MarqueeRow = ({ items = [], reverse = false }) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max items-center gap-4 py-3"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2.5 backdrop-blur-xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-base text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
              {item.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-100">{item.name}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.group}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeRow;
