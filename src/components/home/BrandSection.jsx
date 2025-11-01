import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles } from 'lucide-react'

// Replace these with your actual brand logos
const brands = [
  { 
    id: 1, 
    name: 'SMK World', 
    logo: '/projects/smk.jpg',
    category: 'Electronics'
  },
  { 
    id: 2, 
    name: 'Chawala', 
    logo: '/projects/chawala.jpg',
    category: 'Tea brand'
  },
  { 
    id: 3, 
    name: `Dipa academy`, 
    logo: '/projects/dipa.jpg',
    category: 'Beautician'
  },
  { 
    id: 4, 
    name: 'Tuunksan', 
    logo: '/projects/tuunksan.jpg',
    category: 'Tea brand and Retailer'
  },
  
]

const BrandsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      
      {/* Radial Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 text-xs md:text-sm font-medium mb-6 md:mb-8 backdrop-blur-sm"
          >
            <Sparkles size={16} className="animate-pulse" />
            Trusted Partnerships
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8"
          >
            <span className="block text-white mb-2">Brands That</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Trust My Vision
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
          >
            Collaborating with innovative brands to create exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Brands Grid - Stylish Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 md:mb-20"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer"
            >
              {/* Main Image Container */}
              <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden">
                {/* Image */}
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 40px rgba(168, 85, 247, 0.4), inset 0 0 40px rgba(168, 85, 247, 0.1)',
                  }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <h3 className="text-white font-bold text-base md:text-lg lg:text-xl mb-1 md:mb-2 drop-shadow-lg">
                      {brand.name}
                    </h3>
                    <p className="text-purple-300 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {brand.category}
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-3 right-3 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent" />
                  <div className="absolute top-3 right-3 w-0.5 h-8 bg-gradient-to-b from-purple-400 to-transparent" />
                </div>
              </div>

              {/* Floating Badge on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: -10 }}
                className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <Sparkles size={16} className="text-white" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

     

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg">
            Ready to join these amazing brands?
          </p>
          <motion.a
            href="/hire"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-base md:text-lg shadow-xl hover:shadow-purple-500/50 transition-all duration-300 group"
          >
            Let's Collaborate
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default BrandsSection