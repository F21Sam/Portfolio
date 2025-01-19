import React from 'react';

const Contact = () => {
  return (
    <section className="bg-beige text-marron py-16" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Email : <a href="mailto:samsfanta@gmail.com" className="underline">samsfanta@gmail.com</a></p>
        <p>Téléphone : +33 7 53 72 83 44</p>
        <p>LinkedIn : <a href="http://linkedin.com/in/fanta-samassa" target="_blank" rel="noopener noreferrer" className="underline">Voir mon profil</a></p>
      </div>
    </section>
  );
};

export default Contact;

