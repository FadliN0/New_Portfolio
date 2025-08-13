'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-t from-bg-secondary to-bg-primary border-t border-white/5">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-center"
          >
            <span className="text-text-secondary">
              © {currentYear} Fadli Nofrizal. Made with
            </span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f59e0b', '#ef4444']
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <span className="text-text-secondary">
              using Next.js & TypeScript
            </span>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 text-xs"
          >
            {['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-bg-tertiary/50 text-text-muted rounded-full hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToTop}
            className="group p-3 bg-accent-primary/10 hover:bg-accent-primary text-accent-primary hover:text-white rounded-full transition-all duration-300 border border-accent-primary/20 hover:border-accent-primary"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent"
          />
        </div>
      </div>
    </footer>
  )
}