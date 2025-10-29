import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, Calendar } from 'lucide-react'

const ContactStrip = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Pre-filled email message
  const emailSubject = "Video Editing Project Inquiry"
  const emailBody = `Hello Niladri,

I'm interested in discussing a video editing project with you.

Project Details:
- Service Type: 
- Video Length: 
- Project Description: 

Looking forward to hearing from you!

Best regards,`

  const mailtoLink = `mailto:niladriraptan25@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Background Card */}
          <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 opacity-20 bg-gradient-neon animate-pulse-slow" />
          </div>

          <div className="relative p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Ready to Start Your Project?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-400 mb-8"
                >
                  Let's create something amazing together. Get in touch to discuss
                  your video project.
                </motion.p>

                {/* Contact Options */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <a
                    href="https://wa.me/919679774026?text=Hello%20Niladri,%20I%20want%20a%20video%20editing%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
                  >
                    <Phone size={20} />
                    <span>+91 96797 74026</span>
                  </a>
                  <a
                    href={mailtoLink}
                    className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                    <span>niladriraptan25@gmail.com</span>
                  </a>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-4"
              >
                <Link
                  to="/hire"
                  className="magnetic-button w-full px-8 py-4 rounded-full bg-gradient-neon text-dark font-medium text-center hover:opacity-90 transition-opacity"
                >
                  Start a Project
                </Link>
                <a
                  href="https://calendly.com/niladriraptan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-button w-full px-8 py-4 rounded-full glass text-primary border border-primary/20 hover:border-primary/50 transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book a Call
                </a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-neon opacity-10 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}

export default ContactStrip