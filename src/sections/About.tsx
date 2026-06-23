import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-20 border-t border-zinc-800/80">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
        <span className="text-blue-500 font-mono text-xl">01.</span> About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 text-zinc-400 space-y-4 text-base leading-relaxed">
          <p>
            Hello! I'm Luis Enrique, a frontend developer driven by the challenge of crafting 
            seamless digital experiences. My core engineering philosophy centers on **web performance, 
            scalability, and semantic accessibility**. 
          </p>
          <p>
            I specialize in translating complex visual designs and abstract business logic into 
            clean, maintainable React code bases. I don't just build UI layouts; I ensure that the 
            underlying state management is robust and optimized for smooth user interactions.
          </p>
          <p>
            My daily workflow relies heavily on modern development ecosystems, leveraging tools like 
            <span className="text-white font-medium"> TypeScript</span> for type safety, 
            <span className="text-white font-medium"> Tailwind CSS</span> for fluid utility-first design, 
            and advanced AI-assisted engineering to speed up iteration cycles without compromising architecture.
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-mono">
            Core Values
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400 font-mono">
            <li className="flex items-center gap-2">
              <span className="text-blue-500">→</span> Clean & Readable Code
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">→</span> Mobile-First Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">→</span> Performance Optimization
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">→</span> Constant Self-Improvement
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};