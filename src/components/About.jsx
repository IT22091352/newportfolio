import { motion } from 'framer-motion';
import { revealLeft, revealRight, revealUp, sectionStagger } from '../utils/motionVariants';
import MagneticButton from './MagneticButton';
import OptimizedResponsiveImage from './OptimizedResponsiveImage';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white/90 dark:bg-slate-950/50">
      <div className="container">
        <motion.h2 
          className="section-heading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subheading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          A focused engineer with a product mindset, balancing robust architecture with polished interface craft.
        </motion.p>
        
        <motion.div
          className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="glass-panel p-3 sm:p-4"
            variants={revealLeft}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-slate-200/80 to-cyan-200/60 blur-xl dark:from-slate-700/40 dark:to-cyan-900/40"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-custom-lg">
                <OptimizedResponsiveImage
                  src="/assets/pictures/profilePIC1.JPG"
                  alt="Professional portrait"
                  width={720}
                  height={900}
                  priority={false}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-6 sm:p-8 md:p-9"
            variants={revealRight}
          >
            <div className="space-y-6">
              <h3 className="card-title text-slate-900 dark:text-slate-100">
                <span className="border-b-2 border-cyan-600 pb-1">Professional Journey</span>
              </h3>
              
              <p className="body-copy text-slate-700 dark:text-slate-300">
                I'm a BSc (Hons) Information Technology student at SLIIT with expertise in Java, JavaScript, Spring boot, MERN stack, and Tailwind CSS. Eager to secure a software engineering internship, contribute to meaningful projects, and learn from a dynamic team.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Highlights</h4>
                <ul className="space-y-2.5 pl-5">
                  <li className="list-disc text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">4th Year Undergraduate at SLIIT</li>
                  <li className="list-disc text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">Specialized in Information Technology</li>
                  <li className="list-disc text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">Worked as Intern Software Engineer at Apps Technologies</li>
                  <li className="list-disc text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">Completed certifications including Python and Web Design at University of Moratuwa</li>
                </ul>
              </div>
            </div>
            
            <MagneticButton className="mt-8 inline-flex">
              <motion.a
                href="/assets/projects/certificate/Chathuka Dilakshana Resume.pdf"
                download
                className="btn-primary inline-flex items-center text-sm sm:text-base"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </motion.a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
