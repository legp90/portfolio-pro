import React from 'react';

export const Skills: React.FC = () => {
  const skillsData = [
    {
      category: 'Frontend Core',
      techs: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
    },
    {
      category: 'Styling & Layout',
      techs: ['Tailwind CSS', 'PostCSS', 'Responsive Design', 'SaaS Aesthetics'],
    },
    {
      category: 'Tools & Workflow',
      techs: ['Git & GitHub', 'Cursor / AI Tooling', 'Vite', 'NPM / Node.js'],
    },
    {
      category: 'Architecture & APIs',
      techs: ['RESTful APIs', 'State Management', 'Clean Code Principles', 'Component Design'],
    },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-20 border-t border-zinc-800/80">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight flex items-center gap-3">
        <span className="text-blue-500 font-mono text-xl">02.</span> Tech Stack & Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsData.map((group, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/50 transition-colors duration-200"
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-4 font-semibold">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.techs.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};