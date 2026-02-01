"use client"

import Link from "next/link"
import { Bot, Coins, Swords, Target, ClipboardList, Activity } from "lucide-react"

export function FeatureTeasers() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
        More Than Just Predictions
      </h2>

      {/* Bento Grid - 4 cols × 4 rows, every cell filled */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-3 max-w-5xl mx-auto">

        {/* AI Autopilot - Hero (col 1-2, row 1-2) */}
        <Link
          href="/features/ai-autopilot"
          className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00C896]/40 transition-all duration-300 p-8 flex flex-col"
        >
          <Bot className="w-14 h-14 text-[#00C896] mb-4" />
          <h3 className="text-3xl font-bold text-white mb-3">AI Autopilot</h3>
          <p className="text-white/70 text-lg leading-relaxed mb-6 flex-grow">
            Your tireless mate who plays for you 24/7. Even while you sleep.
            Choose your strategy and let AI earn points around the clock.
          </p>
          <div className="flex gap-3 flex-wrap mb-6">
            <span className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-sm text-white/80">
              Basic: FREE
            </span>
            <span className="px-3 py-1.5 bg-[#00C896]/10 border border-[#00C896]/30 rounded-full text-sm text-[#00C896]">
              Advanced: Premium
            </span>
          </div>
          <div className="text-[#00C896] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 font-semibold text-sm">
            Learn More →
          </div>
        </Link>

        {/* Coin Toolkit (col 3-4, row 1) */}
        <Link
          href="/features/coin-toolkit"
          className="md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2 group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#F59E0B]/40 transition-all duration-300 p-6 flex flex-col"
        >
          <Coins className="w-10 h-10 text-[#F59E0B] mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Coin Toolkit</h3>
          <p className="text-white/70 text-sm mb-3 leading-relaxed flex-grow">
            14 power-ups across 6 categories. Streak shields, double points, mystery boxes.
          </p>
          <div className="text-[#F59E0B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 text-sm font-medium">
            View All →
          </div>
        </Link>

        {/* Gloves Up (col 3-4, row 2) */}
        <Link
          href="/features/gloves-up"
          className="md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3 group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#EF4444]/40 transition-all duration-300 p-6 flex flex-col"
        >
          <span className="text-3xl block mb-3">🥊</span>
          <h3 className="text-xl font-bold text-white mb-2">Gloves Up</h3>
          <p className="text-white/70 text-sm mb-3 leading-relaxed flex-grow">
            Boxing meets football trivia. Land punches, build momentum, and KO your opponent—solo or multiplayer.
          </p>
          <div className="flex gap-2 flex-wrap mb-3">
            <span className="px-2 py-1 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-full text-xs text-[#EF4444]">
              Solo & Multiplayer
            </span>
            <span className="px-2 py-1 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-full text-xs text-[#EF4444]">
              6 Consumables
            </span>
          </div>
          <div className="text-[#EF4444] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 text-sm font-medium">
            Fight Now →
          </div>
        </Link>

        {/* Battles & Leagues (col 1-3, row 3) */}
        <Link
          href="/features/battles-leagues"
          className="md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-4 group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-400/40 transition-all duration-300 p-6 flex flex-col"
        >
          <Swords className="w-10 h-10 text-purple-400 mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Battles & Leagues</h3>
          <p className="text-white/70 text-sm mb-3 leading-relaxed">
            1v1 your mates. Winner gets the coins. Create leagues with up to 100 members.
          </p>
          <div className="text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 text-sm font-medium">
            Challenge Friends →
          </div>
        </Link>

        {/* Live Tracking (col 4, row 3) */}
        <Link
          href="/features/live-tracking"
          className="md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4 group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-green-400/40 transition-all duration-300 p-5 flex flex-col"
        >
          <Activity className="w-8 h-8 text-green-400 mb-2" />
          <h3 className="text-lg font-bold text-white mb-1">Live Tracking</h3>
          <p className="text-white/60 text-xs mb-2 leading-relaxed flex-grow">
            Real-time stats and match events.
          </p>
          <div className="text-green-400 text-xs font-medium">
            Explore →
          </div>
        </Link>

        {/* Target Man (col 1, row 4) */}
        <Link
          href="/features/target-man"
          className="md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5 group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-400/40 transition-all duration-300 p-5 flex flex-col"
        >
          <Target className="w-8 h-8 text-red-400 mb-2" />
          <h3 className="text-lg font-bold text-white mb-1">Target Man</h3>
          <p className="text-white/60 text-xs mb-2 leading-relaxed flex-grow">
            Darts-style football trivia. 88+ categories.
          </p>
          <div className="text-red-400 text-xs font-medium">
            Play →
          </div>
        </Link>

        {/* Quizzes (col 2-4, row 4) */}
        <Link
          href="/features/quizzes"
          className="md:col-start-2 md:col-end-5 md:row-start-4 md:row-end-5 group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-400/40 transition-all duration-300 p-5 flex flex-col"
        >
          <ClipboardList className="w-9 h-9 text-blue-400 mb-2" />
          <h3 className="text-lg font-bold text-white mb-1">Daily & Weekly Quizzes</h3>
          <p className="text-white/60 text-xs mb-2 leading-relaxed">
            2,500+ football questions. Test your knowledge and earn coins.
          </p>
          <div className="text-blue-400 text-xs font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Test Knowledge →
          </div>
        </Link>
      </div>
    </section>
  )
}
