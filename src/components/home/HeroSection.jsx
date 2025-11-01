import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import SplitType from 'split-type'

const HeroSection = () => {
  const textRef = useRef(null)

  useEffect(() => {
    // Initialize SplitType for main heading
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: 'chars,words' })
      const chars = text.chars

      // Initial entrance animation
      gsap.fromTo(
        chars,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.8,
          ease: 'power3.out',
        }
      )

      return () => {
        text.revert()
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 ">
      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-screen bg-gradient-to-br mt-5 from-gray-800 to-gray-900 overflow-hidden shadow-2xl"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Large Background Text - NILADRI RAPTAN */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            ref={textRef}
            className="text-[88px] sm:text-[100px] pb-52 md:pb-0 md:text-[170px] lg:text-[240px] xl:text-[250px] font-black text-white leading-none tracking-tighter select-none px-4 text-center"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
              color: 'rgba(255, 255, 255, 0.15)',
              fontWeight: 900,
              letterSpacing: '-0.05em'
            }}
          >
            NILADRI RAPTAN
          </h1>
        </div>

        {/* Center Image - Main Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute inset-0 flex items-center justify-center z-10 pb-20 md:pb-6"
        >
          <motion.img
            src="/projects/n2.png"
            alt="Portfolio Hero"
            className="h-[60%] sm:h-[65%] md:h-[75%] lg:h-[80%] w-auto object-contain max-w-[90%]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6))'
            }}
          />
        </motion.div>

        {/* CTA Buttons at Bottom Center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-44  md:bottom-8 left-0 right-0 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 z-20 px-4"
        >
          <motion.a
            href="/showreel"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 transition-all inline-flex items-center gap-2 text-white text-xs md:text-sm font-medium w-full sm:w-auto justify-center max-w-[350px]"
          >
            <Play size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Watch Showreel</span>
          </motion.a>

          <motion.a
            href="/hire"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium inline-flex items-center gap-2 text-xs md:text-sm shadow-lg w-full sm:w-auto justify-center max-w-[350px]"
          >
            <span>Hire Me</span>
            <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Gradient Overlay at edges for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </section>
  )
}

export default HeroSection