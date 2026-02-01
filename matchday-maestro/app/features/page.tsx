import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Features - Everything in Matchday Maestro",
  description: "Live predictions, AI Autopilot, Gloves Up boxing trivia, Target Man, battles & leagues, coin toolkit power-ups, and daily quizzes. Discover all the ways to compete.",
  openGraph: {
    title: "Features - Everything in Matchday Maestro",
    description: "Live predictions, AI Autopilot, battles, leagues, quizzes, and more. The complete football prediction experience.",
  },
}
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

                <div className="liquid-glass rounded-xl p-6 border border-white/10 mb-6">
                  <h3 className="text-lg font-bold mb-4">AI Insights Dashboard</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#00C896] mb-2">Personal Analytics</h4>
                      <ul className="space-y-1 text-white/70 text-sm">
                        <li>• Accuracy tracking (daily/weekly/monthly/all-time)</li>
                        <li>• Best & worst prediction types</li>
                        <li>• Optimal prediction windows</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#00C896] mb-2">Competitive Edge</h4>
                      <ul className="space-y-1 text-white/70 text-sm">
                        <li>• Percentile ranking vs other users</li>
                        <li>• League-specific performance</li>
                        <li>• Trend analysis & recommendations</li>
                      </ul>
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
                      14 power-ups across 6 categories. From free daily rewards to premium exclusives - strategic tools to dominate your league.
                    </p>
                  </div>
                </div>

                {/* Free Engagement */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span>🎁</span> Free Rewards
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Daily Bonus", cost: "FREE", desc: "+10 coins for your first prediction each day" },
                      { name: "Streak Rewards", cost: "FREE", desc: "+2 to +10 coins for consecutive correct predictions" },
                    ].map((powerup, idx) => (
                      <div key={idx} className="liquid-glass rounded-xl p-4 border border-green-500/20">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-base font-bold">{powerup.name}</h4>
                          <span className="text-xs px-2 py-1 bg-green-500/20 border border-green-500/40 rounded text-green-400">
                            {powerup.cost}
                          </span>
                        </div>
                        <p className="text-white/60 text-xs">{powerup.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Paid Power-ups */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span>✨</span> Power-ups (75-750 coins)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { name: "Lucky Dip", cost: 75, desc: "AI suggests the optimal prediction" },
                      { name: "Second Chance", cost: 90, desc: "Modify a prediction after submission" },
                      { name: "Streak Shield", cost: 100, desc: "Protect your streak (3 charges)" },
                      { name: "Double Points (3)", cost: 125, desc: "2x points on next 3 predictions" },
                      { name: "Extra Prediction", cost: 125, desc: "Bypass tier limits for one match" },
                      { name: "Bounce Back", cost: 150, desc: "After 2 wrong, next correct = 3x" },
                      { name: "Double Coin Rewards", cost: 150, desc: "2x coins earned for 24h" },
                      { name: "Mystery Box", cost: 150, desc: "Random power-up with tiered chances" },
                      { name: "Double Points (5)", cost: 175, desc: "2x points on next 5 predictions" },
                      { name: "Prediction Steal", cost: 300, desc: "View top user predictions (Premium)" },
                      { name: "Lightning Round", cost: 400, desc: "Chain 5 for up to 5x multiplier" },
                      { name: "Golden Ticket", cost: 750, desc: "2x points + 2x coins for 7 days" },
                    ].map((powerup, idx) => (
                      <div key={idx} className="liquid-glass rounded-xl p-4 border border-white/10">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-base font-bold">{powerup.name}</h4>
                          <span className="text-xs px-2 py-1 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded text-[#F59E0B]">
                            {powerup.cost} coins
                          </span>
                        </div>
                        <p className="text-white/60 text-xs">{powerup.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/features/coin-toolkit"
                    className="inline-flex items-center gap-2 text-[#F59E0B] hover:text-[#F59E0B]/80 font-semibold"
                  >
                    View Full Coin Toolkit →
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
                      1v1 your mates. Play for fun or play for coins. Winner gets the pot.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Battles</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• Challenge friends to predict specific matches</li>
                      <li>• Optional coin entry (winner gets all)</li>
                      <li>• Battle types: Standard, Lightning, Streak, Ultimate</li>
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
                      2,500+ football questions. Test your knowledge, earn coins, and climb quiz leaderboards.
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

            {/* Target Man */}
            <section id="target-man" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">🎯</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Target Man</h2>
                    <p className="text-xl text-white/70 mb-6">
                      A darts-inspired football trivia game. Name players to hit your target score and prove your knowledge.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">How It Works</h3>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Start with 501 points</li>
                      <li>• Name footballers to reduce your score</li>
                      <li>• Player stats determine point deduction</li>
                      <li>• Get to exactly 0 (or -10) to checkout and win</li>
                      <li>• 17+ stat categories to master</li>
                    </ul>
                  </div>
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Game Modes</h3>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• <strong>Normal:</strong> 10 turns, max 180 stat value</li>
                      <li>• <strong>Hard:</strong> 5 turns, max 120 stat value</li>
                      <li>• <strong>Multiplayer:</strong> Challenge friends, play for coins</li>
                      <li>• Hints available: Club, Nationality, Position</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
                    Premium: 1 game/day
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
                    Free: 1 game/week
                  </span>
                  <span className="px-4 py-2 bg-[#00C896]/20 border border-[#00C896]/40 rounded-full text-sm text-[#00C896]">
                    Extra games: 100 coins
                  </span>
                </div>
              </div>
            </section>

            {/* Gloves Up */}
            <section id="gloves-up" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">🥊</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Gloves Up</h2>
                    <p className="text-xl text-white/70 mb-6">
                      Boxing meets football trivia. Answer questions to land punches, build momentum, and knockout your opponent—AI or real player.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Fight Night (Solo)</h3>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• 5 AI difficulty tiers: Rookie to GOAT</li>
                      <li>• Quick Bout (3 rounds) or Full Fight (5 rounds)</li>
                      <li>• Health bars, momentum system, consumables</li>
                      <li>• Win by KO or judges&apos; decision</li>
                    </ul>
                  </div>
                  <div className="liquid-glass rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3">Title Fight (Multiplayer)</h3>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Real-time 1v1 against other players</li>
                      <li>• Coin stake tiers: Friendly, Bronze, Silver, Gold</li>
                      <li>• 6 consumable items for tactical advantage</li>
                      <li>• Climb the rankings and prove you&apos;re the best</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/features/gloves-up"
                    className="inline-flex items-center gap-2 text-[#EF4444] hover:text-[#EF4444]/80 font-semibold"
                  >
                    View Full Details →
                  </Link>
                </div>
              </div>
            </section>

            {/* Achievements System */}
            <section id="achievements" className="scroll-mt-20">
              <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-6xl flex-shrink-0">🏆</span>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">57 Achievements</h2>
                    <p className="text-xl text-white/70 mb-6">
                      Unlock achievements across 10 categories. Progress from Bronze to Legendary tier.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  {[
                    { name: "Predictions", count: 11, icon: "🎯" },
                    { name: "Battles", count: 6, icon: "⚔️" },
                    { name: "Target Man", count: 7, icon: "🎯" },
                    { name: "Quizzes", count: 6, icon: "📝" },
                    { name: "Leagues", count: 6, icon: "🏟️" },
                    { name: "Autopilot", count: 5, icon: "🤖" },
                    { name: "Coins", count: 5, icon: "💰" },
                    { name: "Social", count: 4, icon: "👥" },
                    { name: "Cross-Feature", count: 4, icon: "🔗" },
                    { name: "Special", count: 3, icon: "⭐" },
                  ].map((cat, idx) => (
                    <div key={idx} className="liquid-glass rounded-xl p-4 border border-white/10 text-center">
                      <div className="text-2xl mb-2">{cat.icon}</div>
                      <h3 className="text-sm font-bold">{cat.name}</h3>
                      <span className="text-xs text-[#00C896]">{cat.count} achievements</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap justify-center">
                  <span className="px-4 py-2 bg-amber-700/20 border border-amber-600/40 rounded-full text-sm text-amber-400">Bronze</span>
                  <span className="px-4 py-2 bg-gray-400/20 border border-gray-400/40 rounded-full text-sm text-gray-300">Silver</span>
                  <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-sm text-yellow-400">Gold</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm text-purple-400">Legendary</span>
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


