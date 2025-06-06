import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add global styles for smooth scrolling
import './styles/globalStyles.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'XYZ Data Science | Intelligence for Web3';
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Working with blockchain based businness to build analystics, models, infrastructure and insights';
    document.head.appendChild(metaDescription);

    // Send page view to Google Analytics
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;