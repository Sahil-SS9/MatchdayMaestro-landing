"use client"

export function InfiniteScrollMarquee() {
  const testimonials = [
    { name: "Priya S.", role: "FPL Veteran", text: "Been playing FPL since 2019. First app that makes live predictions actually fair—no more losing to mates watching on TV." },
    { name: "Marcus J.", role: "Casual Fan", text: "I work shifts so I miss most matches. AI Autopilot literally plays for me while I'm at work. Genius." },
    { name: "Jamal H.", role: "Weekend Warrior", text: "The 30-second window is perfect. Everyone gets the same chance whether you're watching live or following on your phone." },
    { name: "Chen W.", role: "Stats Enthusiast", text: "Flat 10 points per prediction means strategy actually matters. Not just guessing six scorelines and hoping." },
    { name: "Jacob W.", role: "Mini-League Creator", text: "Set up a league with the lads from work. Everyone's hooked—even the ones who barely watch football." },
    { name: "Hamzah K.", role: "Premium Subscriber", text: "AI Autopilot Conservative strategy is mint. Woke up to 35 points yesterday from matches I completely missed." },
    { name: "Awais R.", role: "Coin Collector", text: "Daily quizzes are addictive. Easy way to stack coins without spending money." },
    { name: "Sohaib C.", role: "Battle Master", text: "Won 250 coins off my mate last night in a head-to-head battle. Proper bragging rights." },
    { name: "Matty S.", role: "Night Shift Worker", text: "Miss most evening matches because of work. AI plays for me and I'm still top 3 in my league." },
    { name: "Abdul H.", role: "Strategic Player", text: "Double Points powerup is clutch. Saved it for City vs Arsenal and banked 60 points in one match." },
    { name: "James C.", role: "FPL Refugee", text: "Sick of FPL's weekly lockouts. This lets me predict Champions League nights—finally." },
    { name: "Trerey A.", role: "Competitive Gamer", text: "The streak system keeps me coming back. Currently on 12 matches—not breaking it now." },
    { name: "Alex C.", role: "Data Analyst", text: "Love that it's skill-based. No random lottery nonsense, just consistent point grinding." },
    { name: "Omari E.", role: "Social Player", text: "Created a league with uni mates. Way more engaging than just watching matches." },
    { name: "Darius M.", role: "Arsenal Fan", text: "Finally got my girlfriend into football predictions. The simple 10-point system makes it easy to explain." },
    { name: "Navjit H.", role: "Streak Chaser", text: "15-match streak and counting. The Streak Shield powerup saved me twice—absolute game changer." },
    { name: "Sofia F.", role: "Premium User", text: "Worth it for the AI strategies alone. Conservative mode gets me points even when I'm sleeping." },
    { name: "Tom D.", role: "New Player", text: "Started last month. Way easier than FPL spreadsheets—just predict what happens next during matches." },
  ]

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="relative w-full overflow-hidden py-12 bg-gradient-to-b from-transparent via-[#00C896]/5 to-transparent">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">
          Built for Football Fans Like You
        </h2>
        <p className="text-center text-white/60 text-sm">
          What players are saying about our vision
        </p>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f1015] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f1015] to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div className="flex gap-6 animate-infinite-scroll">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 px-6 py-5 liquid-glass rounded-2xl border border-white/10 max-w-sm flex-shrink-0"
          >
            <p className="text-white/90 text-sm italic leading-relaxed">"{testimonial.text}"</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00C896] to-[#10b981] flex items-center justify-center text-white font-bold text-xs">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold text-xs">{testimonial.name}</p>
                <p className="text-white/50 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
