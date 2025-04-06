import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const experiences = {
    work: [
      {
        title: "Software Engineer Intern",
        company: "Apps Technologies",
        duration: "January 2025 - Present",
        description: "Working on developing web and mobile applications using modern technologies such as React, Node.js, and Java.",
        technologies: ["React", "Node.js", "Java", "MongoDB", "Express"]
      }
    ],
    education: [
      {
        title: "Bachelor of Information Technology",
        company: "Sri Lanka Institute of Information Technology (SLIIT)",
        duration: "Present",
        description: "Focusing on software engineering, web development, and mobile application development.",
        technologies: ["Software Engineering", "Web Development", "Mobile Development"]
      },
      {
        title: "Diploma in English",
        company: "Britishway English Academy",
        duration: "2022 - Present",
        description: "Enhancing English language skills for professional communication.",
        technologies: ["Professional Communication", "Business English", "Academic Writing"]
      },
      {
        title: "A/L Maths Stream",
        company: "ST/ALOYSIUS COLLEGE",
        duration: "2022",
        description: "Completed advanced level education with focus on mathematics and sciences.",
        technologies: ["Mathematics", "Physics", "Chemistry"]
      }
    ],
    certifications: [
      {
        title: "Python for Beginners",
        company: "University of Moratuwa",
        duration: "2023",
        description: "Fundamentals of Python programming language and its applications.",
        technologies: ["Python", "Programming Fundamentals", "Data Structures"]
      },
      {
        title: "Web Design for Beginners",
        company: "University of Moratuwa",
        duration: "2023",
        description: "Introduction to web design concepts, HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
      }
    ]
  };

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-dark-800 dark:text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-heading dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-dark-700 rounded-lg">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'work'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'certifications'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-dark-600"></div>
            
            {/* Timeline items */}
            {experiences[activeTab].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative mb-16 md:mb-8 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 transform -translate-y-1/3 ${
                  index % 2 === 0 ? 'md:translate-x-0' : 'md:-translate-x-full'
                }`}>
                  <div className="w-12 h-12 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 flex items-center justify-center">
                    {activeTab === 'work' ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                      </svg>
                    )}
                  </div>
                </div>
                
                <div className={`p-6 bg-white dark:bg-dark-700 rounded-lg shadow-custom ${
                  index % 2 === 0 ? 'ml-12 md:ml-0' : 'ml-12'
                }`}>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-full mb-2">
                    {item.duration}
                  </span>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white">{item.title}</h3>
                  <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-3">{item.company}</h4>
                  <p className="text-dark-700 dark:text-gray-300 mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-dark-600 text-dark-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
