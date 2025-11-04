"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  title: string
  description: string
  icon: string
}

export function FeaturesCarousel() {
  const features: Feature[] = [
    {
      title: "Fair 30-Second Windows",
      description:
        "Everyone gets exactly 30 seconds to predict, whether watching TV or following on your phone. Zero advantages.",
      icon: "⏱️",
    },
    {
      title: "Equal Points System",
      description:
        "Every prediction worth exactly 10 points. Corner kick or wonder goal - same value. Consistency wins.",
      icon: "🎯",
    },
    {
      title: "Strategic Limits",
      description: "3 predictions per match (free) forces real strategy. No spam-guessing 50 outcomes.",
      icon: "🧠",
    },
    {
      title: "Smart AI Prevention",
      description: "Our AI asks about different events after goals - TV watchers get zero prediction advantage.",
      icon: "🤖",
    },
    {
      title: "Live League Competition",
      description: "Compete with friends, colleagues, or join public leagues. Real-time rankings and bragging rights.",
      icon: "🏆",
    },
    {
      title: "Streak Rewards",
      description: "Build prediction streaks for bonus points and special badges. Consistency is rewarded.",
      icon: "🔥",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, features.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carousel container */}
      <div className="relative overflow-hidden rounded-2xl liquid-glass-enhanced p-8 min-h-[280px]">
        {/* Feature content */}
        <div className="relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-full"
              }`}
            >
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4 animate-scale-in">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white font-display">{feature.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full liquid-glass hover:scale-110 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full liquid-glass hover:scale-110 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#667eea] w-8" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
