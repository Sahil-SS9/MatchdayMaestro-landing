import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "How It Works - Fair Football Predictions | Matchday Maestro",
  description: "Learn how Matchday Maestro works. Live event detection, fair 30-second windows, and transparent scoring. Football predictions that reward knowledge over luck.",
  openGraph: {
    title: "How It Works - Fair Football Predictions",
    description: "Live match alerts, quick decisions, instant scoring, and friend competition. Simple, fair, fun.",
  },
}
import { Footer } from "@/components/footer"
import { AIAutopilotHero } from "@/components/ai-autopilot-hero"
import { HowItWorks as HowItWorksSection } from "@/components/how-it-works"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesCarousel } from "@/components/features-carousel"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <SiteHeader />
      
      <section className="container mx-auto px-4 py-16 sm:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          How Matchday Maestro Works
        </h1>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Discover the revolutionary system that makes live football predictions fair, engaging, and skill-based.
        </p>
      </section>

      <HowItWorksSection />
      <SolutionSection />
      <AIAutopilotHero />
      <FeaturesCarousel />

      <section className="py-12 px-4 text-center">
        <Link 
          href="/#cta" 
          className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass rounded-2xl hover:scale-105 transition-all"
        >
          <span className="text-lg font-semibold text-white">Ready to join the revolution?</span>
          <span className="text-[#00C896] group-hover:translate-x-2 transition-transform">Join the Waitlist →</span>
        </Link>
      </section>

      <Footer />
    </main>
  )
}
