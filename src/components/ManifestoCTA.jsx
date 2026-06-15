import React from 'react';
import './ManifestoCTA.css';

const ManifestoCTA = () => {
  return (
    <section className="manifesto-cta section halftone-bg" id="innovation">
      <div className="container">
        <div className="manifesto-content scope-brackets">
          <h2>INNOVATION OUTCOMES.<br/>WITHOUT THE <span className="text-accent">INNOVATION RISK.</span></h2>
          <p className="text-muted manifesto-paragraph">
            Bring us your challenge — we'll bring the sprint team, the mentors, and the ATLAS™ platform to turn it into a working prototype.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-outline">SUBMIT CHALLENGE</a>
            <a href="#atlas" className="btn btn-solid">EXPLORE ATLAS™</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoCTA;
