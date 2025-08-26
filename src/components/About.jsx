import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl blur opacity-20"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-custom-lg">
                <img 
                  src="/assets/pictures/about1.jpg"
                  alt="Professional portrait" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-900">
                <span className="border-b-4 border-primary-500 pb-1">Professional Journey</span>
              </h3>
              
              <p className="text-dark-700 leading-relaxed">
                I'm a BSc (Hons) Information Technology student at SLIIT with expertise in Java, JavaScript, Spring boot, MERN stack, and Tailwind CSS. Eager to secure a software engineering internship, contribute to meaningful projects, and learn from a dynamic team.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-dark-900">Highlights:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-dark-700">4th Year Undergraduate at SLIIT</li>
                  <li className="text-dark-700">Specialized in Information Technology</li>
                  <li className="text-dark-700">Worked as Intern Software Engineer at Apps Technologies</li>
                  <li className="text-dark-700">Completed multiple certifications including Python and Web Design from University of Moratuwa</li>
                </ul>
              </div>
            </div>
            
            <motion.a
              href="./assets/projects/certificate/Chathuka Dilakshana Resume.pdf"
              download
              className="btn-primary mt-8 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
