import { motion } from 'framer-motion';
import { popIn, revealUp, sectionStagger } from '../utils/motionVariants';
import TechBadge from './common/TechBadge';
import MarqueeRow from './MarqueeRow';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '01',
      accent: 'from-cyan-500/20 to-sky-500/5',
      description: 'Core languages used across product, backend, and mobile work.',
      items: ['Java', 'JavaScript', 'Python', 'HTML/CSS', 'Kotlin', 'PHP']
    },
    {
      title: 'Frameworks',
      icon: '02',
      accent: 'from-sky-500/20 to-cyan-500/5',
      description: 'Primary frameworks and platforms for shipping web applications.',
      items: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Spring Boot', 'Tailwind CSS']
    },
    {
      title: 'Product Skills',
      icon: '03',
      accent: 'from-slate-200/20 to-cyan-500/5',
      description: 'Soft skills and execution habits that improve delivery quality.',
      items: ['Creativity', 'Adaptability', 'Communication', 'Resilience', 'Teamwork', 'Problem Solving']
    }
  ];

  const marqueeTech = [
    { name: 'React', group: 'UI Layer', icon: 'R' },
    { name: 'Tailwind', group: 'Styling', icon: 'TW' },
    { name: 'Framer Motion', group: 'Motion', icon: 'FM' },
    { name: 'Node.js', group: 'Runtime', icon: 'N' },
    { name: 'Express', group: 'API', icon: 'EX' },
    { name: 'MongoDB', group: 'Database', icon: 'M' },
    { name: 'Spring Boot', group: 'Backend', icon: 'SB' },
    { name: 'Kotlin', group: 'Mobile', icon: 'K' },
    { name: 'Java', group: 'Core', icon: 'J' },
    { name: 'Figma', group: 'Design', icon: 'FG' }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-100/70 dark:bg-slate-900/45">
      <div className="container">
        <motion.h2 
          className="section-heading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          className="section-subheading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          A balanced stack across frontend, backend, and product execution skills.
        </motion.p>
        
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={popIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={`glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6 ${skillGroup.accent}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <TechBadge
                icon={skillGroup.icon}
                name={skillGroup.title}
                color="border-cyan-300/15 bg-slate-950/50 text-slate-50"
                subtitle={skillGroup.description}
                delay={groupIndex * 0.08}
              />

              <div className="mt-6 flex flex-wrap gap-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-slate-100 backdrop-blur-md"
                    variants={revealUp}
                    transition={{ delay: index * 0.03 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12 space-y-4 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_0_80px_rgba(15,23,42,0.15)] backdrop-blur-2xl md:mt-14"
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
