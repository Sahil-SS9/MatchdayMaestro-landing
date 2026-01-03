"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Gift, Trophy, Rocket, Vote, Zap } from "lucide-react"

export function EarlyAccess() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const benefits: { icon: ReactNode; title: string; desc: string }[] = [
    {
      icon: <Gift className="w-12 h-12 text-[#00C896]" />,
      title: "500 Free Coins",
      desc: "First 500 users get a massive coin bonus at launch to unlock premium features instantly.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#F59E0B]" />,
      title: "Founder Badge",
      desc: "Permanent special status showing you were here from day one. Limited to first 500 only.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-400" />,
      title: "Priority Access",
      desc: "Skip the line and get immediate access when we launch. No waiting.",
    },
    {
      icon: <Vote className="w-12 h-12 text-blue-400" />,
      title: "Shape the Future",
      desc: "Direct input on features, leagues, and improvements. Your feedback builds the roadmap.",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#00C896]" />,
      title: "Exclusive Updates",
      desc: "Behind-the-scenes development updates and early feature previews before anyone else.",
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
    <section ref={sectionRef} className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        Why Join the Waitlist?
      </h2>
      <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto">
        Be part of the revolution that's fixing live football predictions. Limited spots available.
      </p>

      {/* Pyramid Layout: 2 cards on top row, 3 cards on bottom row */}
      <div className="mt-12 max-w-5xl mx-auto space-y-6">
        {/* Top Row - 2 Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {benefits.slice(0, 2).map((benefit, i) => (
            <Card
              key={i}
              className={`liquid-glass border border-white/20 hover:border-[#00C896]/40 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-2 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.slice(2).map((benefit, i) => (
            <Card
              key={i + 2}
              className={`liquid-glass border border-white/20 hover:border-[#00C896]/40 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-2 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Built by football fans text */}
      <div
        className={`mt-10 text-center liquid-glass rounded-xl p-6 max-w-2xl mx-auto border border-white/10 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.5s" }}
      >
        <p className="text-white/80 leading-relaxed">
          Built by football fans who were tired of unfair predictions. Launching to prove knowledge beats luck.
        </p>
      </div>

      <div
        className={`mt-6 text-center liquid-glass rounded-xl p-6 max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.6s" }}
      >
        <p className="text-white/70 text-sm">
          Not manufactured scarcity—we genuinely want feedback from our first users before the masses arrive.
        </p>
      </div>
    </section>
  )
}
