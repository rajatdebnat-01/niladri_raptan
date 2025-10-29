import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 96797 74026',
    href: 'tel:+919679774026',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'niladriraptan25@gmail.com',
    href: 'mailto:niladriraptan25@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kolkata, West Bengal, India',
    href: 'https://goo.gl/maps/123',
  },
]

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/share/1A2HcNPxn4/',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/niladri_raptan?igsh=MWgzamNyNWZuM3Z3dA==',
    label: 'Instagram',
  },
 
]

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:niladriraptan25@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 500)
  }

  return (
    <>
      <Helmet>
        <title>Contact | Niladri Raptan - Video Editor</title>
        <meta
          name="description"
          content="Get in touch for video editing services. Contact Niladri Raptan for weddings, documentaries, corporate videos, and more."
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
              Let's Work Together
            </h1>
            <p className="text-gray-400">
              Have a project in mind? Get in touch and let's create something
              amazing.
            </p>
          </motion.div>

          <div
            ref={sectionRef}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="glass p-6 rounded-xl hover:border-primary/30 transition-colors flex items-center gap-6"
                  >
                    <div className="w-12 h-12 rounded-lg glass bg-dark-300/50 text-primary flex items-center justify-center">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Follow Me</h3>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-sm text-gray-300 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass bg-dark-300/50 border-gray-600 text-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass bg-dark-300/50 border-gray-600 text-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass bg-dark-300/50 border-gray-600 text-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass bg-dark-300/50 border-gray-600 text-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="magnetic-button w-full px-8 py-4 rounded-full bg-gradient-neon text-dark font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>

                  {/* Info Text */}
                  <p className="text-xs text-gray-400 text-center">
                    This will open your default email client
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact