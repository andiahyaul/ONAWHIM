"use client"

import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  className?: string;
  height?: string;
  backgroundColor?: string;
  progressColor?: string;
}

export function ScrollProgress({
  className = "",
  height = "3px",
  backgroundColor = "transparent",
  progressColor = "bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400"
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-[9998] ${className}`}
      style={{ 
        height,
        backgroundColor
      }}
    >
      <div
        className={`h-full transition-all duration-150 ease-out ${progressColor}`}
        style={{
          width: `${scrollProgress}%`
        }}
      />
    </div>
  );
}