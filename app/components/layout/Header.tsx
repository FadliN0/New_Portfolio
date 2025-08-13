'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Code2 } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleSectionChange = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionChange)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionChange)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-primary/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={() => handleNavClick('#hero')}
            >
              <div className="relative">
                <Code2 className="w-8 h-8 text-accent-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                Fadli Nofrizal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-accent-primary ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-accent-primary'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-bg-primary/95 backdrop-blur-xl border-l border-white/10 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-6 h-6 text-accent-primary" />
                    <span className="text-lg font-bold text-gradient">YourName</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-bg-secondary/50 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-text-secondary" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleNavClick(item.href)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                          activeSection === item.href.replace('#', '')
                            ? 'text-accent-primary bg-accent-primary/10'
                            : 'text-text-secondary hover:text-accent-primary hover:bg-bg-secondary/50'
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Mobile Menu Footer - Optional branding */}
                <div className="p-6 border-t border-white/10">
                  <div className="text-sm text-text-secondary text-center">
                    Portfolio • 2024
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}