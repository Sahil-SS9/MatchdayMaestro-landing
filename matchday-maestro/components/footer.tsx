import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-20 md:pb-10 pointer-events-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Logo & Description */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/matchday-maestro-icon.png"
                alt="Matchday Maestro"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-white font-display group-hover:text-[#00C896] transition-colors">
                Matchday Maestro
              </span>
            </Link>
            <p className="max-w-sm text-sm text-neutral-400">
              Finally, a fair football prediction app where knowledge beats luck. Built by FusionFirstStudios for
              football fans who deserve better.
            </p>
          </div>

          {/* Product Links */}
          <div className="relative z-10">
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Product</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#cta" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Features Links */}
          <div className="relative z-10">
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Features</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features/ai-autopilot" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  AI Autopilot
                </Link>
              </li>
              <li>
                <Link href="/features/coin-toolkit" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Coin Toolkit
                </Link>
              </li>
              <li>
                <Link href="/features/battles-leagues" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Battles & Leagues
                </Link>
              </li>
              <li>
                <Link href="/features/quizzes" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Daily & Weekly Quizzes
                </Link>
              </li>
              <li>
                <Link href="/features/live-tracking" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Live Match Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="relative z-10">
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@matchdaymaestro.com"
                  className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="relative z-10">
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-300 hover:text-[#00C896] transition-colors cursor-pointer block relative z-20">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <h5 className="mb-4 text-sm font-semibold text-white uppercase tracking-widest">Follow Us</h5>
          <div className="flex justify-center gap-4">
            {/* X (Twitter) */}
            <a
              href="https://x.com/MaestroMatchday"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X (Twitter)"
              className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00C896]/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/matchday.maestro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00C896]/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/17eUpBaU7R/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00C896]/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@matchday.maestro1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
              className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00C896]/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-neutral-400 mt-8">
            &copy; 2025 FusionFirstStudios. All rights reserved. Matchday Maestro - Where Football Knowledge Beats Luck.
          </p>
        </div>
      </div>
    </footer>
  )
}
