import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <SiteHeader />
      
      <section className="container mx-auto px-4 py-16 sm:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="liquid-glass rounded-2xl p-8 space-y-6 text-white/80">
          <p className="text-sm text-white/60">Last updated: November 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us, including your email address when you join our waitlist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to send you updates about Matchday Maestro's launch and features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
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
