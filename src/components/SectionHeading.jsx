export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${light ? 'text-saffron' : ''}`}>{eyebrow}</p>
      <h2 className={`section-title ${light ? 'text-cream' : 'text-ink'}`}>{title}</h2>
      {description && <p className={`mt-4 max-w-xl text-sm leading-7 md:text-base ${light ? 'text-cream/65' : 'text-stone-600'}`}>{description}</p>}
    </div>
  )
}
