import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Highlight.css';

gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('.highlight-char');
    
    gsap.fromTo(chars, 
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const renderText = (text, isAccent = false) => {
    return text.split('').map((char, index) => (
      <span key={index} className={`highlight-char ${isAccent ? 'text-accent' : ''}`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="highlight-section section halftone-bg">
      <div className="container highlight-container">
        <h2 className="highlight-headline" ref={textRef}>
          {renderText('FROM HARDWARE TO CLOUD — ')}
          <br/>
          {renderText('END-TO-END', true)}
          <br/>
          {renderText(' AIoT MANUFACTURING.')}
        </h2>
      </div>
    </section>
  );
};

export default Highlight;
