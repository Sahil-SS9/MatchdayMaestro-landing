"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const problems = [
    {
      title: '"The 10-Second Cheat"',
      desc: "You predict a goal at 87 minutes. Your mate watching Sky Sports gets the notification 10 seconds before you and changes his prediction. You lose. Again.",
    },
    {
      title: '"The Lucky Spam Attack"',
      desc: "You make 3 strategic predictions. Sarah makes 47 random guesses hoping one pays off big. She wins 500 points, you get 30. Where's the skill in that?",
    },
    {
      title: '"The Confusing Points Lottery"',
      desc: "Why is a corner worth 2 points but Messi scoring from 35 yards worth 847? Just make it simple and fair for everyone.",
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
        Every <span className="gradient-text">Football Fan</span> Has Felt This...
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {problems.map((problem, i) => (
          <Card
            key={i}
            className={`liquid-glass-enhanced border border-red-500/20 hover:border-red-500/40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <CardHeader>
              <h3 className="text-xl text-red-400 font-semibold">{problem.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 italic leading-relaxed">{problem.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className={`mt-10 text-center liquid-glass-enhanced rounded-2xl p-6 max-w-3xl mx-auto border-[#667eea]/30 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.5s" }}
      >
        <p className="text-xl font-semibold text-[#667eea] italic">
          We built Matchday Maestro because we were sick of this nonsense too.
        </p>
      </div>
    </section>
  )
}
