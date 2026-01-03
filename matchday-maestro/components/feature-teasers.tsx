"use client"

import Link from "next/link"
import { Bot, Coins, Swords, Target, ClipboardList, Activity } from "lucide-react"

export function FeatureTeasers() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
        More Than Just Predictions
      </h2>

      {/* Bento Grid - Rounded Square Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white/[0.01] border border-white/[0.04] p-4">

        {/* AI Autopilot - Large (2 cols, 2 rows) */}
        <Link
          href="/features/ai-autopilot"
          className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00C896]/30 transition-all duration-300 p-8"
        >
          <div className="relative z-10 h-full flex flex-col">
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
          </div>
        </Link>

        {/* Coin Toolkit - Medium (2 cols) */}
        <Link
          href="/features/coin-toolkit"
          className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#F59E0B]/30 transition-all duration-300 p-6"
        >
          <Coins className="w-10 h-10 text-[#F59E0B] mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Coin Toolkit</h3>
          <p className="text-white/70 text-sm mb-3 leading-relaxed">
            14 power-ups across 6 categories. Streak shields, double points, mystery boxes.
          </p>
          <div className="text-[#F59E0B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 text-sm font-medium">
            View All →
          </div>
        </Link>

        {/* Battles & Leagues - Medium (2 cols) */}
        <Link
          href="/features/battles-leagues"
          className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-400/30 transition-all duration-300 p-6"
        >
          <Swords className="w-10 h-10 text-purple-400 mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Battles & Leagues</h3>
          <p className="text-white/70 text-sm mb-3 leading-relaxed">
            1v1 your mates. Winner takes all. Create leagues with up to 100 members.
          </p>
          <div className="text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 text-sm font-medium">
            Challenge Friends →
          </div>
        </Link>

        {/* Target Man - Small (1 col) */}
        <Link
          href="/features/target-man"
          className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-red-400/30 transition-all duration-300 p-5"
        >
          <Target className="w-8 h-8 text-red-400 mb-2" />
          <h3 className="text-lg font-bold text-white mb-1">Target Man</h3>
          <p className="text-white/60 text-xs mb-2 leading-relaxed">
            Darts-style football trivia. 88+ categories.
          </p>
          <div className="text-red-400 text-xs font-medium">
            Play →
          </div>
        </Link>

        {/* Quizzes - Medium (2 cols) */}
        <Link
          href="/features/quizzes"
          className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-400/30 transition-all duration-300 p-5"
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

        {/* Live Tracking - Small (1 col) */}
        <Link
          href="/features/live-tracking"
          className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-green-400/30 transition-all duration-300 p-5"
        >
          <Activity className="w-8 h-8 text-green-400 mb-2" />
          <h3 className="text-lg font-bold text-white mb-1">Live Tracking</h3>
          <p className="text-white/60 text-xs mb-2 leading-relaxed">
            Real-time stats and match events.
          </p>
          <div className="text-green-400 text-xs font-medium">
            Explore →
          </div>
        </Link>
      </div>
    </section>
  )
}
