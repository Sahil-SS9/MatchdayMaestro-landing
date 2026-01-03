"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function PricingToggle() {
  const [activeTier, setActiveTier] = useState<'free' | 'premium'>('free')

  const features = [
    {
      name: "Predictions per match",
      free: "3",
      premium: "5 (+67%)",
      highlight: true
    },
    {
      name: "AI Autopilot strategies",
      free: "Basic (40-45% success)",
      premium: "All 4 (60-70% success)",
      highlight: true
    },
    {
      name: "Private league size",
      free: "10 members",
      premium: "100 members"
    },
    {
      name: "Competitions tracked",
      free: "Premier League only",
      premium: "All 6 leagues"
    },
    {
      name: "Target Man games",
      free: "1/week",
      premium: "1/day"
    },
    {
      name: "Achievements",
      free: "57 to unlock",
      premium: "57 + badges"
    },
    {
      name: "Advanced analytics",
      free: false,
      premium: true
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display mb-4">
        Premium: £2.99/Month
      </h2>
      <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto text-lg">
        67% more point opportunities. Better AI strategies. Bigger leagues.
      </p>

      {/* Toggle Tabs */}
      <div className="flex justify-center mb-12">
        <div className="liquid-glass rounded-full p-2 inline-flex gap-2 border border-white/10">
          <button
            onClick={() => setActiveTier('free')}
            className={`
              px-8 py-3 rounded-full font-semibold transition-all duration-300
              ${activeTier === 'free'
                ? 'bg-white/20 text-white shadow-lg'
                : 'text-white/60 hover:text-white/80'
              }
            `}
          >
            Free
          </button>
          <button
            onClick={() => setActiveTier('premium')}
            className={`
              px-8 py-3 rounded-full font-semibold transition-all duration-300
              ${activeTier === 'premium'
                ? 'bg-gradient-to-r from-[#00C896] to-[#10b981] text-white shadow-lg shadow-[#00C896]/30'
                : 'text-white/60 hover:text-white/80'
              }
            `}
          >
            Premium
          </button>
        </div>
      </div>

      {/* Feature List */}
      <motion.div
        key={activeTier}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-2xl mx-auto liquid-glass rounded-3xl p-8 border border-white/10"
      >
        <div className="space-y-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`
                flex justify-between items-center py-4 px-4 rounded-lg
                ${feature.highlight ? 'bg-[#00C896]/5 border border-[#00C896]/20' : 'border-b border-white/10'}
              `}
            >
              <span className="text-white/90 font-medium">{feature.name}</span>
              <span className="text-white font-semibold text-right flex items-center gap-2">
                {activeTier === 'free'
                  ? (typeof feature.free === 'boolean' 
                      ? (feature.free ? <Check className="w-5 h-5 text-[#00C896]" /> : <X className="w-5 h-5 text-red-400" />)
                      : <span>{feature.free}</span>)
                  : (typeof feature.premium === 'boolean'
                      ? (feature.premium ? <Check className="w-5 h-5 text-[#00C896]" /> : <X className="w-5 h-5 text-red-400" />)
                      : <span>{feature.premium}</span>)
                }
              </span>
            </motion.div>
          ))}
        </div>

        {activeTier === 'premium' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 bg-[#00C896]/10 border border-[#00C896]/30 rounded-xl"
          >
            <p className="text-white/90 mb-4">
              <span className="font-bold text-[#00C896]">The Math:</span> Premier League Season
            </p>
            <div className="space-y-2 text-sm text-white/80 mb-4">
              <p className="text-white/60 italic mb-3">38 gameweeks × 10 matches per gameweek = 380 matches total</p>
              <p>• <span className="font-semibold">FREE:</span> 1,140 predictions per season (3 per match × 380 matches)</p>
              <p>• <span className="font-semibold">PREMIUM:</span> 1,900 predictions per season (5 per match × 380 matches)</p>
              <p className="text-[#00C896] font-semibold mt-4 text-base">
                = 760 extra prediction opportunities (+67%)
              </p>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-white/60 mb-3">🎁 7-day free trial included</p>
              <button className="w-full bg-gradient-to-r from-[#00C896] to-[#10b981] text-white font-bold py-3 rounded-full hover:scale-105 transition-transform">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
