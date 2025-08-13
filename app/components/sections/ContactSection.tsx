'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Send, Github, Linkedin, Mail, Loader2 } from 'lucide-react'
import { personalInfo, socialLinks } from '@/lib/data'
import ContactBackground from '../ContactBackground'

interface FormData {
  name: string
  email: string
  message: string
}

const socialLinksConfig = [
  {
    name: 'GitHub',
    icon: Github,
    href: socialLinks.github,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: socialLinks.linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Email',
    icon: Mail,
    href: socialLinks.email,
    color: 'hover:text-red-500'
  }
]

// Only add Twitter if it exists in socialLinks
// if (socialLinks.twitter) {
//   socialLinksConfig.push({
//     name: 'Twitter',
//     icon: Twitter,
//     href: socialLinks.twitter,
//     color: 'hover:text-blue-400'
//   })
// }

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data)
      
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      reset()
    } catch (error) {
      console.error('Form submission failed:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <ContactBackground />
      <div className="absolute inset-0 opacity-10">
        {/* Animated Nodes */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgb(59 130 246)"
              strokeWidth="1"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {"Interested in collaborating or have a project in mind? I'd love to hear from you and discuss how we can work together."}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-text-primary">
                  {"Let's start a conversation"}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  As a passionate junior programmer currently completing my D3 in Management Information Systems, 
                  {"I'm eager to contribute to exciting projects and learn from experienced developers. "}
                  {"Whether it's a web application, mobile app, or any innovative tech solution - let's connect!"}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <Mail className="w-5 h-5 text-accent-primary" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <span className="w-5 h-5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </span>
                    <span>Open to internships and entry-level opportunities</span>
                  </div>
                  {personalInfo.location && (
                    <div className="flex items-center space-x-3 text-text-secondary">
                      <span className="w-5 h-5 flex items-center justify-center">
                        📍
                      </span>
                      <span>{personalInfo.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinksConfig.map((social, ) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      variants={nodeVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-bg-secondary rounded-xl text-text-muted ${social.color} transition-all duration-300 hover:shadow-lg group`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Skills Preview */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">What I can help with</h4>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Mobile Apps', 'Database Design', 'API Integration', 'UI/UX Implementation'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Send me a message</h3>
                  <p className="text-text-secondary text-sm">I typically respond within 24 hours</p>
                </div>

                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300 text-text-primary placeholder-text-muted"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-error text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300 text-text-primary placeholder-text-muted"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300 text-text-primary placeholder-text-muted resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {errors.message && (
                      <p className="text-error text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-text-muted text-center mt-4">
                  Your message will be sent directly to {personalInfo.email}
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}