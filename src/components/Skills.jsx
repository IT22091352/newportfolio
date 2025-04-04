import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { 
      category: 'Frontend',
      items: [
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 82 },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ]
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Jest/Testing', level: 85 },
        { name: 'Agile/Scrum', level: 88 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-custom p-8 border border-gray-100"
            >
              <motion.h3 
                className="text-xl font-bold mb-6 text-center text-dark-900 pb-2 border-b border-gray-200"
                variants={itemVariants}
              >
                {skillGroup.category}
              </motion.h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="text-dark-800 font-medium">{skill.name}</span>
                      <span className="text-primary-600 font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
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
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux', 'Webpack', 'Sass', 'Firebase', 'Material UI', 'Figma', 'Vercel', 'GitHub Actions', 'Netlify', 'Storybook'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-dark-700 text-sm shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
