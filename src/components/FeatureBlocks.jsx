import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeatureBlocks.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "HARDWARE. PRODUCTION-GRADE IoT.",
    desc: "Raspberry Pi & Arduino architecture with 30+ on-board sensors ready for deployment.",
    items: ["Temperature & Humidity", "Gas, Light & Ultrasonic", "I²C / SPI / UART Interfaces"]
  },
  {
    id: 2,
    title: "SOFTWARE. EDGE + CLOUD AI.",
    desc: "Seamless integrations across multiple leading cloud platforms and AI analytic layers.",
    items: ["MQTT / HTTP Support", "AWS / Azure / IBM", "Xtrans IoT Cloud"]
  },
  {
    id: 3,
    title: "COE LABS. TURNKEY SETUP.",
    desc: "Complete Centre of Excellence lab design, curriculum, and continuous workshops.",
    items: ["Hardware Deployment", "Industry Curriculum", "Guided Innovation Sprints"]
  },
  {
    id: 4,
    title: "R&D. APPLIED RESEARCH.",
    desc: "Turning theoretical research into real-world deployable products and solutions.",
    items: ["Voice AI Agents", "AR / XR Visualization", "Interspecies Communication"]
  }
];

const FeatureBlocks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const blocks = containerRef.current.querySelectorAll('.feature-block');
    
    blocks.forEach((block) => {
      const progressBar = block.querySelector('.feature-progress-fill');
      
      gsap.fromTo(progressBar, 
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true
          }
        }
      );

      gsap.fromTo(block,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: block,
            start: "top 80%"
          }
        }
      );
    });
  }, []);

  return (
    <section className="feature-blocks section" id="atlas" ref={containerRef}>
      <div className="container">
        <h2 className="feature-section-title">INTRODUCING <span className="text-accent">ATLAS™</span> ECOSYSTEM</h2>
        
        <div className="features-wrapper">
          {features.map((feature, index) => (
            <div key={feature.id} className={`feature-block ${index % 2 !== 0 ? 'feature-reverse' : ''}`}>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p className="feature-desc text-muted">{feature.desc}</p>
                
                <ul className="feature-list">
                  {feature.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="feature-progress">
                  <div className="feature-progress-fill"></div>
                </div>
              </div>
              
              <div className="feature-visual">
                {/* Placeholder for 3D or product render */}
                <div className="visual-placeholder scope-brackets">
                  <div className="placeholder-text">RENDER_SLOT_{feature.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
