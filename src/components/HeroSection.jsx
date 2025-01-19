import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-beige text-center py-16" id="hero">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-marron text-4xl font-bold">Bonjour, je suis Fanta Samassa</h2>
        <p className="text-nude text-lg mt-4">Développeuse web spécialisée en React, TypeScript et JavaScript.</p>
        <img
          src="/portrait.jpg" 
          alt="Fanta Samassa"
          className="w-48 h-48 rounded-full mx-auto mt-6"
        />
      </div>
    </section>
  );
};

export default HeroSection;
