"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does Matchday Maestro work?",
      answer:
        "During live football matches, you'll get push notifications asking you to predict what happens next - like 'Will there be a goal in the next 10 minutes?' You have 30 seconds to answer. Get it right and earn 10 points! It's like a game show, but for football.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Tap the 'Sign Up' button on the login screen. Enter your email, create a password, and verify your email address. Then complete the legal notice acknowledgment to start playing.",
    },
    {
      question: "Which matches can I predict on?",
      answer:
        "We cover the biggest leagues: Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and Champions League. You'll get notifications for any live match from these competitions.",
    },
    {
      question: "Do I need to watch the matches?",
      answer:
        "Nope! That's the beauty of it. You get notifications whether you're watching or not. The app is designed to be fair for people who can't watch live - everyone gets notifications at the exact same time, even before events appear on TV.",
    },
    {
      question: "How do predictions work?",
      answer:
        "Browse upcoming matches in the Predictions tab. Tap a match to see prediction options. Choose your prediction and earn points based on accuracy when the match finishes.",
    },
    {
      question: "How does the scoring system work?",
      answer:
        "Super simple: 10 points for every correct prediction. Everyone gets the same points whether you're free or Premium. Bonus points: 3/3 predictions = +25 points, 5/5 predictions = +50 points. Premium users often score higher because they can make more predictions (5 vs 3), not because they get more points per prediction.",
    },
    {
      question: "How many predictions can I make?",
      answer:
        "Free users: 3 predictions per match. Premium users: 5 predictions per match. You choose which predictions to answer from the ones we send during matches.",
    },
    {
      question: "How is this fair if I don't have Sky Sports?",
      answer:
        "Great question! Our app detects goals and cards 5-30 seconds BEFORE they show up on TV, then sends everyone the prediction notification at the exact same time. This means people watching on TV don't get an advantage.",
    },
    {
      question: "What are coins and how do I get them?",
      answer:
        "Coins are like tokens you can spend on special powerups. You get 100 coins free when you join, plus earn them daily by logging in, getting predictions right, and completing challenges. You can also buy more coins - packages range from £0.99 to £69.99.",
    },
    {
      question: "What does Premium give me?",
      answer:
        "Premium (£2.99/month) gives you: 5 predictions per match (free users get 3), AI Autopilot with advanced strategies, bigger friend leagues (100 people vs 10), all 6 leagues included (free users only get Premier League), advanced statistics, and premium animations. Plus a 7-day free trial!",
    },
    {
      question: "What is AI Autopilot?",
      answer:
        "It's like having a robot play for you! You pick a strategy, and the AI makes predictions on your behalf during matches when you're busy. You wake up to notifications like 'Your AI earned 25 points last night!'",
    },
    {
      question: "Can I use AI Autopilot for free?",
      answer:
        "Yes! Free users get the Basic strategy which is conservative but reliable (wins about 40-45% of predictions). Premium users get three advanced strategies that win 60-70% of the time: Conservative, Optimist, and Statistical.",
    },
    {
      question: "What are leagues?",
      answer:
        "Leagues are groups where you compete with friends. See who ranks highest based on prediction accuracy. You can join multiple leagues.",
    },
    {
      question: "How do battles work?",
      answer:
        "Challenge a friend to a head-to-head battle on a specific match. Both of you make predictions, and whoever gets more points wins. You can play for fun (free) or play for coins. Winner gets all the coins! The app automatically judges who won.",
    },
    {
      question: "Is this gambling?",
      answer:
        "No! This is fantasy sports, which is skill-based and legal. You're predicting outcomes based on your football knowledge, not betting money on results. Think of it like Fantasy Premier League, but more interactive. It's rated 12+ and completely legal in the UK.",
    },
  ]

  return (
    <section id="faq" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
        Questions We Get Asked Daily
      </h2>

      <div className="mt-10 max-w-3xl mx-auto space-y-4" role="region" aria-label="Frequently Asked Questions">
        {faqs.map((faq, i) => (
          <div key={i} className="liquid-glass rounded-xl overflow-hidden">
            <h3>
              <button
                id={`faq-button-${i}`}
                aria-expanded={openFaq === i}
                aria-controls={`faq-content-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C896] focus-visible:ring-inset"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                {openFaq === i ? <Minus className="w-5 h-5 flex-shrink-0" aria-hidden="true" /> : <Plus className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
              </button>
            </h3>
            <div
              id={`faq-content-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={openFaq !== i}
              className={openFaq === i ? "px-6 pb-6 text-white/70 leading-relaxed" : "hidden"}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
