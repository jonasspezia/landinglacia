import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
