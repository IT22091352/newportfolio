import { motion } from 'framer-motion';

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
          <h3 className="text-xl font-bold mb-4">Other Technologies & tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['AI/ML', 'Visual Studio Code', 'UI/UX Design', 'Android Studio', 'REST APIs', 'Material UI', 'Figma', 'Vercel', 'Git/GitHub', 'Netlify', 'MySQL'].map((tech, index) => (
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
