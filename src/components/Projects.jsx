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
      title: 'AI-Powered Sinhala Sign Language Platform',
      description: 'React.js interface and custom NLP engine that tokenizes Sinhala text and maps vocabulary to standardized semantic IDs, streaming 60 FPS sign animations in under 200 ms.',
      fullDescription: 'Engineered a rule-based algorithm to restructure Sinhala grammar into visual-spatial (TSOV) format, integrated a Word2Vec model for semantic slang matching, and optimized real-time video generation with MoviePy. Co-authored and published in IEEE Xplore (eSmarTA-2026).',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
      technologies: ['Python', 'Flask', 'React.js', 'NLP', 'Word2Vec', 'MoviePy'],
      demoLink: 'https://github.com/IT22091352',
      githubLink: 'https://github.com/IT22091352',
      category: 'ai',
      featured: true
    },
    {
      title: 'Operations Hub – Project Management Platform',
      description: 'Full-stack project and task platform with RBAC across Admin, Manager and Member dashboards, deployed live on Vercel.',
      fullDescription: 'Architected a RESTful API with Prisma ORM and MySQL to manage multi-tier relational schemas, atomic task-assignment transactions and secure JWT-based authentication.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
      technologies: ['Next.js 15', 'Node.js', 'Express.js', 'Prisma', 'MySQL', 'TypeScript', 'Tailwind CSS'],
      demoLink: 'https://project-management-cyphlab.vercel.app',
      githubLink: 'https://github.com/IT22091352',
      category: 'fullstack',
      featured: true
    },
    {
      title: 'ViralFlow AI (SaaS Platform)',
      description: 'Live SaaS MVP for automated video transcription and subtitle generation with AI-driven processing pipelines.',
      fullDescription: 'Built a scalable full-stack app using the Next.js App Router and Node.js, integrating AI-driven pipelines for text generation. Deployed to production at tryviralflow.vercel.app.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=80',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      demoLink: 'https://tryviralflow.vercel.app',
      githubLink: 'https://github.com/IT22091352',
      category: 'ai'
    },
    {
      title: 'Deep Learning Cancer Data Analysis',
      description: 'Benchmarked four deep learning architectures for breast cancer classification, reaching 98.8% accuracy with zero false negatives.',
      fullDescription: 'Compared architectures including ResNet-DNN and Wide & Deep Network on the Wisconsin Diagnostic Dataset, achieving 1.00 malignant recall to meet the critical clinical safety target.',
      image: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?auto=format&fit=crop&w=1000&q=80',
      technologies: ['CNN', 'TensorFlow', 'Keras', 'Python'],
      demoLink: 'https://github.com/IT22091352',
      githubLink: 'https://github.com/IT22091352',
      category: 'ai'
    },
    {
      title: 'IoT Intrusion Detection System',
      description: 'GPU-accelerated XGBoost model classifying 33 cyber-attack categories with 99.37% accuracy and 82.00% macro F1 on unseen data.',
      fullDescription: 'Built a data pipeline to preprocess the 1.5M-record CICIoT2023 dataset using RobustScaler and class-balancing techniques.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'XGBoost', 'Machine Learning'],
      demoLink: 'https://github.com/IT22091352',
      githubLink: 'https://github.com/IT22091352',
      category: 'ai'
    },
    {
      title: 'Community Empowerment Hub',
      description: 'Marketplace and job portal with role-based access for Sellers, Buyers and Admins, secured with JWT and enhanced by OpenAI-powered tools.',
      fullDescription: 'Integrated OpenAI APIs to deliver AI-powered tools that improve platform utility and user interaction.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI API', 'JWT'],
      demoLink: 'https://github.com/IT22091352',
      githubLink: 'https://github.com/IT22091352',
      category: 'fullstack'
    },
    {
      title: 'Ceylon Buddy – Tour Guide Web App',
      description: 'Fully responsive tour guide platform designed and deployed for a client, live at ceylonbuddytour.com.',
      fullDescription: 'Delivered with scalability and security in mind using the MERN stack.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      demoLink: 'https://ceylonbuddytour.com',
      githubLink: 'https://github.com/IT22091352',
      category: 'fullstack'
    },
    {
      title: 'Tourist Management System',
      description: 'Full-stack tourism management app with secure CRUD operations for bookings, travel packages and authorization protocols.',
      fullDescription: 'Built with the MERN stack, with role-based authorization and secure booking workflows.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
      demoLink: 'https://github.com/IT22091352/Tourist-Management-System.git',
      githubLink: 'https://github.com/IT22091352/Tourist-Management-System.git',
      category: 'fullstack'
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio built with React, Tailwind CSS, Framer Motion and anime.js.',
      fullDescription: 'Optimized for performance with code-splitting, lazy-loaded sections and Uiverse-inspired UI components.',
      image: '/assets/pictures/portfolio.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'anime.js'],
      demoLink: 'https://chathukadilakshana.vercel.app/',
      githubLink: 'https://github.com/IT22091352/newportfolio',
      category: 'frontend'
    },
    {
      title: 'Mobile Gaming App',
      description: 'Interactive Android gaming app built with Kotlin, focusing on smooth gameplay and a modern view-binding UI.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=1000&q=80',
      technologies: ['Android Studio', 'Kotlin', 'UI/UX Design', 'View Binding'],
      demoLink: 'https://github.com/IT22091352/Mobile-Gaming-App.git',
      githubLink: 'https://github.com/IT22091352/Mobile-Gaming-App.git',
      category: 'mobile'
    },
    {
      title: 'Smart Note App',
      description: 'Mobile app for creating, organizing and managing notes using Room, MVVM and Material Design.',
      image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?auto=format&fit=crop&w=1000&q=80',
      technologies: ['Android Studio', 'Kotlin', 'Room Database', 'MVVM', 'Material Design'],
      demoLink: 'https://github.com/IT22091352/Smart-Note-MAD-app.git',
      githubLink: 'https://github.com/IT22091352/Smart-Note-MAD-app.git',
      category: 'mobile'
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
    <section id="projects" className="section-padding relative overflow-hidden bg-[#03070f] text-white">
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
          AI/ML research, SaaS platforms and full-stack systems — shipped, deployed and measured.
        </motion.p>

        <motion.div
          className="mb-12 mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FilterBar
            categories={['all', 'frontend', 'fullstack', 'ai', 'mobile']}
            activeFilter={filter}
            onFilterChange={setFilter}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
