'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink, ChevronDown } from 'lucide-react'
import dynamic from 'next/dynamic'
import HeroBackground from '../HeroBackground'
import { personalInfo } from '@/lib/data'

// Loading fallback yang konsisten
const LoadingFallback = () => (
  <div className="relative w-full h-[600px] lg:h-[700px]">
    <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 to-accent-dark/20 rounded-2xl backdrop-blur-sm border border-accent-primary/20 flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 bg-accent-primary/30 rounded-full mx-auto flex items-center justify-center mb-4 animate-pulse">
          <span className="text-2xl font-bold text-accent-primary">3D</span>
        </div>
        <p className="text-text-muted text-sm">Loading 3D Model...</p>
      </div>
    </div>
  </div>
)

// Dynamic import dengan loading state yang konsisten
const Lanyard = dynamic(() => import('../Lanyard'), {
  ssr: false,
  loading: () => <LoadingFallback />
})

export default function HeroSection() {
  const [typingText, setTypingText] = useState<string>('')
  const [isLanyardReady, setIsLanyardReady] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const fullText = "Junior Programmer"
  
  // Mounting effect
  useEffect(() => {
    setIsMounted(true)
    // Delay lanyard rendering untuk memastikan container sudah siap
    const timer = setTimeout(() => {
      setIsLanyardReady(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const handleViewWork = useCallback((): void => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleScrollToNext = useCallback((): void => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-medium border border-accent-primary/20">
                {"👋 Hello, I'm"}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-text-primary">Fadli</span>
                <span className="block text-gradient">Nofrizal</span>
              </h1>
              
              {/* Typing Animation */}
              <div className="text-xl lg:text-2xl text-text-secondary font-medium">
                <span className="typing-cursor">{typingText}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-text-secondary max-w-lg leading-relaxed"
            >
              I craft beautiful, performant web applications with modern technologies. 
              Passionate about clean code, great user experiences, and continuous learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={handleViewWork}
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>View My Work</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </button>
              
              <a 
                href={personalInfo.resumeUrl} 
                download
                className="btn-secondary flex items-center space-x-2 group"
              >
                <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4"
            >
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-text-muted hover:text-accent-primary transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Lanyard Container - Fixed sizing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
            }}
            transition={{
              opacity: { duration: 1, delay: 1 },
              scale: { duration: 1, delay: 1 },
              rotateY: { duration: 1, delay: 1 },
            }}
            className="flex justify-center lg:justify-end"
          >
            {/* Container dengan ukuran yang konsisten dan tetap */}
            <div className="relative w-full h-[600px] lg:h-[700px] max-w-lg">
              {isMounted && isLanyardReady ? (
                <div className="w-full h-full">
                  <Lanyard 
                    position={[0, 0, 15]} 
                    gravity={[0, -40, 0]} 
                    transparent={true}
                    fov={20}
                    key="lanyard-main" // Force consistent rendering
                  />
                </div>
              ) : (
                <LoadingFallback />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted hover:text-accent-primary transition-colors duration-300 group"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
      </motion.button>
    </section>
  )
}