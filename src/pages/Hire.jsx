import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import { Upload, Send } from 'lucide-react'

const serviceTypes = [
  'Wedding Film',
  'Documentary',
  'Corporate Video',
  'Music Video',
  'Real Estate Video',
  'Social Media Content',
  'Other',
]

const projectLengths = [
  '1-2 minutes',
  '2-5 minutes',
  '5-10 minutes',
  '10-20 minutes',
  '20+ minutes',
]

const Hire = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    projectLength: '',
    description: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message with form data
    const message = `*New Project Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service Type:* ${formData.serviceType}
*Video Length:* ${formData.projectLength}

*Project Description:*
${formData.description}

_Note: I'll share reference files in the next message if any._`

    // WhatsApp phone number (replace with your actual number)
    // Format: country code + number (without + or spaces)
    const phoneNumber = '919679774026' // Replace with your actual WhatsApp number
    
    // Create WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        projectLength: '',
        description: ''
      })
    }, 500)
  }

  return (
    <>
      <Helmet>
        <title>Hire Me | Niladri Raptan - Video Editor</title>
        <meta
          name="description"
          content="Start your video project with professional video editing services. Fill out the project requirements and get started."
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
              Start Your Project
            </h1>
            <p className="text-gray-400">
              Fill out the form below with your project details and requirements.
              I'll get back to you within 24 hours via WhatsApp.
            </p>
          </motion.div>

          {/* Main Content */}
          <div
            ref={sectionRef}
            className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12"
          >
            {/* Project Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass p-8 rounded-2xl">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass bg-dark-300/50 border-gray-600 text-gray-200 focus:border-primary focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="projectLength"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Desired Video Length
                    </label>
                    <select
                      id="projectLength"
                      name="projectLength"
                      value={formData.projectLength}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass bg-dark-300/50 border-gray-600 text-gray-200 focus:border-primary focus:ring-primary"
                    >
                      <option value="">Select length</option>
                      {projectLengths.map((length) => (
                        <option key={length} value={length}>
                          {length}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder="Describe your project, style preferences, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-lg glass bg-dark-300/50 border-gray-600 text-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* File Upload Note */}
                  <div className="glass p-6 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Upload size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-200 mb-2">
                          Have Reference Files?
                        </h4>
                        <p className="text-sm text-gray-400">
                          After sending your WhatsApp message, you can share your reference videos, images, or documents directly in the WhatsApp chat. This helps me understand your vision better!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="magnetic-button w-full px-8 py-4 rounded-full bg-gradient-neon text-dark font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                  >
                    Send via WhatsApp
                    <Send size={20} />
                  </button>

                  {/* Info Text */}
                  <p className="text-xs text-gray-400 text-center">
                    This will open WhatsApp with your project details pre-filled
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="glass p-8 rounded-2xl space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-4 text-gray-400">
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        1
                      </span>
                      <span>
                        Your message will open in WhatsApp with all details pre-filled
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        2
                      </span>
                      <span>
                        Send the message and I'll respond within 24 hours
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        3
                      </span>
                      <span>
                        We'll discuss requirements and timeline in detail
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        4
                      </span>
                      <span>
                        You'll receive a proposal with pricing and we'll begin work
                      </span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                  <p className="text-gray-400 mb-4">
                    If you have any questions about the process or need assistance,
                    feel free to reach out:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:niladriraptan25@gmail.com"
                      className="text-primary hover:underline block"
                    >
                      niladriraptan25@gmail.com
                    </a>
                    <a
                      href="https://wa.me/919679774026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline block"
                    >
                      +91 96797 74026 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hire