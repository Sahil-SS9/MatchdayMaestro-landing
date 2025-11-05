import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Pricing as PricingSection } from "@/components/pricing"
import { CoinToolkit } from "@/components/coin-toolkit"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export default function PricingPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <SiteHeader />
      
      <section className="container mx-auto px-4 py-16 sm:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Pricing & Coin Boosts
        </h1>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Start free forever. Unlock premium features and strategic coin boosts when you're ready.
        </p>
      </section>

      <PricingSection />
      <CoinToolkit />

      <section className="py-12 px-4 text-center">
        <Link 
          href="/#cta" 
          className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass rounded-2xl hover:scale-105 transition-all"
        >
          <span className="text-lg font-semibold text-white">Ready to get started?</span>
          <span className="text-[#00C896] group-hover:translate-x-2 transition-transform">Join the Waitlist →</span>
        </Link>
      </section>

      <Footer />
    </main>
  )
}
