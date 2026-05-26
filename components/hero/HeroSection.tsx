'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SiGithub, SiLeetcode } from 'react-icons/si'
import { Download, Mail, ArrowDown, Linkedin } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// 3D Particle Network representing ML models/data points
function ParticleNetwork() {
  const ref = useRef<THREE.Points>(null)
  
  const sphere = useMemo(() => {
    const count = 800
    const points = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Generate points inside a sphere for a clustered look
      const r = 2.5 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      
      points[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      points[i * 3 + 2] = r * Math.cos(phi)
    }
    return points
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c9a84c"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

function MouseGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{ x: pos.x - 300, y: pos.y - 300 }}
        transition={{ type: 'spring', stiffness: 50, damping: 25, mass: 1 }}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  )
}

const phrases = [
  'Building Production-Grade AI Systems.',
  'Architecting Scalable MLOps Pipelines.',
  'Deploying LLMs & RAG for Real-World Impact.',
  'Engineering Cloud-Native AI Infrastructures.',
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
        className="inline-block w-[2px] h-7 md:h-9 ml-1 align-middle"
        style={{ background: '#c9a84c', boxShadow: '0 0 8px rgba(201, 168, 76, 0.6)' }}
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
    const t = setTimeout(() => setLoaded(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ParticleNetwork />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-grid opacity-100 z-0 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />
      <MouseGlow />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card hover:bg-white/5 transition-colors cursor-default"
            style={{
              border: '1px solid rgba(201,168,76,0.25)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#c9a84c',
              letterSpacing: '0.08em',
              boxShadow: '0 0 20px rgba(201,168,76,0.1)'
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#e2c97e', boxShadow: '0 0 10px #e2c97e' }}
            />
            System Status: Ready for Production • New Grad (May 2026)
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-bold mb-6 leading-none tracking-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(48px, 10vw, 108px)',
              color: '#f0ece4',
            }}
          >
            Krishna{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #fcedba 0%, #c9a84c 40%, #8a6f2e 100%)',
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(11px, 1.4vw, 14px)',
              color: '#4a4a4a',
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.01)'
            }}
          >
            <span style={{ color: '#c9a84c', opacity: 0.8 }}>const</span>&nbsp;
            <span style={{ color: '#e2c97e' }}>engineer</span>&nbsp;
            <span style={{ color: '#6b6763' }}>=</span>&nbsp;
            <span style={{ color: '#a39f98' }}>
              &quot;AI Architect │ MLOps │ GenAI&quot;
            </span>
          </div>
        </motion.div>

        {/* Typewriter headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mb-8"
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(18px, 3vw, 32px)',
              fontWeight: 400,
              color: '#f0ece4',
              minHeight: '48px',
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
          className="mb-12 mx-auto"
          style={{
            maxWidth: '640px',
            color: '#a39f98',
            fontSize: 'clamp(15px, 1.7vw, 18px)',
            lineHeight: 1.8,
            fontWeight: 400,
            letterSpacing: '0.01em'
          }}
        >
          Bridging the gap between advanced Machine Learning models and scalable production environments. 
          I engineer end-to-end AI pipelines, LLMs, and intelligent infrastructure that drive real-world business outcomes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {ctaButtons.map((btn, i) => (
            <motion.div
              key={btn.label}
              initial={{ opacity: 0, y: 10 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
            >
              <MagneticButton
                href={btn.href}
                download={btn.download}
                target={btn.href.startsWith('http') ? '_blank' : undefined}
                rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={
                  btn.style === 'primary' ? 'btn-primary' : 
                  btn.style === 'secondary' ? 'btn-secondary' : 
                  'btn-secondary border-transparent bg-transparent hover:bg-white/5'
                }
                style={btn.style === 'primary' ? { padding: '14px 28px', fontSize: '15px' } : undefined}
              >
                {btn.icon}
                <span>{btn.label}</span>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <div style={{ fontSize: '10px', color: '#6b6763', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll to explore
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} style={{ color: '#c9a84c', opacity: 0.7 }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
