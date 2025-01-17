import React from 'react';
import './Header.css';  // Importer les styles de l'en-tête

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Fanta Samassa</h1>
        <nav>
          <ul>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
