'use client'

import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href?: string
  download?: boolean
  target?: string
  rel?: string
}

export default function MagneticButton({
  children,
  className = '',
  style = {},
  href,
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate distance from center of the button
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    x.set(middleX * 0.3) // Magnetic pull strength
    y.set(middleY * 0.3)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10, mass: 0.5 }}
      className={`relative inline-block ${className}`}
    >
      <div className="relative z-10 w-full h-full" style={style}>
        {children}
      </div>
      {/* Premium glow effect on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-0 pointer-events-none rounded-[inherit]"
          style={{
            boxShadow: '0 0 20px rgba(201, 168, 76, 0.4), 0 0 40px rgba(201, 168, 76, 0.1)',
            border: '1px solid rgba(201, 168, 76, 0.5)'
          }}
        />
      )}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} className="no-underline">
        {content}
      </a>
    )
  }

  return content
}
