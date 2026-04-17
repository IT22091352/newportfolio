import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { popIn, revealUp, sectionStagger } from '../utils/motionVariants';
import MagneticButton from './MagneticButton';

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
  const [copied, setCopied] = useState(false);
  const form = useRef();

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Initialize EmailJS with the correct public key
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'WDi_TnqYxE9Z6xN21');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Use the correct, confirmed EmailJS values
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_q5pa85a';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_enn53jm';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'WDi_TnqYxE9Z6xN21';

    // Debug logs
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey ? "exists" : "missing");

    // Validate required fields
    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Email configuration is missing. Please try again later or contact me directly via email.'
      });
      setLoading(false);
      return;
    }

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
        console.error('FAILED...', error);
        let errorMessage = 'Failed to send message. Please try again or contact me directly via email.';
        
        if (error && error.text) {
          if (error.text.includes('insufficient authentication scopes') || error.text.includes('authentication scopes')) {
            errorMessage = 'Email service needs reconnection. Please try again later or contact me directly via email/WhatsApp.';
          } else if (error.text.includes('Invalid grant') || error.text.includes('Gmail_API')) {
            errorMessage = 'Email service connection issue. Please try again later or contact me directly via email/WhatsApp.';
          } else if (error.text.includes('public key')) {
            errorMessage = 'Email service configuration error. Please contact me directly via email or WhatsApp.';
          } else if (error.text.includes('template')) {
            errorMessage = 'Email template error. Please contact me directly via email or WhatsApp.';
          } else if (error.text.includes('Account not found')) {
            errorMessage = 'EmailJS account or service not found. Please check your EmailJS configuration.';
          } else if (error.text.includes('404')) {
            errorMessage = 'EmailJS resource not found (404). Please check your Service ID, Template ID, and Public Key.';
          } else {
            errorMessage += ` Error: ${error.text}`;
          }
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

  // WhatsApp functionality
  const whatsappNumber = "+94703749261"; // Your WhatsApp number with country code
  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent("Hello! I'm interested in discussing a project opportunity with you.");
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chathukadilakshana33@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error('Clipboard copy failed', error);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-100/70 dark:bg-slate-900/45 dark:text-white">
      <div className="container">
        <motion.h2 
          className="section-heading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subheading"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Reach out for collaborations, product ideas, and engineering opportunities.
        </motion.p>
        
        <motion.div
          className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={popIn}
            className="glass-panel rounded-2xl p-6 sm:p-8"
          >
            <h3 className="card-title mb-6 text-slate-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-cyan-100 p-3 dark:bg-cyan-900/30">
                  <svg className="h-6 w-6 text-cyan-700 dark:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <a href="mailto:chathukadilakshana33@gmail.com" className="text-cyan-700 hover:underline dark:text-cyan-300">chathukadilakshana33@gmail.com</a>
                    <MagneticButton className="inline-flex rounded-full">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-md transition-colors hover:bg-cyan-300/15"
                      >
                        {copied ? 'Copied' : 'Copy email'}
                      </button>
                    </MagneticButton>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">For job inquiries and collaborations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-cyan-100 p-3 dark:bg-cyan-900/30">
                  <svg className="h-6 w-6 text-cyan-700 dark:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>
                  <p className="text-slate-700 dark:text-slate-300">0703749261 / 0781122261</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Available Now</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">WhatsApp</h4>
                  <p className="text-slate-700 dark:text-slate-300">{whatsappNumber}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Quick messaging available</p>
                  <MagneticButton className="inline-flex rounded-lg">
                    <motion.button
                      onClick={handleWhatsAppMessage}
                      className="mt-2 inline-flex items-center rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-700"
                    >
                      <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Message Now
                    </motion.button>
                  </MagneticButton>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-cyan-100 p-3 dark:bg-cyan-900/30">
                  <svg className="h-6 w-6 text-cyan-700 dark:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Social Profiles</h4>
                  <div className="flex mt-2 space-x-4">
                    <a href="https://github.com/IT22091352" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/chathuka-dilakshana-006315284" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">Current Availability</h4>
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">I am currently pursuing a degree in Information Technology and actively seeking new opportunities. I am always open to connecting, collaborating, and discussing future possibilities. Feel free to get in touch.</p>
            </div>
          </motion.div>
          
          <motion.div
            variants={popIn}
          >
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="glass-panel rounded-2xl p-6 sm:p-8"
            >
              <h3 className="card-title mb-6 text-slate-900 dark:text-white">Send Me a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200 sm:text-base" htmlFor="name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200 sm:text-base" htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="jane.doe@example.com"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200 sm:text-base" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200 sm:text-base" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <input type="hidden" name="to_email" value="dilukumudu33@gmail.com" />

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-500 hover:via-sky-500 hover:to-blue-500 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:text-base"
                >
                  {loading ? (
                    <>
                      <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </motion.button>

                <div className="text-center mt-4">
                  <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">Or reach out instantly via:</p>
                  <MagneticButton className="inline-flex rounded-lg">
                    <motion.button
                      onClick={handleWhatsAppMessage}
                      className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 font-medium text-white shadow-md transition-colors duration-200 hover:bg-green-700 hover:shadow-lg"
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp Message
                    </motion.button>
                  </MagneticButton>
                </div>
                
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
