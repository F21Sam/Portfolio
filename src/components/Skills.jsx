
import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Docker', 'MySQL', 'TailwindCSS'];

  return (
    <section className="bg-beige text-marron py-16" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Compétences</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <li key={skill} className="bg-marron text-beige py-2 px-4 rounded text-center">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
