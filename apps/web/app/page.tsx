import { Navbar } from "../components/web/navbar"
import { Hero } from "../components/web/hero"
import { Pricing } from "../components/web/pricing"
import { Footer } from "../components/web/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Pricing Section */}
      <Pricing />
      {/* Footer Minimal */}
      <Footer />
    </div>
  )
}
