'use client'

import { motion } from 'framer-motion'

export default function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
      {/* Soft Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 123, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 123, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Subtle Floating Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`floating-orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${120 + i * 30}px`,
            height: `${120 + i * 30}px`,
            left: `${10 + i * 20}%`,
            top: `${15 + i * 15}%`,
            background: `radial-gradient(circle, 
              rgba(0, 123, 255, 0.08) 0%, 
              rgba(138, 43, 226, 0.05) 50%, 
              transparent 80%
            )`,
            filter: 'blur(2px)',
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gentle Light Streaks */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`light-streak-${i}`}
          className="absolute"
          style={{
            width: '200px',
            height: '1px',
            left: `${20 + i * 25}%`,
            top: `${30 + i * 20}%`,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(0, 191, 255, 0.3) 50%, 
              transparent 100%
            )`,
            transform: `rotate(${-10 + i * 5}deg)`,
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(0, 191, 255, 0.2)',
          }}
          animate={{
            x: [-100, 100, -100],
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            delay: i * 8,
            ease: "linear"
          }}
        />
      ))}

      {/* Pulsing Connection Nodes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`connection-node-${i}`}
          className="absolute rounded-full"
          style={{
            width: '6px',
            height: '6px',
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 80}%`,
            background: 'rgba(0, 123, 255, 0.6)',
            boxShadow: '0 0 15px rgba(0, 123, 255, 0.4)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Connecting Lines Between Nodes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`connection-line-${i}`}
          className="absolute origin-left"
          style={{
            width: `${150 + i * 50}px`,
            height: '1px',
            left: `${20 + i * 20}%`,
            top: `${25 + i * 25}%`,
            background: `linear-gradient(90deg, 
              rgba(0, 123, 255, 0.2) 0%, 
              rgba(138, 43, 226, 0.3) 50%, 
              rgba(0, 123, 255, 0.2) 100%
            )`,
            transform: `rotate(${30 - i * 20}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Soft Vertical Glow */}
      <motion.div
        className="absolute"
        style={{
          width: '2px',
          height: '60%',
          left: '15%',
          top: '20%',
          background: `linear-gradient(to bottom, 
            transparent 0%, 
            rgba(0, 123, 255, 0.4) 30%, 
            rgba(138, 43, 226, 0.3) 70%, 
            transparent 100%
          )`,
          filter: 'blur(1px)',
          boxShadow: '0 0 20px rgba(0, 123, 255, 0.3)',
        }}
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scaleY: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ambient Corner Glows */}
      <motion.div
        className="absolute"
        style={{
          width: '300px',
          height: '300px',
          right: '-50px',
          top: '-50px',
          background: `radial-gradient(circle, 
            rgba(138, 43, 226, 0.05) 0%, 
            transparent 60%
          )`,
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: '250px',
          height: '250px',
          left: '-50px',
          bottom: '-50px',
          background: `radial-gradient(circle, 
            rgba(0, 191, 255, 0.04) 0%, 
            transparent 60%
          )`,
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          delay: 5,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Scanning Lines */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`scan-line-${i}`}
          className="absolute"
          style={{
            width: '100%',
            height: '1px',
            left: '0%',
            top: `${20 + i * 40}%`,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(0, 255, 255, 0.3) 50%, 
              transparent 100%
            )`,
            filter: 'blur(0.5px)',
          }}
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: i * 10,
            ease: "linear"
          }}
        />
      ))}

      {/* Particle Field */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: '2px',
            height: '2px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'rgba(0, 123, 255, 0.5)',
            boxShadow: '0 0 4px rgba(0, 123, 255, 0.3)',
          }}
          animate={{
            y: [-50, 50, -50],
            x: [-25, 25, -25],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Background Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, 
              rgba(0, 123, 255, 0.02) 0%, 
              transparent 60%
            ),
            radial-gradient(ellipse at 70% 80%, 
              rgba(138, 43, 226, 0.015) 0%, 
              transparent 60%
            ),
            linear-gradient(135deg, 
              rgba(23, 37, 84, 0.02) 0%, 
              transparent 50%, 
              rgba(30, 17, 39, 0.02) 100%
            )
          `,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Energy Rings */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`energy-ring-${i}`}
          className="absolute rounded-full border"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${40 + i * 10}%`,
            top: `${30 + i * 20}%`,
            borderColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: '1px',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            delay: i * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}