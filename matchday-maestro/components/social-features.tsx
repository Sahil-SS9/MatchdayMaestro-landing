import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Users, Trophy, BarChart3, Flame } from "lucide-react"

export function SocialFeatures() {
  const features = [
    {
      icon: Users,
      title: "Private Leagues",
      desc: "Create leagues with your friends, work colleagues, or pub regulars. Up to 20 people, weekly winners, season champions.",
    },
    {
      icon: Trophy,
      title: "Head-to-Head Battles",
      desc: "Challenge anyone to a direct match-up. Winner gets bragging rights + coins. Loser buys the drinks.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      desc: "Track your accuracy by team, event type, match situation. See who's actually skilled vs who got lucky.",
    },
    {
      icon: Flame,
      title: "Streak Challenges",
      desc: "Build prediction streaks for bonus rewards. 5 correct = coins bonus. 10 correct = legendary status.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 bg-[#0f1015]">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        Because Beating Your Mates Is Half The Fun
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Card key={i} className="liquid-glass border border-white/20 text-center">
            <CardHeader>
              <feature.icon className="w-16 h-16 text-[#667eea] mx-auto mb-2" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
