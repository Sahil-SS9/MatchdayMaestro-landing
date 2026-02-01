import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Gloves Up - Boxing Trivia Game | Matchday Maestro",
  description: "Boxing meets football trivia. Answer questions to land punches, build momentum, and knockout your opponent. Solo AI fights or real-time 1v1 multiplayer.",
  openGraph: {
    title: "Gloves Up - Boxing Trivia Game",
    description: "Boxing meets football trivia. Answer questions to land punches, build momentum, and knockout your opponent.",
  },
}
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"

export default function GlovesUpPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-6xl block mb-4">🥊</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Gloves Up
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Boxing meets football trivia. Answer questions to land punches, build momentum, and knockout your opponent—AI or real player.
            </p>
          </div>

          {/* What Is Gloves Up? */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#EF4444]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is Gloves Up?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Gloves Up is a boxing-themed football trivia game where every correct answer is a punch landed. Fight your way through 5 AI difficulty tiers in solo mode, or go head-to-head against real players in multiplayer. Build momentum with consecutive correct answers to deal devastating damage.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Choose between Quick Bouts (3 rounds) or Full Fights (5 rounds). Use tactical consumables between rounds to heal, boost damage, or sabotage your opponent. Win by KO or let the judges decide on points. Collect coins, climb the rankings, and prove you're the GOAT.
              </p>
            </div>
          </section>

          {/* What It Includes */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#EF4444]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What It Includes</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Fight Night (Solo)</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Battle through 5 AI difficulty tiers, each with unique fighting styles and challenge levels.
                  </p>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>Rookie &bull; Contender &bull; Champion &bull; Undisputed &bull; GOAT</li>
                  </ul>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Title Fight (Multiplayer)</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Real-time 1v1 fights against other players with coin stake tiers.
                  </p>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>Friendly (free) &bull; Bronze &bull; Silver &bull; Gold stakes</li>
                  </ul>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Combat Mechanics</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Health bars, momentum system (0-5 levels, up to 2x damage), and 4 possible outcomes per question.
                  </p>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>Hit &bull; Block &bull; Counter &bull; Knockout Blow</li>
                  </ul>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Consumables</h3>
                  <p className="text-white/70 text-sm mb-3">
                    6 tactical items to use between rounds for strategic advantage.
                  </p>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>Smelling Salts &bull; Second Wind &bull; Lucky Gloves</li>
                    <li>Low Blow &bull; Ice Pack &bull; Adrenaline Shot</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#EF4444]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF4444]/20 flex items-center justify-center font-bold text-[#EF4444]">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Choose Your Fight</h3>
                    <p className="text-white/70">
                      Pick Solo (vs AI) or Multiplayer (vs real player). Select Quick Bout (3 rounds) or Full Fight (5 rounds). Set your stake in multiplayer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF4444]/20 flex items-center justify-center font-bold text-[#EF4444]">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Answer Questions</h3>
                    <p className="text-white/70">
                      You have 15 seconds per question. Correct answers deal damage to your opponent. Wrong answers leave you open to counter-attacks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF4444]/20 flex items-center justify-center font-bold text-[#EF4444]">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Build Momentum</h3>
                    <p className="text-white/70">
                      Consecutive correct answers build your momentum meter across 5 levels, dealing up to 2x damage. One wrong answer resets your streak.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF4444]/20 flex items-center justify-center font-bold text-[#EF4444]">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Use Consumables</h3>
                    <p className="text-white/70">
                      Between rounds, deploy tactical items—heal with Ice Pack, boost damage with Adrenaline Shot, or disrupt your opponent with Low Blow.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EF4444]/20 flex items-center justify-center font-bold text-[#EF4444]">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Win by KO or Decision</h3>
                    <p className="text-white/70">
                      Reduce your opponent's health to zero for a knockout, or outscore them on the judges' cards. Collect coins, climb the ranks, and unlock new tiers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C] text-lg py-6 px-8 rounded-full"
            >
              <Link href="/#cta">Join the Waitlist</Link>
            </Button>
            <div>
              <Link href="/features" className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                &larr; View All Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
