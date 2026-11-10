import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Menu from './sections/Menu'
import Gallery from './sections/Gallery'
import Booking from './sections/Booking'
import Reviews from './sections/Reviews'
import Visit from './sections/Visit'

export default function App() {
  return (
    <>
      <div className="demo-banner">DEMO WEBSITE <span>·</span> Sample restaurant experience</div>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Reviews />
        <Booking />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
