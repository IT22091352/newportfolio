import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { revealUp } from '../utils/motionVariants';
import { getOptimizedImageUrl, getCdnImageUrl } from '../config/externalServicesConfig';
import MagneticButton from './MagneticButton';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';

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
      category: 'mobile',
      span: 'md:col-span-1 lg:col-span-2 lg:row-span-1'
    },
    {
      title: 'Tourist Management System',
      description: 'Built a comprehensive tourist management system using the MERN stack with features for bookings, reviews, and personalized itineraries.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'REST API'],
      demoLink: '/notfound',
      githubLink: 'https://github.com/IT22091352/Tourist-Management-System.git',
      category: 'fullstack',
      featured: true,
      span: 'md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2'
    },
    {
      title: 'Review Analysis Project',
      description: 'Implemented a machine learning project for sentiment analysis of product reviews using text preprocessing, CountVectorizer, TF-IDF, and various ML models.',
      image: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'NLP', 'Data Analysis'],
      demoLink: 'https://www.linkedin.com/posts/chathuka-dilakshana-006315284_machinelearning-datascience-reviewanalysis-activity-7221264760644755456-a9hD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUaFsYBrXMHT91mODYsNiwla3z6-ffHEXk',
      githubLink: 'https://github.com/IT22091352/review_analysis_project.git',
      category: 'data',
      span: 'md:col-span-1 lg:col-span-2'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React.js and Next.js, showcasing projects, skills, and experience with optimized performance and seamless navigation.',
      image: '/assets/pictures/portfolio.png',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      demoLink: 'https://chathukadilakshana.vercel.app/',
      githubLink: 'https://github.com/IT22091352/newportfolio',
      category: 'frontend',
      span: 'md:col-span-2 lg:col-span-3'
    },
    {
      title: 'Smart Note App',
      description: 'A user-friendly mobile application for creating, organizing, and managing notes, designed to boost productivity and simplify information management.',
      image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Android Studio', 'Kotlin', 'Room Database', 'MVVM Architecture', 'Material Design'],
      demoLink: 'https://www.linkedin.com/posts/chathuka-dilakshana-006315284_androiddev-kotlin-crudapp-activity-7206717409410396163-mL9a?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUaFsYBrXMHT91mODYsNiwla3z6-ffHEXk',
      githubLink: 'https://github.com/IT22091352/Smart-Note-MAD-app.git',
      category: 'mobile',
      span: 'md:col-span-1 lg:col-span-2'
    },
    {
      title: 'Hotel Reservation Website',
      description: 'A dynamic website designed to streamline hotel booking processes, offering features for browsing, selecting, and reserving accommodations with ease.',
      image: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaWQfGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
      technologies: ['PHP', 'Java', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
      demoLink: '/notfound',
      githubLink: 'https://github.com/IT22091352/IT22091352-IT22091352-Hotel-Reservation-Website.git',
      category: 'fullstack',
      span: 'md:col-span-1 lg:col-span-2'
    },
    {
      title: 'Online Book Hub',
      description: 'BookHub, a web application designed to enhance the way we discover and explore books.',
      image: 'https://media.istockphoto.com/id/1218656325/photo/laptop-with-online-library-realistic-3d-rendering.jpg?s=612x612&w=0&k=20&c=R9yd2DvnzDfmJvPEbpTznc89XwX7SD3k8kAeUU3UnMU=',
      technologies: ['React', 'JavaScripts', 'MongoDB', 'NodeJs', 'HTML/CSS', 'Bootstrap', 'ExpressJs'],
      demoLink: 'https://www.linkedin.com/posts/chathuka-dilakshana-006315284_reactjs-webdevelopment-googlebooksapi-activity-7280644380707713026-68y3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUaFsYBrXMHT91mODYsNiwla3z6-ffHEXk',
      githubLink: 'https://github.com/IT22091352/library_management_system.git',
      category: 'fullstack',
      span: 'md:col-span-2 lg:col-span-3'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  const optimizedProjects = filteredProjects.map((project, index) => ({
    ...project,
    image: project.image.startsWith('/assets/')
      ? `${process.env.PUBLIC_URL || ''}${project.image}`
      : getCdnImageUrl(getOptimizedImageUrl(project.image, {
          quality: project.featured ? '72' : '68',
          width: project.featured ? 1400 : index < 2 ? 1200 : 1000,
        })),
  }));

  return (
    <section id="projects" className="section-padding bg-slate-950 text-white">
      <div className="container">
        <motion.h2
          className="section-heading text-white"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subheading text-slate-300"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Selected builds where performance, visual detail, and usability come together.
        </motion.p>

        <motion.div
          className="mb-12 mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FilterBar
            categories={['all', 'frontend', 'fullstack', 'mobile', 'data']}
            activeFilter={filter}
            onFilterChange={setFilter}
          />
        </motion.div>

        <motion.div
          className="grid auto-rows-auto grid-cols-1 gap-5 md:auto-rows-[220px] md:grid-cols-3 lg:grid-cols-6 lg:auto-rows-[200px]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {optimizedProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-12 text-center md:mt-16"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <MagneticButton className="inline-flex rounded-full">
            <a
              href="https://github.com/IT22091352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View more projects on GitHub
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
