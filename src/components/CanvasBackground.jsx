import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CanvasBackground.css';

gsap.registerPlugin(ScrollTrigger);

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D parameters to animate via ScrollTrigger
    const state = {
      zOffset: 0,
      rotation: 0,
      opacity: 0.1,
      scale: 1,
      accentIntensity: 0
    };

    // GSAP ScrollTrigger to scrub state properties
    gsap.to(state, {
      zOffset: 1000,
      rotation: Math.PI / 2,
      scale: 2,
      accentIntensity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5
      }
    });

    // Drawing loop
    let animationFrameId;
    
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      // Draw grid
      ctx.strokeStyle = `rgba(255, 255, 255, ${state.opacity})`;
      ctx.lineWidth = 1;
      
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(state.rotation);
      ctx.scale(state.scale, state.scale);
      
      const gridSpacing = 50;
      const numLines = 40;
      
      ctx.beginPath();
      for(let i = -numLines; i <= numLines; i++) {
        const pos = i * gridSpacing;
        // Horizontal lines
        ctx.moveTo(-numLines * gridSpacing, pos);
        ctx.lineTo(numLines * gridSpacing, pos);
        // Vertical lines
        ctx.moveTo(pos, -numLines * gridSpacing);
        ctx.lineTo(pos, numLines * gridSpacing);
      }
      ctx.stroke();

      // Draw central "Target" / Drone placeholder shape
      const accentColor = `rgba(232, 84, 42, ${0.2 + state.accentIntensity * 0.8})`;
      
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      
      // Rotating inner scope
      ctx.rotate(-state.rotation * 2);
      ctx.beginPath();
      ctx.arc(0, 0, 100 + state.zOffset * 0.1, 0, Math.PI * 2);
      ctx.stroke();

      // Dashed outer scope
      ctx.setLineDash([15, 15]);
      ctx.beginPath();
      ctx.arc(0, 0, 150 + state.zOffset * 0.15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(-200 - state.zOffset * 0.2, 0);
      ctx.lineTo(200 + state.zOffset * 0.2, 0);
      ctx.moveTo(0, -200 - state.zOffset * 0.2);
      ctx.lineTo(0, 200 + state.zOffset * 0.2);
      ctx.stroke();
      
      ctx.restore();
      
      animationFrameId = requestAnimationFrame(drawGrid);
    };
    
    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="canvas-background"
    />
  );
};

export default CanvasBackground;
