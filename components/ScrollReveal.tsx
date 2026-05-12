'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}

export function ScrollReveal({ children, className = '', delay = 0, staggerChildren = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback: Reveal after 2 seconds if IntersectionObserver fails to trigger
    const fallbackTimeout = setTimeout(() => {
      if (ref.current && !ref.current.classList.contains('section-visible')) {
        ref.current.classList.add('section-visible');
        ref.current.classList.remove('section-hidden');
      }
    }, 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimeout);
          setTimeout(() => {
            if (entry.target) {
              entry.target.classList.add('section-visible');
              entry.target.classList.remove('section-hidden');
              if (staggerChildren) {
                entry.target.classList.add('stagger-children');
              }
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, [delay, staggerChildren]);

  return (
    <div ref={ref} className={`section-hidden ${className}`}>
      {children}
    </div>
  );
}
