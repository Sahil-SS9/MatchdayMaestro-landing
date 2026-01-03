import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Target Man - Football Trivia Game | Matchday Maestro",
  description: "A darts-inspired football trivia game. Name players to reduce your score from 501 to 0. 88+ categories across 5 major leagues. Test your football knowledge.",
  openGraph: {
    title: "Target Man - Football Trivia Game",
    description: "Name footballers to hit your target score. 88+ categories, 7 hint types, multiplayer mode with coin wagering.",
  },
}
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function TargetManPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-8xl mb-6 block">🎯</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Target Man
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A darts-inspired football trivia game that tests your player knowledge.
              Name footballers to hit your target score and prove you know the beautiful game.
            </p>
          </div>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How It Works</h2>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { step: "1", title: "Start at 501", desc: "Begin with 501 points on the board" },
                  { step: "2", title: "Name Players", desc: "Enter footballer names you think match the category" },
                  { step: "3", title: "Reduce Score", desc: "Their stats determine how many points you deduct" },
                  { step: "4", title: "Hit Checkout", desc: "Get to exactly 0 (or between 0 and -10) to win" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#00C896]/20 border border-[#00C896]/40 flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#00C896] font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="liquid-glass rounded-xl p-6 border border-white/10 text-center">
                <p className="text-white/80">
                  <span className="text-[#00C896] font-semibold">Pro Tip:</span> Invalid answers waste a turn but don't cost points.
                  Strategic guessing is key to hitting checkout!
                </p>
              </div>
            </div>
          </section>

          {/* Game Modes */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Game Modes</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-[#00C896]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🎯</span>
                  <div>
                    <h3 className="text-xl font-bold">Normal Mode</h3>
                    <span className="text-xs px-2 py-1 bg-green-500/20 border border-green-500/40 rounded text-green-400">
                      Beginner Friendly
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-white/70 mb-4">
                  <li>• 10 turns to reach checkout</li>
                  <li>• Max stat value: 180 points</li>
                  <li>• Standard difficulty categories</li>
                  <li>• Reward: 50 coins on completion</li>
                </ul>
                <div className="text-sm text-[#00C896]">
                  FREE with daily/weekly token
                </div>
              </div>

              <div className="liquid-glass rounded-3xl p-8 border border-white/10 hover:border-[#F59E0B]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🔥</span>
                  <div>
                    <h3 className="text-xl font-bold">Hard Mode</h3>
                    <span className="text-xs px-2 py-1 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded text-[#F59E0B]">
                      Expert Challenge
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-white/70 mb-4">
                  <li>• Only 5 turns to reach checkout</li>
                  <li>• Max stat value: 120 points</li>
                  <li>• Harder category combinations</li>
                  <li>• Reward: 150 coins on completion</li>
                </ul>
                <div className="text-sm text-[#F59E0B]">
                  Costs 100 coins to play
                </div>
              </div>
            </div>
          </section>

          {/* Stat Categories */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">88+ Categories Across 5 Leagues</h2>
              <p className="text-white/70 text-center mb-8">
                From club legends to nationality challenges - test every dimension of your football knowledge
              </p>

              {/* League Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { league: "Premier League", count: "42 clubs", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", color: "border-purple-500/40" },
                  { league: "La Liga", count: "Top clubs", emoji: "🇪🇸", color: "border-red-500/40" },
                  { league: "Serie A", count: "Italian giants", emoji: "🇮🇹", color: "border-blue-500/40" },
                  { league: "Bundesliga", count: "German clubs", emoji: "🇩🇪", color: "border-yellow-500/40" },
                  { league: "Ligue 1", count: "French elite", emoji: "🇫🇷", color: "border-blue-400/40" },
                  { league: "UCL", count: "Premium", emoji: "⭐", color: "border-amber-500/40", isPremium: true },
                ].map((league, idx) => (
                  <div key={idx} className={`liquid-glass rounded-xl p-4 border ${league.color} text-center`}>
                    <span className="text-2xl block mb-2">{league.emoji}</span>
                    <h3 className="font-bold text-sm">{league.league}</h3>
                    <p className="text-white/60 text-xs">{league.count}</p>
                    {league.isPremium && (
                      <span className="text-xs px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 rounded text-amber-400 mt-2 inline-block">
                        Premium
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Stat Types */}
              <div className="mb-8">
                <h3 className="font-bold text-center mb-4 text-white/80">3 Stat Types Per Club</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Appearances", "Goals", "Goals + Assists"].map((stat, idx) => (
                    <span key={idx} className="px-4 py-2 liquid-glass rounded-full border border-white/10 text-sm">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Examples */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Arsenal Appearances",
                  "Liverpool Goals",
                  "Man United G+A",
                  "Brazilian PL Players",
                  "French Ligue 1",
                  "Spanish La Liga",
                  "German Bundesliga",
                  "Man Utd vs Man City",
                ].map((cat, idx) => (
                  <div key={idx} className="liquid-glass rounded-lg p-3 border border-white/10 text-center text-sm text-white/70">
                    {cat}
                  </div>
                ))}
              </div>

              <p className="text-center text-white/50 text-sm mt-6">
                + 39 nationality-based categories across all leagues
              </p>
            </div>
          </section>

          {/* Hints System */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Hints System</h2>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: "📊", name: "Stat Range", desc: "Shows approximate stat value range to help narrow your guess", cost: "FREE", isFree: true },
                { icon: "🔤", name: "First Letter", desc: "Reveals the first letter of a valid player's name", cost: "5 coins" },
                { icon: "🌍", name: "Nationality", desc: "Shows the player's country of origin", cost: "10 coins" },
                { icon: "📅", name: "Era Hint", desc: "Reveals the decade when the player was most active", cost: "10 coins" },
                { icon: "🎯", name: "Checkout Guide", desc: "Suggests a player whose stat would help you checkout", cost: "10 coins" },
                { icon: "⚽", name: "Position", desc: "Reveals if GK, DF, MF, or FW", cost: "20 coins" },
                { icon: "👁️", name: "Reveal One", desc: "Shows a complete valid player answer", cost: "35 coins" },
              ].map((hint, idx) => (
                <div key={idx} className="liquid-glass rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-3xl mb-3">{hint.icon}</div>
                  <h3 className="font-bold mb-2">{hint.name}</h3>
                  <p className="text-white/60 text-xs mb-3">{hint.desc}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    hint.isFree
                      ? "bg-green-500/20 border border-green-500/40 text-green-400"
                      : "bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#F59E0B]"
                  }`}>
                    {hint.cost}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Multiplayer */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-[#00C896]/20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-5xl">👥</span>
                <h2 className="text-2xl md:text-3xl font-bold">Multiplayer Mode</h2>
              </div>

              <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
                Challenge your friends to Target Man battles. Create lobbies, take turns,
                and wager coins on who can hit checkout first.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h3 className="font-bold mb-2">Create Lobby</h3>
                  <p className="text-white/60 text-sm">Generate invite code and share with friends</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <h3 className="font-bold mb-2">Real-Time Turns</h3>
                  <p className="text-white/60 text-sm">Watch opponents play live via Supabase Realtime</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-bold mb-2">Coin Wagering</h3>
                  <p className="text-white/60 text-sm">Put coins on the line - winner takes all</p>
                </div>
              </div>
            </div>
          </section>

          {/* Access & Pricing */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-center">Free vs Premium Access</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Free Users */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🆓</span>
                    <h3 className="font-bold text-xl">Free Users</h3>
                  </div>
                  <ul className="space-y-3 text-white/70 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00C896]">✓</span>
                      <span><strong>1 game per day</strong> with daily token</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00C896]">✓</span>
                      <span>Access to <strong>5 leagues</strong>: Premier League, La Liga, Serie A, Bundesliga, Ligue 1</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00C896]">✓</span>
                      <span>Earn <strong>10-200 coins</strong> per win</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/40">✗</span>
                      <span className="text-white/50">No UCL or Rivals categories</span>
                    </li>
                  </ul>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <span className="text-sm text-white/60">Extra games: </span>
                    <span className="font-bold text-[#F59E0B]">100 coins each</span>
                  </div>
                </div>

                {/* Premium Users */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00C896]/20 to-[#00C896]/5 border border-[#00C896]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">👑</span>
                    <h3 className="font-bold text-xl text-[#00C896]">Premium Users</h3>
                  </div>
                  <ul className="space-y-3 text-white/70 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00C896]">✓</span>
                      <span><strong>1 game per day</strong> with daily token</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00C896]">✓</span>
                      <span>All 5 leagues <strong>+ exclusive UCL & Rivals</strong> categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00C896]">✓</span>
                      <span><strong>1.5x coin multiplier</strong> on all wins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00C896]">✓</span>
                      <span>Earn <strong>15-300 coins</strong> per win</span>
                    </li>
                  </ul>
                  <div className="text-center p-3 rounded-xl bg-[#00C896]/10">
                    <span className="text-sm text-white/60">Hard Mode: </span>
                    <span className="font-bold text-[#00C896]">Unlimited access</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
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
