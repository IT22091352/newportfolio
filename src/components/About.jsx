import { motion } from 'framer-motion';
import { revealUp } from '../utils/motionVariants';
import OptimizedResponsiveImage from './OptimizedResponsiveImage';
import { getCdnImageUrl } from '../config/externalServicesConfig';
import { AnimeHeading, spotlightHandlers, useAnimeReveal } from '../hooks/useAnime';

const highlights = [
  { icon: '🤖', title: 'AI & ML Research', text: 'Co-authored Sinhala sign-language research published in IEEE Xplore (eSmarTA-2026).' },
  { icon: '🚀', title: 'Shipped SaaS Products', text: 'Launched live platforms like Operations Hub and ViralFlow AI using Next.js, Node.js and Prisma/MongoDB.' },
];

const facts = [
  ['Location', 'Colombo, Sri Lanka'],
  ['Degree', 'BSc in Information Technology (SLIIT)'],
  ['Email', 'chathukadilakshana33@gmail.com'],
  ['Phone', '070 374 9261'],
];

const About = () => {
  const gridRef = useAnimeReveal('[data-anime]', { y: 50, delay: 110 });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-slate-950">
      <div className="uv-aurora left-[-8rem] top-20 h-80 w-80 bg-cyan-600 opacity-20" />
      <div className="uv-aurora bottom-0 right-[-6rem] h-80 w-80 bg-indigo-600 opacity-20" />

      <div className="container relative">
        <AnimeHeading text="About Me" className="section-heading text-white" />
        <motion.p
          className="section-subheading text-slate-300"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Associate Software Engineer blending clean code, solid architecture and user-focused design.
        </motion.p>

        <div ref={gridRef} className="mt-12 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div data-anime className="uv-card p-3 sm:p-4" style={{ opacity: 0 }} {...spotlightHandlers}>
            <div className="relative overflow-hidden rounded-2xl">
              <OptimizedResponsiveImage
                src={getCdnImageUrl('/assets/pictures/about.webp')}
                alt="Chathuka Dilakshana portrait"
                width={720}
                height={900}
                priority={false}
                className="h-auto w-full object-contain"
              />
            </div>
            <dl className="mt-5 space-y-3 px-1 pb-1 text-sm">
              {facts.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5 border-b border-white/5 pb-2 last:border-0 sm:flex-row sm:justify-between">
                  <dt className="text-slate-400">{k}</dt>
                  <dd className="break-all font-semibold text-slate-100 sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-6">
            <div data-anime className="uv-card p-6 sm:p-8" style={{ opacity: 0 }} {...spotlightHandlers}>
              <h3 className="card-title text-white">
                <span className="border-b-2 border-cyan-400 pb-1">Professional Summary</span>
              </h3>
              <p className="body-copy mt-5 text-slate-300">
                Full-Stack Developer with hands-on industry experience in ERP systems and scalable web applications using
                Laravel, the MERN stack and Next.js. Skilled in RESTful API development, AI integration, database design,
                debugging and production deployment with practical experience in AI/ML projects and a BSc in Information
                Technology from SLIIT. Strong understanding of software development practices, clean code principles and
                building user-focused solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`${process.env.PUBLIC_URL || ''}/Chathuka Dilakshana CV.pdf`} download className="uv-btn">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                  Download CV
                </a>
                <a href="https://github.com/IT22091352" target="_blank" rel="noopener noreferrer" className="uv-btn-ghost">GitHub</a>
                <a href="http://www.linkedin.com/in/chathuka-dilakshana-006315284" target="_blank" rel="noopener noreferrer" className="uv-btn-ghost">LinkedIn</a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.title} data-anime className="uv-card p-5" style={{ opacity: 0 }} {...spotlightHandlers}>
                  <div className="text-2xl">{h.icon}</div>
                  <h4 className="mt-3 text-base font-semibold text-white">{h.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
