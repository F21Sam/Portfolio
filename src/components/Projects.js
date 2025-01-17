import React from 'react';
import './Projects.css';  // Importer les styles des projets

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projets</h2>
        <ul>
          <li>
            <h3>Projet 1</h3>
            <p>Description du projet.</p>
            <a href="#">Voir le projet</a>
          </li>
          <li>
            <h3>Projet 2</h3>
            <p>Description du projet.</p>
            <a href="#">Voir le projet</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
