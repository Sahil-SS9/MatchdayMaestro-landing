"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is this gambling?",
      answer:
        "Absolutely not. No real money prizes, no betting mechanics. Pure skill-based competition with friends for bragging rights and virtual coins.",
    },
    {
      question: "How is it fair if premium users get earlier notifications?",
      answer:
        "Premium users get notifications 30 seconds earlier to PREPARE their strategy, not to cheat. The actual prediction window is identical for everyone.",
    },
    {
      question: "What if I don't have Sky Sports?",
      answer:
        "That's the whole point! Whether you're watching on TV, following on BBC Sport, or just getting our notifications - everyone has the same prediction window.",
    },
    {
      question: "Can I really compete for free?",
      answer:
        "100%. Free users regularly win leagues and maintain top accuracy rates. Premium just unlocks more predictions and convenience features.",
    },
    {
      question: "What if the app breaks during a big match?",
      answer:
        "Enterprise-grade infrastructure with 99.9% uptime guarantee. If our servers fail during a big match, affected predictions are automatically voided and streaks protected.",
    },
    {
      question: "Why not just Premier League?",
      answer:
        "We support Premier League, Champions League, League Cup, and FA Cup. Quality over quantity - perfect the experience first, then expand based on user demand.",
    },
  ]

  return (
    <section id="faq" className="container mx-auto px-4 py-16 sm:py-20 bg-[#0f1015]">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        Questions We Get Asked Daily
      </h2>

      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="liquid-glass rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-lg pr-4">{faq.question}</span>
              {openFaq === i ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
            </button>
            {openFaq === i && <div className="px-6 pb-6 text-white/70 leading-relaxed">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
