'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-bg-primary flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <Code2 className="w-16 h-16 text-accent-primary" />
            <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-lg animate-pulse" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-text-primary">Loading</h2>
          <p className="text-text-secondary">Preparing your experience...</p>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-light"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </div>
    </div>
  )
}