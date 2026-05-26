'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'hero', label: 'Home', symbol: '⌂' },
  { id: 'about', label: 'About', symbol: '◎' },
  { id: 'experience', label: 'Experience', symbol: '◈' },
  { id: 'skills', label: 'Skills', symbol: '⬡' },
  { id: 'projects', label: 'Projects', symbol: '◆' },
  { id: 'education', label: 'Education', symbol: '◉' },
  { id: 'contact', label: 'Contact', symbol: '◐' },
]

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className="flex items-center gap-0.5 px-2 py-2 rounded-2xl"
            style={{
              background: 'rgba(14, 13, 12, 0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.7)',
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              const isHovered = hoveredItem === item.id

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.92 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full mb-2 whitespace-nowrap"
                        style={{
                          background: 'rgba(14, 13, 12, 0.98)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '8px',
                          padding: '4px 10px',
                          fontSize: '11px',
                          color: '#b5b1a8',
                          fontFamily: "'JetBrains Mono', monospace",
                          letterSpacing: '0.04em',
                        }}
                      >
                        {item.label}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    onClick={() => scrollTo(item.id)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: '38px',
                      height: '38px',
                      background: isActive ? 'rgba(201,168,76,0.1)' : 'transparent',
                      border: isActive ? '1px solid rgba(201,168,76,0.25)' : '1px solid transparent',
                      color: isActive ? '#c9a84c' : '#737069',
                      fontSize: '14px',
                      cursor: 'pointer',
                      fontFamily: "'JetBrains Mono', monospace",
                      transition: 'all 0.2s',
                    }}
                  >
                    {item.symbol}
                  </motion.button>

                  {isActive && (
                    <div
                      className="w-1 h-1 rounded-full mt-0.5"
                      style={{ background: 'rgba(201,168,76,0.6)' }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
