import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Daily & Weekly Quizzes - Football Trivia | Matchday Maestro",
  description: "2,500+ football questions covering Premier League history, tactics, player statistics and trivia. Daily challenges and weekly competitions with leaderboards.",
  openGraph: {
    title: "Daily & Weekly Quizzes - Football Trivia",
    description: "Test your football knowledge with 2,500+ questions. Earn coins and climb quiz leaderboards.",
  },
}
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"

export default function QuizzesPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-6xl block mb-4">📝</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Daily & Weekly Quizzes
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              2,500+ football questions. Test your knowledge, earn coins, and climb quiz leaderboards.
            </p>
          </div>

          {/* What It Is */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F97316]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Are Daily & Weekly Quizzes?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Our comprehensive quiz competition system features a premium database of 2,500+ football questions covering Premier League history, tactics, player statistics, and football trivia. Questions are categorized by difficulty levels (casual to expert) to accommodate both casual fans and football encyclopedia enthusiasts.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                The quiz system integrates seamlessly with the coin economy—correct answers award coins (typically 5-15 coins per question depending on difficulty), creating another way to build your coin balance while testing your football knowledge.
              </p>
            </div>
          </section>

          {/* App Screenshot Placeholder */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <p className="text-white/50 text-sm">App Screenshot Placeholder</p>
              </div>
              <p className="text-sm text-white/50 mt-4">Quiz Question Interface</p>
            </div>
          </section>

          {/* What It Includes */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F97316]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What It Includes</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Daily Quiz Challenges</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Quick 5-10 question rounds for casual engagement. Perfect for testing your football knowledge on the go.
                  </p>
                  <div className="text-sm text-[#00C896]">
                    Earn 5-15 coins per correct answer
                  </div>
                </div>
                
                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Weekly Quiz Competitions</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Longer format with leaderboard rankings and prizes. Compete against the community.
                  </p>
                  <div className="text-sm text-[#00C896]">
                    Categories: History, Tactics, Stats, Trivia
                  </div>
                </div>
              </div>

              <div className="liquid-glass rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Question Categories</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-white/70">
                  <div>
                    <strong className="text-white">Premier League History:</strong> Classic moments, legendary players, memorable matches
                  </div>
                  <div>
                    <strong className="text-white">Tactics & Strategy:</strong> Formations, game plans, tactical analysis
                  </div>
                  <div>
                    <strong className="text-white">Player Statistics:</strong> Records, achievements, career milestones
                  </div>
                  <div>
                    <strong className="text-white">Football Trivia:</strong> Fun facts, obscure knowledge, general football lore
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F97316]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center font-bold text-orange-400">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pick Your Quiz</h3>
                    <p className="text-white/70">
                      Choose from Daily Quiz Challenges (quick 5-10 questions) or Weekly Quiz Competitions (longer format with leaderboards). Each quiz is organized by difficulty and topic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center font-bold text-orange-400">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Answer Questions</h3>
                    <p className="text-white/70">
                      Questions pop up one at a time with multiple choice answers. You have a time limit to answer each one. Questions cover Premier League history, tactics, player stats, and general football trivia.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center font-bold text-orange-400">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Earn Coins & Climb Rankings</h3>
                    <p className="text-white/70">
                      Get coins for every correct answer (5-15 coins depending on difficulty). Weekly competitions also rank you on leaderboards against other players. See how your football knowledge stacks up.
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

