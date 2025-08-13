'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md space-y-8"
      >
        {/* Error Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <AlertCircle className="w-20 h-20 text-error" />
            <div className="absolute inset-0 bg-error/20 rounded-full blur-lg animate-pulse" />
          </div>
        </motion.div>

        {/* Error Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-text-primary">
            Oops! Something went wrong
          </h1>
          <p className="text-text-secondary leading-relaxed">
            {"We encountered an unexpected error. Don't worry, it's not your fault."}
            Please try refreshing the page or go back to the homepage.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left mt-4 p-4 bg-bg-secondary rounded-lg text-sm text-text-muted">
              <summary className="cursor-pointer font-medium text-text-secondary mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="whitespace-pre-wrap break-words">
                {error.message}
              </pre>
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </motion.button>
          
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}