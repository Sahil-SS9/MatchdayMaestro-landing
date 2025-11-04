"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const links = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
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

          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#667eea] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium rounded-lg px-6 py-2.5 hover:from-[#5568d3] hover:to-[#6a3f8f] transition-all"
            >
              <Link href="#cta">Get Early Access</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-gray-700 bg-gray-900/80 text-gray-200">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64">
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/matchday-maestro-logo.png"
                    alt="Matchday Maestro"
                    width={150}
                    height={35}
                    className="h-7 w-auto"
                  />
                </div>
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-[#667eea] transition-colors"
                    >
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium rounded-lg px-6 py-2.5"
                  >
                    <Link href="#cta">Get Early Access</Link>
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
