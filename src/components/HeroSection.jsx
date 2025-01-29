import React from 'react';
import portrait from '../assets/img/portrait.jpg';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-beige text-center py-16"
      id="hero"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-marron text-4xl font-bold">Hello world!<br></br> Moi c'est Fanta</h2>
        <p className="text-nude text-lg mt-4">Développeuse d'applications web</p>
        <img
          src={portrait} 
          alt="Fanta Samassa"
          className="w-90 h-60 rounded-full mx-auto mt-6"
        />
      </div>
      </motion.section>
  );
};

export default HeroSection;
