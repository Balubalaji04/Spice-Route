import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Story() {
  return (
    <section id="story" className="section-pad bg-cream">
      <div className="container-shell grid items-center gap-14 md:grid-cols-2">
        <Reveal className="relative">
          <img className="h-[440px] w-full rounded-[2rem] object-cover" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1100&q=85" alt="Warmly lit restaurant interior" />
          <div className="absolute -bottom-7 -right-3 max-w-[220px] rounded-2xl bg-saffron p-5 text-maroon shadow-warm sm:-right-7"><p className="font-display text-3xl font-bold">A little</p><p className="font-display text-3xl italic">wanderlust.</p><p className="mt-2 text-xs leading-5">A lot of love for the food that brings us together.</p></div>
        </Reveal>
        <Reveal delay={.12}>
          <SectionHeading eyebrow="Our story" title={<>Rooted in tradition.<br /><em className="text-maroon">Seasoned</em> with curiosity.</>} description="Spice Route Kitchen is our love letter to India's rich food culture. From the bustling lanes of Hyderabad to the coastal kitchens of the south, we bring familiar flavours to the table with a little imagination." />
          <p className="mt-5 text-sm leading-7 text-stone-600">We believe the best meals are never rushed. Our kitchens honour local ingredients, patient cooking and recipes passed around the family table.</p>
          <a href="#menu" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-maroon underline decoration-saffron decoration-2 underline-offset-8">Discover our menu <ArrowUpRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  )
}
