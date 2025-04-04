import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      demoLink: 'https://demo-ecommerce.com',
      githubLink: 'https://github.com/yourusername/ecommerce',
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Context API'],
      demoLink: 'https://task-app-demo.com',
      githubLink: 'https://github.com/yourusername/task-app',
      category: 'frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather application that displays current conditions, forecasts, and historical weather data with beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Weather API', 'Chart.js', 'CSS Modules', 'Axios'],
      demoLink: 'https://weather-app-demo.com',
      githubLink: 'https://github.com/yourusername/weather-app',
      category: 'frontend'
    },
    {
      title: 'Inventory Management System',
      description: 'A complete inventory management solution for small businesses with barcode scanning, stock alerts, and sales analytics.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'Sequelize'],
      demoLink: 'https://inventory-demo.com',
      githubLink: 'https://github.com/yourusername/inventory-system',
      category: 'fullstack'
    },
    {
      title: 'Fitness Tracking API',
      description: 'A robust API for fitness applications that tracks workouts, nutrition, and progress with detailed analytics and recommendations.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
      demoLink: 'https://fitness-api-docs.com',
      githubLink: 'https://github.com/yourusername/fitness-api',
      category: 'backend'
    },
    {
      title: 'Real Estate Listings Portal',
      description: 'A comprehensive real estate platform with property listings, advanced search, virtual tours, and agent communication tools.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Google Maps API', 'AWS S3'],
      demoLink: 'https://realestate-demo.com',
      githubLink: 'https://github.com/yourusername/realestate-portal',
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
          {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
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
            href="https://github.com/yourusername" 
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
