import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export const metadata: Metadata = {
  title: "Terms of Service | Matchday Maestro",
  description: "Terms and conditions for using Matchday Maestro. Read our service agreement, usage policies, and legal information.",
  openGraph: {
    title: "Terms of Service - Matchday Maestro",
    description: "Service terms, usage policies, and legal information for Matchday Maestro users.",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <SiteHeader />
      
      <section className="container mx-auto px-4 py-16 sm:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="liquid-glass rounded-2xl p-8 space-y-6 text-white/80">
          <p className="text-sm text-white/60">Last updated: November 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing Matchday Maestro, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Service</h2>
            <p className="leading-relaxed">
              You agree to use Matchday Maestro only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact</h2>
            <p className="leading-relaxed">
              Questions about the Terms of Service should be sent to{" "}
              <a href="mailto:hello@matchdaymaestro.com" className="text-[#00C896] hover:underline">
                hello@matchdaymaestro.com
              </a>
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
