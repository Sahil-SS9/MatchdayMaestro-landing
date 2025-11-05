"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Shield, Zap, TrendingUp, Brain, Check } from "lucide-react"

export function AIAutopilotHero() {
  const strategies = [
    { name: "Smart Assistant", tier: "FREE", icon: Brain, color: "#00C896", features: ["Up to 3 AI predictions per match", "Simple pattern recognition", "Basic match analysis", "Perfect for getting started"], bestFor: "Casual players who want help during busy matches", accuracy: "+0% baseline" },
    { name: "Conservative", tier: "PREMIUM", icon: Shield, color: "#3B82F6", features: ["Up to 5 AI predictions per match", "Safe, high-confidence picks", "+20% better accuracy than basic", "Protects your streak"], bestFor: "Players who value consistency over risk", accuracy: "+20% accuracy" },
    { name: "Optimist", tier: "PREMIUM", icon: Zap, color: "#F59E0B", features: ["Up to 5 AI predictions per match", "Bold, aggressive predictions", "+15% better accuracy than basic", "High risk, high reward"], bestFor: "Competitive players hunting big point swings", accuracy: "+15% accuracy" },
    { name: "Statistician", tier: "PREMIUM", icon: TrendingUp, color: "#EC4899", features: ["Up to 5 AI predictions per match", "ML-powered analysis", "+25-30% better accuracy than basic", "Advanced analytics integration"], bestFor: "Data-driven players who trust the numbers", accuracy: "+25-30% accuracy" },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00C896]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 mb-6">
            <span className="text-2xl">🤖</span>
            <span className="text-xs uppercase tracking-wider text-white/80 font-medium">Hero Feature</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">The AI That Plays For You <span className="gradient-text">When You Cannot</span></h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">Stuck in a meeting? At dinner? Our AI Autopilot makes predictions on your behalf using your chosen strategy.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="liquid-glass-enhanced rounded-xl p-6 border border-white/20 text-center">
            <div className="text-5xl mb-3">💼</div>
            <h3 className="text-lg font-semibold mb-2">You are Busy</h3>
            <p className="text-sm text-white/70">Meeting. Dinner. Commute. Life happens during matches.</p>
          </div>
          <div className="liquid-glass-enhanced rounded-xl p-6 border border-[#00C896]/30 bg-[#00C896]/5 text-center">
            <div className="text-5xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold mb-2">AI Autopilot Active</h3>
            <p className="text-sm text-white/80">Phone making smart predictions automatically.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {strategies.map((strategy, i) => {
            const Icon = strategy.icon
            const isPremium = strategy.tier === "PREMIUM"
            return (<Card key={i} className="liquid-glass-enhanced border border-white/20 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Icon className="w-7 h-7" style={{ color: strategy.color }} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${isPremium ? 'bg-gradient-to-r from-[#F59E0B] to-[#FFD60A] text-black' : 'bg-[#00C896] text-white'}`}>{strategy.tier}</div>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: strategy.color }}>{strategy.name}</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="text-sm font-mono font-bold" style={{ color: strategy.color }}>{strategy.accuracy}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {strategy.features.map((feature, idx) => (<div key={idx} className="flex items-start gap-2"><Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: strategy.color }} /><span className="text-sm text-white/80">{feature}</span></div>))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Best For:</p>
                  <p className="text-sm text-white/80">{strategy.bestFor}</p>
                </div>
              </CardContent>
            </Card>)
          })}
        </div>
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">Try <span className="text-[#00C896] font-semibold">Smart Assistant</span> free, upgrade for advanced strategies</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
            <span className="text-sm text-white/60">All Premium users get a</span>
            <span className="text-sm text-[#F59E0B] font-bold">7-day free trial</span>
          </div>
        </div>
      </div>
    </section>
  )
}
