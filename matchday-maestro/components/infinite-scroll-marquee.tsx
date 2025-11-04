"use client"

export function InfiniteScrollMarquee() {
  const benefits = [
    { icon: "📅", text: "Launch Status: November 1st" },
    { icon: "🚀", text: "Early Access Priority" },
    { icon: "💎", text: "Bonus Coins Included" },
    { icon: "🏆", text: "Founder Badge Forever" },
    { icon: "🗳️", text: "Feature Vote Access" },
  ]

  // Duplicate for seamless loop
  const duplicatedBenefits = [...benefits, ...benefits]

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f1015] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f1015] to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div className="flex gap-8 animate-infinite-scroll">
        {duplicatedBenefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4 liquid-glass rounded-full whitespace-nowrap flex-shrink-0"
          >
            <span className="text-3xl">{benefit.icon}</span>
            <span className="text-sm font-medium text-white">{benefit.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
