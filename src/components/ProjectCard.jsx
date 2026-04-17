import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import MagneticButton from './MagneticButton';
import OptimizedResponsiveImage from './OptimizedResponsiveImage';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <motion.article
      ref={cardRef}
      layout
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 h-full flex flex-col ${
        project.featured
          ? 'md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2'
          : 'md:col-span-1 lg:col-span-2'
      }`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.08,
            ease: 'easeOut',
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      whileHover={{ y: -8 }}
    >
      {/* Spotlight Effect */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none inset-0 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/20 blur-3xl"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      )}

      {/* Glowing Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-cyan-400/0 pointer-events-none"
        animate={{
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.3)' : 'rgba(34, 211, 238, 0)',
          boxShadow: isHovered
            ? '0 0 30px rgba(34, 211, 238, 0.2), inset 0 1px 1px rgba(34, 211, 238, 0.1)'
            : '0 0 0px rgba(34, 211, 238, 0)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          project.featured
            ? 'from-cyan-400/5 via-transparent to-slate-50/2'
            : 'from-white/3 via-transparent to-slate-50/2'
        }`}
      />

      <div className={`relative grid h-full ${project.featured ? 'grid-rows-[1.2fr_0.8fr]' : 'grid-rows-[1fr_auto]'}`}>
        {/* Image Container with Interactive Buttons Overlay */}
        <motion.div
          className={`relative overflow-hidden group/image aspect-[16/10] sm:aspect-[16/9] md:aspect-auto ${project.featured ? 'md:min-h-[300px]' : 'md:min-h-[200px]'}`}
          whileHover={isHovered ? { y: -4 } : {}}
        >
          <OptimizedResponsiveImage
            src={project.image}
            alt={project.title}
            width={960}
            height={540}
            priority={index < 2 || project.title === 'Portfolio Website'}
            className="block h-full w-full object-cover"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />

          {/* Category & Featured Badge */}
          <motion.div
            className="absolute left-4 top-4 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md font-medium">
              {project.category}
            </span>
            {project.featured && (
              <motion.span
                className="rounded-full bg-gradient-to-r from-cyan-500/40 to-blue-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-md border border-cyan-400/40"
                animate={{ boxShadow: ['0 0 8px rgba(34, 211, 238, 0.3)', '0 0 16px rgba(34, 211, 238, 0.5)', '0 0 8px rgba(34, 211, 238, 0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Featured
              </motion.span>
            )}
          </motion.div>

          {/* Overlay Action Buttons - Appear on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-4 right-4 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Live Preview Button */}
                <MagneticButton strength={15}>
                  <motion.a
                    href={project.demoLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 backdrop-blur-md border border-cyan-400/50 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="View Live Demo"
                  >
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.a>
                </MagneticButton>

                {/* GitHub Button */}
                <MagneticButton strength={15}>
                  <motion.a
                    href={project.githubLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 hover:border-cyan-400/60 hover:bg-white/15 transition-all shadow-lg shadow-white/20 hover:shadow-cyan-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="View on GitHub"
                  >
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </MagneticButton>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content & Info */}
        <motion.div className={`relative flex flex-col p-5 sm:p-6 ${project.featured ? 'lg:p-7' : ''} flex-1`}>
          <div className="flex-1">
            <motion.h3 className="mb-2 text-lg font-bold text-white sm:text-xl lg:text-2xl line-clamp-2">
              {project.title}
            </motion.h3>
            <motion.p className="text-xs leading-relaxed text-slate-300 sm:text-sm line-clamp-2">
              {project.description}
            </motion.p>

            {/* Expandable Full Description */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 overflow-hidden"
                >
                  <p className="text-xs leading-relaxed text-slate-400">
                    {project.fullDescription || project.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tech Stack Badges with Neon Borders */}
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.technologies
              .slice(0, project.featured ? 6 : 3)
              .map((tech, idx) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1 text-[10px] font-medium text-cyan-200 backdrop-blur-md hover:border-cyan-300/60 hover:bg-cyan-400/10 transition-all duration-200"
                  whileHover={{ scale: 1.08, boxShadow: '0 0 12px rgba(34, 211, 238, 0.3)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + idx * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            {project.technologies.length > (project.featured ? 6 : 3) && (
              <span className="text-[10px] text-slate-400 self-center">
                +{project.technologies.length - (project.featured ? 6 : 3)} tech
              </span>
            )}
          </motion.div>

          {/* Learn More & Action Buttons */}
          <motion.div
            className="mt-4 flex gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 px-3 py-2 rounded-lg text-xs font-semibold text-cyan-300 border border-cyan-400/40 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-300/60 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
