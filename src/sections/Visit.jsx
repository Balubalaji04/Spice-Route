import { Clock3, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { openingHours } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Visit() {
  return (
    <section id="location" className="section-pad bg-cream">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="Come on over" title="Your table is waiting." description="Find us in the heart of Jubilee Hills. Drop in for a leisurely lunch or make an evening of it." /></Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal className="rounded-[2rem] bg-[#F9EBDD] p-7 sm:p-9">
            <div className="mb-7 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-saffron/20 text-maroon"><Clock3 /></span><h3 className="font-display text-2xl font-bold">Opening hours</h3></div>
            <div className="space-y-4">{openingHours.map(([day, time]) => <div key={day} className="flex justify-between gap-4 border-b border-maroon/10 pb-3 text-xs"><span className="font-semibold text-stone-600">{day}</span><span className="text-right font-bold text-maroon">{time}</span></div>)}</div>
            <div className="mt-8 space-y-4 text-sm"><p className="flex items-start gap-3 text-stone-600"><MapPin className="shrink-0 text-maroon" size={18} /> Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033</p><p className="flex items-center gap-3 text-stone-600"><Phone className="text-maroon" size={18} /> +91 40 4567 8900 (demo)</p></div>
          </Reveal>
          <Reveal delay={.1}><div className="map-placeholder relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#E9E3D8]">
            <div className="map-lines absolute inset-0 opacity-70" /><div className="relative z-10 max-w-xs rounded-2xl bg-cream p-6 text-center shadow-warm"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-maroon text-saffron"><MapPin /></span><p className="mt-4 font-display text-xl font-bold text-ink">Spice Route Kitchen</p><p className="mt-2 text-xs leading-5 text-stone-500">Road No. 36, Jubilee Hills<br />Hyderabad, Telangana</p><span className="mt-4 inline-flex text-[9px] font-bold uppercase tracking-widest text-maroon">Map preview · Demo</span></div>
            <span className="absolute bottom-5 right-6 text-[9px] font-bold uppercase tracking-widest text-stone-500">Map placeholder</span>
          </div></Reveal>
        </div>
      </div>
    </section>
  )
}
