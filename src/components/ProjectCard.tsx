import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-elevated transition-all duration-300 hover:scale-[1.02] hover:border-accent/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden border-b border-surface-border bg-gradient-to-br from-surface-elevated via-indigo-950/40 to-surface"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)] transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex flex-col items-center gap-2 text-zinc-500 transition-colors duration-300 group-hover:text-accent/80">
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
            />
          </svg>
          <span className="font-mono text-xs uppercase tracking-wider">
            Project preview
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-hover">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-surface-border bg-surface px-3 py-1 font-mono text-xs text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-surface-border pt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-surface-border px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-accent/50 hover:text-white"
          >
            View Code
          </a>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}
