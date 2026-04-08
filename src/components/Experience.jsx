import { motion } from 'framer-motion';
import { useState } from 'react';
import { revealUp, sectionStagger } from '../utils/motionVariants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const experiences = {
    work: [
      {
        title: "Software Engineer Intern",
        company: "Apps Technologies",
        duration: "January 2025 - Present",
        description: "Working on developing web applications using modern technologies such as PHP Laravel and MERN stacks.",
        technologies: ["React", "Node.js", "Java", "MongoDB", "Express", "PHP", "Laravel"]
      }
    ],
    education: [
      {
        title: "Bachelor of Information Technology",
        company: "Sri Lanka Institute of Information Technology (SLIIT)",
        duration: "2022 - Present",
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
    <section id="experience" className="section-padding bg-slate-50/60 dark:bg-slate-900/40 dark:text-white">
      <div className="container">
        <motion.h2 
          className="section-heading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Education & Certifications
        </motion.h2>
        <motion.p
          className="section-subheading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Milestones in academic growth, certifications, and practical engineering experience.
        </motion.p>
        
        <div className="mb-10 mt-10 flex justify-center md:mb-12">
          <div className="inline-flex rounded-full bg-slate-100 p-1 dark:bg-slate-800">
            <button
              onClick={() => setActiveTab('education')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-6 sm:text-sm ${
                activeTab === 'education'
                  ? 'bg-slate-900 text-white shadow-md dark:bg-slate-100 dark:text-slate-900'
                  : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-6 sm:text-sm ${
                activeTab === 'work'
                  ? 'bg-slate-900 text-white shadow-md dark:bg-slate-100 dark:text-slate-900'
                  : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-6 sm:text-sm ${
                activeTab === 'certifications'
                  ? 'bg-slate-900 text-white shadow-md dark:bg-slate-100 dark:text-slate-900'
                  : 'text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="relative"
            variants={sectionStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 h-full w-1 bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            {experiences[activeTab].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative mb-16 md:mb-8 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
                }`}
                variants={revealUp}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 transform -translate-y-1/3 ${
                  index % 2 === 0 ? 'md:translate-x-0' : 'md:-translate-x-full'
                }`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-cyan-700 dark:border-slate-900">
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
                
                <div className={`glass-panel rounded-2xl p-5 sm:p-6 ${
                  index % 2 === 0 ? 'ml-12 md:ml-0' : 'ml-12'
                }`}>
                  <span className="mb-2 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                    {item.duration}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">{item.title}</h3>
                  <h4 className="mb-3 text-base text-cyan-700 dark:text-cyan-300 sm:text-lg">{item.company}</h4>
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">{item.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
