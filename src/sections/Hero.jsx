import { ArrowDown, ArrowUpRight, Star } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import SpiceScene from '../components/SpiceScene'

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="home" className="hero-bg relative min-h-[760px] overflow-hidden bg-maroon text-cream md:min-h-[820px]">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="container-shell relative z-10 grid min-h-[760px] items-center gap-5 pb-16 pt-40 md:min-h-[820px] md:grid-cols-[1.03fr_.97fr] md:pt-32">
        <div className="max-w-2xl">
          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={reduce ? {} : { opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-saffron/40 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-saffron"><Star size={12} fill="currentColor" /> A taste of the Deccan</motion.div>
          <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={reduce ? {} : { opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }} className="font-display text-[3.5rem] font-semibold leading-[1.03] tracking-[-.04em] sm:text-7xl lg:text-[5.8rem]">Where every<br /><span className="italic text-saffron">spice</span> tells a story.</motion.h1>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={reduce ? {} : { opacity: 1 }} transition={{ delay: .35, duration: .8 }} className="mt-7 max-w-lg text-sm leading-7 text-cream/70 md:text-base">Follow the aromas of the old spice trails. Discover soulful Hyderabadi favourites, regional Indian plates and new stories made fresh every day.</motion.p>
          <motion.div initial={reduce ? false : { opacity: 0, y: 15 }} animate={reduce ? {} : { opacity: 1, y: 0 }} transition={{ delay: .5 }} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#booking" className="btn btn-saffron">Book a table <ArrowUpRight size={17} /></a>
            <a href="#menu" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-cream hover:text-saffron">Explore the menu <ArrowDown size={15} /></a>
          </motion.div>
          <div className="mt-14 flex items-center gap-4 border-t border-white/15 pt-6">
            <div className="flex -space-x-2">{['A','R','P'].map((x,i)=><span key={x} className={`grid h-9 w-9 place-items-center rounded-full border-2 border-maroon text-xs font-bold text-maroon ${['bg-saffron','bg-orange-200','bg-rose-200'][i]}`}>{x}</span>)}</div>
            <p className="text-xs leading-5 text-cream/60"><strong className="text-cream">Good food. Good company.</strong><br />Your next favourite table awaits.</p>
          </div>
        </div>
        <div className="relative mx-auto mt-2 h-[220px] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-saffron/20 md:hidden">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=85" alt="A colourful assortment of Indian spices" className="h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-5 font-display text-xl italic text-cream">A world of flavour, in every bite.</p>
        </div>
        <div className="relative mx-auto hidden h-[490px] w-full max-w-[560px] md:block">
          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-saffron/20" />
          <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cream/20" />
          <SpiceScene />
          <div className="absolute bottom-7 left-2 rounded-2xl border border-white/15 bg-[#541717]/80 px-5 py-4 backdrop-blur"><p className="font-display text-2xl text-saffron">Slow food.</p><p className="mt-1 text-[10px] uppercase tracking-[.2em] text-cream/60">Big-hearted flavours</p></div>
        </div>
        <div className="pointer-events-none absolute bottom-8 right-8 hidden text-[10px] uppercase tracking-[.25em] text-cream/35 lg:block">17°25' N · 78°24' E</div>
      </div>
    </section>
  )
}
