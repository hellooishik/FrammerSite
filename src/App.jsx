import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroProblem from './components/IntroProblem';
import Highlight from './components/Highlight';
import FeatureBlocks from './components/FeatureBlocks';
import ManifestoCTA from './components/ManifestoCTA';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CanvasBackground from './components/CanvasBackground';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="app-container no-scrollbar" style={{ position: 'relative', zIndex: 1 }}>
          <CanvasBackground />
          <Navbar />
          <Hero />
          <IntroProblem />
          <Highlight />
          <FeatureBlocks />
          <ManifestoCTA />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
