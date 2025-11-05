import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"

export default function LiveTrackingPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-6xl block mb-4">📊</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Live Match Tracking
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Real-time stats, lineups, momentum graphs, and match events. All the data you need to make smarter predictions.
            </p>
          </div>

          {/* What It Is */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#1E3A8A]/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is Live Match Tracking?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Your all-in-one match companion. Watch live scores, see every event as it happens, check lineups, view momentum graphs, and dive deep into match statistics—all in one beautifully designed screen that updates in real-time.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Everything updates automatically as the match unfolds. No refreshing, no waiting. See goals, cards, substitutions, and all the key moments instantly. Plus, use the detailed stats and momentum graphs to make smarter predictions.
              </p>
            </div>
          </section>

          {/* App Screenshot Placeholder */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <p className="text-white/50 text-sm">App Screenshot Placeholder</p>
              </div>
              <p className="text-sm text-white/50 mt-4">Live Match Tracking Interface</p>
            </div>
          </section>

          {/* What It Includes */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#1E3A8A]/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What It Includes</h2>
              
              <div className="space-y-6">
                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">📱 Overview Tab</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Live score updates every 10 seconds</li>
                    <li>• Venue information with city and capacity</li>
                    <li>• Full match timeline history (goals, cards, substitutions, VAR decisions, penalties, and more)</li>
                    <li>• Expandable match statistics (possession, shots, passes, corners, fouls)</li>
                    <li>• Momentum graph using enhanced 5-factor calculations</li>
                  </ul>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">⚽ Lineup Tab</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Interactive formation display supporting all major formations (4-3-3, 4-4-2, 4-2-3-1, 3-5-2, etc.)</li>
                    <li>• Dynamic horizontal player positioning using even spacing algorithms</li>
                    <li>• Player names and shirt numbers from API-Football</li>
                    <li>• Visual representation on a football pitch background</li>
                  </ul>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">📈 Head-to-Head Tab</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Historical matchup data showing last 5 meetings</li>
                    <li>• Win/loss/draw records</li>
                    <li>• Previous scorelines</li>
                  </ul>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">📊 Live Momentum Tab</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Enhanced momentum visualization with minute-by-minute breakdowns</li>
                    <li>• Shows which team is dominating at each stage of the match</li>
                    <li>• Diverging format with home team bars extending upward and away team bars downward</li>
                  </ul>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">📉 Statistics Tab</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Deep dive into 11+ statistical categories</li>
                    <li>• Dangerous attacks, offsides, goalkeeper saves, pass accuracy</li>
                    <li>• Team comparison bars for visual analysis</li>
                    <li>• All data from real match feeds with no mock values</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#1E3A8A]/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-400">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Watch Matches Live</h3>
                    <p className="text-white/70">
                      Open any live match to see scores, events, and statistics updating in real-time. Everything refreshes automatically as the match unfolds—no need to reload the page.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-400">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Explore Match Details</h3>
                    <p className="text-white/70">
                      Switch between tabs to see lineups, head-to-head history, momentum graphs, and comprehensive statistics. All the information you need to understand what's happening on the pitch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-400">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Use Data for Predictions</h3>
                    <p className="text-white/70">
                      The stats and momentum graphs help you make smarter predictions. See which team is dominating, check historical matchups, and use real-time data to inform your choices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-green-400">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Complete Match History</h3>
                    <p className="text-white/70">
                      For finished matches, the system displays an "FT" badge with final scores and preserves full event history so you can review everything that happened during the match.
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
              className="bg-gradient-to-r from-[#00C896] to-[#10b981] hover:from-[#00b382] hover:to-[#0ea370] text-lg py-6 px-8 rounded-full"
            >
              <Link href="/#cta">Join the Waitlist</Link>
            </Button>
            <div>
              <Link href="/features" className="text-[#00C896] hover:text-[#00b382] transition-colors">
                ← View All Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

