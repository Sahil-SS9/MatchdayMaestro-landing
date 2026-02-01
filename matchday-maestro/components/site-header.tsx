"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresExpanded, setFeaturesExpanded] = useState(false)
  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const featureLinks = [
    { href: "/features/ai-autopilot", label: "AI Autopilot" },
    { href: "/features/coin-toolkit", label: "Coin Toolkit" },
    { href: "/features/battles-leagues", label: "Battles & Leagues" },
    { href: "/features/gloves-up", label: "Gloves Up" },
    { href: "/features/target-man", label: "Target Man" },
    { href: "/features/quizzes", label: "Daily & Weekly Quizzes" },
    { href: "/features/live-tracking", label: "Live Match Tracking" },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/matchday-maestro-icon.png"
              alt="Matchday Maestro"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
            <span className="text-lg font-bold text-white group-hover:text-[#00C896] transition-colors">
              MATCHDAY MAESTRO
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-[#00C896] transition-colors">
                  Features
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="liquid-glass border-white/10 min-w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href="/features" className="cursor-pointer">
                    All Features
                  </Link>
                </DropdownMenuItem>
                {featureLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#00C896] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-gradient-to-r from-[#00C896] to-[#10b981] text-white font-medium rounded-lg px-6 py-2.5 hover:from-[#00b382] hover:to-[#0ea370] transition-all"
            >
              <Link href="/#cta">Get Early Access</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="!bg-[#0f1015] border-l border-white/10 p-0 w-[280px]">
                <div className="flex items-center justify-between gap-2 px-4 py-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/matchday-maestro-icon.png"
                      alt="Matchday Maestro"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                    <span className="text-base font-bold text-white">MATCHDAY MAESTRO</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-1 mt-2 text-white">
                  <div>
                    <button
                      onClick={() => setFeaturesExpanded(!featuresExpanded)}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/5 hover:text-[#00C896] transition-colors"
                    >
                      <span className="text-sm">Features</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${featuresExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {featuresExpanded && (
                      <div className="bg-white/5 border-l-2 border-[#00C896]/30 ml-4">
                        <Link
                          href="/features"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 hover:text-[#00C896] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-sm text-[#00C896]">All Features</span>
                        </Link>
                        {featureLinks.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 hover:text-[#00C896] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="text-sm text-white/70">{l.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-[#00C896] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t border-white/10 p-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#00C896] to-[#10b981] text-white font-medium rounded-lg px-6 py-2.5"
                  >
                    <Link href="/#cta" onClick={() => setMobileMenuOpen(false)}>Get Early Access</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
