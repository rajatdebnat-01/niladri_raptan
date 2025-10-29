import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Film,
  Video,
  Camera,
  Clapperboard,
  Building2,
  Instagram,
} from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Wedding Edits',
    description:
      'Crafting your special moments into cinematic wedding films that tell your unique love story.',
  },
  {
    icon: Video,
    title: 'Cinematic Ads',
    description:
      'Creating compelling commercial videos that capture attention and drive engagement.',
  },
  {
    icon: Camera,
    title: 'Music Videos',
    description:
      'Professional music video editing with creative transitions and visual effects.',
  },
  {
    icon: Clapperboard,
    title: 'Documentary Films',
    description:
      'Telling powerful stories through carefully crafted documentary editing.',
  },
  {
    icon: Building2,
    title: 'Corporate Videos',
    description:
      'Professional corporate video editing for business presentations and marketing.',
  },
  {
    icon: Instagram,
    title: 'Social Media',
    description:
      'Engaging social media content optimized for various platforms.',
  },
]

const ServicesSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={sectionRef} className="relative py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Professional Video Editing Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400"
          >
            From wedding films to corporate videos, I offer a wide range of
            professional video editing services tailored to your needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl glass hover:bg-dark-300/50 transition-colors"
            >
              {/* Service Icon */}
              <div className="w-12 h-12 rounded-xl glass bg-dark-300/50 text-primary flex items-center justify-center mb-6">
                <service.icon size={24} />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              {/* Learn More Link */}
              <Link
                to="/services"
                className="text-primary text-sm font-medium inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  →
                </motion.span>
              </Link>

              {/* Hover Border Gradient */}
              <div className="absolute inset-0 rounded-2xl border border-transparent opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary/20 via-accent-violet/20 to-accent-magenta/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection