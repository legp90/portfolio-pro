interface SkillBadgeProps {
  label: string
}

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex cursor-default items-center rounded-lg border border-surface-border bg-surface px-3 py-2 font-mono text-xs text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]">
      {label}
    </span>
  )
}
