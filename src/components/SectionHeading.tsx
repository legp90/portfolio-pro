interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  )
}
