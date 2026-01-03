"use client"

import { motion } from "framer-motion"
import { Circle, Bot, Brain, Smartphone, Lock } from "lucide-react"
import type { ReactNode } from "react"

// OPTION: Clean Horizontal Process Flow (Recommended)
export function ReverseTimeline() {
  const steps: { time: string; icon: ReactNode; title: string; description: string }[] = [
    {
      time: "87:00",
      icon: <Circle className="w-8 h-8 fill-current" />,
      title: "Goal Scored",
      description: "Salah scores for Liverpool"
    },
    {
      time: "87:05",
      icon: <Bot className="w-8 h-8" />,
      title: "AI Detects",
      description: "Event processed instantly"
    },
    {
      time: "87:08",
      icon: <Brain className="w-8 h-8" />,
      title: "Analyzes",
      description: "541,000+ historical events"
    },
    {
      time: "87:10",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Sends Question",
      description: '"Card next?" Not "Goal next?"'
    }
  ]

  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-transparent via-[#00C896]/5 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white flex items-center justify-center gap-3">
          <Lock className="w-8 h-8 text-[#00C896]" />
          The Reverse Timeline Secret
        </h3>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          After a goal, we ask about <span className="text-[#00C896] font-semibold">DIFFERENT events</span>.
          Why? Because TV watchers can't cheat if the question isn't about what they just saw happen.
        </p>

        {/* Horizontal Flow - Mobile Stacked, Desktop Horizontal */}
        <div className="relative mb-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-2 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative px-4"
              >
                {/* Mobile connector - simple arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg width="24" height="40" viewBox="0 0 24 40" className="text-[#00C896]">
                      <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                      <polygon points="12,40 6,30 18,30" fill="currentColor" opacity="0.8" />
                    </svg>
                  </div>
                )}

                {/* Bracket connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[calc(50%+3.5rem)] top-14 w-[calc(100%-3.5rem)] h-16 z-0 pointer-events-none">
                    <svg width="100%" height="64" viewBox="0 0 100 64" preserveAspectRatio="none" className="overflow-visible">
                      {/* L-shaped bracket path */}
                      <path
                        d="M 0 24 L 30 24 L 30 40 L 97 40"
                        stroke="#00C896"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Arrow pointing right */}
                      <polygon
                        points="95,36 103,40 95,44"
                        fill="#00C896"
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                )}

                {/* Icon circle */}
                <div className="relative mb-4">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-[#00C896]/20 blur-md scale-110" />
                  
                  {/* Icon container */}
                  <div className="relative w-28 h-28 rounded-full border-2 border-[#00C896]/40 bg-gradient-to-br from-[#0a0f14] to-[#0f1520] flex flex-col items-center justify-center shadow-[0_0_24px_rgba(0,200,150,0.15)]">
                    <div className="text-[#00C896] mb-1">{step.icon}</div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00C896]">{step.time}</span>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-white/65 leading-relaxed max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-2xl p-6 border border-[#00C896]/30 max-w-2xl mx-auto"
        >
          <p className="text-white/90 text-center leading-relaxed">
            <span className="text-[#00C896] font-semibold">Fair Play Guarantee:</span>
            {" "}By asking about cards/corners/subs after goals, 
            we eliminate the 5-35 second TV broadcast delay advantage. 
            Everyone plays on equal ground, regardless of how they're watching.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
