'use client'

import { motion } from 'framer-motion'

export default function ProjectsLightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Main Diagonal Light Rays */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`light-ray-${i}`}
          className="absolute origin-left"
          style={{
            width: '120%',
            height: '2px',
            left: '-10%',
            top: `${15 + i * 15}%`,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(0, 123, 255, 0.25) 20%, 
              rgba(138, 43, 226, 0.35) 50%, 
              rgba(0, 191, 255, 0.25) 80%, 
              transparent 100%
            )`,
            transform: `rotate(${-15 + i * 2}deg)`,
            borderRadius: '2px',
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(0, 123, 255, 0.3)',
          }}
          animate={{
            x: ['-20%', '20%', '-20%'],
            opacity: [0, 0.8, 0.5, 1, 0],
            scaleX: [0.8, 1, 1.2, 1, 0.8],
          }}
          transition={{
            duration: 20 + i * 4,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear"
          }}
        />
      ))}

      {/* Soft Vertical Light Beams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`vertical-beam-${i}`}
          className="absolute"
          style={{
            width: '2px',
            height: '80%',
            left: `${25 + i * 25}%`,
            top: '10%',
            background: `linear-gradient(to bottom, 
              transparent 0%, 
              rgba(72, 61, 139, 0.4) 20%, 
              rgba(0, 123, 255, 0.6) 50%, 
              rgba(147, 0, 211, 0.4) 80%, 
              transparent 100%
            )`,
            filter: 'blur(1px)',
            boxShadow: '0 0 15px rgba(0, 123, 255, 0.4)',
          }}
          animate={{
            opacity: [0, 0.7, 0.3, 0.9, 0],
            scaleY: [0.6, 1, 0.8, 1.1, 0.6],
            x: [-2, 3, -1, 2, -2],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            delay: i * 7,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Organic Light Wisps */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`light-wisp-${i}`}
          className="absolute"
          style={{
            width: `${60 + i * 20}px`,
            height: '2px',
            left: `${10 + i * 20}%`,
            top: `${30 + i * 10}%`,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(138, 43, 226, 0.4) 30%, 
              rgba(0, 191, 255, 0.6) 60%, 
              transparent 100%
            )`,
            transform: `rotate(${-20 + Math.random() * 40}deg)`,
            borderRadius: '50px',
            filter: 'blur(1px)',
            boxShadow: '0 0 8px rgba(138, 43, 226, 0.5)',
          }}
          animate={{
            x: [-20, 30, -10, 25, -20],
            y: [-5, 8, -12, 6, -5],
            opacity: [0, 0.6, 0.2, 0.8, 0],
            rotate: [
              -20 + Math.random() * 40,
              -10 + Math.random() * 20,
              -25 + Math.random() * 50,
              -20 + Math.random() * 40
            ],
          }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            delay: i * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Soft Glow Sources for Rays */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`glow-source-${i}`}
          className="absolute"
          style={{
            width: '200px',
            height: '200px',
            left: `${5 + i * 35}%`,
            top: `${20 + i * 25}%`,
            background: `radial-gradient(circle, 
              rgba(0, 123, 255, 0.15) 0%, 
              rgba(138, 43, 226, 0.12) 40%, 
              transparent 70%
            )`,
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.1, 0.2, 0.05, 0.15, 0.1],
            x: [-8, 12, -5, 10, -8],
            y: [-6, 9, -10, 7, -6],
          }}
          transition={{
            duration: 16 + i * 4,
            repeat: Infinity,
            delay: i * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Flowing Light Streams */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`light-stream-${i}`}
          className="absolute"
          style={{
            width: '100%',
            height: '2px',
            left: '0%',
            top: `${40 + i * 20}%`,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(72, 61, 139, 0.3) 25%, 
              rgba(0, 191, 255, 0.5) 50%, 
              rgba(147, 0, 211, 0.3) 75%, 
              transparent 100%
            )`,
            transform: `skew(${-10 + i * 5}deg)`,
            filter: 'blur(1px)',
            boxShadow: '0 0 12px rgba(0, 191, 255, 0.4)',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0.8, 0.3, 0],
            scaleX: [0, 1, 0.8, 1, 0],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            delay: i * 12,
            ease: "linear"
          }}
        />
      ))}

      {/* Electric Pulse Rays */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`electric-pulse-${i}`}
          className="absolute"
          style={{
            width: '150%',
            height: '1px',
            left: '-25%',
            top: `${60 + i * 10}%`,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(0, 255, 255, 0.6) 20%, 
              rgba(138, 43, 226, 0.8) 50%, 
              rgba(0, 255, 255, 0.6) 80%, 
              transparent 100%
            )`,
            transform: `rotate(${5 - i * 3}deg)`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
          }}
          animate={{
            x: ['-30%', '30%', '-30%'],
            opacity: [0, 1, 0.4, 0.9, 0],
            scaleX: [0.5, 1.5, 1, 1.2, 0.5],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Ambient Light Wash */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, 
              rgba(0, 123, 255, 0.05) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse at 80% 70%, 
              rgba(138, 43, 226, 0.04) 0%, 
              transparent 50%
            ),
            linear-gradient(135deg, 
              rgba(72, 61, 139, 0.02) 0%, 
              transparent 50%, 
              rgba(0, 191, 255, 0.03) 100%
            )
          `,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.5, 0.7, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Purple Lightning Bolts */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`lightning-${i}`}
          className="absolute"
          style={{
            width: '3px',
            height: '60%',
            left: `${60 + i * 20}%`,
            top: '20%',
            background: `linear-gradient(to bottom, 
              rgba(147, 0, 211, 0.8) 0%, 
              rgba(0, 255, 255, 0.6) 30%, 
              rgba(138, 43, 226, 0.9) 60%, 
              rgba(0, 191, 255, 0.5) 100%
            )`,
            clipPath: 'polygon(40% 0%, 60% 0%, 45% 25%, 70% 25%, 30% 50%, 55% 50%, 35% 75%, 65% 75%, 50% 100%, 40% 100%)',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 25px rgba(147, 0, 211, 0.8)',
          }}
          animate={{
            opacity: [0, 1, 0, 0.8, 0],
            scaleY: [0.5, 1, 0.7, 1.1, 0.5],
          }}
          transition={{
            duration: 8 + i * 3,
            repeat: Infinity,
            delay: i * 6,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}