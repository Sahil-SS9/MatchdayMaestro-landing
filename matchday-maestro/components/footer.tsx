import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-20 md:pb-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-lg flex items-center justify-center font-bold text-xs">
                MM
              </div>
              <span className="text-xl font-semibold text-white font-display">Matchday Maestro</span>
            </div>
            <p className="max-w-sm text-sm text-neutral-400">
              Finally, a fair football prediction app where knowledge beats luck. Built by FusionFirstStudios for
              football fans who deserve better.
            </p>
          </div>

          <div>
            <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Product</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              {["How It Works", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-[#667eea]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Company</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="index.html" className="hover:text-[#667eea]">
                  FusionFirstStudios
                </a>
              </li>
              <li>
                <a href="mailto:hello@matchdaymaestro.com" className="hover:text-[#667eea]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Legal</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/privacy-policy.html" className="hover:text-[#667eea]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service.html" className="hover:text-[#667eea]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© 2025 FusionFirstStudios. All rights reserved. Matchday Maestro - Where Football Knowledge Beats Luck.</p>
        </div>
      </div>
    </footer>
  )
}
