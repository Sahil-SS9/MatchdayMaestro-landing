import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              All Features
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to dominate the prediction game. From AI automation to strategic powerups.
            </p>
          </div>

          {/* Feature Sections */}
          <div className="space-y-20">
            {/* AI Autopilot */}
            <section id="ai-autopilot" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">🤖</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Autopilot</h2>
                    <p className="text-xl text-white/70 mb-6">
                      Your tireless mate who plays for you 24/7. Even while you sleep. 
                      Choose your strategy and let AI earn points around the clock.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold mb-2">Basic Strategy (FREE)</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Conservative, low-risk predictions focused on high-probability outcomes.
                    </p>
                    <div className="text-sm text-white/50">
                      <span className="font-semibold text-[#00C896]">40-45%</span> success rate
                    </div>
                  </div>
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold mb-2">Premium Strategies</h3>
                    <p className="text-white/70 text-sm mb-2">
                      <strong>Conservative:</strong> Balanced approach with 65%+ confidence
                    </p>
                    <p className="text-white/70 text-sm mb-2">
                      <strong>Optimist:</strong> Aggressive high-reward strategy
                    </p>
                    <p className="text-white/70 text-sm mb-3">
                      <strong>Statistical:</strong> Purely data-driven decisions
                    </p>
                    <div className="text-sm text-white/50">
                      <span className="font-semibold text-[#00C896]">60-70%</span> success rate
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
                    Auto-pauses when you're active
                  </span>
                  <span className="px-4 py-2 bg-[#00C896]/20 border border-[#00C896]/40 rounded-full text-sm text-[#00C896]">
                    Batched notifications
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
                    Performance analytics
                  </span>
                </div>
              </div>
            </section>

            {/* Coin Toolkit */}
            <section id="coin-toolkit" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">💰</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Coin Toolkit</h2>
                    <p className="text-xl text-white/70 mb-6">
                      9 ways to bend the game in your favor. Strategic powerups that give you the edge.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    { name: "Streak Shield", cost: 80, desc: "Protect your streak from one wrong answer" },
                    { name: "Double Points", cost: 100, desc: "2x points on your next 3 predictions" },
                    { name: "Second Chance", cost: 50, desc: "Modify a prediction after submission" },
                    { name: "Lightning Round", cost: 120, desc: "Chain 5 correct for 5x multiplier" },
                    { name: "Extra Prediction", cost: 50, desc: "Bypass tier limits for one match" },
                    { name: "Double Coin Rewards", cost: 100, desc: "Double all coin earnings for 24h" },
                    { name: "Lucky Dip", cost: 50, desc: "Let AI make the prediction for you" },
                    { name: "Prediction Steal", cost: "Varies", desc: "View top predictions before deadline" },
                    { name: "Golden Ticket", cost: "Premium", desc: "Premium feature access" },
                  ].map((powerup, idx) => (
                    <div key={idx} className="liquid-glass rounded-xl p-4 border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base font-bold">{powerup.name}</h3>
                        <span className="text-xs px-2 py-1 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded text-[#F59E0B]">
                          {powerup.cost} coins
                        </span>
                      </div>
                      <p className="text-white/60 text-xs">{powerup.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-[#F59E0B] hover:text-[#F59E0B]/80 font-semibold"
                  >
                    View Coin Packages →
                  </Link>
                </div>
              </div>
            </section>

            {/* Battles & Leagues */}
            <section id="battles-leagues" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">⚔️</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Battles & Leagues</h2>
                    <p className="text-xl text-white/70 mb-6">
                      1v1 your mates. Winner takes all. Free friendly or coin-wagered showdowns.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Battles</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• Challenge friends to predict specific matches</li>
                      <li>• Optional coin wagering (winner takes all)</li>
                      <li>• Battle types: Standard, Lightning, Streak, High-Stakes</li>
                      <li>• Automatic resolution when match finishes</li>
                      <li>• Detailed battle history and analytics</li>
                    </ul>
                  </div>
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Private Leagues</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• Create custom leaderboards with friends</li>
                      <li>• Free: Up to 10 members, Premier League only</li>
                      <li>• Premium: Up to 100 members, all 6 competitions</li>
                      <li>• Gameweek and All-Time standings</li>
                      <li>• League management tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Daily & Weekly Quizzes */}
            <section id="quizzes" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">📝</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Daily & Weekly Quizzes</h2>
                    <p className="text-xl text-white/70 mb-6">
                      9,000+ football questions. Test your knowledge, earn coins, and climb quiz leaderboards.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Daily Quiz Challenges</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Quick 5-10 question rounds for casual engagement. Perfect for testing your football knowledge on the go.
                    </p>
                    <div className="text-sm text-[#00C896]">
                      Earn 5-15 coins per correct answer
                    </div>
                  </div>
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Weekly Quiz Competitions</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Longer format with leaderboard rankings and prizes. Compete against the community.
                    </p>
                    <div className="text-sm text-[#00C896]">
                      Categories: History, Tactics, Stats, Trivia
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Live Match Tracking */}
            <section id="live-tracking" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">📊</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Match Tracking</h2>
                    <p className="text-xl text-white/70 mb-6">
                      Real-time stats, lineups, momentum graphs, and match events. All the data you need to make smarter predictions.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Match Overview</h3>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Live score updates every 10 seconds</li>
                      <li>• 14 event types (goals, cards, VAR, etc.)</li>
                      <li>• Real-time match statistics</li>
                      <li>• Momentum graph with 5-factor calculations</li>
                      <li>• Venue information and capacity</li>
                    </ul>
                  </div>
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Interactive formation displays</li>
                      <li>• Head-to-head historical data</li>
                      <li>• 11+ statistical categories</li>
                      <li>• Player ratings and performance</li>
                      <li>• 30-day historical and future range</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link
              href="/#cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00C896] to-[#10b981] rounded-full text-white font-semibold hover:from-[#00b382] hover:to-[#0ea370] transition-all"
            >
              Join the Waitlist →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

