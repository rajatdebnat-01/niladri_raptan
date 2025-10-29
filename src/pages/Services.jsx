import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Film,
  Video,
  Camera,
  Clapperboard,
  Building2,
  Instagram,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Wedding Films',
    description:
      'Cinematic wedding videos that capture the essence of your special day.',
    features: [
      'Full ceremony coverage',
      'Highlight reel',
      'Same-day edit option',
      'Drone footage integration',
      'Color grading',
      'Licensed music',
    ],
    price: 'Starting from ₹25,000',
  },
  {
    icon: Clapperboard,
    title: 'Documentary Films',
    description:
      'Compelling documentary editing that brings stories to life.',
    features: [
      'Story development',
      'Interview editing',
      'B-roll integration',
      'Voice-over editing',
      'Sound design',
      'Color correction',
    ],
    price: 'Starting from ₹29,999',
  },
  {
    icon: Video,
    title: 'Corporate Videos',
    description:
      'Professional corporate video editing for business and marketing.',
    features: [
      'Brand alignment',
      'Motion graphics',
      'Product showcase',
      'Training videos',
      'Event coverage',
      'Multiple formats',
    ],
    price: 'Starting from ₹10,000 , for reels staring from ₹2,000',
  },
  {
    icon: Camera,
    title: 'Music Videos',
    description:
      'Creative music video editing with dynamic transitions and effects.',
    features: [
      'Beat sync editing',
      'Visual effects',
      'Color grading',
      'Performance cuts',
      'Motion tracking',
      'Quick delivery',
    ],
    price: 'Starting from ₹20,000',
  },
  {
    icon: Building2,
    title: 'Real Estate Videos',
    description:
      'Showcase properties with professionally edited video tours.',
    features: [
      'Property walkthrough',
      'Drone footage',
      'Feature highlights',
      'Location b-roll',
      'Color enhancement',
      'Multiple versions',
    ],
    price: 'Starting from ₹10,000, for reels starting from ₹2,000',
  },
  {
    icon: Instagram,
    title: 'Social Media Content',
    description:
      'Engaging social media video content optimized for each platform.',
    features: [
      'Platform optimization',
      'Trending styles',
      'Quick turnaround',
      'Multiple formats',
      'Subtitles',
      'Engagement hooks',
    ],
    price: 'Starting from ₹2,000',
  },
]

const addOns = [
  {
    title: 'Rush Delivery',
    price: '₹3,500',
    description: '24-48 hour turnaround time',
  },
  {
    title: 'Raw Footage Archive',
    price: '₹3,000',
    description: 'Organized and backed up raw files',
  },
  {
    title: 'Additional Revisions',
    price: '₹2,000',
    description: 'Per round beyond included revisions',
  },
  {
    title: 'Motion Graphics Package',
    price: '₹10,000',
    description: 'Custom animations and titles',
  },
]

const Services = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <>
      <Helmet>
        <title>Video Editing Services & Pricing | Niladri Raptan</title>
        <meta
          name="description"
          content="Professional video editing services including wedding films, documentaries, corporate videos, and social media content. View our packages and pricing."
        />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video Editing Services
            </h1>
            <p className="text-gray-400">
              Professional video editing services tailored to your needs. Choose
              from our range of packages or get a custom quote.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl glass bg-dark-300/50 text-primary flex items-center justify-center mb-6">
                  <service.icon size={24} />
                </div>

                {/* Service Details */}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-xl font-semibold text-primary mb-6">
                  {service.price}
                </div>

                {/* CTA Button */}
                <Link
                  to="/hire"
                  className="magnetic-button w-full px-6 py-3 rounded-full glass text-primary border border-primary/20 hover:border-primary/50 transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Add-Ons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-semibold text-center mb-12">
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="glass rounded-xl p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold mb-1">{addon.title}</h3>
                    <p className="text-sm text-gray-400">
                      {addon.description}
                    </p>
                  </div>
                  <div className="text-primary font-semibold">
                    {addon.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Services