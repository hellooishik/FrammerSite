import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const wordsRef = useRef(null);
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Basic rotating text animation
    const words = wordsRef.current.children;
    gsap.set(words, { y: 50, opacity: 0 });
    
    const tl = gsap.timeline({ repeat: -1 });
    
    Array.from(words).forEach((word) => {
      tl.to(word, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
        .to(word, { y: -50, opacity: 0, duration: 0.5, ease: "power2.in", delay: 1.5 });
    });

    // Word by word reveal for title
    const titleWords = titleRef.current.querySelectorAll('.word');
    gsap.fromTo(titleWords, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 3 } // delay accounts for preloader
    );

    // Pin hero section and fade out content on scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=800",
      pin: true,
      pinSpacing: true
    });

    gsap.to(heroRef.current.querySelector('.hero-content'), {
      opacity: 0,
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=600",
        scrub: true
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const renderTitle = () => {
    const text = "WE ARE ENGINEERING THE FUTURE OF AIoT";
    return text.split(' ').map((word, i) => (
      <span key={i} className="word" style={{ display: 'inline-block', marginRight: '0.3em' }}>{word}</span>
    ));
  };

  return (
    <section className="hero section" ref={heroRef}>
      <div className="container scope-brackets hero-content">
        <h1 className="hero-title" ref={titleRef}>
          {renderTitle()}
        </h1>
        <div className="hero-rotating-wrapper">
          <span className="text-accent">FOR </span>
          <div className="hero-rotating-words text-accent" ref={wordsRef}>
            <span>MANUFACTURING</span>
            <span>DEPLOYMENT</span>
            <span>INNOVATION</span>
          </div>
        </div>
        
        <div className="hero-hud">
          <div className="hud-line">SYSTEM ONLINE // AWAITING COMMAND</div>
          <div className="hud-line">LAT: 51.5072° N / LON: 0.1276° W</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
