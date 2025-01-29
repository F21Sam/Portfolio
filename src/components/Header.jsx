import React from "react";
const Header = () => {
  return(
    <header className="bg-marron text-beige p-4 flex justify-between items-center" >
      <h1 className="text-2xl font-bold">Fanta Samassa</h1>
      <nav>
  <ul className="flex space-x-4">
    <li><a href="#about" className="hover:text-nude transition-colors duration-300">À propos</a></li>
    <li><a href="#skills" className="hover:text-nude transition-colors duration-300">Compétences</a></li>
    <li><a href="#projects" className="hover:text-nude transition-colors duration-300">Projets</a></li>
    <li><a href="#contact" className="hover:text-nude transition-colors duration-300">Contact</a></li>
  </ul>
</nav>

    </header>
  );
};

export default Header;