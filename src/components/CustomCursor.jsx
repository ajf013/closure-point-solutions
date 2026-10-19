import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches);
    handleResize();
    window.addEventListener('resize', handleResize);

    if (window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches) {
      return () => window.removeEventListener('resize', handleResize);
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let rafId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering clickable/interactive element
      const target = e.target;
      const isInteractive = target && target.closest('a, button, [role="button"], input, textarea, .service-card, .industry-hdr, .chat-launcher-pill, .stat-box');
      if (Boolean(isInteractive) !== isHovering) {
        isHovering = Boolean(isInteractive);
        if (ringRef.current) {
          if (isHovering) {
            ringRef.current.classList.add('cur-hover');
          } else {
            ringRef.current.classList.remove('cur-hover');
          }
        }
      }
    };

    const render = () => {
      // Smooth interpolation for the outer ring
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="cur" aria-hidden="true" />
      <div ref={ringRef} className="cur-r" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
