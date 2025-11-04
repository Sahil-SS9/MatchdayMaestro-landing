import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorks } from "@/components/how-it-works"
import { SocialFeatures } from "@/components/social-features"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { EarlyAccess } from "@/components/early-access"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export default function Page() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <SocialFeatures />
      <Pricing />
      <FAQ />
      <EarlyAccess />
      <FinalCTA />
      <Footer />
    </main>
  )
}
