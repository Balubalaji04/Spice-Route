import { useState } from 'react'
import { Menu, X, Flame } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-10 z-40">
      <nav className="container-shell flex items-center justify-between py-5">
        <a href="#home" className="flex items-center gap-2 text-cream" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-saffron text-maroon"><Flame size={21} /></span>
          <span className="font-display text-xl font-bold leading-none">Spice Route<span className="block pt-1 font-sans text-[9px] font-semibold uppercase tracking-[.32em] text-cream/60">Kitchen · Hyderabad</span></span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => <a key={link.href} className="nav-link" href={link.href}>{link.label}</a>)}
          <a href="#booking" className="btn btn-saffron !px-5 !py-3">Book a table</a>
        </div>
        <button className="rounded-full border border-white/20 p-2 text-cream md:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="mx-5 rounded-2xl border border-white/10 bg-[#551515] p-5 shadow-2xl md:hidden">
        {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-sm text-cream">{link.label}</a>)}
        <a href="#booking" onClick={() => setOpen(false)} className="btn btn-saffron mt-4 w-full">Book a table</a>
      </div>}
    </header>
  )
}
