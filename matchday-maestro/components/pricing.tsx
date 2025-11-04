"use client"

import { useEffect, useRef, useState } from "react"

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const rows = [
    { feature: "Predictions per match", free: "3 strategic choices", premium: "Unlimited predictions" },
    { feature: "Friend competitions", free: "✅ Full access", premium: "✅ Plus create leagues" },
    { feature: "Fair scoring system", free: "✅ 10 points each", premium: "✅ Plus bonus multipliers" },
    { feature: "Live notifications", free: "✅ Same timing", premium: "⚡ 30 seconds earlier prep" },
    { feature: "Advanced stats", free: "Basic accuracy", premium: "Deep analytics dashboard" },
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
    <section ref={sectionRef} id="pricing" className="container mx-auto px-4 py-16 sm:py-20 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#667eea]/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse" />

      <h2
        className={`mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        Start Free, Upgrade When You're Hooked
      </h2>

      <div
        className={`mt-10 max-w-4xl mx-auto liquid-glass-enhanced rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-white/5">
          <div className="p-6 font-semibold text-white/70">Feature</div>
          <div className="p-6 text-center font-bold">Free (Forever)</div>
          <div className="p-6 text-center font-bold bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20">
            Premium (£2.99/mo)
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={i}
            className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10 hover:bg-white/5 transition-colors duration-200"
          >
            <div className="p-6 font-medium text-white/70">{row.feature}</div>
            <div className="p-6 text-center text-sm">{row.free}</div>
            <div className="p-6 text-center bg-[#667eea]/5 text-sm hover:bg-[#667eea]/10 transition-colors duration-200">
              {row.premium}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`text-center mt-8 liquid-glass-enhanced rounded-xl p-6 max-w-2xl mx-auto border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "0.4s" }}
      >
        <p className="text-[#10b981] font-semibold">
          Try Premium 30 days free. Not convinced? Full refund, no questions.
        </p>
      </div>
    </section>
  )
}
