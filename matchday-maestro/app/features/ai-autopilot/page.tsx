import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "AI Autopilot - Automated Football Predictions | Matchday Maestro",
  description: "Let AI make predictions for you 24/7. Choose from 4 strategies: Smart Assistant, The Conservative, The Optimist, or The Statistician. Earn points while you sleep.",
  openGraph: {
    title: "AI Autopilot - Automated Football Predictions",
    description: "Your tireless teammate that plays for you 24/7. Choose your strategy and let AI earn points around the clock.",
  },
}
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"

export default function AIAutopilotPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-6xl block mb-4">🤖</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              AI Autopilot
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Your tireless mate who plays for you 24/7. Even while you sleep. Choose your strategy and let AI earn points around the clock.
            </p>
          </div>

          {/* What It Is */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#00C896]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is AI Autopilot?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Your tireless teammate. Set your strategy once, and let AI play for you 24/7—even while you sleep. No more missing matches or opportunities. Wake up to notifications like "Your AI earned 25 points last night!"
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Whether you're sleeping, working, or just can't watch every match, AI Autopilot ensures you never miss a prediction opportunity. It automatically pauses when you're actively playing, so you're always in control. Your AI assistant works around the clock, earning points for you.
              </p>
            </div>
          </section>

          {/* App Screenshot Placeholder */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <p className="text-white/50 text-sm">App Screenshot Placeholder</p>
              </div>
              <p className="text-sm text-white/50 mt-4">AI Autopilot Strategy Selection Screen</p>
            </div>
          </section>

          {/* What It Includes */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#00C896]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What It Includes</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Smart Assistant (Basic) - FREE</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Conservative, low-risk predictions focused on high-probability outcomes. Perfect for free users who want automated assistance.
                  </p>
                  <div className="text-sm text-white/60">
                    Baseline performance for all users
                  </div>
                </div>

                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Premium Strategies</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>The Conservative:</strong> Safe predictions with 70%+ confidence threshold. Protects your streak.</li>
                    <li><strong>The Optimist:</strong> Aggressive high-reward strategy for bigger wins</li>
                    <li><strong>The Statistician:</strong> Purely data-driven decisions using advanced analytics</li>
                  </ul>
                  <div className="text-sm mt-3 text-white/60">
                    Premium strategies outperform Basic by 15-30%
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="liquid-glass rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-3xl block mb-2">🔔</span>
                  <h4 className="font-semibold mb-2 text-sm">Smart Batched Notifications</h4>
                  <p className="text-white/70 text-xs">
                    Get summaries instead of constant interruptions
                  </p>
                </div>
                <div className="liquid-glass rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-3xl block mb-2">📊</span>
                  <h4 className="font-semibold mb-2 text-sm">Performance Analytics</h4>
                  <p className="text-white/70 text-xs">
                    Track win rates and see how your strategies perform
                  </p>
                </div>
                <div className="liquid-glass rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-3xl block mb-2">⏸️</span>
                  <h4 className="font-semibold mb-2 text-sm">Auto-Pause Detection</h4>
                  <p className="text-white/70 text-xs">
                    Pauses when you're active to avoid conflicts
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#00C896]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00C896]/20 flex items-center justify-center font-bold text-[#00C896]">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pick Your Strategy</h3>
                    <p className="text-white/70">
                      Choose from Smart Assistant (free), The Conservative, The Optimist, or The Statistician. Each one plays differently—some are safer, some go for bigger wins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00C896]/20 flex items-center justify-center font-bold text-[#00C896]">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">AI Watches the Match</h3>
                    <p className="text-white/70">
                      When something important happens during a match (like a goal or card), our AI analyzes the situation and decides what's likely to happen next based on thousands of similar past matches.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00C896]/20 flex items-center justify-center font-bold text-[#00C896]">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Predictions Happen Automatically</h3>
                    <p className="text-white/70">
                      If the AI thinks a prediction matches your strategy, it submits it for you automatically. You'll wake up to notifications like "Your AI earned 25 points last night!"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00C896]/20 flex items-center justify-center font-bold text-[#00C896]">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Points Keep Coming</h3>
                    <p className="text-white/70">
                      Even while you sleep, work, or can't watch matches, AI Autopilot keeps earning points. Free users get Basic strategy, Premium users get access to more advanced strategies that win more often.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[#00C896] to-[#10b981] hover:from-[#00b382] hover:to-[#0ea370] text-lg py-6 px-8 rounded-full"
            >
              <Link href="/#cta">Join the Waitlist</Link>
            </Button>
            <div>
              <Link href="/features" className="text-[#00C896] hover:text-[#00b382] transition-colors">
                ← View All Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

