import type { SkillCategory } from '../types/skills'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'Cursor', 'Docker', 'Figma', 'VS Code'],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    skills: ['REST APIs', 'Clean Code', 'Component Design', 'Accessibility', 'Testing'],
  },
]
