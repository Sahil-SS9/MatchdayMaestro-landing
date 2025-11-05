"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AnimatedStadiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    let animationFrameId: number
    let offset = 0

    const animate = () => {
      offset += 0.2
      if (offset > 100) offset = 0

      // Create subtle moving gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `rgba(102, 126, 234, ${0.05 + Math.sin(offset / 20) * 0.02})`)
      gradient.addColorStop(0.5, `rgba(118, 75, 162, ${0.03 + Math.cos(offset / 15) * 0.02})`)
      gradient.addColorStop(1, `rgba(16, 185, 129, ${0.02 + Math.sin(offset / 25) * 0.01})`)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/stadium-aerial.jpg"
          alt=""
          fill
          className="object-cover scale-110"
          style={{
            transform: "translateZ(0)",
            willChange: "transform",
          }}
          priority
          quality={90}
        />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
    </div>
  )
}
