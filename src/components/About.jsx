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
                  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
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
                I'm a passionate Full Stack Developer with over 5 years of experience building robust web applications and digital solutions. My expertise lies in crafting responsive, user-centric interfaces with React and developing scalable backend systems with Node.js.
              </p>
              
              <p className="text-dark-700 leading-relaxed">
                My journey in software development began at Carnegie Mellon University, where I earned my Bachelor's in Computer Science. Since then, I've collaborated with forward-thinking companies like Airbnb and Stripe, helping them solve complex technical challenges and deliver exceptional user experiences.
              </p>
              
              <p className="text-dark-700 leading-relaxed">
                What drives me is the opportunity to blend technical excellence with creative problem-solving. I'm constantly exploring new technologies and methodologies to enhance my craft and deliver solutions that not only meet requirements but exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                <h4 className="font-semibold text-dark-900 mb-2">Location</h4>
                <p className="text-dark-700 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  San Francisco, CA
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                <h4 className="font-semibold text-dark-900 mb-2">Email</h4>
                <p className="text-dark-700 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contact@yourname.dev
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                <h4 className="font-semibold text-dark-900 mb-2">Experience</h4>
                <p className="text-dark-700 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  5+ Years
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                <h4 className="font-semibold text-dark-900 mb-2">Education</h4>
                <p className="text-dark-700 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                  BS in Computer Science
                </p>
              </div>
            </div>
            
            <motion.a
              href={window.resumeUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
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
