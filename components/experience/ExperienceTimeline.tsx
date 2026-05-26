'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BrainCircuit, Star } from 'lucide-react'

const experiences = [
  {
    company: 'Kofluence',
    role: 'Data Scientist',
    duration: 'Jan 2024 – Jul 2024',
    location: 'Hyderabad, India',
    type: 'Full-Time',
    icon: <BrainCircuit size={16} />,
    highlights: [
      { metric: '90%', description: 'accuracy — multilingual sentiment analysis' },
      { metric: '88%', description: 'detection — fake follower identification' },
    ],
    bullets: [
      'Developed and deployed multilingual sentiment analysis models in Python analyzing large-scale social media data across multiple languages.',
      'Built ML models for fake follower detection using social media APIs and behavioral feature engineering.',
      'Designed and deployed REST APIs for ML inference services using FastAPI, enabling low-latency real-time analytics.',
      'Performed EDA, hypothesis testing, preprocessing, and model validation for reproducible ML workflows.',
    ],
    stack: ['Python', 'FastAPI', 'scikit-learn', 'NLP', 'Pandas', 'MLflow'],
  },
  {
    company: 'Amazon',
    role: 'Machine Learning Apprentice',
    duration: 'Sep 2023 – Oct 2023',
    location: 'Remote',
    type: 'Apprenticeship',
    icon: <Star size={16} />,
    highlights: [
      { metric: 'Top 0.002%', description: 'selected from 50,000+ applicants' },
    ],
    bullets: [
      'Selected from 50,000+ applicants for Amazon\'s competitive Machine Learning Apprenticeship program.',
      'Built and evaluated ML models using Python with feature engineering and model optimization.',
      'Worked with reproducible ML workflows, experimentation pipelines, and collaborative development practices.',
    ],
    stack: ['Python', 'Machine Learning', 'Feature Engineering', 'Experimentation'],
  },
]

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section" style={{ background: '#080808' }}>
      <div className="divider mb-0" />

      <div className="container mx-auto px-6 max-w-4xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="section-label">Experience</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f0ece4',
            }}
          >
            Where I&apos;ve{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              shipped AI.
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(180deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 60%, transparent 100%)',
            }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 pl-12"
              >
                {/* Node */}
                <div
                  className="absolute left-0 top-5 w-10 h-10 rounded-xl flex items-center justify-center z-10"
                  style={{
                    background: 'rgba(201,168,76,0.07)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: '#c9a84c',
                  }}
                >
                  {exp.icon}
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="flex-1 glass-card p-6"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3
                        className="font-bold mb-1"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '19px',
                          color: '#f0ece4',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="font-medium"
                          style={{ color: '#c9a84c', fontSize: '14px' }}
                        >
                          {exp.company}
                        </span>
                        <span style={{ color: '#737069' }}>·</span>
                        <span style={{ color: '#8c8880', fontSize: '13px' }}>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          background: 'rgba(201,168,76,0.07)',
                          border: '1px solid rgba(201,168,76,0.18)',
                          color: '#8a7040',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {exp.type}
                      </span>
                      <span
                        style={{
                          color: '#8c8880',
                          fontSize: '11px',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {exp.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {exp.highlights.map((h) => (
                        <div
                          key={h.metric}
                          className="px-3 py-2 rounded-lg"
                          style={{
                            background: 'rgba(201,168,76,0.05)',
                            border: '1px solid rgba(201,168,76,0.15)',
                          }}
                        >
                          <span
                            className="font-bold"
                            style={{
                              color: '#c9a84c',
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: '17px',
                            }}
                          >
                            {h.metric}
                          </span>
                          <p style={{ color: '#a39f98', fontSize: '11px', marginTop: '1px' }}>
                            {h.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span
                          className="mt-2.5 flex-shrink-0 w-1 h-1 rounded-full"
                          style={{ background: 'rgba(201,168,76,0.4)' }}
                        />
                        <span style={{ color: '#b5b1a8', fontSize: '14px', lineHeight: 1.75 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge"
                        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
