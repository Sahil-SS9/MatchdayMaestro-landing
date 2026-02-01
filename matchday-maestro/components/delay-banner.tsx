"use client"

import { useState, useEffect } from "react"
import { X, CalendarClock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const STORAGE_KEY = "mm-delay-banner-dismissed"

export function DelayBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setVisible(true)
    }
  }, [])

  function handleDismiss() {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, "true")
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden"
        >
          <div className="relative liquid-glass border-b border-[#F59E0B]/20 bg-gradient-to-r from-[#F59E0B]/5 via-transparent to-[#F59E0B]/5">
            <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm sm:text-base">
              <CalendarClock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B] shrink-0" />
              <p className="text-white/90 text-center leading-snug">
                <span className="text-[#F59E0B] font-semibold">New launch date: March 1st.</span>
                {" "}We're taking a little extra time to make Matchday Maestro even better.
              </p>
              <button
                onClick={handleDismiss}
                aria-label="Dismiss announcement"
                className="shrink-0 ml-2 p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
