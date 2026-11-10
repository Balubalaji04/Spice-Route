import { Instagram, Facebook, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#260D0D] text-cream">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <p className="font-display text-3xl font-bold">Spice Route Kitchen<span className="text-saffron">.</span></p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/55">A celebration of the spice trails, family tables and bold flavours that make Indian food unforgettable.</p>
          <div className="mt-6 flex gap-3"><a aria-label="Instagram" href="#social" className="social-icon"><Instagram size={18} /></a><a aria-label="Facebook" href="#social" className="social-icon"><Facebook size={18} /></a></div>
        </div>
        <div><p className="footer-label">Explore</p><div className="mt-5 grid gap-3 text-sm text-cream/65"><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#gallery">Gallery</a><a href="#booking">Reservations</a></div></div>
        <div><p className="footer-label">Find us</p><p className="mt-5 text-sm leading-7 text-cream/65">Road No. 36, Jubilee Hills<br />Hyderabad, Telangana 500033</p><a href="#location" className="mt-4 inline-flex items-center gap-2 text-sm text-saffron">Get directions <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="border-t border-white/10"><div className="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-cream/40 sm:flex-row"><span>© 2026 Spice Route Kitchen. Demo website.</span><span>Made with warmth in Hyderabad.</span></div></div>
    </footer>
  )
}
