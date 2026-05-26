'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { SiLeetcode } from 'react-icons/si'
import { Download, Mail, ArrowDown, Linkedin } from 'lucide-react'

// Subtle ambient grid canvas — classy, not flashy
function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Slow-moving very subtle orbs
    const orbs = Array.from({ length: 3 }, (_, i) => ({
      x: [0.2, 0.8, 0.5][i] * window.innerWidth,
      y: [0.3, 0.2, 0.7][i] * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: [400, 350, 300][i],
    }))

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < -orb.r) orb.x = canvas.width + orb.r
        if (orb.x > canvas.width + orb.r) orb.x = -orb.r
        if (orb.y < -orb.r) orb.y = canvas.height + orb.r
        if (orb.y > canvas.height + orb.r) orb.y = -orb.r

        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
        g.addColorStop(0, 'rgba(201, 168, 76, 0.04)')
        g.addColorStop(1, 'rgba(201, 168, 76, 0)')
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

// Subtle mouse-follow warm glow
function MouseGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <motion.div
        animate={{ x: pos.x - 300, y: pos.y - 300 }}
        transition={{ type: 'spring', stiffness: 60, damping: 30, mass: 1.5 }}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  )
}

// Elegant typewriter — single clean phrase that changes
const phrases = [
  'Building Production-Grade AI Systems.',
  'Engineering Scalable ML Platforms.',
  'Transforming Data into Intelligence.',
  'Deploying GenAI for the Real World.',
]

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 55)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 28)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((p) => (p + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        className="inline-block w-px h-7 md:h-9 ml-0.5 align-middle"
        style={{ background: '#c9a84c' }}
      />
    </span>
  )
}

const ctaButtons = [
  {
    label: 'Download Resume',
    icon: <Download size={14} />,
    href: '/resume.pdf',
    style: 'primary',
    download: true,
  },
  {
    label: 'GitHub',
    icon: <SiGithub size={14} />,
    href: 'https://github.com/krishnakiran23',
    style: 'secondary',
  },
  {
    label: 'LinkedIn',
    icon: <Linkedin size={14} />,
    href: 'https://www.linkedin.com/in/krishna-kiran-sristi-7085681bb/',
    style: 'secondary',
  },
  {
    label: 'LeetCode',
    icon: <SiLeetcode size={14} />,
    href: 'https://leetcode.com/krishnakiran75',
    style: 'secondary',
  },
  {
    label: 'Contact',
    icon: <Mail size={14} />,
    href: '#contact',
    style: 'ghost',
  },
]

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Top vignette gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      <AmbientCanvas />
      <MouseGlow />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#8a7040',
              letterSpacing: '0.08em',
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#c9a84c' }}
            />
            NYC — New Grad (May 2026) • Available for Full-Time Roles
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-bold mb-5 leading-none tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(44px, 9vw, 96px)',
              color: '#f0ece4',
            }}
          >
            Krishna{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 60%, #9a7a2e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kiran Sristi
            </span>
          </h1>
        </motion.div>

        {/* Role code line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(10px, 1.3vw, 13px)',
              color: '#3d3d3d',
            }}
          >
            <span style={{ color: '#c9a84c', opacity: 0.6 }}>const</span>&nbsp;
            <span style={{ color: '#b5b1a8' }}>role</span>&nbsp;
            <span style={{ color: '#3d3d3d' }}>=</span>&nbsp;
            <span style={{ color: '#8a8680' }}>
              &quot;Data Scientist │ ML Engineer │ GenAI Engineer&quot;
            </span>
          </div>
        </motion.div>

        {/* Typewriter headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mb-7"
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(16px, 2.8vw, 28px)',
              fontWeight: 400,
              color: '#f0ece4',
              minHeight: '44px',
              letterSpacing: '-0.01em',
            }}
          >
            <TypewriterText />
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mb-10 mx-auto"
          style={{
            maxWidth: '580px',
            color: '#a39f98',
            fontSize: 'clamp(14px, 1.6vw, 17px)',
            lineHeight: 1.8,
            fontWeight: 400,
          }}
        >
          Recent graduate (May 2026) with ~1 year of hands-on experience bridging the gap between advanced ML models and scalable production. 
          I architect end-to-end ML pipelines, LLMs, and RAG systems to build intelligent applications that deliver real-world business impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {ctaButtons.map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              download={btn.download}
              target={btn.href.startsWith('http') ? '_blank' : undefined}
              rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 8 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.06 }}
              className="inline-flex items-center gap-2 rounded-xl font-medium text-sm cursor-pointer no-underline"
              style={
                btn.style === 'primary'
                  ? {
                      padding: '11px 22px',
                      background: '#c9a84c',
                      border: '1px solid #c9a84c',
                      color: '#080808',
                      fontWeight: 600,
                    }
                  : btn.style === 'secondary'
                  ? {
                      padding: '11px 18px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      color: '#b5b1a8',
                    }
                  : {
                      padding: '11px 18px',
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.06)',
                      color: '#a39f98',
                    }
              }
            >
              {btn.icon}
              <span>{btn.label}</span>
            </motion.a>
          ))}
        </motion.div>


      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} style={{ color: '#737069' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
