import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Briefcase, Heart, TrendingUp, Sparkles, Video } from 'lucide-react'

const stats = [
  { number: '4+', label: 'Years Experience', icon: Briefcase },
  { number: '150+', label: 'Projects Completed', icon: Video },
  { number: '98%', label: 'Client Satisfaction', icon: Heart },
  
]

const timeline = [
  {
    year: '2021',
    title: 'Started Freelancing',
    description: 'Embarked on my journey as a freelance video editor, focusing on wedding films and corporate videos',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2022',
    title: 'Growing Portfolio',
    description: 'Expanded services to include documentaries and social media content, building a diverse client base',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2023',
    title: 'First Big Project',
    description: 'Delivered a high-profile corporate documentary that garnered industry recognition and opened new opportunities',
    icon: Award,
    color: 'from-orange-500 to-red-500',
  },
  {
    year: '2024',
    title: 'Established Own Setup',
    description: 'Set up professional editing studio with advanced equipment and expanded team collaboration',
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2025',
    title: 'Best Projects Yet',
    description: 'Creating cinematic masterpieces and delivering award-winning content for premium clients worldwide',
    icon: Sparkles,
    color: 'from-primary to-purple-600',
  },
]

const AboutSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-20 px-2 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400 via-dark to-dark-400 pointer-events-none" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full glass text-primary text-sm font-medium">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Crafting Visual Stories That{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Resonate
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                With over <span className="text-primary font-semibold">4 years of experience</span> in video editing, 
                I specialize in creating captivating narratives through the art of visual storytelling.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My passion lies in transforming raw footage into emotionally compelling stories that leave 
                a lasting impact. From intimate wedding films to large-scale corporate documentaries, 
                I bring creativity, precision, and heart to every project.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-6 rounded-xl glass overflow-hidden group"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <stat.icon size={20} className="text-primary" />
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Skills/Expertise Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['Wedding Films', 'Documentaries', 'Corporate Videos', 'Social Media', 'Music Videos'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 border border-primary/20 hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-full"
            />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot with Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="absolute left-0 top-0 w-16 flex items-center"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-3 shadow-lg`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="p-6 rounded-xl glass hover:bg-dark-300/50 transition-all duration-300 group"
                  >
                    {/* Year Badge */}
                    <motion.div
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold mb-3 shadow-lg`}
                    >
                      {item.year}
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative Element */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <item.icon className="w-full h-full" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* End Marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute left-5 -bottom-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(139, 92, 246, 0.4)',
                    '0 0 0 20px rgba(139, 92, 246, 0)',
                    '0 0 0 0 rgba(139, 92, 246, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-6 h-6 rounded-full bg-primary"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection