"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function FeatureTeasers() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
        More Than Just Predictions
      </h2>
      
      {/* Improved Bento Grid Layout - Full Square */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {/* Large card - AI Autopilot (spans 2 columns, 2 rows) */}
        <Link
          href="/features/ai-autopilot"
          className="md:col-span-2 md:row-span-2 group relative overflow-hidden liquid-glass rounded-3xl p-8 border border-white/10 hover:border-[#00C896]/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative z-10 h-full flex flex-col">
            <span className="text-6xl block mb-4">🤖</span>
            <h3 className="text-3xl font-bold text-white mb-3">AI Autopilot</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6 flex-grow">
              Your tireless mate who plays for you 24/7. Even while you sleep. 
              Choose your strategy and let AI earn points around the clock.
            </p>
            <div className="flex gap-4 flex-wrap mb-6">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
                Basic: FREE
              </span>
              <span className="px-4 py-2 bg-[#00C896]/20 border border-[#00C896]/40 rounded-full text-sm text-[#00C896]">
                Advanced: Premium
              </span>
            </div>
            <div className="text-[#00C896] group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 font-semibold">
              Learn More →
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Coin Toolkit - 2 columns wide */}
        <Link
          href="/features/coin-toolkit"
          className="md:col-span-2 group relative overflow-hidden liquid-glass rounded-3xl p-6 border border-white/10 hover:border-[#F59E0B]/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <span className="text-5xl block mb-3">💰</span>
          <h3 className="text-2xl font-bold text-white mb-2">Coin Toolkit</h3>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            9 ways to bend the game in your favor. Streak shields, double points, second chances, and more.
          </p>
          <span className="text-xs px-3 py-1 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] inline-block mb-4">
            50-120 coins each
          </span>
          <div className="mt-4 text-[#F59E0B] group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm font-semibold">
            View All →
          </div>
        </Link>

        {/* Battles & Leagues - 2 columns wide */}
        <Link
          href="/features/battles-leagues"
          className="md:col-span-2 group relative overflow-hidden liquid-glass rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <span className="text-5xl block mb-3">⚔️</span>
          <h3 className="text-2xl font-bold text-white mb-2">Battles & Leagues</h3>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            1v1 your mates. Winner takes all. Free friendly or coin-wagered showdowns. 
            Create leagues with up to 100 members.
          </p>
          <div className="mt-4 text-purple-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm font-semibold">
            Challenge Friends →
          </div>
        </Link>

        {/* Daily & Weekly Quizzes - 2 columns wide (same as Coin Toolkit) */}
        <Link
          href="/features/quizzes"
          className="md:col-span-2 group relative overflow-hidden liquid-glass rounded-3xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <span className="text-5xl block mb-3">📝</span>
          <h3 className="text-2xl font-bold text-white mb-2">Daily & Weekly Quizzes</h3>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            9,000+ football questions. Test your knowledge, earn coins, and climb quiz leaderboards.
          </p>
          <div className="mt-4 text-blue-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm font-semibold">
            Test Your Knowledge →
          </div>
        </Link>

        {/* Live Match Tracking - 2 columns wide (same as Battles & Leagues) */}
        <Link
          href="/features/live-tracking"
          className="md:col-span-2 group relative overflow-hidden liquid-glass rounded-3xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <span className="text-5xl block mb-3">📊</span>
          <h3 className="text-2xl font-bold text-white mb-2">Live Match Tracking</h3>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            Real-time stats, lineups, momentum graphs, and match events. All the data you need to make smarter predictions.
          </p>
          <div className="mt-4 text-green-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 text-sm font-semibold">
            Explore Features →
          </div>
        </Link>
      </div>
    </section>
  )
}
