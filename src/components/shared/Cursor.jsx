// src/components/common/Cursor.jsx
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Cursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    // Disable cursor on mobile (touch devices)
    if (window.innerWidth < 768) {
      cursor.style.display = "none"
      follower.style.display = "none"
      return
    }

    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0

    const followMouse = () => {
      posX += (mouseX - posX) * 0.1
      posY += (mouseY - posY) * 0.1

      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`
      requestAnimationFrame(followMouse)
    }
    followMouse()

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    document.addEventListener("mousemove", moveCursor)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
    </>
  )
}

export default Cursor
