"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [gdprConsent, setGdprConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // TODO: Replace with actual Mailchimp integration
    // This should call your serverless function at /.netlify/functions/subscribe
    // or /api/subscribe depending on your deployment platform

    setTimeout(() => {
      setSubmitMessage("🎉 Thanks! We'll notify you when Matchday Maestro launches.")
      setEmail("")
      setGdprConsent(false)
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="cta" className="container mx-auto px-4 py-16 sm:py-20 bg-[#0f1015]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
          Ready to Show Your Football Intelligence?
        </h2>
        <p className="text-xl text-white/70 mb-8">
          Join the only prediction app where football knowledge beats lucky guesses. Where everyone gets a fair shot.
          Where strategy matters more than spam.
        </p>

        <form onSubmit={handleSubmit} className="liquid-glass rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-bold">Join the Waitlist</h3>
          <p className="text-white/70">Be first to access Matchday Maestro when we launch November 1st</p>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 text-lg bg-white/5 border-white/10 focus:border-[#667eea]"
            />

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
                  href="/privacy-policy.html"
                  target="_blank"
                  className="text-[#667eea] hover:underline"
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
            className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6a3f8f] text-lg py-6 rounded-full"
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "🔧 Months of development by football obsessives",
            "⚡ Enterprise-grade infrastructure",
            "🏆 Multi-league data integration complete",
            "📱 iOS & Android optimized",
          ].map((benefit, i) => (
            <div key={i} className="liquid-glass rounded-xl p-4 text-center">
              <div className="text-sm text-white/70">{benefit}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 liquid-glass rounded-xl p-6">
          <p className="text-white/70">
            Built by football fans who were tired of unfair predictions. Launching to prove knowledge beats luck.
          </p>
        </div>
      </div>
    </section>
  )
}
