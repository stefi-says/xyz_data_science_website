import React, { useEffect } from 'react';
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
    document.title = 'FinanceIQ | Risk Intelligence for DeFi';
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'FinanceIQ provides data-driven risk intelligence for DeFi protocols through analytics, modeling, and technical insights.';
    document.head.appendChild(metaDescription);
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