import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { menuCategories, menuItems } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Menu() {
  const [active, setActive] = useState('All')
  const reduce = useReducedMotion()
  const filtered = useMemo(() => active === 'All' ? menuItems : menuItems.filter(item => item.category === active), [active])
  return (
    <section id="menu" className="section-pad bg-[#F9EBDD]">
      <div className="container-shell">
        <Reveal><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionHeading eyebrow="From our kitchen" title="A menu with a little wanderlust." description="A few favourites from our kitchen. Made with seasonal produce, whole spices and plenty of heart." /><a href="#booking" className="hidden text-sm font-bold text-maroon underline decoration-saffron decoration-2 underline-offset-8 md:block">Reserve your table ↗</a></div></Reveal>
        <div className="mt-10 flex gap-2 overflow-x-auto pb-3">
          {menuCategories.map(cat => <button key={cat} onClick={() => setActive(cat)} className={`whitespace-nowrap rounded-full px-5 py-3 text-xs font-bold transition ${active === cat ? 'bg-maroon text-cream shadow-lg' : 'border border-maroon/15 bg-white/60 text-maroon hover:bg-white'}`}>{cat}</button>)}
        </div>
        <motion.div layout className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => <motion.article layout key={item.id} initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: reduce ? 0 : .35, delay: reduce ? 0 : i * .04 }} className="menu-card group">
              <div className="relative overflow-hidden"><img src={item.image} alt={item.name} className="h-52 w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-maroon">{item.tag}</span></div>
              <div className="p-5"><div className="flex items-start justify-between gap-3"><h3 className="font-display text-xl font-bold text-ink">{item.name}</h3><span className="pt-1 text-sm font-extrabold text-maroon">₹{item.price}</span></div><p className="mt-2 text-xs leading-6 text-stone-500">{item.description}</p></div>
            </motion.article>)}
          </AnimatePresence>
        </motion.div>
        <p className="mt-7 text-center text-[10px] text-stone-500">Menu and prices are illustrative demo content. Please ask our team about allergens.</p>
      </div>
    </section>
  )
}
