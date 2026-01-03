import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Matchday Maestro",
  description: "Get answers to common questions about Matchday Maestro. How predictions work, subscription details, coin economy, and everything you need to know.",
  openGraph: {
    title: "FAQ - Frequently Asked Questions",
    description: "Everything you need to know about Matchday Maestro. Predictions, subscriptions, coins, and more.",
  },
}
import { Footer } from "@/components/footer"
import { FAQ as FAQSection } from "@/components/faq"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export default function FAQPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <SiteHeader />
      
      <section className="container mx-auto px-4 py-16 sm:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Everything you need to know about Matchday Maestro.
        </p>
      </section>

      <FAQSection />

      <section className="py-12 px-4 text-center">
        <Link 
          href="/#cta" 
          className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass rounded-2xl hover:scale-105 transition-all"
        >
          <span className="text-lg font-semibold text-white">Still have questions?</span>
          <span className="text-[#00C896] group-hover:translate-x-2 transition-transform">Join the Waitlist →</span>
        </Link>
      </section>

      <Footer />
    </main>
  )
}
