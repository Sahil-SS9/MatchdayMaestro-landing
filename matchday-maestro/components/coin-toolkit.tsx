"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Shield, Zap, RotateCcw, Dices, Brain } from "lucide-react"

export function CoinToolkit() {
  const coinFeatures = [
    { icon: Shield, name: "Streak Shield", cost: "50 coins", color: "#3B82F6", description: "Protect your hard-earned streak. One wrong prediction forgiven.", useCase: "When you have got a 10-streak going and the match is unpredictable, shield your streak and keep the bonuses rolling." },
    { icon: Zap, name: "Double Points", cost: "50 coins", color: "#F59E0B", description: "Your next 3 predictions are worth 20 points each instead of 10.", useCase: "Feeling confident? Use this when you are sure about upcoming events. High risk, massive reward." },
    { icon: RotateCcw, name: "Second Chance", cost: "50 coins", color: "#EC4899", description: "Cancel a submitted prediction before the outcome is known. Adapt mid-match.", useCase: "Lineup changes? Red card? Momentum shift? React to last-minute changes." },
    { icon: Dices, name: "Lucky Dip", cost: "50 coins", color: "#10B981", description: "AI analyzes the match data and suggests the statistical best bet.", useCase: "When you are stuck between two outcomes, let machine learning make the call." },
    { icon: Brain, name: "AI Autopilot", cost: "FREE (Basic) / PREMIUM (Advanced)", color: "#00C896", description: "Set your strategy, let AI predict for you. Never miss a match opportunity.", useCase: "Stuck in a meeting? At dinner? AI has your back with up to 5 predictions per match.", featured: true },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 bg-gradient-to-b from-[#1E40AF]/5 via-transparent to-transparent">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Win Smarter With <span className="gradient-text">Strategic Advantages</span></h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">Earn coins through gameplay (Daily Quizzes, winning predictions, streaks) or upgrade to Premium.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {coinFeatures.map((feature, i) => {
          const Icon = feature.icon
          return (<Card key={i} className={`liquid-glass-enhanced border border-white/20 hover:border-[#00C896]/30 transition-all duration-300 h-full ${feature.featured ? 'ring-2 ring-[#00C896]/30' : ''}`}>
            <CardHeader>
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${feature.color}20` }}>
                  <Icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{feature.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed text-center">{feature.description}</p>
            </CardHeader>
            <CardContent>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-white/60 mb-2 italic">{feature.useCase}</p>
              </div>
            </CardContent>
          </Card>)
        })}
        <Card className="liquid-glass-enhanced border border-white/20 hover:border-[#EC4899]/30 transition-all duration-300 h-full flex items-center justify-center">
          <CardContent className="text-center p-8">
            <div className="text-5xl mb-4">🌶️</div>
            <h3 className="text-xl font-bold text-white mb-2">Plus Many More</h3>
            <p className="text-sm text-white/70">...strategic tools to keep things spicy</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="liquid-glass-enhanced rounded-xl p-6 border border-[#00C896]/30 text-center">
          <p className="text-white/90"><span className="text-[#00C896] font-semibold">💡 Earn coins daily</span> through quizzes, winning predictions, and maintaining streaks.</p>
          <p className="text-sm text-white/70 mt-2">Premium users get <span className="text-[#F59E0B] font-semibold">Weekly Quiz</span> access free (150 coins for free users).</p>
        </div>
      </div>
    </section>
  )
}
