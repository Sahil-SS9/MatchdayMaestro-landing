import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { InfiniteScrollMarquee } from "./infinite-scroll-marquee"

export function EarlyAccess() {
  const benefits = [
    {
      icon: "📅",
      title: "Launch Status",
      desc: "App launches November 1st. Perfect timing for the season to really heat up across all competitions.",
    },
    {
      icon: "🚀",
      title: "Early Access",
      desc: "First supporters get priority onboarding and direct access to the development team.",
    },
    {
      icon: "💎",
      title: "Bonus Coins",
      desc: "Early adopters receive bonus coins for streak protection and enhanced features.",
    },
    {
      icon: "🏆",
      title: "Founder Badge",
      desc: "Permanent special status in your profile showing you were here from the beginning.",
    },
    {
      icon: "🗳️",
      title: "Feature Votes",
      desc: "Help shape upcoming features and have direct input on the app's development roadmap.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        You're Early. That's Powerful.
      </h2>

      <div className="mt-12">
        <InfiniteScrollMarquee />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <Card key={i} className="liquid-glass border border-white/20 text-center">
            <CardHeader>
              <div className="text-5xl mb-2">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">{benefit.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center liquid-glass rounded-xl p-6 max-w-2xl mx-auto">
        <p className="text-white/70">
          Not manufactured scarcity - we genuinely want feedback from our first users before the masses arrive.
        </p>
      </div>
    </section>
  )
}
