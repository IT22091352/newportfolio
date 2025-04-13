import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 text-white px-6">
      <div className="container max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-500">404</h1>
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <Link to="/" className="btn-primary inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Homepage
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <svg 
            className="w-64 h-64 mx-auto text-primary-600/20" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
