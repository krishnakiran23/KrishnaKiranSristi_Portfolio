'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const additionalProjects = [
  {
    title: 'LLM-Powered Knowledge Assistant',
    subtitle: 'RAG + Agentic AI',
    description:
      'Built a Retrieval-Augmented Generation system supporting semantic search over large document collections. Implemented agentic workflows for retrieval, reasoning, and response generation with sub-second latency.',
    metrics: [
      { label: 'Relevance Improvement', value: '+30%' },
      { label: 'Response Latency', value: '<1s' },
    ],
    stack: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'RAG'],
    icon: '◈',
    tags: ['GenAI', 'NLP'],
  },
  {
    title: 'MLOps Pipeline for PM2.5 Prediction',
    subtitle: 'End-to-End Air Quality Forecasting',
    description:
      'Complete MLOps pipeline for predicting PM2.5 air quality levels. Features data cleaning, H2O AutoML model selection, remote MLflow tracking on AWS (EC2/S3/RDS), and a production-grade FastAPI deployment with drift monitoring.',
    metrics: [
      { label: 'Test RMSE', value: '66.19' },
      { label: 'R² Score', value: '0.465' },
    ],
    stack: ['Python', 'H2O AutoML', 'MLflow', 'FastAPI', 'Docker'],
    icon: '◉',
    tags: ['MLOps', 'AutoML'],
    github: 'https://github.com/krishnakiran23/Air_Quality_Prediction_Using_PM2.5Data'
  },
]

export default function AdditionalProjects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24" style={{ background: '#080808' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="section-label">More Projects</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f0ece4',
            }}
          >
            More things I&apos;ve{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              built.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-card p-6 h-full relative overflow-hidden"
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
                  }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(201,168,76,0.06)',
                      border: '1px solid rgba(201,168,76,0.15)',
                      color: '#c9a84c',
                      fontSize: '18px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {proj.icon}
                  </div>
                  <div className="flex gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          background: 'rgba(201,168,76,0.05)',
                          border: '1px solid rgba(201,168,76,0.15)',
                          color: '#8a7040',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '10px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px', color: '#f0ece4' }}
                >
                  {proj.title}
                </h3>
                <p className="mb-1" style={{ color: '#8a7040', fontSize: '13px' }}>
                  {proj.subtitle}
                </p>
                <p className="mb-5" style={{ color: '#a39f98', fontSize: '13px', lineHeight: 1.75 }}>
                  {proj.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-3 mb-5">
                  {proj.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="px-3 py-2 rounded-lg"
                      style={{
                        background: 'rgba(201,168,76,0.05)',
                        border: '1px solid rgba(201,168,76,0.12)',
                      }}
                    >
                      <div
                        className="font-bold"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '17px',
                          color: '#c9a84c',
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ color: '#8c8880', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {proj.github && (
                  <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold"
                      style={{ color: '#c9a84c', textDecoration: 'none' }}
                    >
                      <span>View Repository</span>
                      <span style={{ fontSize: '14px' }}>→</span>
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
