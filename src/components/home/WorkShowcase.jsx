import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import ReactPlayer from 'react-player/youtube'
import { Play, X } from 'lucide-react'

const categories = ['All', 'Wedding', 'Documentary', 'Cinematic', 'Corporate', 'Music Video']

// Demo YouTube URLs - Replace with your actual URLs
const projects = [
  {
    id: 1,
    title: 'Royal Wedding Highlights',
    category: 'Wedding',
    thumbnail: '/projects/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg',
    video: "https://www.youtube.com/watch?v=tiPZUqB51zE",
  },
  {
    id: 2,
    title: 'Royal Wedding Project',
    category: 'Wedding',
    thumbnail: '/projects/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg',
    video: 'https://www.youtube.com/watch?v=-uH7zRv4an0',
  },
  {
    id: 3,
    title: 'UP Wedding Video',
    category: 'Wedding',
    thumbnail: '/projects/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg',
    video: 'https://www.youtube.com/watch?v=XNMhxOppZrE',
  },
  {
    id: 4,
    title: 'Gaanwala music video',
    category: 'Music Video',
    thumbnail: '/projects/music.jpg',
    video: 'https://www.youtube.com/watch?v=X1GmFRY2bUM',
  },
]

const WorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  )

  const handleCloseModal = () => {
    setSelectedVideo(null)
    setIsPlayerReady(false)
  }

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Featured Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400"
          >
            A collection of my best video editing projects across different genres.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-dark'
                  : 'glass text-gray-400 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-dark-400/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <button
                    onClick={() => setSelectedVideo(project)}
                    className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary transform scale-50 group-hover:scale-100 transition-transform duration-300"
                    aria-label={`Play ${project.title}`}
                  >
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                  <h3 className="text-lg font-semibold mb-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl mt-10"
              >
                {/* Header with Title and Close Button */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-semibold">{selectedVideo.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{selectedVideo.category}</p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors shadow-lg flex-shrink-0 ml-4"
                    aria-label="Close video"
                  >
                    <X size={20} className="md:w-6 md:h-6" />
                  </button>
                </div>

                {/* Video Container */}
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
                  {!isPlayerReady && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  )}
                  <ReactPlayer
                    url={selectedVideo.video}
                    width="100%"
                    height="100%"
                    controls
                    playing
                    onReady={() => setIsPlayerReady(true)}
                    config={{
                      youtube: {
                        playerVars: {
                          modestbranding: 1,
                          rel: 0,
                          showinfo: 0,
                          iv_load_policy: 3,
                          fs: 1,
                          autoplay: 1,
                        }
                      }
                    }}
                  />
                </div>

                {/* ESC to close hint */}
                <p className="text-center text-gray-400 text-sm mt-4">
                  Press <kbd className="px-2 py-1 bg-gray-800 rounded">ESC</kbd> or click outside to close
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default WorkShowcase