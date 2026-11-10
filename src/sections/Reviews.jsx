import { useState } from 'react'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { reviews } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const review = reviews[index]
  return (
    <section id="reviews" className="section-pad bg-[#F9EBDD]">
      <div className="container-shell grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <Reveal><SectionHeading eyebrow="Kind words" title="The best stories are shared." description="A few notes from guests who have made a little room for us in their memories." /><div className="mt-7 flex gap-2"><button aria-label="Previous review" onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)} className="round-arrow"><ArrowLeft size={18} /></button><button aria-label="Next review" onClick={() => setIndex((index + 1) % reviews.length)} className="round-arrow"><ArrowRight size={18} /></button></div></Reveal>
        <Reveal delay={.1}><div className="relative min-h-[300px] rounded-[2rem] bg-maroon p-8 text-cream shadow-warm sm:p-12"><span className="absolute right-8 top-3 font-display text-8xl leading-none text-saffron/20">“</span><div className="flex gap-1 text-saffron">{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><AnimatePresence mode="wait"><motion.div key={index} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .3 }}><blockquote className="relative mt-7 font-display text-2xl leading-relaxed sm:text-3xl">“{review.quote}”</blockquote><div className="mt-9 border-t border-white/15 pt-5"><p className="text-sm font-bold">{review.name}</p><p className="mt-1 text-xs text-cream/50">{review.area} · Guest review (demo)</p></div></motion.div></AnimatePresence><div className="absolute bottom-8 right-9 flex gap-1">{reviews.map((_, i) => <span key={i} className={`h-1 rounded-full transition-all ${i === index ? 'w-7 bg-saffron' : 'w-2 bg-white/30'}`} />)}</div></div></Reveal>
      </div>
    </section>
  )
}
