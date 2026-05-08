import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, speed = 40, delay = 0, repeatOnInView = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!repeatOnInView) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setDisplayedText('');
          indexRef.current = 0;
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [repeatOnInView]);

  useEffect(() => {
    if (isInView) {
      const startTyping = () => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.substring(0, indexRef.current + 1));
          indexRef.current++;
          timerRef.current = setTimeout(startTyping, speed);
        }
      };

      const delayTimer = setTimeout(startTyping, delay);
      return () => {
        clearTimeout(delayTimer);
        clearTimeout(timerRef.current);
      };
    }
  }, [isInView, text, speed, delay]);

  return <span ref={containerRef}>{displayedText}</span>;
};

export default Typewriter;
