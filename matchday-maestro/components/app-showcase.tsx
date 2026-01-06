"use client"

interface AppScreen {
  label: string
  title: string
  image: string
  color: string
}

export function AppShowcase() {
  const screens: AppScreen[] = [
    {
      label: "MONITOR",
      title: "Follow Match Updates",
      image: "/fixtures-match-updates-screen.png",
      color: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      label: "RESULTS",
      title: "Live Match Predictions",
      image: "/football-match-prediction-results-screen.jpeg",
      color: "from-emerald-500/20 to-emerald-600/20",
    },
    {
      label: "SPEED",
      title: "30-Second Window",
      image: "/countdown-timer-30-seconds-prediction-window.jpeg",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      label: "SOCIAL",
      title: "League Rankings",
      image: "/social-leaderboard-rankings-football-predictions.png",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      label: "STANDOUT",
      title: "Achievement Badges",
      image: "/achievement-badges-trophies-football-app.jpeg",
      color: "from-amber-500/20 to-amber-600/20",
    },
    {
      label: "TARGET MAN",
      title: "Target Man 501",
      image: "/target-man-501-challenge-screen.png",
      color: "from-rose-500/20 to-rose-600/20",
    },
  ]

  return (
    <div className="relative w-full py-8">
      {/* Gradient fade edges for scroll indication on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0f1015] to-transparent z-10 pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0f1015] to-transparent z-10 pointer-events-none md:hidden" />

      <div className="flex gap-4 md:gap-6 md:justify-center items-center perspective-1000 overflow-x-auto scrollbar-hide px-8 md:px-12 snap-x snap-mandatory md:snap-none">
        {screens.map((screen, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[180px] md:w-[240px] animate-slide-up snap-center"
            style={{
              animationDelay: `${index * 0.1}s`,
              transform: `rotateY(${(index - 2) * 8}deg) translateZ(${Math.abs(index - 2) * -20}px)`,
            }}
          >
            {/* Label badge - positioned above phone */}
            <div className="flex justify-center mb-3">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white shadow-lg">
                {screen.label}
              </span>
            </div>

            {/* Phone frame */}
            <div className="relative rounded-[32px] glass-border bg-neutral-900 p-2 hover:scale-105 transition-all duration-500 hover:z-10">
              {/* Screen content */}
              <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[24px] bg-black">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${screen.color} animate-pulse`} />

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-6 w-32 bg-black rounded-b-2xl" />

                {/* Screen image */}
                <img
                  src={screen.image || "/placeholder.svg"}
                  alt={screen.title}
                  className="relative z-0 w-full h-full object-cover"
                />

                {/* Glass overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Screen title below */}
            <p className="text-center mt-4 text-sm font-medium text-white/80">{screen.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
