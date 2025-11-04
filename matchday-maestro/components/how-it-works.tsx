import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Match Alert",
      desc: '"🔔 Liverpool vs Arsenal - 78th minute!" Push notification during live match',
    },
    {
      num: 2,
      title: "Quick Decision",
      desc: '"⏱️ 30 seconds to choose: Goal next 10 mins? Corner? Card? Nothing? Everyone gets same window."',
    },
    {
      num: 3,
      title: "Instant Scoring",
      desc: '"✅ Corner taken! +10 points, streak continues. Fair scoring, no complicated math."',
    },
    {
      num: 4,
      title: "Friend Competition",
      desc: '"🏆 You beat Tom 40-20 this match!" Real-time competition with people you actually know.',
    },
  ]

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        Takes 30 Seconds. Literally.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <Card key={step.num} className="liquid-glass border border-white/20 text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 italic text-sm leading-relaxed">{step.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
