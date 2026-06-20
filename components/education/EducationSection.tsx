'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    school: 'Rowan University',
    location: 'Glassboro, NJ',
    degree: 'Master of Science in Data Science',
    duration: 'Aug 2024 – May 2026',
    gpa: '3.8 / 4.0',
    flag: '🇺🇸',
    highlight: 'Expected May 2026',
    courses: ['Machine Learning', 'Deep Learning', 'Big Data Analytics', 'Statistical Inference', 'NLP'],
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className="section" style={{ background: '#080808' }}>
      <div className="divider mb-0" />
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="section-label">Education</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f0ece4',
            }}
          >
            Built on a strong{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              foundation.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-card p-6 h-full relative"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)',
                  }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(201,168,76,0.07)',
                      border: '1px solid rgba(201,168,76,0.18)',
                      color: '#c9a84c',
                    }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <span style={{ fontSize: '22px' }}>{edu.flag}</span>
                </div>

                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', color: '#f0ece4' }}
                >
                  {edu.school}
                </h3>
                <p className="mb-1" style={{ color: '#c9a84c', fontSize: '13px', fontWeight: 500 }}>
                  {edu.degree}
                </p>
                <p className="mb-5" style={{ color: '#8c8880', fontSize: '12px' }}>
                  {edu.location} · {edu.duration}
                </p>

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="px-4 py-2 rounded-xl"
                    style={{
                      background: 'rgba(201,168,76,0.07)',
                      border: '1px solid rgba(201,168,76,0.18)',
                    }}
                  >
                    <div
                      className="font-bold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', color: '#c9a84c' }}
                    >
                      {edu.gpa}
                    </div>
                    <div style={{ color: '#a39f98', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace" }}>
                      GPA
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: 'rgba(201,168,76,0.06)',
                      border: '1px solid rgba(201,168,76,0.15)',
                      color: '#8a7040',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {edu.highlight}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: '#a39f98',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
