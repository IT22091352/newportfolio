import { Suspense, lazy, useState } from 'react';

/**
 * Code-splitting HOC for lazy loading heavy sections
 * Reduces initial bundle size and improves FCP/LCP
 */

const LazyComponent = lazy(() => import('../components/Projects'));
const LazyExperience = lazy(() => import('../components/Experience'));
const LazySkills = lazy(() => import('../components/Skills'));

const LoadingFallback = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="h-12 w-48 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg" />
      <div className="space-y-2">
        <div className="h-4 w-64 bg-gradient-to-r from-slate-700 to-slate-800 rounded" />
        <div className="h-4 w-56 bg-gradient-to-r from-slate-700 to-slate-800 rounded" />
      </div>
    </div>
  </div>
);

/**
 * Higher-Order Component for lazy-loaded sections
 * Wraps components with Suspense and provides loading state
 */
export const withLazySuspense = (Component, ComponentName = 'Component') => {
  return function LazyComponent(props) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export const LazyProjects = withLazySuspense(LazyComponent, 'Projects');
export const LazyExperienceSection = withLazySuspense(LazyExperience, 'Experience');
export const LazySkillsSection = withLazySuspense(LazySkills, 'Skills');
