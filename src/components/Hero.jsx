import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';
import ShimmerButton from './ShimmerButton';
import GhostButton from './GhostButton';
import TiltCard from './TiltCard';
import AnimatedOrbs from './AnimatedOrbs';
import VerticalSocialBar from './VerticalSocialBar';

const Hero = () => {
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Web Architect',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 text-white md:pt-28 bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Animated Orbs Background */}
      <AnimatedOrbs />

      {/* Vertical Social Bar */}
      <VerticalSocialBar />

      <div className="relative container flex min-h-[calc(100vh-5rem)] items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.3fr_0.9fr] pl-0 lg:pl-24">
          {/* Left Content Area */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100 }}
              className="inline-block"
            >
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-cyan-100 uppercase backdrop-blur-md">
                Premium Developer Portfolio
              </span>
            </motion.div>

            {/* Main Heading with Text Clipping Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, type: 'spring', stiffness: 80 }}
              className="font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-b from-slate-200 via-slate-300 to-slate-500 bg-clip-text text-transparent">
                Chathuka Dilakshana
              </span>
            </motion.h1>

            {/* Role with Vertical Slide Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, type: 'spring', stiffness: 100 }}
              className="h-10 overflow-hidden"
            >
              <span className="text-base sm:text-lg font-medium text-slate-300 mr-2">Specializing in</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRoleIndex]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                  className="inline-block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-base sm:text-lg font-bold"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, type: 'spring', stiffness: 90 }}
              className="max-w-xl text-base leading-relaxed text-slate-300/95 sm:text-lg"
            >
              I craft premium digital experiences with meticulous attention to performance, accessibility, and design. Every interface is engineered to feel responsive, beautiful, and user-centric.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, type: 'spring', stiffness: 100 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Shimmer Button */}
              <ShimmerButton
                isShimmer={true}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-90}
                  className="cursor-pointer"
                >
                  View Projects
                </Link>
              </ShimmerButton>

              {/* Ghost Button with Magnetic Effect */}
              <MagneticButton strength={18}>
                <GhostButton className="px-8 py-3 text-slate-200">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={800}
                    offset={-90}
                    className="cursor-pointer"
                  >
                    Contact Me
                  </Link>
                </GhostButton>
              </MagneticButton>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, type: 'spring', stiffness: 100 }}
            >
              <MagneticButton
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md hover:border-cyan-400/40 hover:bg-white/10 transition-all"
              >
                <a
                  href="#resume"
                  className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors"
                >
                  ↓ Download Resume
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Content Area - Profile Image with Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 80 }}
            className="hidden lg:flex justify-center"
          >
            <TiltCard className="perspective">
              <div className="relative group">
                {/* Glassmorphic Card Wrapper */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 p-1">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-600/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/10 group-hover:to-blue-600/20 transition-all duration-300 rounded-3xl" />

                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/pictures/profilePIC1.JPG"
                      alt="Chathuka Dilakshana"
                      className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 h-20 w-20 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-1 -left-1 h-24 w-24 bg-gradient-to-tr from-purple-500/15 to-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </section>
  );
};

export default Hero;
