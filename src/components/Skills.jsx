import { motion } from 'framer-motion';
import { popIn, revealUp, sectionStagger } from '../utils/motionVariants';

const Skills = () => {
  const skills = [
    { 
      category: 'Programming Languages',
      items: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Kotlin', level: 75 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      category: 'Other Skills',
      items: [
        { name: 'Creativity', level: 85 },
        { name: 'Adaptabilit', level: 75 },
        { name: 'communication', level: 80 },
        { name: 'Resilience', level: 70 },
        { name: 'Teamwork', level: 75 },
        { name: 'Problem Solving', level: 85 },
      ]
    }
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
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={popIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-panel rounded-2xl p-5 sm:p-6"
            >
              <motion.h3 
                className="card-title mb-6 border-b border-slate-200 pb-3 text-center text-slate-900 dark:border-slate-700 dark:text-slate-100"
                variants={revealUp}
              >
                {skillGroup.category}
              </motion.h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div key={index} variants={revealUp}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 sm:text-base">{skill.name}</span>
                      <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 sm:text-base">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <motion.div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-700 to-sky-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center md:mt-14"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="card-title mb-4 text-slate-900 dark:text-slate-100">Other Technologies and Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['AI/ML', 'Visual Studio Code', 'UI/UX Design', 'Android Studio', 'REST APIs', 'Material UI', 'Figma', 'Vercel', 'Git/GitHub', 'Netlify', 'MySQL'].map((tech, index) => (
              <motion.span 
                key={index}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-700 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:text-sm"
                variants={revealUp}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
