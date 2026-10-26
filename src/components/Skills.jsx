import { motion } from 'framer-motion';
import { revealUp } from '../utils/motionVariants';
import MarqueeRow from './MarqueeRow';
import { AnimeHeading, spotlightHandlers, useAnimeReveal } from '../hooks/useAnime';

const skillCategories = [
  { title: 'Languages', icon: '</>', description: 'Core languages across backend, frontend and data work.', items: ['Java', 'PHP', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3', 'TypeScript'] },
  { title: 'Frameworks & Libraries', icon: '{ }', description: 'Frameworks used to ship full-stack products.', items: ['Laravel', 'React.js', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS', 'Bootstrap 5'] },
  { title: 'Databases', icon: 'DB', description: 'Relational and document stores with solid schema design.', items: ['MySQL', 'MongoDB', 'Supabase'] },
  { title: 'Tools & Practices', icon: '⚡', description: 'Workflow, quality and delivery practices.', items: ['Git/GitHub', 'Postman', 'Prisma ORM', 'JWT Auth', 'SDLC', 'Agile / Sprints', 'Code Reviews', 'CI/CD (Vercel)', 'QA & Regression Testing'] },
  { title: 'Specialized Domains', icon: '🧠', description: 'Areas of deeper interest and project work.', items: ['ERP Systems', 'Machine Learning', 'Deep Learning', 'UI/UX Design', 'AI Integration'] },
];

const marqueeTech = [
  { name: 'Laravel', group: 'Backend', icon: 'L' },
  { name: 'React', group: 'UI Layer', icon: 'R' },
  { name: 'Next.js', group: 'Full-Stack', icon: 'N' },
  { name: 'Node.js', group: 'Runtime', icon: 'JS' },
  { name: 'TypeScript', group: 'Language', icon: 'TS' },
  { name: 'Prisma', group: 'ORM', icon: 'P' },
  { name: 'MySQL', group: 'Database', icon: 'DB' },
  { name: 'MongoDB', group: 'Database', icon: 'M' },
  { name: 'TensorFlow', group: 'Deep Learning', icon: 'TF' },
  { name: 'XGBoost', group: 'ML', icon: 'XG' },
  { name: 'Tailwind', group: 'Styling', icon: 'TW' },
  { name: 'Anime.js', group: 'Motion', icon: 'AJ' },
];

const Skills = () => {
  const gridRef = useAnimeReveal('[data-anime]', { y: 40, delay: 90 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#050b1c]">
      <div className="uv-aurora right-0 top-10 h-72 w-72 bg-sky-600 opacity-20" />
      <div className="container relative">
        <AnimeHeading text="Technical Expertise" className="section-heading text-white" />
        <motion.p
          className="section-subheading text-slate-300"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          A full-stack toolkit across ERP, web, data and AI/ML engineering.
        </motion.p>

        <div ref={gridRef} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((group, i) => (
            <div
              key={group.title}
              data-anime
              className={`uv-card p-6 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
              style={{ opacity: 0 }}
              {...spotlightHandlers}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-300">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <p className="text-xs text-slate-400">{group.description}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((s) => (
                  <span key={s} className="uv-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-14 space-y-4 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between px-2 text-sm uppercase tracking-[0.2em] text-slate-400">
            <span>Technology Flow</span>
            <span>Infinite marquee</span>
          </div>
          <MarqueeRow items={marqueeTech} />
          <MarqueeRow items={marqueeTech.slice().reverse()} reverse />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
