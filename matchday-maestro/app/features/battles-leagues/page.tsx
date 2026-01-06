import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Battles & Leagues - Social Competition | Matchday Maestro",
  description: "Challenge friends to head-to-head prediction battles. Create or join private leagues. Play for coins, climb leaderboards, and prove you know football best.",
  openGraph: {
    title: "Battles & Leagues - Social Competition",
    description: "Head-to-head battles with coin pools. Private leagues with friends. Real-time competition.",
  },
}
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"

export default function BattlesLeaguesPage() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-6xl block mb-4">⚔️</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Battles & Leagues
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              1v1 your mates. Play for fun or play for coins. Winner gets the pot. Create leagues with up to 100 members.
            </p>
          </div>

          {/* What It Is */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#9333EA]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Are Battles & Leagues?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Battles enable 1v1 competitive prediction challenges between friends, supporting both free friendly battles and intense coin-based competitions. Private Leagues allow you to create custom leaderboards competing exclusively against friends, family, or colleagues, separate from the global rankings.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                This creates a social layer on top of solo predictions, driving engagement and competitive dynamics between friends. All users can participate in unlimited free battles, while playing for coins is opt-in and designed for competitive players who want more on the line.
              </p>
            </div>
          </section>

          {/* App Screenshot */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/battles-leagues-interface-screen.png"
                  alt="Battles & Leagues Interface"
                  width={320}
                  height={568}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-white/50 mt-4">Battles & Leagues Interface</p>
            </div>
          </section>

          {/* What It Includes */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#9333EA]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What It Includes</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-4">⚔️ Battles</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Challenge friends to predict specific matches</li>
                    <li>• Optional coin entry (winner gets all)</li>
                    <li>• Battle types: Standard, Lightning, Streak, Ultimate</li>
                    <li>• Automatic resolution when match finishes</li>
                    <li>• Detailed battle history and analytics</li>
                    <li>• Win/loss records and total coins won/lost</li>
                  </ul>
                </div>
                
                <div className="liquid-glass rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-4">🏆 Private Leagues</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Create custom leaderboards with friends</li>
                    <li>• Free: Up to 10 members, Premier League only</li>
                    <li>• Premium: Up to 100 members, all 6 competitions</li>
                    <li>• Gameweek and All-Time standings</li>
                    <li>• League management tools</li>
                    <li>• "Find My Rank" instant navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#9333EA]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Creating a Battle</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">
                        1
                      </div>
                      <div>
                        <p className="text-white/70">Find a friend using their 6-character friend code</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">
                        2
                      </div>
                      <div>
                        <p className="text-white/70">Pick a match and choose your battle style (quick lightning round or ultimate showdown)</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">
                        3
                      </div>
                      <div>
                        <p className="text-white/70">Optionally play for coins if you want to make it interesting—winner gets the pot</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Battle Resolution</h3>
                  <p className="text-white/70 mb-4">
                    When the match ends, the app automatically:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm ml-6">
                    <li>• Compares both players' predictions against what actually happened</li>
                    <li>• Awards points to whoever got more right</li>
                    <li>• Transfers the coin pool to the winner (if you played for coins)</li>
                    <li>• Sends both of you a notification with the results</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Creating a League</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">
                        1
                      </div>
                      <div>
                        <p className="text-white/70">Create a league and give it a name (like "Work League" or "Family Champions")</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">
                        2
                      </div>
                      <div>
                        <p className="text-white/70">Choose which competitions to track (Premier League for free users, all 6 competitions for Premium)</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-purple-400">
                        3
                      </div>
                      <div>
                        <p className="text-white/70">Share the invite code with friends and watch the leaderboard fill up</p>
                      </div>
                    </div>
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

