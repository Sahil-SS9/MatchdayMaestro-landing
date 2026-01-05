# 🔴 COMPLETE LIST OF ALL MISSING CHANGES

This document lists **every single change** made in the most recent session that needs to be re-applied.

---

## ✅ STAGE 1: Multi-Page Structure (ALREADY PRESENT)
The following pages exist and are correct:
- `/app/how-it-works/page.tsx`
- `/app/pricing/page.tsx`
- `/app/faq/page.tsx`
- `/app/privacy/page.tsx`
- `/app/terms/page.tsx`

---

## ❌ STAGE 2: Landing Page (`app/page.tsx`) - NEEDS FIXING

### **Current Issue:**
The landing page still has ALL sections (FAQ, Pricing, How It Works) embedded.

### **What Needs to Change:**

**File: `matchday-maestro/app/page.tsx`**

**Remove these imports:**
```typescript
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
```

**Add this import:**
```typescript
import Link from "next/link"
import { InfiniteScrollMarquee } from "@/components/infinite-scroll-marquee"
```

**Replace the entire component section (lines 21-28) with:**
```typescript
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
```

**Also add `FeaturesCarousel` to imports:**
```typescript
import { FeaturesCarousel } from "@/components/features-carousel"
```

---

## ❌ STAGE 3: Header Navigation (`components/site-header.tsx`)

### **Current Issue:**
- Links use anchor navigation (`#how-it-works`)
- Logo uses wrong file (`matchday-maestro-logo.png`)

### **Changes Needed:**

**Line 11-14, change:**
```typescript
const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]
```

**To:**
```typescript
const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
]
```

**Line 20-29, replace:**
```typescript
<Link href="/" className="flex items-center gap-3">
  <Image
    src="/matchday-maestro-logo.png"
    alt="Matchday Maestro"
    width={180}
    height={40}
    className="h-8 w-auto"
    priority
  />
</Link>
```

**With:**
```typescript
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
```

**Line 44, change:**
```typescript
<Link href="#cta">Get Early Access</Link>
```

**To:**
```typescript
<Link href="/#cta">Get Early Access</Link>
```

**Line 57-65, replace mobile menu logo:**
```typescript
<div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
  <Image
    src="/matchday-maestro-logo.png"
    alt="Matchday Maestro"
    width={150}
    height={35}
    className="h-7 w-auto"
  />
</div>
```

**With:**
```typescript
<div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
  <Image
    src="/matchday-maestro-icon.png"
    alt="Matchday Maestro"
    width={28}
    height={28}
    className="w-7 h-7"
  />
  <span className="text-base font-bold text-white">MATCHDAY MAESTRO</span>
</div>
```

**Line 82, change:**
```typescript
<Link href="#cta">Get Early Access</Link>
```

**To:**
```typescript
<Link href="/#cta">Get Early Access</Link>
```

---

## ❌ STAGE 4: Hero Section (`components/hero.tsx`)

### **Current Issue:**
"Watch 60s Demo" button scrolls to anchor instead of navigating to page

### **Changes Needed:**

**Line 69, change:**
```typescript
<a href="#how-it-works">Watch 60s Demo</a>
```

**To:**
```typescript
<a href="/how-it-works">See How It Works</a>
```

---

## ❌ STAGE 5: Footer Complete Redesign (`components/footer.tsx`)

### **Current Issue:**
Entire footer is wrong:
- No logo
- Anchor links instead of page routes
- Text social links instead of icons
- Incorrect link styling

### **Replace Entire File With:**

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

## ❌ STAGE 6: Early Access Section (`components/early-access.tsx`)

### **Current Issue:**
- Missing "Built by football fans..." text
- Card layout should be pyramid (2 top, 3 bottom)
- Title should be "Why Join the Waitlist?"

### **Replace Entire File With:**

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

## ❌ STAGE 7: Final CTA Section (`components/final-cta.tsx`)

### **Current Issue:**
- Missing countdown timer
- Missing early adopter bonus (500 users)
- Missing social sharing buttons
- Hydration mismatch with social share URLs

### **Key Changes Needed:**

**Add these imports:**
```typescript
import { useEffect } from "react"
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react"
```

**Add state for countdown and share URL:**
```typescript
const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const [shareUrl, setShareUrl] = useState("https://matchdaymaestro.com")
```

**Add countdown useEffect:**
```typescript
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
```

**Add early adopter bonus banner BEFORE the h2 title:**
```typescript
<div className="inline-flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-xl bg-[#F59E0B]/20 border border-[#F59E0B]/40 mb-8">
  🎁 <span className="font-semibold">EARLY ADOPTER BONUS</span> — First 500 users get 500 coins free at launch
</div>
```

**Add countdown timer AFTER the form but BEFORE the bottom cards:**
```typescript
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
  {Object.entries(timeLeft).map(([unit, value]) => (
    <div key={unit} className="liquid-glass rounded-xl p-4 text-center">
      <div className="text-3xl font-bold text-[#00C896]">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{unit}</div>
    </div>
  ))}
</div>
```

**Add social sharing section AFTER the countdown:**
```typescript
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
```

**REMOVE these sections:**
- The "Built by football fans..." text (moved to early-access.tsx)
- Any development status cards that are confusing

---

## ❌ STAGE 8: Problem Section - "The Boring Question Loop" (`components/problem-section.tsx`)

### **Current Issue:**
This section still shows old placeholder content.

### **Replace the `problems` array (lines 10-23) with:**

```typescript
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
```

**Update the title (line 46-50):**
```typescript
<h2
  className={`mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
>
  We Fixed The Three Flaws Breaking Live Predictions
</h2>
```

**Update the Card rendering (lines 52-67) to show emoji, title, desc, AND problem:**
```typescript
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
```

---

## ✅ SUMMARY OF ALL CHANGES

| **File** | **Status** | **Changes Needed** |
|----------|------------|-------------------|
| `app/page.tsx` | ❌ BROKEN | Remove FAQ/Pricing/HowItWorks, add CTAs with Links |
| `components/site-header.tsx` | ❌ BROKEN | Change to page routes, update logo |
| `components/hero.tsx` | ❌ BROKEN | Change button to `/how-it-works` |
| `components/footer.tsx` | ❌ BROKEN | Complete redesign with logo, icons, proper links |
| `components/early-access.tsx` | ❌ BROKEN | Pyramid layout, add "Built by..." text |
| `components/final-cta.tsx` | ❌ BROKEN | Add countdown, bonus banner, social sharing |
| `components/problem-section.tsx` | ❌ BROKEN | Replace with "Three Flaws" content |

---

## 🚀 NEXT STEPS

1. **Apply all changes listed above**
2. **Test all navigation links work**
3. **Verify footer links are clickable**
4. **Test countdown timer displays correctly**
5. **Verify social sharing buttons work**
6. **Commit and push to GitHub**

---

**End of Document**


