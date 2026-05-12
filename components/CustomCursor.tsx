'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia('(pointer: coarse)').matches) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const followCursor = () => {
      setDotPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };
    
    // We use a simpler follow without requestAnimationFrame loop to avoid state lag
    // or we can use a small timeout/interval if needed, but simple state sync is usually fine for a dot.
    // However, for smoothness, RAF is better.
    let rafId: number;
    const animate = () => {
      followCursor();
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(rafId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-teal-500 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out mix-blend-difference"
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-teal-500 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${dotPosition.x - 3}px, ${dotPosition.y - 3}px, 0)`,
        }}
      />
    </>
  );
}
