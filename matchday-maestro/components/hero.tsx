"use client"

import { Button } from "@/components/ui/button"
import { Clock, Target, Shield } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { AppShowcase } from "./app-showcase"

export function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollY = window.scrollY
        const parallaxSpeed = 0.5
        phoneRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative isolate">
      <div className="mesh-gradient" />

      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2 animate-scale-in">
            <Image
              src="/matchday-maestro-icon.png"
              alt="Matchday Maestro"
              width={32}
              height={32}
              className="w-8 h-8 animate-pulse-glow"
              priority
            />
            <p className="text-sm uppercase tracking-[0.25em] text-[#00C896]/80">Fair Predictions</p>
          </div>

          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-display animate-slide-up">
            <span className="block">FINALLY, FOOTBALL</span>
            <span className="block gradient-text-shimmer drop-shadow-[0_0_30px_rgba(0,200,150,0.5)]">
              PREDICTIONS
            </span>
            <span className="block">THAT REWARD KNOWLEDGE OVER LUCK</span>
          </h1>

          <p
            className="mt-4 max-w-2xl text-center text-sm text-white/80 sm:text-base animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            The only prediction app where everyone gets the same 30-second window. No TV advantages. No lucky guesses.
            Pure football intelligence wins.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-[#00C896] to-[#10b981] px-8 py-6 text-base font-medium text-white hover:from-[#00b382] hover:to-[#0ea370] shadow-lg hover:shadow-[0_0_30px_rgba(0,200,150,0.4)] transition-all duration-300 hover:scale-105"
            >
              <a href="/#cta">Get Free Early Access</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full liquid-glass px-8 py-6 text-base font-medium text-white border-white/20 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <a href="/how-it-works">See How It Works</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 stagger-children">
            <div className="flex items-center gap-2 text-sm font-medium liquid-glass px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-[#00C896]" />
              <span>30s Fair Window</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium liquid-glass px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-[#F59E0B]" />
              <span>10 Points Each</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium liquid-glass px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#10b981]" />
              <span>100% Skill-Based</span>
            </div>
          </div>
        </div>
      </div>

      {/* AppShowcase outside container for full-width display */}
      <div className="mt-16 w-full relative z-10">
        <AppShowcase />
      </div>
    </section>
  )
}
