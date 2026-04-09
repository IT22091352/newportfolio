import { motion } from 'framer-motion';

const blobVariants = {
  animate: (custom) => ({
    x: custom.x,
    y: custom.y,
    scale: custom.scale,
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut'
    }
  })
};

const PremiumBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.10),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.28),transparent_24%)]" />
      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
        variants={blobVariants}
        animate="animate"
        custom={{ x: [0, 30, -18, 0], y: [0, 12, -16, 0], scale: 1, duration: 22 }}
      />
      <motion.div
        className="absolute right-[-5rem] top-24 h-96 w-96 rounded-full bg-sky-500/12 blur-3xl"
        variants={blobVariants}
        animate="animate"
        custom={{ x: [0, -24, 16, 0], y: [0, 20, -10, 0], scale: 1, duration: 28 }}
      />
      <motion.div
        className="absolute bottom-[-7rem] left-1/3 h-80 w-80 rounded-full bg-slate-500/10 blur-3xl"
        variants={blobVariants}
        animate="animate"
        custom={{ x: [0, 14, -12, 0], y: [0, -18, 8, 0], scale: 1, duration: 24 }}
      />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
    </div>
  );
};

export default PremiumBackground;
