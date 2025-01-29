import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Matodon', url: 'https://f21sam.github.io/mastodon/' },
    { name: 'Animal.org', url: 'https://github.com/F21Sam/PHP-entrainement/tree/main/PROJET_ANNUEL/Amimal' },
  ];

  return (
    <section className="bg-nude text-marron py-16" id="projects">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projets</h2>
        <ul className="space-y-4">
          {projects.map(project => (
            <li key={project.name}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

