import type { Metadata } from "next"
import Link from "next/link"
import { Smartphone, Timer, Target, Zap, Ban } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { DelayBanner } from "@/components/delay-banner"

export const metadata: Metadata = {
  title: "Matchday Maestro - Fair Football Predictions That Reward Knowledge",
  description: "The only prediction app where everyone gets the same 30-second window. Live predictions, AI Autopilot, Target Man trivia, battles with friends. Join the waitlist.",
  keywords: ["football predictions", "premier league", "live predictions", "football trivia", "AI predictions", "fantasy football alternative"],
  openGraph: {
    title: "Matchday Maestro - Fair Football Predictions",
    description: "Finally, football predictions that reward knowledge over luck. Live event detection, fair windows, transparent scoring.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matchday Maestro - Fair Football Predictions",
    description: "The only prediction app where everyone gets the same 30-second window.",
  },
}
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
      icon: <Smartphone className="w-12 h-12" />,
      title: "Live Event Detection",
      description: "We react to the match as it actually unfolds - goals, cards, momentum shifts. The second something happens, you get a prediction opportunity. No waiting for TV broadcasts to catch up."
    },
    {
      icon: <Timer className="w-12 h-12" />,
      title: "Fair 30-Second Windows",
      description: "Everyone gets notified simultaneously. Same 30 seconds to respond. Whether you're watching Sky Sports or just got a push notification - nobody gets an unfair head start."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "10 Points = 10 Points",
      description: "No matter if you're free or premium. Everyone earns the same points per correct prediction. Premium wins through volume (5 vs 3 predictions per match), not rigged scoring."
    }
  ]

  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      <DelayBanner />
      <Hero />
      <InfiniteScrollMarquee />
      <ProblemSection />
      <ZigzagSection items={howItWorksSteps} />
      <ReverseTimeline />
      <FeatureTeasers />
      <PricingToggle />
      <EarlyAccess />

      {/* Upcoming Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#9333EA]/20 to-[#EC4899]/20 border border-[#9333EA]/40 text-sm font-semibold text-[#EC4899] mb-4">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              What's Next?
            </h2>
            <p className="text-white/60 mt-2">More ways to compete, more games to master</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Lightning Round Battles */}
            <div className="liquid-glass rounded-2xl p-6 border border-[#F59E0B]/30 hover:border-[#F59E0B]/60 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-[#F59E0B]" />
                <div>
                  <span className="text-xs px-2 py-0.5 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded text-[#F59E0B]">
                    Battles
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Round</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Rapid-fire battle mode. 60-second windows, first to 10 correct predictions wins. Escalating multipliers, winner gets the coins.
              </p>
            </div>

            {/* Ruled Out */}
            <div className="liquid-glass rounded-2xl p-6 border border-[#EF4444]/30 hover:border-[#EF4444]/60 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-10 h-10 text-[#EF4444]" />
                <div>
                  <span className="text-xs px-2 py-0.5 bg-[#EF4444]/20 border border-[#EF4444]/40 rounded text-[#EF4444]">
                    New Game
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ruled Out</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Mind games meet trivia. Two players race to name footballers—but duplicates cancel out. Think like no one else to win.
              </p>
            </div>
          </div>
        </div>
      </section>

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
