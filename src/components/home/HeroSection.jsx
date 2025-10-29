import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import SplitType from 'split-type'

const HeroSection = () => {
  const textRef = useRef(null)
  const subTextRef = useRef(null)

  useEffect(() => {
    // Initialize SplitType for main heading
    const text = new SplitType(textRef.current, { types: 'chars,words' })
    const chars = text.chars

    // Initial entrance animation
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.03,
        duration: 1,
        ease: 'back.out(1.7)',
      }
    )

    // Continuous floating/glowing animation
    gsap.to(chars, {
      y: -5,
      scale: 1.02,
      textShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
      stagger: {
        each: 0.05,
        repeat: -1,
        yoyo: true,
      },
      duration: 2,
      ease: 'sine.inOut',
      delay: 1.5,
    })

    // Subheading animation
    const subText = new SplitType(subTextRef.current, { types: 'chars' })
    const subChars = subText.chars

    gsap.fromTo(
      subChars,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        duration: 0.8,
        delay: 1,
        ease: 'power2.out',
      }
    )

    // Continuous color shift animation for subheading
    gsap.to(subChars, {
      color: '#8b5cf6',
      stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true,
      },
      duration: 3,
      ease: 'sine.inOut',
      delay: 2,
    })

    return () => {
      text.revert()
      subText.revert()
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400 to-dark pointer-events-none" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading with continuous animation */}
          <h1
            ref={textRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              textShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            }}
          >
            Hi, I'm Niladri Raptan – Professional Video Editor
          </h1>

          {/* Subheading with wave animation */}
          <p
            ref={subTextRef}
            className="text-xl md:text-2xl text-gray-400 mb-12"
          >
            Transforming moments into cinematic masterpieces
          </p>

          {/* CTA Buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/showreel"
                className="group magnetic-button px-8 py-4 rounded-full glass text-primary border border-primary/20 hover:border-primary/50 transition-colors inline-flex items-center gap-2 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <Play size={20} />
                <span className="relative z-10">Watch Showreel</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="rounded-full"
            >
              <Link
                to="/hire"
                className="group magnetic-button px-8 py-4 rounded-full bg-gradient-neon text-dark font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Hire Me
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Stats/Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            {['4+ Years', '150+ Projects'].map((stat, i) => (
              <motion.div
                key={stat}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut',
                }}
                className="text-gray-500 text-sm font-medium"
              >
                {stat}
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                style={{
                  boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Film Strip Effect - Optional */}
      <motion.div
        animate={{
          x: ['-100%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
    </section>
  )
}

export default HeroSection