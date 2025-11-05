import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"

export default function CoinToolkitPage() {
  const powerups = [
    { name: "Streak Shield", isPremium: false, desc: "Protect your prediction streak from being broken by one wrong answer. Leverages loss aversion psychology.", icon: "🛡️" },
    { name: "Double Points", isPremium: false, desc: "Earn 2x points on your next 3 predictions. Perfect for catching up in leagues.", icon: "⚡" },
    { name: "Second Chance", isPremium: false, desc: "Modify a prediction after submission but before match events occur. Change your mind when new information arrives.", icon: "🔄" },
    { name: "Lightning Round", isPremium: false, desc: "Chain 5 consecutive correct predictions for a 5x points multiplier. High risk, high reward.", icon: "⚡" },
    { name: "Extra Prediction Slot", isPremium: false, desc: "Bypass tier limits and get one additional prediction for a specific match. Free users can make 4 instead of 3.", icon: "➕" },
    { name: "Double Coin Rewards", isPremium: false, desc: "Double all coin earnings for 24 hours. Perfect for maximizing your coin balance.", icon: "💰" },
    { name: "Lucky Dip", isPremium: false, desc: "Let AI make the prediction for you based on data analysis. When you're unsure, let the algorithm decide.", icon: "🎲" },
    { name: "Prediction Steal", isPremium: false, desc: "View top predictions before the deadline. See what the best players are betting on.", icon: "👁️" },
    { name: "Golden Ticket", isPremium: true, desc: "Access premium features temporarily. Try before you buy.", icon: "🎫" },
  ]

  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <span className="text-6xl block mb-4">💰</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-display">
              Coin Toolkit
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              9 ways to bend the game in your favor. Strategic powerups that give you the edge when you need it most.
            </p>
          </div>

          {/* What It Is */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F59E0B]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is Coin Toolkit?</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Your strategic advantage. 9 powerful powerups that give you the edge when you need it most. Whether you want to protect your streak, double your points, or get a second chance on a prediction, coins unlock game-changing features.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Your coin balance stays in sync across all your devices instantly. Earn coins through daily play, or purchase coin packages to boost your arsenal. All transactions are secure and processed instantly—no waiting, no delays.
              </p>
            </div>
          </section>

          {/* App Screenshot Placeholder */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <p className="text-white/50 text-sm">App Screenshot Placeholder</p>
              </div>
              <p className="text-sm text-white/50 mt-4">Coin Toolkit Powerup Selection Screen</p>
            </div>
          </section>

          {/* What It Includes */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F59E0B]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">All 9 Powerups</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {powerups.map((powerup, idx) => (
                  <div key={idx} className="liquid-glass rounded-xl p-5 border border-white/10">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">{powerup.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold">{powerup.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded text-white whitespace-nowrap font-semibold ${
                            powerup.isPremium 
                              ? "bg-[#9333EA] border border-[#9333EA]" 
                              : "bg-[#00C896] border border-[#00C896]"
                          }`}>
                            {powerup.isPremium ? "Premium" : "Standard"}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">{powerup.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 bg-[#F59E0B]/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center font-bold text-[#F59E0B]">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Build Your Coin Balance</h3>
                    <p className="text-white/70">
                      Earn coins by playing daily (login rewards), getting predictions right, completing quizzes, and referring friends. You can also purchase coin packages if you want to boost your balance faster.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center font-bold text-[#F59E0B]">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pick Your Powerup</h3>
                    <p className="text-white/70">
                      Browse the 9 strategic powerups and choose the one that fits your situation. Protecting a streak? Need extra points? Want to change a prediction? There's a powerup for every scenario.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center font-bold text-[#F59E0B]">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Activate & Dominate</h3>
                    <p className="text-white/70">
                      Once you use a powerup, it activates right away. Some work instantly (like Second Chance), others last for a set time (like Double Coin Rewards for 24 hours). The app handles everything automatically.
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
              <Link href="/pricing">View Coin Packages</Link>
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

