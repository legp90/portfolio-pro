import type { Project } from '../types/project'

export const SHOWCASE_PROJECTS: Project[] = [
  {
    id: 'devflow-dashboard',
    title: 'DevFlow Dashboard',
    description:
      'A real-time analytics dashboard for engineering teams with role-based access, interactive charts, and performance insights.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://example.com',
  },
  {
    id: 'taskforge-api',
    title: 'TaskForge API',
    description:
      'A scalable REST API for project management with JWT authentication, validation layers, and comprehensive test coverage.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://example.com',
  },
  {
    id: 'pixelcraft-studio',
    title: 'PixelCraft Studio',
    description:
      'A portfolio builder platform featuring drag-and-drop layouts, theme customization, and optimized static site generation.',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://example.com',
  },
]
