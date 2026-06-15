import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './IntroProblem.css';

gsap.registerPlugin(ScrollTrigger);

const IntroProblem = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Fade in text
    gsap.fromTo(sectionRef.current.querySelector('.intro-text-content'), 
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    // Float animation for HUD card
    gsap.to(cardRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2.5
    });

    // Parallax for card on scroll
    gsap.fromTo(cardRef.current,
      { yPercent: 20 },
      {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section className="intro-problem section container" ref={sectionRef}>
      <div className="intro-grid">
        <div className="intro-text-content">
          <h2>INNOVATION IS EXPENSIVE.<br/><span className="text-accent">EXPERIMENTATION SHOULDN'T BE.</span></h2>
          <p className="intro-paragraph">
            Many companies struggle to experiment with AI and IoT due to high development costs, limited technical bandwidth, and innovation risk. We bridge this gap through rapid prototype development powered by guided innovation sprint teams and industry mentors.
          </p>
        </div>
        
        <div className="intro-hud-card-wrapper">
          <div className="hud-card scope-brackets" ref={cardRef}>
            <div className="hud-card-header">
              <span className="hud-pulse"></span>
              <span>ATLAS™ Node 01</span>
              <span className="hud-status">ONLINE</span>
            </div>
            <div className="hud-card-body">
              <div className="hud-data-row">
                <span>CONNECTIVITY</span>
                <span className="text-accent">5+ CLOUDS</span>
              </div>
              <div className="hud-data-row">
                <span>SENSORS</span>
                <span>30+ ACTIVE</span>
              </div>
              <div className="hud-data-row">
                <span>LAYER</span>
                <span>EDGE + AI</span>
              </div>
              <div className="hud-data-row">
                <span>PROTOCOL</span>
                <span>MQTT / HTTP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroProblem;
