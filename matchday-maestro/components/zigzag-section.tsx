"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

type FeatureItem = {
  icon: ReactNode
  title: string
  description: string
}

export function ZigzagSection({ items }: { items: FeatureItem[] }) {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display mb-4">
        How Matchday Maestro Actually Works
      </h2>
      <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto text-lg">
        We react to matches as they unfold. No pre-match lockouts. No TV advantages. Pure live engagement.
      </p>

      {/* Simple Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <FeatureCard 
            key={index} 
            item={item} 
            index={index}
          />
        ))}
      </div>

      {/* Stats Proof - Moved here with context */}
      <div className="mt-20 max-w-4xl mx-auto">
        <p className="text-center text-white/80 mb-8 text-lg leading-relaxed">
          We've analyzed <span className="text-[#00C896] font-semibold">541,000+ match events</span>, 
          identified <span className="text-[#00C896] font-semibold">3,059 unique patterns</span> 
          across <span className="text-[#00C896] font-semibold">6 major competitions</span> to 
          create predictions that actually reward football knowledge, not lucky guesses.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#00C896] mb-2">541,000+</div>
            <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Match Events</div>
          </div>
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#00C896] mb-2">3,059</div>
            <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Patterns</div>
          </div>
          <div className="liquid-glass rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#00C896] mb-2">6</div>
            <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Competitions</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ item, index }: { item: FeatureItem; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="liquid-glass rounded-2xl p-6 border border-white/10 hover:border-[#00C896]/30 transition-all"
    >
      <div className="mb-4 flex justify-center text-[#00C896]">{item.icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 text-center">
        {item.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed text-center">
        {item.description}
      </p>
    </motion.div>
  )
}
