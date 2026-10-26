import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import { revealUp } from '../utils/motionVariants';
import { AnimeHeading, spotlightHandlers } from '../hooks/useAnime';

const data = {
  work: [
    {
      title: 'Software Developer Intern',
      company: 'Apps Technologies (Pvt) Ltd',
      duration: 'Jan 2025 – Aug 2025',
      points: [
        'Designed, developed and deployed 3 mission-critical ERP modules (Inventory Reporting, Requisitions, Finance Workflows) consumed via RESTful internal APIs by 5+ teams, using Laravel, Bootstrap 5 and JavaScript.',
        'Designed relational database schemas and backend logic, including auto-generated transaction reference codes and account structures, to improve data consistency across finance workflows.',
        'Debugged and resolved 35+ critical production defects across Stock Issue, Stock Transfer and POS within sprint-based cycles, increasing system uptime by 15%.',
        'Conducted QA and regression testing to identify edge cases, streamlining deployments for smooth, low-risk production releases.',
        'Built responsive UIs with dynamic dropdowns, pagination and data export, improving reporting efficiency for 50+ end users.',
        'Participated in code reviews and cross-functional collaboration, authoring technical documentation and delivering live product demos.',
      ],
      technologies: ['Laravel', 'PHP', 'Bootstrap 5', 'JavaScript', 'MySQL', 'REST APIs'],
    },
  ],
  education: [
    {
      title: 'BSc in Information Technology',
      company: 'Sri Lanka Institute of Information Technology (SLIIT)',
      duration: '2022 – 2026 · Graduated',
      points: ['Specialized in Information Technology.', 'Research co-authored and published in IEEE Xplore (eSmarTA-2026).'],
      technologies: ['Software Engineering', 'AI / ML', 'Web Development'],
    },
    {
      title: 'G.C.E. Advanced Level – Maths Stream',
      company: "St. Aloysius College, Rathnapura",
      duration: '2020',
      points: ['Completed advanced level education in the Mathematics stream.'],
      technologies: ['Mathematics', 'Physics', 'Chemistry'],
    },
  ],
  certifications: [
    {
      title: 'Python for Beginners',
      company: 'University of Moratuwa',
      duration: '2023',
      points: ['Fundamentals of Python programming and its applications.'],
      technologies: ['Python', 'Programming Fundamentals'],
    },
    {
      title: 'Web Design for Beginners',
      company: 'University of Moratuwa',
      duration: '2023',
      points: ['Introduction to web design concepts, HTML, CSS and JavaScript.'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    },
  ],
};

const tabs = [
  { id: 'work', label: 'Work Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  const listRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return undefined;
    const cards = root.querySelectorAll('[data-tl-card]');
    const dots = root.querySelectorAll('[data-tl-dot]');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      cards.forEach((c) => { c.style.opacity = 1; });
      return undefined;
    }
    const a1 = animate(cards, {
      opacity: [0, 1],
      translateX: [-40, 0],
      duration: 800,
      delay: stagger(140),
      ease: 'outExpo',
    });
    const a2 = animate(dots, {
      scale: [0, 1],
      duration: 700,
      delay: stagger(140, { start: 150 }),
      ease: 'outBack',
    });
    const a3 = lineRef.current
      ? animate(lineRef.current, { scaleY: [0, 1], duration: 900, ease: 'outExpo' })
      : null;
    return () => {
      a1.pause();
      a2.pause();
      if (a3) a3.pause();
    };
  }, [activeTab]);

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-slate-950">
      <div className="uv-aurora left-1/4 top-0 h-72 w-72 bg-fuchsia-600 opacity-15" />
      <div className="container relative">
        <AnimeHeading text="Experience & Education" className="section-heading text-white" />
        <motion.p
          className="section-subheading text-slate-300"
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Industry experience, academic background and the milestones along the way.
        </motion.p>

        <div className="mb-12 mt-10 flex justify-center">
          <div className="relative inline-flex flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:px-6 sm:text-sm ${
                  activeTab === t.id ? 'text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                {activeTab === t.id && (
                  <motion.span
                    layoutId="exp-tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div ref={listRef} key={activeTab} className="relative mx-auto max-w-4xl">
          <div
            ref={lineRef}
            className="uv-timeline-line absolute bottom-0 left-4 top-0 w-0.5 origin-top"
          />
          {data[activeTab].map((item) => (
            <div key={item.title} className="relative mb-8 pl-14">
              <span
                data-tl-dot
                className="uv-dot absolute left-[0.45rem] top-6 block h-4 w-4 rounded-full bg-cyan-300"
              />
              <div data-tl-card className="uv-card p-5 sm:p-7" style={{ opacity: 0 }} {...spotlightHandlers}>
                <span className="uv-chip mb-3">{item.duration}</span>
                <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                <h4 className="mb-4 text-base text-cyan-300">{item.company}</h4>
                <ul className="space-y-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
