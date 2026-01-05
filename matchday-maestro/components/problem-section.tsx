"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Lock, RefreshCw, Dice6 } from "lucide-react"

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const flaws: { icon: ReactNode; title: string; desc: string; problem: string }[] = [
    {
      icon: <Lock className="w-10 h-10 text-red-400" />,
      title: "The Pre-Match Prison",
      desc: '"Liverpool just scored. City are pushing forward desperately. You KNOW a goal is coming in the next 5 minutes... but you can\'t predict it because you had to submit everything before kick-off."',
      problem: "Most prediction apps lock you into pre-match predictions. You miss the entire 90 minutes of live drama—can't react to momentum shifts, injuries, or red cards. The exciting parts when outcomes become predictable? You're locked out.",
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-red-400" />,
      title: "The Boring Question Loop",
      desc: '"Week 1: Who wins? Week 2: Who wins? Week 3: Who wins? Week 38: Who wins? It\'s the same prediction every single match for 9 months straight."',
      problem: "Most apps ask identical questions every match regardless of context. Man City vs Liverpool title decider? Same questions as a relegation battle. 0-0 at 89 minutes? Same as a 4-3 thriller. No variety = stale after 10 weeks.",
    },
    {
      icon: <Dice6 className="w-10 h-10 text-red-400" />,
      title: "The Impossible Prize Pool",
      desc: '"Predict 6 EXACT scores correctly. AND guess the minute of first goal. AND hope nobody else got the same scores so you don\'t split the prize. It\'s basically the lottery with football knowledge."',
      problem: "Apps requiring exact score predictions across 6 matches need lottery-level luck. 15-20 likely scorelines per match means 11.4 MILLION possible combinations. This rewards luck, not football intelligence.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 sm:py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <h2
        className={`mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        We Fixed The Three Flaws Breaking Fantasy Football Predictions
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {flaws.map((flaw, i) => (
          <Card
            key={i}
            className={`liquid-glass-enhanced border border-red-500/20 hover:border-red-500/40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <CardHeader>
              <div className="mb-3">{flaw.icon}</div>
              <h3 className="text-xl text-red-400 font-semibold mb-2">{flaw.title}</h3>
              <p className="text-white/70 italic leading-relaxed text-sm">{flaw.desc}</p>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 text-xs leading-relaxed mt-2">
                <span className="text-red-400 font-semibold">THE PROBLEM: </span>
                {flaw.problem}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className={`mt-10 text-center liquid-glass-enhanced rounded-2xl p-6 max-w-3xl mx-auto border-[#00C896]/30 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.5s" }}
      >
        <p className="text-xl font-semibold text-[#00C896] italic">
          We built Matchday Maestro because we were sick of this nonsense too.
        </p>
      </div>
    </section>
  )
}
