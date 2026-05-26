'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const metrics = [
  { value: 7478, label: 'Records Analyzed', suffix: '', decimals: 0 },
  { value: 41, label: 'Feature Columns', suffix: '', decimals: 0 },
  { value: 11, label: 'Engineered Features', suffix: '', decimals: 0 },
  { value: 0.952, label: 'Random Forest R²', suffix: '', decimals: 3 },
  { value: 4.79, label: 'MAPE Score', suffix: '%', decimals: 2 },
  { value: 197, label: 'SageMaker Latency', suffix: 'ms', decimals: 0 },
  { value: 5, label: 'Market Segments', suffix: '', decimals: 0 },
  { value: 11, label: 'MLflow Experiments', suffix: '', decimals: 0 },
]

const pipelineSteps = [
  { id: 'EDA', label: 'EDA & Feature Engineering', icon: '→', detail: '7,478 records · 41 columns · 11 features' },
  { id: 'Cluster', label: 'Market Segmentation', icon: '→', detail: 'K-Means · GMM · 5 segments' },
  { id: 'Train', label: 'Supervised Learning', icon: '→', detail: 'Random Forest · R²=0.952' },
  { id: 'Mispricing', label: 'Mispricing Detection', icon: '→', detail: 'Under / over valuation' },
  { id: 'Deploy', label: 'AWS SageMaker', icon: '✓', detail: 'Serverless · 197ms latency' },
]

const segments = [
  { label: 'Luxury Estates', pct: 12 },
  { label: 'Standard Suburban', pct: 28 },
  { label: 'Acreage / Rural', pct: 20 },
  { label: 'Mid-Range Family', pct: 25 },
  { label: 'Affordable Compact', pct: 15 },
]

const features = [
  'PricePerSqFt', 'PropertyAge', 'BuildingToLandRatio', 'BathToBedRatio',
  'LuxuryIndicator', 'HasExtraFeatures', 'MedianValueByZip', 'ValuePerAcre',
  'LastSaleAgeDays', 'IsMispriced', 'MultiBuildingIndicator',
]

export default function HeroProject() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState<string | null>(null)

  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      <div className="divider mb-0" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 20%, rgba(201,168,76,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="section-label">Hero Project</div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(26px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f0ece4',
              lineHeight: 1.1,
            }}
          >
            Cloud-Based Real Estate{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Valuation & Market
            </span>
            <br />
            Segmentation ML System
          </h2>
          <p style={{ color: '#a39f98', fontSize: '15px', maxWidth: '580px', lineHeight: 1.75 }}>
            End-to-end ML pipeline: EDA → Feature Engineering → Unsupervised Clustering →
            Supervised Prediction → Mispricing Detection → AWS SageMaker Serverless Deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between mt-6">
            <div className="flex flex-wrap gap-2">
              {['Python', 'scikit-learn', 'MLflow', 'AWS SageMaker', 'boto3', 'Random Forest', 'K-Means'].map((t) => (
                <span
                  key={t}
                  className="tech-badge"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1rrXtkD88ZGqHG_zvfAKTd4YKP3d6yoxd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: 'rgba(201,168,76,0.15)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: '#e2c97e',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Presentation
              </a>
              <a
                href="https://github.com/krishnakiran23/real-estate-valuation-mlops"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  color: '#c9a84c',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Repository
              </a>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="metric-card"
            >
              <div
                className="font-bold mb-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(18px, 2.5vw, 28px)',
                  color: '#c9a84c',
                }}
              >
                <AnimatedCounter
                  value={m.value}
                  suffix={m.suffix}
                  decimals={m.decimals}
                  duration={2}
                />
              </div>
              <div
                style={{
                  color: '#8c8880',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.04em',
                }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card p-7 mb-6"
        >
          <div className="section-label mb-6">ML Pipeline Architecture</div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pipelineSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.09 }}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className="flex flex-col items-center text-center cursor-default"
              >
                <motion.div
                  animate={{
                    borderColor:
                      activeStep === step.id
                        ? 'rgba(201,168,76,0.45)'
                        : 'rgba(255,255,255,0.07)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 relative"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: activeStep === step.id ? '#c9a84c' : '#8c8880',
                    transition: 'all 0.2s',
                  }}
                >
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: activeStep === step.id ? '#c9a84c' : 'rgba(255,255,255,0.06)',
                      fontSize: '9px',
                      fontWeight: 700,
                      color: activeStep === step.id ? '#080808' : '#8c8880',
                      transition: 'all 0.2s',
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < 4 ? '◼' : '✓'}
                </motion.div>
                <div
                  className="font-medium text-xs mb-1"
                  style={{
                    color: activeStep === step.id ? '#c9a84c' : '#b5b1a8',
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: 'color 0.2s',
                    fontSize: '12px',
                  }}
                >
                  {step.label}
                </div>
                <motion.div
                  animate={{ opacity: activeStep === step.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    color: '#a39f98',
                    fontSize: '10px',
                    fontFamily: "'JetBrains Mono', monospace",
                    lineHeight: 1.5,
                  }}
                >
                  {step.detail}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Segments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass-card p-6"
          >
            <div className="section-label mb-5">Market Segments (K-Means, k=5)</div>
            <div className="space-y-3">
              {segments.map((seg, i) => (
                <div key={seg.label}>
                  <div className="flex justify-between mb-1.5">
                    <span style={{ color: '#b5b1a8', fontSize: '13px' }}>{seg.label}</span>
                    <span
                      style={{
                        color: '#c9a84c',
                        fontSize: '12px',
                        fontFamily: "'JetBrains Mono', monospace',",
                      }}
                    >
                      {seg.pct}%
                    </span>
                  </div>
                  <div
                    className="h-px rounded-full overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${seg.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), rgba(201,168,76,0.8))' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-5 p-3 rounded-xl"
              style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}
            >
              <div style={{ color: '#8a7040', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace" }}>
                Evaluated: Silhouette · Davies-Bouldin · Calinski-Harabasz
              </div>
            </div>
          </motion.div>

          {/* Features + Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass-card p-6"
          >
            <div className="section-label mb-5">Engineered Features (11)</div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {features.map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.04 }}
                  className="px-2 py-1 rounded text-xs cursor-default"
                  style={{
                    background: 'rgba(201,168,76,0.05)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    color: '#b5b1a8',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                  }}
                >
                  {f}
                </motion.span>
              ))}
            </div>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}
            >
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: 'R² Score', value: '0.952' },
                  { label: 'MAE', value: '$16K' },
                  { label: 'MAPE', value: '4.79%' },
                ].map((m) => (
                  <div key={m.label}>
                    <div
                      className="font-bold"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '18px',
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
              <div
                className="mt-2 text-center"
                style={{ color: '#8a7040', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace" }}
              >
                Best Model: Random Forest
              </div>
            </div>
          </motion.div>
        </div>

        {/* Deployment card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="glass-card p-6"
          style={{ borderColor: 'rgba(201,168,76,0.14)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="section-label mb-2">Production Deployment</div>
              <h3
                className="font-bold mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '18px',
                  color: '#f0ece4',
                }}
              >
                AWS SageMaker Serverless Inference
              </h3>
              <p style={{ color: '#a39f98', fontSize: '14px', maxWidth: '480px', lineHeight: 1.7 }}>
                Deployed Random Forest model to SageMaker Serverless endpoint using boto3 and
                custom inference handlers. Resolved sklearn version conflicts during containerization.
              </p>
            </div>
            <div className="flex gap-6">
              {[
                { label: 'Avg Latency', value: '197ms' },
                { label: 'Status', value: '● Live' },
                { label: 'Experiment Runs', value: '11' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '20px',
                      color: '#c9a84c',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: '#8c8880', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
