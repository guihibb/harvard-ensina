"use client"// ScrollProgressBar.tsx""
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollProgressBar: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${scrollProgress * 100}%` });
    }
  }, [inView, controls, scrollProgress]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollPosition / maxScroll;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '4px', zIndex: '2' }}>
      <motion.div
        style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.1)', position: 'absolute', width: '100%', zIndex: '2' }}
      />
      <motion.div
        animate={controls}
        style={{ height: '100%', backgroundColor: '#FF4251', position: 'absolute', width: '0%', zIndex: '2'  }}
      />
    </div>
  );
};

export default ScrollProgressBar;
