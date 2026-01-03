import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Coin Toolkit - Power-Ups & Boosters | Matchday Maestro",
  description: "14 strategic power-ups across 6 categories. Streak Shield, Double Points, Lucky Dip, Golden Ticket and more. Multiply your points and protect your streak.",
  openGraph: {
    title: "Coin Toolkit - Power-Ups & Boosters",
    description: "From free daily rewards to premium exclusives. 14 power-ups to maximize your prediction success.",
  },
}
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"

export default function CoinToolkitPage() {
  // Organized by category as per the power-up system
  const categories = [
    {
      name: "Free Rewards",
      emoji: "🎁",
      description: "Earn coins just by playing - no purchase required",
      color: "bg-green-500/20 border-green-500/40",
      powerups: [
        { name: "Daily Bonus", cost: "FREE", desc: "Log in and make your first prediction each day to earn 10 coins automatically.", icon: "📅" },
        { name: "Streak Rewards", cost: "FREE", desc: "Earn escalating coins for consecutive correct predictions: +2, +4, +6, +8, up to +10 coins per streak.", icon: "🔥" },
      ]
    },
    {
      name: "Utility",
      emoji: "🛠️",
      description: "Helpful tools that can be combined for maximum effect",
      color: "bg-blue-500/20 border-blue-500/40",
      powerups: [
        { name: "Streak Shield", cost: "100 coins", desc: "Protects your streak from 3 wrong predictions. Visual indicator shows remaining charges.", icon: "🛡️" },
        { name: "Second Chance", cost: "90 coins", desc: "Re-predict after seeing result. Must be used within 5 minutes of result reveal.", icon: "🔄" },
        { name: "Extra Prediction Slot", cost: "125 coins", desc: "Bypass tier limits for 24 hours. Free users get 4 predictions, Premium users get 6.", icon: "➕" },
        { name: "Lucky Dip", cost: "75 coins", desc: "AI analyzes the match and suggests the optimal prediction with confidence percentage.", icon: "🎲" },
        { name: "Double Coin Rewards", cost: "150 coins", desc: "All coins earned are doubled for 24 hours. Applies to predictions, quizzes, and streaks.", icon: "💰" },
      ]
    },
    {
      name: "Point Multipliers",
      emoji: "✨",
      description: "Only ONE can be active at a time - choose wisely",
      color: "bg-amber-500/20 border-amber-500/40",
      powerups: [
        { name: "Double Points (3)", cost: "125 coins", desc: "Your next 3 correct predictions earn 2x points. Counter decrements after each prediction.", icon: "⚡" },
        { name: "Double Points (5)", cost: "175 coins", desc: "Same as Double Points 3 but for 5 predictions. Better value at 35 coins each vs 42.", icon: "⚡" },
        { name: "Lightning Round", cost: "400 coins", desc: "5 predictions with building multiplier: 2x → 3x → 4x → 5x. Wrong answers reset to 2x.", icon: "⚡" },
        { name: "Golden Ticket", cost: "750 coins", desc: "Premium tier: 2x points AND 2x coins for 7 full days. Excludes battles.", icon: "🎫" },
      ]
    },
    {
      name: "Recovery",
      emoji: "💪",
      description: "Bounce back from bad predictions",
      color: "bg-emerald-500/20 border-emerald-500/40",
      powerups: [
        { name: "Bounce Back", cost: "150 coins", desc: "After 2 wrong predictions, your next correct prediction earns 3x points. Overrides all other multipliers.", icon: "💥" },
      ]
    },
    {
      name: "Mystery",
      emoji: "🎲",
      description: "Take a gamble on random rewards",
      color: "bg-purple-500/20 border-purple-500/40",
      powerups: [
        { name: "Mystery Box", cost: "150 coins", desc: "Random power-up with tiered odds: 60% Common, 30% Uncommon, 10% Rare. Expected value ~130 coins.", icon: "🎁" },
      ]
    },
    {
      name: "Premium Exclusive",
      emoji: "👑",
      description: "Advanced features for premium subscribers",
      color: "bg-pink-500/20 border-pink-500/40",
      powerups: [
        { name: "Prediction Steal", cost: "300 coins", desc: "See top 3 predictions from high-accuracy users for a specific match. Premium subscription required.", icon: "👁️", isPremium: true },
      ]
    },
  ]

  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-6xl block mb-4">💰</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Coin Toolkit
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              14 strategic power-ups across 6 categories. From free daily rewards to premium exclusives - master the toolkit to dominate your league.
            </p>
          </div>

          {/* What It Is */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F59E0B]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is Coin Toolkit?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Your strategic advantage. 14 powerful power-ups organized into 6 categories - from free daily rewards to premium exclusives. Protect your streak, multiply your points, recover from mistakes, or gamble on mystery rewards.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-[#00C896]">75-750</div>
                  <div className="text-white/60 text-sm">Coin price range</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-[#00C896]">6</div>
                  <div className="text-white/60 text-sm">Categories</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-[#00C896]">Smart</div>
                  <div className="text-white/60 text-sm">Stacking rules</div>
                </div>
              </div>
            </div>
          </section>

          {/* All Categories and Powerups */}
          {categories.map((category, catIdx) => (
            <section key={catIdx} className="mb-12">
              <div className={`liquid-glass rounded-3xl p-8 border ${category.color}`}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">{category.emoji}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{category.name}</h2>
                    <p className="text-white/60 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {category.powerups.map((powerup, idx) => (
                    <div key={idx} className="liquid-glass rounded-xl p-5 border border-white/10">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{powerup.icon}</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                            <h3 className="text-lg font-bold">{powerup.name}</h3>
                            <span className={`text-xs px-2 py-1 rounded text-white whitespace-nowrap font-semibold ${
                              powerup.cost === "FREE"
                                ? "bg-green-500 border border-green-500"
                                : powerup.isPremium
                                  ? "bg-[#9333EA] border border-[#9333EA]"
                                  : "bg-[#F59E0B] border border-[#F59E0B]"
                            }`}>
                              {powerup.cost}
                            </span>
                          </div>
                          <p className="text-white/60 text-sm leading-relaxed">{powerup.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Stacking Rules */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-red-500/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Stacking Rules</h2>
              <p className="text-white/70 mb-6">
                Some power-ups work together, others are mutually exclusive. Here's what you need to know:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-green-400">Can Stack Together</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Streak Shield + Double Points</li>
                    <li>• Bounce Back + Utility features</li>
                    <li>• Extra Prediction + any multiplier</li>
                    <li>• Lucky Dip + any active power-up</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-red-400">Cannot Stack (Choose One)</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• All Point Multipliers are exclusive</li>
                    <li>• Lightning Round + Streak Shield</li>
                    <li>• Golden Ticket + Double Coin Rewards</li>
                    <li>• Bounce Back overrides all when triggered</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F59E0B]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center font-bold text-[#F59E0B]">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Build Your Coin Balance</h3>
                    <p className="text-white/70">
                      Earn coins by playing daily (login rewards), getting predictions right, completing quizzes, and referring friends. You can also purchase coin packages if you want to boost your balance faster.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center font-bold text-[#F59E0B]">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pick Your Powerup</h3>
                    <p className="text-white/70">
                      Browse the 9 strategic powerups and choose the one that fits your situation. Protecting a streak? Need extra points? Want to change a prediction? There's a powerup for every scenario.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center font-bold text-[#F59E0B]">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Activate & Dominate</h3>
                    <p className="text-white/70">
                      Once you use a powerup, it activates right away. Some work instantly (like Second Chance), others last for a set time (like Double Coin Rewards for 24 hours). The app handles everything automatically.
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
              <Link href="/pricing">View Coin Packages</Link>
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

