import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { animate, createTimeline, stagger } from 'animejs';
import TiltCardOptimized from './TiltCardOptimized';
import VerticalSocialBar from './VerticalSocialBar';
import OptimizedResponsiveImage from './OptimizedResponsiveImage';
import { getCdnImageUrl } from '../config/externalServicesConfig';
import { useMediaQuery } from '../hooks/useMediaQuery';

const roles = [
  'Full-Stack Developer',
  'Associate Software Engineer',
  'AI / ML Enthusiast',
  'ERP & Web Systems Builder',
];

const NAME = 'Chathuka Dilakshana';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return undefined;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const letters = root.querySelectorAll('[data-hero-letter]');
    const items = root.querySelectorAll('[data-hero-item]');

    if (reduce) {
      [...letters, ...items].forEach((el) => { el.style.opacity = 1; });
      return undefined;
    }

    const tl = createTimeline({ defaults: { ease: 'outExpo' } });
    tl.add(items[0], { translateY: [-20, 0], duration: 400 })
      .add(letters, {
        translateY: [24, 0],
        duration: 400,
        delay: stagger(12),
      }, '-=200');

    const floaters = animate(root.querySelectorAll('[data-float]'), {
      translateY: [-14, 14],
      translateX: [-8, 8],
      rotate: [-6, 6],
      duration: 4200,
      delay: stagger(450),
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    });

    return () => {
      tl.pause();
      floaters.pause();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-[#050b1c] to-black pt-24 text-white md:pt-28"
    >
      {/* Aurora + floating geometry */}
      <div className="uv-aurora -left-24 top-10 h-[420px] w-[420px] bg-cyan-500" />
      <div className="uv-aurora right-[-6rem] top-1/3 h-[460px] w-[460px] bg-indigo-600" />
      <div className="uv-aurora bottom-[-8rem] left-1/3 h-[360px] w-[360px] bg-fuchsia-600 opacity-20" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
        }}
      />
      <div data-float className="pointer-events-none absolute left-[8%] top-[22%] h-10 w-10 rotate-12 rounded-lg border border-cyan-400/40" />
      <div data-float className="pointer-events-none absolute right-[10%] top-[18%] h-6 w-6 rounded-full bg-fuchsia-400/60 blur-[1px]" />
      <div data-float className="pointer-events-none absolute bottom-[22%] left-[46%] h-12 w-12 rounded-full border border-indigo-400/40" />
      <div data-float className="pointer-events-none absolute bottom-[30%] right-[6%] h-8 w-8 rotate-45 border border-cyan-300/40" />

      <VerticalSocialBar />

      <div className="container relative flex min-h-[calc(100vh-6rem)] flex-col justify-center py-10">
        <div className="grid w-full items-center gap-12 pl-0 lg:grid-cols-[1.3fr_0.9fr] lg:pl-24">
          <div className="space-y-7">
            <div data-hero-item className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Associate Software Engineer · Full-Stack Developer
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl" aria-label={NAME}>
              {NAME.split(' ').map((word, wi) => (
                <span key={wi} className="mr-4 inline-block whitespace-nowrap" aria-hidden="true">
                  {word.split('').map((ch, ci) => (
                    <span key={ci} data-hero-letter className="uv-gradient-text inline-block">{ch}</span>
                  ))}
                </span>
              ))}
            </h1>

            <div className="h-11 overflow-hidden">
              <span className="mr-2 text-base font-medium text-slate-300 sm:text-lg">I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -36, opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-base font-bold text-transparent sm:text-lg"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-slate-300/95 sm:text-lg">
              Industry-experienced developer building ERP systems and scalable web apps with Laravel, MERN and Next.js
              with a passion for RESTful APIs, AI integration and production-grade deployments. BSc in IT from SLIIT.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="projects" href="#projects" smooth duration={800} offset={-90} className="uv-btn">
                View Projects
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="contact" href="#contact" smooth duration={800} offset={-90} className="uv-btn-ghost">
                Contact Me
              </Link>
              <a
                href={`${process.env.PUBLIC_URL || ''}/Chathuka Dilakshana CV.pdf`}
                download
                className="uv-btn-ghost"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                Download CV
              </a>
            </div>
          </div>

          {isDesktop && (<div className="flex justify-center">
            <TiltCardOptimized className="perspective">
              <div className="group relative">
                <div className="uv-card p-1.5">
                  <div className="relative overflow-hidden rounded-2xl">
                    <OptimizedResponsiveImage
                      src={getCdnImageUrl('/assets/pictures/hero.webp')}
                      alt="Chathuka Dilakshana"
                      width={800}
                      height={1200}
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-widest text-cyan-300">Based in</p>
                      <p className="text-sm font-semibold text-white">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCardOptimized>
          </div>)}
        </div>

        <div className="mt-10 hidden justify-center md:flex">
          <div className="uv-mouse" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  );
};

export default Hero;
