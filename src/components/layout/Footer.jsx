import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone 
} from 'lucide-react'

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

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 bg-dark-300 w-full mt-40">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="w-full  px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-bold neon-text">
              Niladri Raptan
            </Link>
            <p className="text-gray-400 max-w-xs">
              Professional video editor crafting cinematic experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Services</h4>
            <ul className="space-y-2">
              {[
                'Wedding Films',
                'Cinematic Edits',
                'Documentary Films',
                'Corporate Videos',
                'Social Media Content',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:niladriraptan25@gmail.com"
                  className="flex items-center text-gray-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  niladriraptan25@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919679774026"
                  className="flex items-center text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +91 96797 74026
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-gray-300">
                Follow Me
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Niladri Raptan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer