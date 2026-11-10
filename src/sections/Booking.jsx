import { useState } from 'react'
import { CalendarDays, Clock, Users, CheckCircle2 } from 'lucide-react'
import { bookingTimes } from '../data/content'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const initial = { name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' }

export default function Booking() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) next.phone = 'Enter a valid phone number.'
    if (!form.date) next.date = 'Choose a date.'
    if (!form.time) next.time = 'Choose a time.'
    setErrors(next)
    if (!Object.keys(next).length) setSuccess(true)
  }
  return (
    <section id="booking" className="section-pad bg-maroon text-cream">
      <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal><SectionHeading light eyebrow="Save your seat" title={<>Make it a meal<br /><em className="text-saffron">to remember.</em></>} description="Gather your favourite people. We'll take care of the rest. Share your details and we'll confirm your table shortly." />
          <div className="mt-10 space-y-5 text-sm text-cream/70"><p className="flex items-center gap-3"><CalendarDays className="text-saffron" /> Lunch & dinner, every day</p><p className="flex items-center gap-3"><Users className="text-saffron" /> Intimate tables and group celebrations</p><p className="flex items-center gap-3"><Clock className="text-saffron" /> Please arrive within 15 minutes of your booking</p></div>
        </Reveal>
        <Reveal delay={.12}>
          <form onSubmit={submit} noValidate className="rounded-[2rem] bg-cream p-6 text-ink shadow-2xl sm:p-9">
            {success ? <div className="flex min-h-[460px] flex-col items-center justify-center text-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-700"><CheckCircle2 size={34} /></span><h3 className="mt-6 font-display text-3xl font-bold">Request received!</h3><p className="mt-3 max-w-sm text-sm leading-7 text-stone-600">Thanks, {form.name}. Your demo reservation request is ready. Our team would contact you to confirm the table.</p><button type="button" onClick={() => { setForm(initial); setSuccess(false) }} className="btn btn-maroon mt-7">Make another booking</button></div> :
            <>
              <div className="mb-7"><p className="eyebrow">Reservations</p><h3 className="font-display text-3xl font-bold">Book your table</h3><p className="mt-2 text-xs text-stone-500">Fields marked with * are required.</p></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name *" name="name" value={form.name} onChange={update} error={errors.name} placeholder="e.g. Aditi Rao" />
                <Field label="Email address *" name="email" value={form.email} onChange={update} error={errors.email} placeholder="you@example.com" type="email" />
                <Field label="Phone number *" name="phone" value={form.phone} onChange={update} error={errors.phone} placeholder="+91 98765 43210" />
                <div><label className="form-label" htmlFor="guests">Guests</label><select id="guests" name="guests" value={form.guests} onChange={update} className="form-input">{Array.from({ length: 12 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'guest' : 'guests'}</option>)}</select></div>
                <div><label className="form-label" htmlFor="date">Date *</label><input id="date" type="date" name="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={update} className="form-input" />{errors.date && <Error>{errors.date}</Error>}</div>
                <div><label className="form-label" htmlFor="time">Preferred time *</label><select id="time" name="time" value={form.time} onChange={update} className="form-input"><option value="">Select a time</option>{bookingTimes.map(t => <option key={t}>{t}</option>)}</select>{errors.time && <Error>{errors.time}</Error>}</div>
                <div className="sm:col-span-2"><label className="form-label" htmlFor="notes">Anything we should know? <span className="font-normal text-stone-400">(optional)</span></label><textarea id="notes" name="notes" value={form.notes} onChange={update} rows="3" className="form-input resize-none" placeholder="Celebration, dietary preferences, seating requests..." /></div>
              </div>
              <button type="submit" className="btn btn-maroon mt-6 w-full">Request a reservation <span>→</span></button>
              <p className="mt-4 text-center text-[10px] text-stone-400">Demo form only — no booking is sent to a live restaurant system.</p>
            </>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, error, placeholder, type = 'text' }) {
  return <div><label className="form-label" htmlFor={name}>{label}</label><input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className={`form-input ${error ? 'border-red-500' : ''}`} />{error && <Error>{error}</Error>}</div>
}
function Error({ children }) { return <p className="mt-1 text-[11px] text-red-600">{children}</p> }
