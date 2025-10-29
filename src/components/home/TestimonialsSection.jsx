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
    name: 'Pralhad Das',
    role: 'Director at Tuunksan',
    image: '/projects/tuunksan.jpg',
    content:`Working with Niladri has been an excellent experience for us at Tuunksan. He understands our brand story and beautifully converts it into powerful documentary-style reels and videos. His editing style is clean, meaningful, and brand-focused—something that truly adds value to our marketing. He is professional, easy to work with, and always delivers on time with consistent quality. If you're looking for a video editor who understands storytelling and brand identity, Niladri is the one!`,
    rating: 5,
  },
  {
    id: 2,
    name: 'Neelabja Singha Roy',
    role: 'Traveller',
    image: '/projects/babaida.jpg',
    content:`I’ve worked with many video editors before, but Niladri truly stands out. He has edited my travel videos and reels with a beautiful cinematic style that brings every journey to life. The way he blends storytelling with smooth transitions, music, and color grading is just outstanding. He understands the emotion behind every travel moment and turns it into a professional visual experience. Easy to work with, highly creative, and always on time—Niladri is my go-to video editor now!`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Faisal Khan',
    role: 'Child Specialist',
    image: '/projects/WhatsApp Image 2025-10-29 at 22.38.59_8bdb21ae.jpg',
    content:
      `Working with Niladri has been a fantastic experience. As a child specialist, I aim to share educational and meaningful health content with parents, and Niladri has helped me present it in a very engaging and impactful way. His documentary-style editing for YouTube Shorts and Instagram Reels is clean, professional, and emotionally connecting. He understands the message behind every video and delivers exactly what I need—always on time and with great creativity. I truly appreciate his dedication and storytelling skills. Highly recommended!`,
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
