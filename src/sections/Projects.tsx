import React from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
}

export const Projects: React.FC = () => {
  const projectsData: Project[] = [ {
    title: 'AI Assistant Lab',
    description: 'Laboratorio interactivo de ingeniería de prompts con gestión de historial dinámico y un sistema de contingencia (fallback) local resiliente ante limitaciones de cuotas de API externas.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    githubUrl: 'https://github.com/legp90/ai-content-assistant',
    liveUrl: 'https://ai-content-assistant-alpha.vercel.app',
    image: '/ai-lab.png',
  },
  {
    title: "Enterprise SaaS Analytics Dashboard",
    description: "Un panel de control de alto rendimiento para aplicaciones SaaS. Permite visualizar métricas clave como el MRR y la tasa de abandono, utilizando gráficos interactivos dinámicos y tablas de datos con filtrado avanzado en tiempo real.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React"],
    liveUrl: "https://saas-analytics-dashboard-gilt.vercel.app/", // Pon aquí el link de Vercel de tu Proyecto 2
    githubUrl: "https://github.com/legp90/saas-analytics-dashboard", // Pon aquí el link de GitHub de tu Proyecto 2
    image: '/saas-dashboard.png',
  },
    {
    title: "E-Commerce Ecosystem & Checkout",
    description: "Una plataforma de comercio electrónico completa con gestión de estado global para el carrito de compras, filtrado avanzado de productos y un flujo de checkout optimizado con simulación de pasarela de pago y validaciones estrictas.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Context API", "Lucide React"], // Ajusta si usaste otra cosa para el estado global
    liveUrl: "https://ecommerce-ecosystem.vercel.app",
    githubUrl: "https://github.com/legp90/ecommerce-ecosystem",
    image: "/ecommerce-ecosystem.png", // Recuerda verificar si va en la carpeta public o assets
    },

  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 py-20 border-t border-zinc-800/80">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight flex items-center gap-3">
        <span className="text-blue-500 font-mono text-xl">03.</span> Showcase Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div 
            key={index}
            className="flex flex-col bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700/60 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group"
          >
            {/* Project Screenshot Placeholder */}
            {project.image ? (
              <img
  src={project.image}
  alt={project.title}
  className="w-full h-44 object-cover object-top" // object-top es clave para mostrar la parte superior de la captura
/>
) : (
  <div className="h-44 bg-zinc-800/50 flex items-center justify-center">
    <span className="text-zinc-600 font-mono text-xs uppercase">
      [ {project.title.split(' ')[0]} Preview ]
    </span>
  </div>
)}

            {/* Project Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-5 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-zinc-800 text-zinc-400 border border-zinc-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 text-sm font-mono mt-auto">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Code →
                </a>
                <a 
                  href={project.liveUrl}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};