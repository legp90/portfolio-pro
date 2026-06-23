import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-16">
      <span className="text-blue-500 font-mono text-sm tracking-wider uppercase mb-3 block">
        Frontend Engineer
      </span>
      
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl">
        Building elegant, performant <br />
        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          web experiences.
        </span>
      </h1>
      
      <p className="text-zinc-400 max-w-2xl text-lg mb-8 leading-relaxed">
        Hi, I'm <strong className="text-white font-semibold">Luis Enrique Guzman Poma</strong>. 
        I am a Frontend Engineer dedicated to building high-performance, accessible web interfaces 
        using React and TypeScript. Passionate about architecting elegant solutions to complex 
        technical challenges and optimizing end-to-end user experiences.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:legp3980@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:scale-105"
        >
          Get in touch
        </a>
        <a
          href="https://github.com/legp90"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-6 py-3 rounded-lg border border-zinc-700 transition-all duration-200 hover:scale-105"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/luis-enrique-guzman-poma-28a9623a8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-6 py-3 rounded-lg border border-zinc-700 transition-all duration-200 hover:scale-105"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};