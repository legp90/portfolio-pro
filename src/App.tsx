import { Navbar } from './components'
import { About, Contact, Hero, Projects, Skills } from './sections'
import type { NavItem } from './types/navigation'

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar brand="portfolio.pro" items={NAV_ITEMS} />
      <main className="flex-1">
      <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
