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
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-400 to-dark pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Particles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Trusted By Industry Leaders
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Brands I've{' '}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Collaborated With
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Proud to have worked with some of the world's most recognized brands and companies
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Brand Card */}
              <div className="relative aspect-square rounded-xl glass p-6 flex items-center justify-center overflow-hidden">
                {/* Animated Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />

                {/* Logo Placeholder */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    {/* Replace this div with actual logo image */}
                    <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                      <img src={brand.logo} alt={brand.name} />
                    </div>
                    <div className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                      {brand.name}
                    </div>
                  </div>
                  
                  {/* Uncomment below to use actual images */}
                  {/* <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-auto max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  /> */}
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300"
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
                  }}
                />
              </div>

              {/* Category Tag (appears on hover) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-dark text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {brand.category}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
      

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Want to see your brand here? Let's collaborate!
          </p>
          <motion.a
            href="/hire"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-neon text-dark font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandsSection