import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/"
            className="magnetic-button inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-primary border border-primary/20 hover:border-primary/50 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-dark" />
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-px w-40 bg-gradient-neon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                x: [0, 100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: index * 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotFound