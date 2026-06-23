import type { NavItem } from '../types/navigation'

interface NavbarProps {
  brand: string
  items: NavItem[]
}

export function Navbar({ brand, items }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-surface/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight text-white transition-colors hover:text-accent"
        >
          {brand}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}
