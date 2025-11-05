import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, Target, Shield, Zap } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: Clock,
      title: "Synchronized Windows",
      desc: "Everyone gets exactly 30 seconds to predict - whether you're watching TV, following on BBC Sport, or just getting our notifications. Zero advantages.",
    },
    {
      icon: Target,
      title: "Equal Points System",
      desc: "Every prediction = exactly 10 points. Corner kick or wonder goal - same value. Consistency beats luck, every single time.",
    },
    {
      icon: Shield,
      title: "Strategic Limits",
      desc: "3 predictions per match (free) forces real strategy. No more spam-guessing 50 outcomes hoping something sticks.",
    },
    {
      icon: Zap,
      title: "Smart AI Prevention",
      desc: "Goal scored? Our AI asks about different events (cards, corners) - never the same thing. TV watchers get zero prediction advantage.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 bg-[#0f1015]">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        What If Predictions Actually Rewarded <span className="gradient-text-gold">Knowledge</span>?
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, i) => (
          <Card key={i} className="liquid-glass border border-green-500/20">
            <CardHeader>
              <solution.icon className="w-12 h-12 text-[#10b981] mb-2" />
              <h3 className="text-xl text-[#10b981] font-semibold">{solution.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 leading-relaxed">{solution.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
