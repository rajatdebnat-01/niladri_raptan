import { useState, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import ReactPlayer from 'react-player/youtube'
import { Play, X } from 'lucide-react'

// Project categories with more specific sub-categories
const categories = {
  'Wedding': ['Traditional', 'Pre-Wedding', 'Highlight', 'Cinematic'],
  'Documentary': ['Nature', 'Social', 'Cultural', 'Educational'],
  'Cinematic': ['Short Films', 'Music Videos', 'Trailers', 'Teasers'],
  'Corporate': ['Promotional', 'Training', 'Event Coverage', 'Product Launch'],
  'Social Media': ['Instagram Reels', 'YouTube Shorts', 'TikTok', 'Stories'],
}

// Sample projects data - Demo YouTube URLs (Replace with your actual URLs)
const projects = [
  {
    id: 1,
    title: 'Royal Wedding Highlights',
    category: 'Wedding',
    subCategory: 'Highlight',
    thumbnail: '/projects/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'A cinematic wedding highlight capturing the essence of a royal celebration.',
  },
  {
    id: 2,
    title: 'Documentary Filming Shorts',
    category: 'Documentary',
    subCategory: 'Educational',
    thumbnail: '/projects/man-filming-with-professional-camera.jpg',
    video: 'https://youtu.be/qtX4pMIp-cI',
    description: 'A Documentary type professional video editing project.',
  },
  {
    id: 3,
    title: 'Doctor Documentary',
    category: 'Documentary',
    subCategory: 'Nature',
    thumbnail: '/projects/man-filming-with-professional-camera.jpg',
    video: 'https://youtu.be/ZpUPBiHoGSg',
    description: 'A Documentary type professional video editing project.',
  },
  {
    id: 4,
    title: 'Cinematic Filming',
    category: 'Cinematic',
    subCategory: 'Short Films',
    thumbnail: '/projects/full-shot-man-bridge-with-light.jpg',
    video: 'https://youtu.be/qOXBU0yBDvA',
    description: 'A Cinematic type professional video editing project.',
  },
  {
    id: 5,
    title: 'Corporate Shorts',
    category: 'Corporate',
    subCategory: 'Training',
    thumbnail: '/projects/group-three-modern-architects.jpg',
    video: 'https://youtu.be/ZP1OyGPrhn8',
    description: 'A Corporate type professional video editing project.',
  },
  {
    id: 6,
    title: 'Wedding Ceremony',
    category: 'Wedding',
    subCategory: 'Traditional',
    thumbnail: '/projects/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg',
    video: 'https://youtu.be/XNMhxOppZrE',
    description: 'A Wedding type professional video editing project.',
  },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Wedding')
  const [activeSubCategory, setActiveSubCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const filteredProjects = projects.filter(
    (project) =>
      project.category === activeCategory &&
      (activeSubCategory === 'All' || project.subCategory === activeSubCategory)
  )

  const handleCloseModal = () => {
    setSelectedVideo(null)
    setIsPlayerReady(false)
  }

  // Close modal on ESC key
  useState(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        handleCloseModal()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedVideo])

  return (
    <>
      <Helmet>
        <title>Projects Portfolio | Niladri Raptan - Video Editor</title>
        <meta
          name="description"
          content="Explore my portfolio of video editing projects including weddings, documentaries, cinematic films, and corporate videos."
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
              Project Portfolio
            </h1>
            <p className="text-gray-400">
              Explore my collection of video editing projects across various
              categories.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="mb-12">
            {/* Main Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category)
                    setActiveSubCategory('All')
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                      ? 'bg-primary text-dark'
                      : 'glass text-gray-400 hover:text-primary'
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Sub Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <button
                onClick={() => setActiveSubCategory('All')}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${activeSubCategory === 'All'
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-400 hover:text-primary'
                  }`}
              >
                All
              </button>
              {categories[activeCategory].map((subCategory) => (
                <button
                  key={subCategory}
                  onClick={() => setActiveSubCategory(subCategory)}
                  className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${activeSubCategory === subCategory
                      ? 'bg-primary/20 text-primary'
                      : 'text-gray-400 hover:text-primary'
                    }`}
                >
                  {subCategory}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative group cursor-pointer"
                  >
                    {/* Project Thumbnail */}
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-dark-400/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                      <div className="absolute inset-0 p-6 flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="mt-auto">
                          <button
                            onClick={() => setSelectedVideo(project)}
                            className="magnetic-button px-6 py-2 rounded-full bg-primary/20 border border-primary text-primary hover:bg-primary/30 transition-colors inline-flex items-center gap-2"
                            aria-label={`Watch ${project.title}`}
                          >
                            <Play size={16} fill="currentColor" />
                            Watch Video
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <p className="text-gray-400 text-lg">No projects found in this category.</p>
                </motion.div>
              )}
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
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
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
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="text-white flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold mb-1">
                        {selectedVideo.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {selectedVideo.category} • {selectedVideo.subCategory}
                      </p>
                    </div>
                    <button
                      onClick={handleCloseModal}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors shadow-lg flex-shrink-0"
                      aria-label="Close video"
                    >
                      <X size={20} className="md:w-6 md:h-6" />
                    </button>
                  </div>

                  {/* Video Player */}
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

                  {/* Description Below */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
                    <p className="text-gray-500 text-xs mt-2">
                      Press <kbd className="px-2 py-1 bg-gray-800 rounded">X</kbd> or click outside to close
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Projects