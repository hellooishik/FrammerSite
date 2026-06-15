import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>STAY CONNECTED WITH <span className="text-accent">XNETWORK DISPATCH</span></h3>
            <p className="text-muted">Receive the latest updates on AIoT innovation and ATLAS™ ecosystem.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ENTER COMM-LINK (EMAIL)" required className="newsletter-input" />
            <button type="submit" className="btn btn-solid">SUBMIT</button>
          </form>
        </div>
        
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-logo">XNETWORK</h4>
            <p className="text-muted text-small">Engineering the future of AIoT. From Hardware to Cloud.</p>
          </div>
          
          <div className="footer-col">
            <h5>SERVICES</h5>
            <ul>
              <li><a href="#">Admission</a></li>
              <li><a href="#">Visa</a></li>
              <li><a href="#">Accommodation</a></li>
              <li><a href="#">Relocation</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>ATLAS™</h5>
            <ul>
              <li><a href="#">Hardware</a></li>
              <li><a href="#">Edge + Cloud AI</a></li>
              <li><a href="#">CoE Labs</a></li>
              <li><a href="#">R&D</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>CONTACT US</h5>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter / X</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">&copy; 2026 XNETWORK, UK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
