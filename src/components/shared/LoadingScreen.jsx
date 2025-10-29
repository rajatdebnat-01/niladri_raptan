import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-dark"
    >
      <div className="text-center">
        {/* Animated Logo/Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Niladri Raptan
          </h1>
          <p className="text-gray-400 text-lg">Video Editor</p>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0,
            }}
            className="w-3 h-3 rounded-full bg-primary"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.2,
            }}
            className="w-3 h-3 rounded-full bg-primary"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.4,
            }}
            className="w-3 h-3 rounded-full bg-primary"
          />
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="mt-8 h-1 bg-primary rounded-full max-w-xs mx-auto"
        />
      </div>
    </motion.div>
  )
}

export default LoadingScreen