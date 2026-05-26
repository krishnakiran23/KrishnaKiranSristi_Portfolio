'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Dot */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            animate={{ x: position.x - 3, y: position.y - 3 }}
            transition={{ type: 'spring', stiffness: 900, damping: 35, mass: 0.08 }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#c9a84c' }}
            />
          </motion.div>

          {/* Ring */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            animate={{
              x: position.x - (isHovering ? 20 : 14),
              y: position.y - (isHovering ? 20 : 14),
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.5 }}
          >
            <div
              className="rounded-full border transition-all duration-300"
              style={{
                width: isHovering ? '40px' : '28px',
                height: isHovering ? '40px' : '28px',
                borderColor: isHovering
                  ? 'rgba(201,168,76,0.45)'
                  : 'rgba(201,168,76,0.2)',
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
