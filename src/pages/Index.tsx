
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';

const Index = () => {
  // Add smooth scrolling animation when page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
    </main>
  );
};

export default Index;
