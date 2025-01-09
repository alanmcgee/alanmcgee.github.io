'use client'

import { usePathname } from 'next/navigation'

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <a 
      href={href} 
      className={`pointer-events-auto text-zinc-500 hover:text-teal-600 transition-colors ${
        isActive ? 'font-medium text-zinc-600' : ''
      }`}
    >
      {children}
    </a>
  )
}

export function Navigation() {
  return (
    <nav className="flex items-center justify-center gap-8 px-4 py-4 uppercase text-sm">
      <NavLink href="/">About</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/publications">Publications</NavLink>
    </nav>
  )
} 