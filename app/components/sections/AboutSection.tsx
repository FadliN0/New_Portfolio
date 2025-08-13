'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, skills, certifications } from '@/lib/data';
import StarfieldBackground from '../StarfieldBackground';

const AnimatedAboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Separate observers for skills and certifications
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [certsRef, certsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Organize skills by category for display
  interface Skill {
    name: string;
    category: string;
    level: number;
  }

  interface SkillsByCategory {
    [category: string]: Skill[];
  }

  const organizeSkills = (skillsArray: Skill[]): SkillsByCategory => {
    const organized: SkillsByCategory = {};
    
    skillsArray.forEach(skill => {
      if (!organized[skill.category]) {
        organized[skill.category] = [];
      }
      organized[skill.category].push(skill);
    });
    
    return organized;
  };

  const organizedSkills = organizeSkills(skills);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

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
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id='about' className="relative min-h-screen bg-gray-950 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Starfield Background Component */}
      <StarfieldBackground />

      {/* Container with increased padding to match other sections */}
      <div className="container-custom max-w-6xl relative z-10 py-16 lg:py-30">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
              About{' '}
              <span className="text-blue-500">
                Me
              </span>
            </h2>
            <motion.div 
              className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.subtitle}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-18">
            {/* Profile Section */}
            <motion.div 
              variants={slideFromLeft}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative group">
                {/* Main profile card */}
                <motion.div 
                  className="relative w-80 h-96 bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Profile image container */}
                  <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl bg-gray-800">
                    <motion.img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  </div>
                  
                  {/* Profile info */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
                    <p className="text-blue-400 text-base font-medium" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                      {personalInfo.title}
                    </p>
                  </div>
                  
                  {/* Decorative floating dots */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={slideFromRight} className="space-y-8">
              {/* Bio paragraphs */}
              <motion.div 
                variants={staggerContainer}
                className="space-y-6"
              >
                {personalInfo.bio.map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    variants={itemVariants}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              {/* Stats grid */}
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-3 gap-6 py-8"
              >
                {personalInfo.stats.map((stat) => (
                  <motion.div 
                    key={stat.label}
                    variants={scaleVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div 
            ref={skillsRef}
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="mb-18"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-16 text-white"
            >
              Skills &{' '}
              <span className="text-blue-500">Technologies</span>
            </motion.h3>
            
            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {Object.entries(organizedSkills).map(([category, items]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group"
                >
                  {/* Skill category card */}
                  <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full transition-all duration-300 hover:bg-gray-900/60 hover:border-blue-500/50">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <h4 className="text-lg font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors duration-300">
                      {category}
                    </h4>
                    
                    <motion.div 
                      variants={staggerContainer}
                      className="space-y-3"
                    >
                      {items.map((skill) => (
                        <motion.div
                          key={skill.name}
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.5 }
                            }
                          }}
                          className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg transition-all duration-300 hover:bg-gray-800/50"
                        >
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  i < skill.level ? 'bg-blue-500' : 'bg-gray-600 group-hover:bg-blue-500/30'
                                }`}
                                initial={{ scale: 0 }}
                                animate={skillsInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ 
                                  duration: 0.3,
                                  delay: 0.1 * i
                                }}
                                whileHover={{ scale: 1.2 }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div 
            ref={certsRef}
            variants={containerVariants}
            initial="hidden"
            animate={certsInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-16 text-white"
            >
              <span className="text-blue-500">Certifications</span>
            </motion.h3>
            
            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:bg-gray-900/60 hover:border-blue-500/50">
                    {/* Certificate icon */}
                    <motion.div 
                      className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors duration-300"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.svg 
                        className="w-6 h-6 text-blue-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ rotate: 0 }}
                        animate={certsInView ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                    </motion.div>
                    <h4 className="text-white font-semibold mb-2 text-base">{cert.name}</h4>
                    <p className="text-blue-400 text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedAboutSection;