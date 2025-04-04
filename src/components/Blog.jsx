import { motion } from 'framer-motion';
import { useState } from 'react';

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  
  const blogPosts = [
    {
      title: "Building Scalable React Applications with Redux Toolkit",
      date: "May 15, 2023",
      summary: "Learn how to structure large-scale React applications using Redux Toolkit for state management.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Redux", "Web Development"],
      url: "#"
    },
    {
      title: "Optimize Your Website Performance with Lighthouse",
      date: "April 3, 2023",
      summary: "Use Google Lighthouse to identify and fix common web performance issues to improve user experience.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Performance", "Web Development", "SEO"],
      url: "#"
    },
    {
      title: "Introduction to TypeScript for JavaScript Developers",
      date: "March 12, 2023",
      summary: "Start using TypeScript in your JavaScript projects to catch errors earlier and improve code quality.",
      image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["TypeScript", "JavaScript", "Programming"],
      url: "#"
    },
    {
      title: "Building a RESTful API with Node.js and Express",
      date: "February 28, 2023",
      summary: "Create a robust backend API using Node.js, Express, and MongoDB for your web applications.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Node.js", "Express", "Backend"],
      url: "#"
    },
    {
      title: "Modern CSS Techniques Every Developer Should Know",
      date: "January 15, 2023",
      summary: "Explore powerful CSS features like Grid, Flexbox, and Custom Properties to create responsive layouts.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["CSS", "Web Design", "Frontend"],
      url: "#"
    },
    {
      title: "Getting Started with Docker for Web Developers",
      date: "December 5, 2022",
      summary: "Learn how to containerize your web applications using Docker for easier development and deployment.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      tags: ["Docker", "DevOps", "Web Development"],
      url: "#"
    }
  ];

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <section id="blog" className="py-24 bg-white dark:bg-dark-900 dark:text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-heading dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest Articles
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visibleCount).map((post, index) => (
            <motion.article
              key={index}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl overflow-hidden shadow-custom h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <time className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</time>
                
                <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white">{post.title}</h3>
                
                <p className="text-dark-700 dark:text-gray-300 mb-4 flex-1">{post.summary}</p>
                
                <motion.a
                  href={post.url}
                  className="mt-auto inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
        
        {visibleCount < blogPosts.length && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={loadMore}
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
