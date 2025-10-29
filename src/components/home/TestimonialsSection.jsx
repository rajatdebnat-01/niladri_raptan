import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCards } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

const testimonials = [
  {
    id: 1,
    name: 'Rahul & Priya',
    role: 'Wedding Couple',
    image: '/testimonials/couple-1.jpg',
    content:
      'Niladri captured our wedding beautifully. The editing was cinematic and emotional - exactly what we wanted!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amit Shah',
    role: 'Corporate Client',
    image: '/testimonials/client-1.jpg',
    content:
      'Professional, creative, and delivers on time. Our company video came out perfect!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Maya Desai',
    role: 'Documentary Producer',
    image: '/testimonials/producer-1.jpg',
    content:
      'Excellent storytelling through editing. Transformed our raw footage into a compelling documentary.',
    rating: 5,
  },
]

const TestimonialsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full glass text-primary text-sm font-medium">
              Testimonials
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
          >
            What Clients Say
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg"
          >
            Hear from satisfied clients about their experience working with me.
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <div className="relative h-full p-8 rounded-2xl glass overflow-hidden group">
                    {/* Hover Gradient Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/20" />
                    </motion.div>

                    {/* Quote Icon */}
                    <motion.div
                      animate={{
                        rotate: [0, 5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute top-6 right-6 opacity-10"
                    >
                      <Quote size={80} className="text-primary" />
                    </motion.div>

                    <div className="relative z-10">
                      {/* Rating Stars */}
                      <motion.div 
                        className="flex gap-1 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                          >
                            <Star
                              size={18}
                              className="text-primary fill-primary"
                            />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Content */}
                      <motion.blockquote
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-300 mb-6 leading-relaxed relative"
                      >
                        <span className="text-primary text-2xl">"</span>
                        {testimonial.content}
                        <span className="text-primary text-2xl">"</span>
                      </motion.blockquote>

                      {/* Author */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-4"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="relative"
                        >
                          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Online indicator */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.5, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-dark"
                          />
                        </motion.div>
                        <div>
                          <motion.div
                            className="font-semibold text-white"
                            whileHover={{ x: 5 }}
                          >
                            {testimonial.name}
                          </motion.div>
                          <div className="text-sm text-gray-400">
                            {testimonial.role}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Shimmer Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats Section */}
        
      </div>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background: rgba(139, 92, 246, 0.3);
          width: 10px;
          height: 10px;
          transition: all 0.3s;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #8b5cf6;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection