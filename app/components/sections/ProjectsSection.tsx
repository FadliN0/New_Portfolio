'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'
import { projects, socialLinks } from '@/lib/data'
import ProjectsLightRays from '../CircuitBackground'

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
    <section id="projects" className="section-padding relative overflow-hidden ">
      <ProjectsLightRays />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {"Here are some of the projects I've worked on recently, showcasing my skills in web and mobile development"}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-card overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-accent-primary/20 to-accent-dark/20 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    /* Placeholder for projects without images */
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="w-12 h-12 text-accent-primary mx-auto mb-2" />
                        <p className="text-text-muted text-sm">
                          {project.title}<br />
                          <span className="text-xs">Screenshot Coming Soon</span>
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-accent-primary text-white rounded-full hover:bg-accent-hover transition-colors duration-300"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-bg-primary text-text-primary rounded-full hover:bg-bg-tertiary transition-colors duration-300"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent-primary text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}

                  {/* Project Type Badge for Mobile Apps */}
                  {project.technologies.some(tech => tech.includes('React Native') || tech.includes('Expo')) && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      Mobile App
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full border border-accent-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-medium text-text-primary mb-2">Key Features:</p>
                      <ul className="text-sm text-text-secondary space-y-1">
                        {project.keyFeatures.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Completion Date */}
                  {project.completedAt && (
                    <p className="text-xs text-text-muted mb-4">
                      Completed: {new Date(project.completedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-accent-primary hover:text-accent-hover font-medium transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex items-center space-x-2 text-text-muted text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo N/A</span>
                      </span>
                    )}
                    
                    {project.githubUrl && project.githubUrl !== '#' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-text-muted hover:text-text-primary font-medium transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="flex items-center space-x-2 text-text-muted text-sm">
                        <Github className="w-4 h-4" />
                        <span>Private Repo</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href={socialLinks.github} // ganti dengan GitHub username Anda
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}