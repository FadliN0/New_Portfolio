import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface StarfieldBackgroundProps {
  starCount?: number;
  particleCount?: number;
  geometricCount?: number;
  className?: string;
}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({
  starCount = 150,
  particleCount = 12,
  geometricCount = 6,
  className = ""
}) => {
  // Generate stable random positions
  const elements = useMemo(() => {
    const stars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2
    }));

    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 3
    }));

    const geometrics = Array.from({ length: geometricCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 15,
      delay: Math.random() * 1,
      duration: Math.random() * 10 + 15,
      shape: i % 3 // 0=square, 1=circle, 2=triangle
    }));

    return { stars, particles, geometrics };
  }, [starCount, particleCount, geometricCount]);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Animated Stars with Framer Motion */}
      {elements.stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0.2, scale: 0.5 }}
          animate={{ 
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating Particles with Complex Animation */}
      {elements.particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#3b82f6',
          }}
          initial={{ 
            opacity: 0.4,
            boxShadow: '0 0 5px rgba(59, 130, 246, 0.4)'
          }}
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
            boxShadow: [
              '0 0 5px rgba(59, 130, 246, 0.4)',
              '0 0 15px rgba(59, 130, 246, 0.8)',
              '0 0 5px rgba(59, 130, 246, 0.4)'
            ]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Geometric Elements with Rotation */}
      {elements.geometrics.map((geo) => {
        const shapeClass = geo.shape === 1 ? 'rounded-full' : 
                          geo.shape === 2 ? 'rounded-none transform rotate-45' : 
                          'rounded-lg';
        
        return (
          <motion.div
            key={`geo-${geo.id}`}
            className={`absolute border-2 border-blue-400 ${shapeClass}`}
            style={{
              left: `${geo.x}%`,
              top: `${geo.y}%`,
              width: `${geo.size}px`,
              height: `${geo.size}px`,
            }}
            initial={{ 
              opacity: 0.1,
              rotate: 0,
              scale: 0.8
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              rotate: 360,
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: geo.duration,
              delay: geo.delay,
              repeat: Infinity,
              ease: "linear",
              opacity: { ease: "easeInOut" },
              scale: { ease: "easeInOut" }
            }}
          />
        );
      })}

      {/* Constellation Lines with Framer Motion */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      >
        {elements.stars.slice(0, 8).map((star, index) => {
          if (index === elements.stars.slice(0, 8).length - 1) return null;
          
          const nextStar = elements.stars[index + 1];
          
          return (
            <motion.line
              key={`line-${index}`}
              x1={`${star.x}%`}
              y1={`${star.y}%`}
              x2={`${nextStar.x}%`}
              y2={`${nextStar.y}%`}
              stroke="#3b82f6"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4,
                delay: index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </svg>

      {/* Floating Orbs with Path Animation */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 bg-blue-300 rounded-full"
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(147, 197, 253, 0.6)'
          }}
          initial={{ 
            x: `${20 + i * 30}%`,
            y: `${10 + i * 20}%`
          }}
          animate={{
            x: [`${20 + i * 30}%`, `${80 - i * 20}%`, `${20 + i * 30}%`],
            y: [`${10 + i * 20}%`, `${90 - i * 30}%`, `${10 + i * 20}%`],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Ambient Glow Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)'
        }}
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
            'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ zIndex: -2 }}
      />
      
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-blue-950/10" />
    </div>
  );
};

export default StarfieldBackground;