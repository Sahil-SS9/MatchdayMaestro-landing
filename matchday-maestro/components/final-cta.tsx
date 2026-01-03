"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [gdprConsent, setGdprConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const launchDate = new Date("2025-12-15T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = launchDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        // Launch date has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    // Initial update
    updateCountdown()
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          gdprConsent,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("🎉 Thanks! We'll notify you when Matchday Maestro launches.")
        setEmail("")
        setGdprConsent(false)
      } else {
        setSubmitMessage(`❌ ${data.error || 'Failed to join waiting list. Please try again.'}`)
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setSubmitMessage("❌ Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="relative w-full py-16 sm:py-20 px-4 bg-gradient-to-b from-transparent via-[#00C896]/5 to-transparent">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 mb-8">
          🎁 <span className="font-semibold">EARLY ADOPTER BONUS</span> — First 500 users get 500 coins free at launch
        </div>

        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
          Ready to Show Your Football Intelligence?
        </h2>
        <p className="text-xl text-white/70 mb-8">
          Join the only prediction app where football knowledge beats lucky guesses. Where everyone gets a fair shot.
          Where strategy matters more than spam.
        </p>

        <form onSubmit={handleSubmit} className="liquid-glass rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-bold">Join the Waitlist</h3>
          <p className="text-white/70">Be first to access Matchday Maestro when we launch December 15th</p>

          <div className="space-y-4">
            <div>
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <Input
                id="email-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="email-description"
                className="h-14 text-lg bg-white/5 border-white/10 focus:border-[#00C896]"
              />
              <p id="email-description" className="sr-only">We'll send you updates about Matchday Maestro launch</p>
            </div>

            <div className="flex items-start gap-3 text-left">
              <Checkbox
                id="gdpr"
                checked={gdprConsent}
                onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                required
                className="mt-1"
              />
              <label htmlFor="gdpr" className="text-sm text-white/70 leading-relaxed cursor-pointer">
                I agree to receive updates about Matchday Maestro.{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-[#00C896] hover:underline"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-[#00C896] hover:bg-[#00b382] text-black text-lg py-6 rounded-full"
          >
            {isSubmitting ? "Joining..." : "Join Waiting List"}
          </Button>

          {submitMessage && (
            <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl text-[#10b981] text-sm flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              {submitMessage}
            </div>
          )}
        </form>

        {/* Countdown Timer */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="liquid-glass rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-[#00C896]">{value}</div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
