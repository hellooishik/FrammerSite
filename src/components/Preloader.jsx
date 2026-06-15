import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time, then fade out
    const timer = setTimeout(() => {
      gsap.to('.preloader', {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          setLoading(false);
          if (onComplete) onComplete();
        }
      });
    }, 2500); // 2.5 seconds loading

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="scanner">
        <div className="sweep"></div>
        <div className="scan-ring"></div>
        <div className="scan-ring delay"></div>
        <div className="tick t"></div>
        <div className="tick b"></div>
        <div className="tick l"></div>
        <div className="tick r"></div>
        <div className="blip" style={{ top: '35%', left: '89%', animationDelay: '.43s' }}></div>
        <div className="blip" style={{ top: '73%', left: '61%', animationDelay: '.95s' }}></div>
        <div className="blip" style={{ top: '70%', left: '15%', animationDelay: '1.47s' }}></div>
        <div className="blip" style={{ top: '36%', left: '33%', animationDelay: '1.89s' }}></div>
      </div>
      <div className="progress">
        <div className="bar">
          <div className="bar-fill">
            <div className="num u-font-secondary">SYSTEM BOOTING...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
