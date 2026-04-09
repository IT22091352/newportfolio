import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const TextReveal = ({ children, className = '', as = 'h1' }) => {
  const Tag = motion[as] || motion.h1;
  const words = String(children).split(' ');

  return (
    <Tag className={className} variants={containerVariants} initial="hidden" animate="show">
      {words.map((word, index) => (
        <motion.span key={`${word}-${index}`} className="inline-block mr-[0.28em] overflow-hidden align-bottom" variants={wordVariants}>
          <span className="inline-block">{word}</span>
        </motion.span>
      ))}
    </Tag>
  );
};

export default TextReveal;
