# 🎯 COMPLETE CODE COPY-PASTE GUIDE
## Every Line of Code Needed to Fix All Missing Changes

This document contains **complete, ready-to-copy-paste code** for every file that needs updating.

---

## 📋 FILES TO UPDATE

1. ✅ `matchday-maestro/app/page.tsx` - Landing page restructure
2. ✅ `matchday-maestro/components/site-header.tsx` - Navigation links + logo
3. ✅ `matchday-maestro/components/hero.tsx` - Button link fix
4. ✅ `matchday-maestro/components/footer.tsx` - Complete redesign with social icons
5. ✅ `matchday-maestro/components/early-access.tsx` - Pyramid layout + new content
6. ✅ `matchday-maestro/components/final-cta.tsx` - Countdown + social sharing + bonus banner
7. ✅ `matchday-maestro/components/problem-section.tsx` - Three Flaws content

---

# FILE 1: `matchday-maestro/app/page.tsx`

**ACTION: Replace the ENTIRE file with this code:**

```typescript
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { InfiniteScrollMarquee } from "@/components/infinite-scroll-marquee"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesCarousel } from "@/components/features-carousel"
import { SocialFeatures } from "@/components/social-features"
import { EarlyAccess } from "@/components/early-access"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { AnimatedStadiumBackground } from "@/components/animated-stadium-background"

export default function Page() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedStadiumBackground />
      <ScrollAnimations />
      <SiteHeader />
      <Hero />
      <InfiniteScrollMarquee />
      <ProblemSection />
      <SolutionSection />
      <FeaturesCarousel />
      
      {/* Learn More CTA - How It Works */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Link
            href="/how-it-works"
            className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass rounded-2xl hover:scale-105 transition-all"
          >
            <span className="text-lg font-semibold text-white">Want to see AI Autopilot in action?</span>
            <span className="text-[#00C896] group-hover:translate-x-2 transition-transform">Learn More →</span>
          </Link>
        </div>
      </section>

      <SocialFeatures />
      
      {/* Learn More CTA - Pricing */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass rounded-2xl hover:scale-105 transition-all"
          >
            <span className="text-lg font-semibold text-white">Explore Coin Boosts & Premium Benefits</span>
            <span className="text-[#00C896] group-hover:translate-x-2 transition-transform">View Pricing →</span>
          </Link>
        </div>
      </section>

      <EarlyAccess />
      
      {/* Learn More CTA - FAQ */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-3 px-8 py-4 liquid-glass rounded-2xl hover:scale-105 transition-all"
          >
            <span className="text-lg font-semibold text-white">Have questions about how it works?</span>
            <span className="text-[#00C896] group-hover:translate-x-2 transition-transform">See All FAQs →</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
```

---

# FILE 2: `matchday-maestro/components/site-header.tsx`

**ACTION: Replace the ENTIRE file with this code:**

```typescript
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-white/10 p-0 w-64">
                <div className="flex items-center gap-2 px-4 py-4 border-b border-white/10">
                  <Image
                    src="/matchday-maestro-icon.png"
                    alt="Matchday Maestro"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                  <span className="text-base font-bold text-white">MATCHDAY MAESTRO</span>
                </div>
                <nav className="flex flex-col gap-1 mt-2 text-white">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 hover:text-[#00C896] transition-colors"
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
                    <Link href="/#cta">Get Early Access</Link>
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
```

---

# FILE 3: `matchday-maestro/components/hero.tsx`

**ACTION: Find line 69 and change it:**

**FIND THIS (line 69):**
```typescript
<a href="#how-it-works">Watch 60s Demo</a>
```

**REPLACE WITH:**
```typescript
<a href="/how-it-works">See How It Works</a>
```

**OR if you want to replace the entire file, here's the complete code:**

```typescript
"use client"

import { Button } from "@/components/ui/button"
import { Clock, Target, Shield } from "lucide-react"
import { useEffect, useRef } from "react"
import { AppShowcase } from "./app-showcase"

export function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollY = window.scrollY
        const parallaxSpeed = 0.5
        phoneRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative isolate overflow-hidden">
      <div className="mesh-gradient" />

      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2 animate-scale-in">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00C896] to-[#10b981] rounded-lg flex items-center justify-center font-bold text-sm animate-pulse-glow">
              MM
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#00C896]/80">Fair Predictions</p>
          </div>

          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-display animate-slide-up">
            <span className="block">FINALLY, FOOTBALL</span>
            <span className="block gradient-text-shimmer drop-shadow-[0_0_30px_rgba(0,200,150,0.5)]">
              PREDICTIONS
            </span>
            <span className="block">THAT REWARD KNOWLEDGE OVER LUCK</span>
          </h1>

          <p
            className="mt-4 max-w-2xl text-center text-sm text-white/80 sm:text-base animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            The only prediction app where everyone gets the same 30-second window. No TV advantages. No lucky guesses.
            Pure football intelligence wins.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-[#00C896] to-[#10b981] px-8 py-6 text-base font-medium text-white hover:from-[#00b382] hover:to-[#0ea370] shadow-lg hover:shadow-[0_0_30px_rgba(0,200,150,0.4)] transition-all duration-300 hover:scale-105"
            >
              <a href="/#cta">Get Free Early Access</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full liquid-glass px-8 py-6 text-base font-medium text-white border-white/20 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <a href="/how-it-works">See How It Works</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 stagger-children">
            <div className="flex items-center gap-2 text-sm font-medium liquid-glass px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-[#00C896]" />
              <span>30s Fair Window</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium liquid-glass px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-[#F59E0B]" />
              <span>10 Points Each</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium liquid-glass px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#10b981]" />
              <span>100% Skill-Based</span>
            </div>
          </div>

          <div className="mt-16 w-full">
            <AppShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

# FILE 4: `matchday-maestro/components/footer.tsx`

**ACTION: Replace the ENTIRE file with this code:**

```typescript
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-20 md:pb-10 pointer-events-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
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
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Product</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/how-it-works" className="hover:text-[#00C896] transition-colors cursor-pointer inline-block pointer-events-auto">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#00C896] transition-colors cursor-pointer inline-block pointer-events-auto">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#00C896] transition-colors cursor-pointer inline-block pointer-events-auto">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#cta" className="hover:text-[#00C896] transition-colors cursor-pointer inline-block pointer-events-auto">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Company</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a
                  href="mailto:hello@matchdaymaestro.com"
                  className="hover:text-[#00C896] transition-colors cursor-pointer inline-block pointer-events-auto"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Legal</h5>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/privacy" className="hover:text-[#00C896] transition-colors cursor-pointer inline-block pointer-events-auto">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00C896] transition-colors cursor-pointer inline-block pointer-events-auto">
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
```

---

# FILE 5: `matchday-maestro/components/early-access.tsx`

**ACTION: Replace the ENTIRE file with this code:**

```typescript
"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function EarlyAccess() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const benefits = [
    {
      icon: "🎁",
      title: "500 Free Coins",
      desc: "First 500 users get a massive coin bonus at launch to unlock premium features instantly.",
    },
    {
      icon: "🏆",
      title: "Founder Badge",
      desc: "Permanent special status showing you were here from day one. Limited to first 500 only.",
    },
    {
      icon: "🚀",
      title: "Priority Access",
      desc: "Skip the line and get immediate access when we launch. No waiting.",
    },
    {
      icon: "🗳️",
      title: "Shape the Future",
      desc: "Direct input on features, leagues, and improvements. Your feedback builds the roadmap.",
    },
    {
      icon: "⚡",
      title: "Exclusive Updates",
      desc: "Behind-the-scenes development updates and early feature previews before anyone else.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        Why Join the Waitlist?
      </h2>
      <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto">
        Be part of the revolution that's fixing live football predictions. Limited spots available.
      </p>

      {/* Pyramid Layout: 2 cards on top row, 3 cards on bottom row */}
      <div className="mt-12 max-w-5xl mx-auto space-y-6">
        {/* Top Row - 2 Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {benefits.slice(0, 2).map((benefit, i) => (
            <Card
              key={i}
              className={`liquid-glass border border-white/20 hover:border-[#00C896]/40 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-5xl mb-2">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.slice(2).map((benefit, i) => (
            <Card
              key={i + 2}
              className={`liquid-glass border border-white/20 hover:border-[#00C896]/40 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-5xl mb-2">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Built by football fans text */}
      <div
        className={`mt-10 text-center liquid-glass rounded-xl p-6 max-w-2xl mx-auto border border-white/10 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.5s" }}
      >
        <p className="text-white/80 leading-relaxed">
          Built by football fans who were tired of unfair predictions. Launching to prove knowledge beats luck.
        </p>
      </div>

      <div
        className={`mt-6 text-center liquid-glass rounded-xl p-6 max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.6s" }}
      >
        <p className="text-white/70 text-sm">
          Not manufactured scarcity—we genuinely want feedback from our first users before the masses arrive.
        </p>
      </div>
    </section>
  )
}
```

---

# FILE 6: `matchday-maestro/components/final-cta.tsx`

**ACTION: Replace the ENTIRE file with this code:**

```typescript
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [gdprConsent, setGdprConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [shareUrl, setShareUrl] = useState("https://matchdaymaestro.com")

  useEffect(() => {
    const launchDate = new Date("2025-11-01T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = launchDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.origin)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          gdprConsent,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("🎉 Thanks! We'll notify you when Matchday Maestro launches.")
        setEmail("")
        setGdprConsent(false)
      } else {
        setSubmitMessage(`❌ ${data.error || 'Failed to join waiting list. Please try again.'}`)
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setSubmitMessage("❌ Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="container mx-auto px-4 py-16 sm:py-20 bg-[#0f1015]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 mb-8">
          🎁 <span className="font-semibold">EARLY ADOPTER BONUS</span> — First 500 users get 500 coins free at launch
        </div>

        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
          Ready to Show Your Football Intelligence?
        </h2>
        <p className="text-xl text-white/70 mb-8">
          Join the only prediction app where football knowledge beats lucky guesses. Where everyone gets a fair shot.
          Where strategy matters more than spam.
        </p>

        <form onSubmit={handleSubmit} className="liquid-glass rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-bold">Join the Waitlist</h3>
          <p className="text-white/70">Be first to access Matchday Maestro when we launch November 1st</p>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 text-lg bg-white/5 border-white/10 focus:border-[#00C896]"
            />

            <div className="flex items-start gap-3 text-left">
              <Checkbox
                id="gdpr"
                checked={gdprConsent}
                onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                required
                className="mt-1"
              />
              <label htmlFor="gdpr" className="text-sm text-white/70 leading-relaxed cursor-pointer">
                I agree to receive updates about Matchday Maestro.{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-[#00C896] hover:underline"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#00C896] to-[#10b981] hover:from-[#00b382] hover:to-[#0ea370] text-lg py-6 rounded-full"
          >
            {isSubmitting ? "Joining..." : "Join Waiting List"}
          </Button>

          {submitMessage && (
            <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl text-[#10b981] text-sm flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              {submitMessage}
            </div>
          )}
        </form>

        {/* Countdown Timer */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="liquid-glass rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-[#00C896]">{value}</div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{unit}</div>
            </div>
          ))}
        </div>

        {/* Social Sharing */}
        <div className="mt-8 liquid-glass rounded-xl p-6">
          <h4 className="text-sm font-semibold text-white mb-4 text-center">Share with your football mates:</h4>
          <div className="flex justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=Finally%2C%20a%20fair%20football%20prediction%20app!%20Knowledge%20beats%20luck.&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C896]/30 transition-all"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C896]/30 transition-all"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C896]/30 transition-all"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl)
                alert("Link copied!")
              }}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C896]/30 transition-all"
              aria-label="Copy link"
            >
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "🔧 Months of development by football obsessives",
            "⚡ Enterprise-grade infrastructure",
            "🏆 Multi-league data integration complete",
            "📱 iOS & Android optimized",
          ].map((benefit, i) => (
            <div key={i} className="liquid-glass rounded-xl p-4 text-center">
              <div className="text-sm text-white/70">{benefit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

# FILE 7: `matchday-maestro/components/problem-section.tsx`

**ACTION: Replace the ENTIRE file with this code:**

```typescript
"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const flaws = [
    {
      emoji: "⏰🔒",
      title: "The Pre-Match Prison",
      desc: '"Liverpool just scored. City are pushing forward desperately. You KNOW a goal is coming in the next 5 minutes... but you can\'t predict it because you had to submit everything before kick-off."',
      problem: "Most prediction apps lock you into pre-match predictions. You miss the entire 90 minutes of live drama—can't react to momentum shifts, injuries, or red cards. The exciting parts when outcomes become predictable? You're locked out.",
    },
    {
      emoji: "🔁😴",
      title: "The Boring Question Loop",
      desc: '"Week 1: Who wins? Week 2: Who wins? Week 3: Who wins? Week 38: Who wins? It\'s the same prediction every single match for 9 months straight."',
      problem: "Most apps ask identical questions every match regardless of context. Man City vs Liverpool title decider? Same questions as a relegation battle. 0-0 at 89 minutes? Same as a 4-3 thriller. No variety = stale after 10 weeks.",
    },
    {
      emoji: "🎰🤯",
      title: "The Impossible Jackpot",
      desc: '"Predict 6 EXACT scores correctly. AND guess the minute of first goal. AND hope nobody else got the same scores so you don\'t split the prize. It\'s basically the lottery with football knowledge."',
      problem: "Apps requiring exact score predictions across 6 matches need lottery-level luck. 15-20 likely scorelines per match means 11.4 MILLION possible combinations. This rewards luck, not football intelligence.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 sm:py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <h2
        className={`mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        We Fixed The Three Flaws Breaking Live Predictions
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {flaws.map((flaw, i) => (
          <Card
            key={i}
            className={`liquid-glass-enhanced border border-red-500/20 hover:border-red-500/40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <CardHeader>
              <div className="text-4xl mb-3">{flaw.emoji}</div>
              <h3 className="text-xl text-red-400 font-semibold mb-2">{flaw.title}</h3>
              <p className="text-white/70 italic leading-relaxed text-sm">{flaw.desc}</p>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 text-xs leading-relaxed mt-2">
                <span className="text-red-400 font-semibold">THE PROBLEM: </span>
                {flaw.problem}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        className={`mt-10 text-center liquid-glass-enhanced rounded-2xl p-6 max-w-3xl mx-auto border-[#00C896]/30 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ transitionDelay: "0.5s" }}
      >
        <p className="text-xl font-semibold text-[#00C896] italic">
          We built Matchday Maestro because we were sick of this nonsense too.
        </p>
      </div>
    </section>
  )
}
```

---

# ✅ CHECKLIST FOR THE OTHER AGENT

Use this checklist to verify all changes:

- [ ] **File 1**: `app/page.tsx` - Replaced entire file
- [ ] **File 2**: `components/site-header.tsx` - Replaced entire file
- [ ] **File 3**: `components/hero.tsx` - Changed line 69 OR replaced entire file
- [ ] **File 4**: `components/footer.tsx` - Replaced entire file (social icons, proper links)
- [ ] **File 5**: `components/early-access.tsx` - Replaced entire file (pyramid layout)
- [ ] **File 6**: `components/final-cta.tsx` - Replaced entire file (countdown, social sharing, bonus banner)
- [ ] **File 7**: `components/problem-section.tsx` - Replaced entire file (Three Flaws content)

---

# 🧪 TESTING AFTER APPLYING CHANGES

After applying all changes, test:

1. **Navigation**:
   - Click "How It Works" in header → should go to `/how-it-works` page
   - Click "Pricing" in header → should go to `/pricing` page
   - Click "FAQ" in header → should go to `/faq` page
   - Click logo → should go back to home `/`

2. **Hero Section**:
   - Click "See How It Works" button → should go to `/how-it-works` page

3. **Footer Links**:
   - Click "How It Works" in footer → should navigate
   - Click "Pricing" in footer → should navigate
   - Click "FAQ" in footer → should navigate
   - Hover over links → should see hover effect and cursor change

4. **Footer Social Icons**:
   - Should see 4 icon buttons (X/Twitter, Instagram, Facebook, TikTok)
   - Clicking each should open in new tab

5. **Final CTA Section**:
   - Should see "EARLY ADOPTER BONUS - First 500 users..." banner at top
   - Should see countdown timer (4 boxes: days, hours, minutes, seconds)
   - Should see "Share with your football mates" section with 4 social buttons

6. **Early Access Section**:
   - Title should say "Why Join the Waitlist?"
   - Should see 2 cards on top row, 3 cards on bottom row
   - Should see "Built by football fans..." text near bottom

7. **Problem Section**:
   - Title should say "We Fixed The Three Flaws Breaking Live Predictions"
   - Should see 3 cards with emojis: ⏰🔒, 🔁😴, 🎰🤯

---

**END OF GUIDE**

All code above is complete and ready to copy-paste. No placeholders. No "TODO" comments. Just working code.


