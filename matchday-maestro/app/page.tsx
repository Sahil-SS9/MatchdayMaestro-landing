import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { InfiniteScrollMarquee } from "@/components/infinite-scroll-marquee"
import { ProblemSection } from "@/components/problem-section"
import { ZigzagSection } from "@/components/zigzag-section"
import { ReverseTimeline } from "@/components/reverse-timeline"
import { FeatureTeasers } from "@/components/feature-teasers"
import { PricingToggle } from "@/components/pricing-toggle"
import { EarlyAccess } from "@/components/early-access"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export default function Page() {
  const howItWorksSteps = [
    {
      icon: "📱",
      title: "Live Event Detection",
      description: "We react to the match as it actually unfolds - goals, cards, momentum shifts. The second something happens, you get a prediction opportunity. No waiting for TV broadcasts to catch up."
    },
    {
      icon: "⏱️",
      title: "Fair 30-Second Windows",
      description: "Everyone gets notified simultaneously. Same 30 seconds to respond. Whether you're watching Sky Sports or just got a push notification - nobody gets an unfair head start."
    },
    {
      icon: "🎯",
      title: "10 Points = 10 Points",
      description: "No matter if you're free or premium. Everyone earns the same points per correct prediction. Premium wins through volume (5 vs 3 predictions per match), not rigged scoring."
    }
  ]

  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      <Hero />
      <InfiniteScrollMarquee />
      <ProblemSection />
      <ZigzagSection items={howItWorksSteps} />
      <ReverseTimeline />
      <FeatureTeasers />
      <PricingToggle />
      <EarlyAccess />
      
      {/* Learn More CTA - FAQ */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass rounded-2xl hover:scale-105 transition-all border border-white/10 hover:border-[#00C896]/50"
          >
            <span className="text-lg font-semibold text-white">Have questions about how it works?</span>
            <span className="text-[#00C896] group-hover:translate-x-2 transition-transform">See All FAQs →</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
