import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#">XNETWORK</a>
        </div>
        
        <div className="navbar-links">
          <a href="#services">SERVICES</a>
          <a href="#atlas">ATLAS™</a>
          <a href="#innovation">INNOVATION LAB</a>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} color="#E8542A" /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>SERVICES</a>
          <a href="#atlas" onClick={() => setMobileMenuOpen(false)}>ATLAS™</a>
          <a href="#innovation" onClick={() => setMobileMenuOpen(false)}>INNOVATION LAB</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
