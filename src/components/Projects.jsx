import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'Mobile Gaming App',
      description: 'Developed an interactive Android gaming app using Kotlin, focusing on delivering smooth gameplay and a modern UI with view-binding.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      technologies: ['Android Studio', 'Kotlin', 'UI/UX Design', 'View Binding'],
      demoLink: 'https://www.linkedin.com/posts/chathuka-dilakshana-006315284_mobileapp-androiddev-kotlin-activity-7206671989325848576-pWmX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUaFsYBrXMHT91mODYsNiwla3z6-ffHEXk',
      githubLink: 'https://github.com/IT22091352/Mobile-Gaming-App.git',
      category: 'mobile'
    },
    {
      title: 'Tourist Management System',
      description: 'Built a comprehensive tourist management system using the MERN stack with features for bookings, reviews, and personalized itineraries.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'REST API'],
      demoLink: '/notfound',
      githubLink: 'https://github.com/IT22091352/Tourist-Management-System.git',
      category: 'fullstack'
    },
    {
      title: 'Review Analysis Project',
      description: 'Implemented a machine learning project for sentiment analysis of product reviews using text preprocessing, CountVectorizer, TF-IDF, and various ML models.',
      image: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'NLP', 'Data Analysis'],
      demoLink: 'https://www.linkedin.com/posts/chathuka-dilakshana-006315284_machinelearning-datascience-reviewanalysis-activity-7221264760644755456-a9hD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUaFsYBrXMHT91mODYsNiwla3z6-ffHEXk',
      githubLink: 'https://github.com/IT22091352/review_analysis_project.git',
      category: 'data'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React.js and Next.js, showcasing projects, skills, and experience with optimized performance and seamless navigation.',
      image: '/assets/pictures/portfolio.png',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      demoLink: 'https://chathukadilakshanaportfolio.me',
      githubLink: 'https://github.com/IT22091352/Chathuka-Dilakshana-Portfolio.git',
      category: 'frontend'
    },
    {
      title: 'Smart Note App',
      description: 'A user-friendly mobile application for creating, organizing, and managing notes, designed to boost productivity and simplify information management.',
      image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Android Studio', 'Kotlin', 'Room Database', 'MVVM Architecture', 'Material Design'],
      demoLink: 'https://www.linkedin.com/posts/chathuka-dilakshana-006315284_androiddev-kotlin-crudapp-activity-7206717409410396163-mL9a?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUaFsYBrXMHT91mODYsNiwla3z6-ffHEXk',
      githubLink: 'https://github.com/IT22091352/Smart-Note-MAD-app.git',
      category: 'mobile'
    },
    {
      title: 'Hotel Reservation Website',
      description: 'A dynamic website designed to streamline hotel booking processes, offering features for browsing, selecting, and reserving accommodations with ease.',
      image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
      technologies: ['PHP', 'Java', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
      demoLink: '/notfound',
      githubLink: 'https://github.com/IT22091352/IT22091352-IT22091352-Hotel-Reservation-Website.git',
      category: 'fullstack'
    },
    {
      title: 'Online Book Hub',
      description: 'BookHub, a web application designed to enhance the way we discover and explore books. ',
      image: 'https://media.istockphoto.com/id/1218656325/photo/laptop-with-online-library-realistic-3d-rendering.jpg?s=612x612&w=0&k=20&c=R9yd2DvnzDfmJvPEbpTznc89XwX7SD3k8kAeUU3UnMU=',
      technologies: ['React', 'JavaScripts', 'MongoDB', 'NodeJs', 'HTML/CSS', 'Bootstrap', 'ExpressJs'],
      demoLink: 'https://www.linkedin.com/posts/chathuka-dilakshana-006315284_reactjs-webdevelopment-googlebooksapi-activity-7280644380707713026-68y3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUaFsYBrXMHT91mODYsNiwla3z6-ffHEXk',
      githubLink: 'https://github.com/IT22091352/library_management_system.git',
      category: 'fullstack'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-dark-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-heading text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-12 flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {['all', 'frontend', 'fullstack', 'mobile', 'data'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-800 rounded-xl overflow-hidden shadow-custom border border-dark-700 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs mr-2 mb-2 px-3 py-1 rounded-full bg-primary-900/30 text-primary-400 border border-primary-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-center text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
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
          <a 
            href="https://github.com/IT22091352" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
          >
            View more projects on GitHub
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
