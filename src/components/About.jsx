import React from 'react';

const About = () => {
  return (
    <section className="bg-nude text-marron py-16" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">À propos</h2>
        <p>
          Je suis actuellement en deuxième année de  Bachelor Informatique à l'ESGI, passionnée par le développement web et les nouvelles
          technologies. J'aime créer des applications performantes et sécurisées.
        </p>
        <p className="mt-4">
          En plus de mes compétences techniques, je suis passionnée par la lecture et la cuisine exotique !
        </p>
      </div>
    </section>
  );
};

export default About;
