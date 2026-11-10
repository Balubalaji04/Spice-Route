import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryImages } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const move = (direction) => setSelected(index => (index + direction + galleryImages.length) % galleryImages.length)
  return (
    <section id="gallery" className="section-pad bg-cream">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="A seat at our table" title="Good food, beautiful moments." description="A glimpse into the colours, craft and company that make every visit memorable." /></Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {galleryImages.map((item, i) => <Reveal key={item.src} delay={i * .05}><button onClick={() => setSelected(i)} className={`gallery-tile ${i === 0 || i === 5 ? 'aspect-[1/1.15]' : 'aspect-[1/1]'}`}><img src={item.src} alt={item.alt} /><span>{item.caption}</span></button></Reveal>)}
        </div>
      </div>
      <AnimatePresence>
        {selected !== null && <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <button aria-label="Close lightbox" onClick={() => setSelected(null)} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white"><X /></button>
          <button aria-label="Previous image" onClick={e => { e.stopPropagation(); move(-1) }} className="absolute left-3 rounded-full bg-white/10 p-3 text-white md:left-8"><ChevronLeft /></button>
          <motion.div key={selected} initial={{ scale: .96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-h-[85vh] max-w-5xl" onClick={e => e.stopPropagation()}><img src={galleryImages[selected].src} alt={galleryImages[selected].alt} className="max-h-[78vh] w-auto rounded-xl object-contain" /><p className="mt-4 text-center text-sm text-white/70">{galleryImages[selected].caption}</p></motion.div>
          <button aria-label="Next image" onClick={e => { e.stopPropagation(); move(1) }} className="absolute right-3 rounded-full bg-white/10 p-3 text-white md:right-8"><ChevronRight /></button>
        </motion.div>}
      </AnimatePresence>
    </section>
  )
}
