'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function HeroBackground() {
  const stars = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Container area blur + bintang */}
      <div
        className="absolute"
        style={{
          top: '25%', // atur sesuai posisi lanyard
          left: '48%', // atur sesuai posisi lanyard
          width: '500px',
          height: '500px',
        }}
      >
        {/* Glow gradient */}
        <motion.div
          className="absolute w-full h-full opacity-60 blur-[120px] mix-blend-screen"
          style={{
            background: `
              radial-gradient(circle,
                rgba(147, 51, 234, 0.4) 10%,
                rgba(45, 97, 228, 0.9) 60%,
                transparent 100%
              )
            `,
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.05, 0.97, 1],
            rotate: [0, 0.5, -0.5, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Bintang di sekitar blur */}
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  )
}
