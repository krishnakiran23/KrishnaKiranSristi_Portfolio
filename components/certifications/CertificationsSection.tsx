'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, FileText } from 'lucide-react'

const certifications = [
  { title: 'Azure AI Fundamentals', issuer: 'Microsoft Certified', icon: '◈', badge: 'AI-900' },
  { title: 'Azure Fundamentals', issuer: 'Microsoft Certified', icon: '◉', badge: 'AZ-900' },
  { title: 'SQL', issuer: 'HackerRank', icon: '◆', badge: 'Certified' },
  { title: 'Big Data Computing', issuer: 'NPTEL', icon: '◎', badge: 'IIT' },
]

const achievements = [
  {
    title: 'IIIT Hyderabad MEGATHON',
    description: 'Participant in one of India\'s premier hackathons hosted by IIIT Hyderabad.',
    icon: <Trophy size={16} />,
  },
  {
    title: 'Published Research Paper',
    description: 'Published research on Automatic Tune Designer System — bridging AI and music generation.',
    icon: <FileText size={16} />,
  },
  {
    title: 'PRMO Mathematics Olympiad',
    description: 'Qualified Pre-Regional Mathematics Olympiad — national-level mathematics competition.',
    icon: <Award size={16} />,
  },
  {
    title: 'Amazon ML Apprenticeship',
    description: 'Selected from 50,000+ applicants for Amazon\'s competitive Machine Learning Apprenticeship.',
    icon: <Trophy size={16} />,
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section" style={{ background: '#080808' }}>
      <div className="divider mb-0" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="section-label">Credentials</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f0ece4',
            }}
          >
            Recognition &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              credentials.
            </span>
          </h2>
        </motion.div>

        {/* Cert cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-card p-5 text-center relative overflow-hidden h-full"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)',
                  }}
                />
                <div
                  className="text-lg mb-3 font-mono"
                  style={{ color: '#c9a84c', opacity: 0.5, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {cert.icon}
                </div>
                <div
                  className="font-semibold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', color: '#f0ece4' }}
                >
                  {cert.title}
                </div>
                <div style={{ color: '#8c8880', fontSize: '11px', marginBottom: '10px' }}>
                  {cert.issuer}
                </div>
                <span
                  className="px-2 py-0.5 rounded text-xs"
                  style={{
                    background: 'rgba(201,168,76,0.07)',
                    border: '1px solid rgba(201,168,76,0.18)',
                    color: '#8a7040',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                  }}
                >
                  {cert.badge}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(201,168,76,0.07)',
                    border: '1px solid rgba(201,168,76,0.18)',
                    color: '#c9a84c',
                  }}
                >
                  {ach.icon}
                </div>
                <div>
                  <div
                    className="font-semibold mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#f0ece4' }}
                  >
                    {ach.title}
                  </div>
                  <div style={{ color: '#a39f98', fontSize: '13px', lineHeight: 1.65 }}>
                    {ach.description}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
