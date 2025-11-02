// src/pages/Showreel.jsx
import { motion } from "framer-motion"
import ReactPlayer from "react-player/youtube"
import { Helmet } from "react-helmet-async"
import { useState, useRef, useEffect } from "react"

const Showreel = () => {
  // Demo YouTube URLs - Replace with your actual URLs later
  const videos = [
    { id: 1, src: "https://youtube.com/shorts/iwHy7kH00HQ?feature=share" },
    { id: 2, src: "https://www.youtube.com/shorts/Lh8B3Y2fhWc" },
    { id: 3, src: "https://youtube.com/shorts/HvLjAIlfwNI?feature=share" },
    { id: 4, src: "https://youtube.com/shorts/ZP1OyGPrhn8?feature=share" },
    { id: 5, src: "https://youtube.com/shorts/-2eJIoz2gJs?feature=share" },
    { id: 6, src: "https://youtube.com/shorts/rkOJrGeKfog?feature=share" },
    { id: 7, src: "https://youtube.com/shorts/qtX4pMIp-cI?feature=share" },
    { id: 8, src: "https://youtube.com/shorts/6dKWdvhwk1c?feature=share" },
    { id: 9, src: "https://youtube.com/shorts/ZpUPBiHoGSg?feature=share" },
    { id: 10, src: "https://youtube.com/shorts/lMl0VcXVwtA?feature=share" },
    { id: 11, src: "https://youtube.com/shorts/qOXBU0yBDvA?feature=share" },
    { id: 12, src: "https://youtube.com/watch?v=tiPZUqB51zE&feature=youtu.be" },
    { id: 13, src: "hhttps://www.youtube.com/watch?v=-uH7zRv4an0" },
    { id: 14, src: "https://www.youtube.com/watch?v=cqb50to0L_o" },
    { id: 15, src: "https://www.youtube.com/watch?v=FrB8djwrljI" },
    { id: 16, src: "https://www.youtube.com/watch?v=MY9CYYKHwk8" },
    { id: 17, src: "https://www.youtube.com/watch?v=DTURrZsSqHQ" },
    { id: 18, src: "https://www.youtube.com/watch?v=yyNSgdIWr74" },
    { id: 19, src: "https://www.youtube.com/watch?v=xzjx-tNGREU" },
    { id: 20, src: "https://www.youtube.com/watch?v=xzjx-tNGREU" },
    { id: 21, src: "https://www.youtube.com/watch?v=hIXw3fc7Ekk" },
    { id: 22, src: "https://www.youtube.com/watch?v=-lmjGRo_7D0" },
    { id: 23, src: "https://www.youtube.com/watch?v=-3gQhO7m09E" },
    { id: 24, src: "https://www.youtube.com/watch?v=RIeKAPnnQI0" },
    { id: 25, src: "https://www.youtube.com/watch?v=Ed8mHViT9ow" },
    { id: 26, src: "https://youtu.be/5YrMJXoiU_8" },

  ]

  return (
    <div className="min-h-screen bg-dark text-white pt-20">
      <Helmet>
        <title>Showreel | Niladri Raptan</title>
        <meta name="description" content="Professional video editing showreel by Niladri Raptan" />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-10"
      >
        Showreel
      </motion.h1>

      {/* 9:16 Grid Layout for Vertical Videos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4 md:px-6 max-w-[1600px] mx-auto pb-20">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

// Separate component for better performance and lazy loading
const VideoCard = ({ video }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setIsPlaying(true)
          } else {
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.3 } // Play when 30% visible (better for vertical scrolling)
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={videoRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-lg overflow-hidden group shadow-lg bg-black"
      style={{ aspectRatio: '9/16' }} // 9:16 aspect ratio for vertical videos
    >
      {isVisible ? (
        <ReactPlayer
          url={video.src}
          playing={isPlaying}
          loop
          muted
          width="100%"
          height="100%"
          controls={true}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                fs: 1,
                disablekb: 0,
                playsinline: 1,
                quality: 'hd1080',
                hd: 1,
                vq: 'hd1080',
                controls: 0, // Hide all YouTube controls
                autohide: 1,
              }
            }
          }}
          onError={(e) => console.log("Video error:", e)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Showreel