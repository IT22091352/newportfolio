import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Debug log to check if environment variables are loaded
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? "exists" : "missing");
    
    // Check if environment variables are defined, use hardcoded values as fallback
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_68fd9i5';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_co24h0p';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'wBuwOGjV3u8lXTdrV';
    
    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      })
      .catch((error) => {
        // More robust error handling
        console.error('FAILED...', error);
        let errorMessage = 'Failed to send message. Please try again or contact me directly via email.';
        
        if (error && error.text) {
          errorMessage += ` Error: ${error.text}`;
        }
        
        setFormStatus({
          submitted: true,
          success: false,
          message: errorMessage
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-800 dark:text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-heading dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dark-700 rounded-xl shadow-custom p-8 border border-gray-100 dark:border-dark-600"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Email</h4>
                  <a href="mailto:chathukadilakshana33@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">chathukadilakshana33@gmail.com</a>
                  <p className="text-sm text-dark-600 dark:text-gray-400 mt-1">For job inquiries and collaborations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Phone</h4>
                  <p className="text-dark-700 dark:text-gray-300">0703749261 / 0754352060</p>
                  <p className="text-sm text-dark-600 dark:text-gray-400 mt-1">Available Now</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Location</h4>
                  <p className="text-dark-700 dark:text-gray-300">Sri Lanka</p>
                  <p className="text-sm text-dark-600 dark:text-gray-400 mt-1">Available for remote work worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Social Profiles</h4>
                  <div className="flex mt-2 space-x-4">
                    <a href="https://github.com/IT22091352" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="www.linkedin.com/in/chathuka-dilakshana-006315284" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-gray-50 dark:bg-dark-600 p-6 rounded-lg border border-gray-100 dark:border-dark-500">
              <h4 className="font-semibold text-dark-900 dark:text-white mb-3">Current Availability</h4>
              <p className="text-dark-700 dark:text-gray-300">I'm currently pursuing my degree in Information Technology and completing an internship. While I'm not actively seeking new opportunities at the moment, I'm always open to connecting and discussing future possibilities!</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-custom p-8 border border-gray-100 dark:border-dark-600"
            >
              <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">Send Me a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-dark-800 dark:text-gray-200 font-medium mb-2" htmlFor="name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-600 text-dark-800 dark:text-white"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-dark-800 dark:text-gray-200 font-medium mb-2" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-600 text-dark-800 dark:text-white"
                    placeholder="jane.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-dark-800 dark:text-gray-200 font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-600 text-dark-800 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-dark-800 dark:text-gray-200 font-medium mb-2" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-600 text-dark-800 dark:text-white"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium flex items-center justify-center disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </motion.button>
                
                {formStatus.submitted && (
                  <motion.div
                    className={`p-4 rounded-lg text-center ${
                      formStatus.success 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
