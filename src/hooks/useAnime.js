import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Staggered scroll-reveal powered by anime.js.
 * Animates every element matching `selector` inside the returned ref
 * once the container enters the viewport.
 */
export const useAnimeReveal = (selector = '[data-anime]', options = {}) => {
  const ref = useRef(null);
  const { y = 40, duration = 900, delay = 90, threshold = 0.15 } = options;

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const targets = root.querySelectorAll(selector);

    if (prefersReducedMotion()) {
      targets.forEach((t) => { t.style.opacity = 1; });
      return undefined;
    }

    let animation;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animation = animate(targets, {
            opacity: [0, 1],
            translateY: [y, 0],
            scale: [0.96, 1],
            duration,
            delay: stagger(delay),
            ease: 'outExpo',
          });
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      if (animation && animation.pause) animation.pause();
    };
  }, [selector, y, duration, delay, threshold]);

  return ref;
};

/** Count-up number that runs once when scrolled into view. */
export const AnimatedCounter = ({ to, suffix = '', decimals = 0, duration = 2000, className = '' }) => {
  const ref = useRef(null);
  const [text, setText] = useState(`${(0).toFixed(decimals)}${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReducedMotion()) {
      setText(`${to.toFixed(decimals)}${suffix}`);
      return undefined;
    }
    const state = { value: 0 };
    let anim;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anim = animate(state, {
            value: to,
            duration,
            ease: 'outExpo',
            onUpdate: () => setText(`${state.value.toFixed(decimals)}${suffix}`),
          });
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (anim && anim.pause) anim.pause();
    };
  }, [to, suffix, decimals, duration]);

  return <span ref={ref} className={className}>{text}</span>;
};

/** Heading whose letters fly in one-by-one with anime.js. */
export const AnimeHeading = ({ text, className = '', as: Tag = 'h2', delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const letters = el.querySelectorAll('[data-letter]');
    if (prefersReducedMotion()) {
      letters.forEach((l) => { l.style.opacity = 1; });
      return undefined;
    }
    let anim;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anim = animate(letters, {
            opacity: [0, 1],
            translateY: [48, 0],
            rotateX: [-80, 0],
            duration: 900,
            delay: stagger(28, { start: delay }),
            ease: 'outExpo',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (anim && anim.pause) anim.pause();
    };
  }, [text, delay]);

  return (
    <Tag ref={ref} className={className} aria-label={text} style={{ perspective: 600 }}>
      {text.split(' ').map((word, wi, arr) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split('').map((ch, ci) => (
            <span key={ci} data-letter className="inline-block" style={{ opacity: 0 }}>{ch}</span>
          ))}
          {wi < arr.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
};

/** Updates --mx/--my on cards so the .uv-card spotlight follows the cursor. */
export const spotlightHandlers = {
  onMouseMove: (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  },
};
