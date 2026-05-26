'use client'

import { useRef, useState, useEffect } from 'react'
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
  { id: 'eda', label: 'Data Ingestion & EDA', icon: '01', detail: '7.4k records, S3 bucket' },
  { id: 'feat', label: 'Feature Engineering', icon: '02', detail: '41 columns → 11 features' },
  { id: 'cluster', label: 'K-Means Clustering', icon: '03', detail: 'Market segmentation (k=5)' },
  { id: 'train', label: 'Model Training', icon: '04', detail: 'Random Forest (R²=0.952)' },
  { id: 'deploy', label: 'SageMaker Deploy', icon: '05', detail: 'Serverless inference endpoint' },
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

// Animated pulsing dot for "Live" status
const LiveDot = () => (
  <span className="relative flex h-2.5 w-2.5 mr-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
  </span>
)

export default function HeroProject() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [activeStep, setActiveStep] = useState<string | null>(null)
  const [pipelineProgress, setPipelineProgress] = useState(0)

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setPipelineProgress((prev) => (prev >= 100 ? 100 : prev + 1))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section
      id="projects"
      ref={ref}
      className="section relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      <div className="divider mb-0" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(201,168,76,0.03) 0%, transparent 60%)',
        }}
      />
      
      {/* Cinematic noise overlay for this section specifically */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-screen" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="section-label mb-5 border-gold-bright text-gold glow-gold">Production Case Study</div>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#f0ece4',
                lineHeight: 1.1,
              }}
            >
              Cloud-Based Real Estate{' '}
              <br className="hidden md:block" />
              <span className="gradient-text">Valuation & MLOps System</span>
            </h2>
            <p style={{ color: '#a39f98', fontSize: '16px', lineHeight: 1.7, letterSpacing: '0.01em' }}>
              An end-to-end Machine Learning platform architecture designed to ingest real estate data, 
              perform unsupervised market segmentation, and deploy a supervised valuation model via 
              <strong className="text-gray-200 font-medium"> AWS SageMaker Serverless Inference</strong>.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1rrXtkD88ZGqHG_zvfAKTd4YKP3d6yoxd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              Watch Technical Demo
            </a>
            <a
              href="https://github.com/krishnakiran23/real-estate-valuation-mlops"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-gold transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              View System Architecture
            </a>
          </div>
        </motion.div>

        {/* Dashboard Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
              className="metric-card bg-[#111] hover:bg-[#151515] border-[#222]"
            >
              <div
                className="font-bold mb-2 flex items-baseline justify-center gap-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  color: '#e2c97e',
                  textShadow: '0 0 20px rgba(201, 168, 76, 0.3)'
                }}
              >
                <AnimatedCounter
                  value={m.value}
                  suffix=""
                  decimals={m.decimals}
                  duration={2.5}
                />
                <span className="text-lg text-gold opacity-70">{m.suffix}</span>
              </div>
              <div
                style={{
                  color: '#8c8880',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated ML Pipeline Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 mb-8 relative overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)' }}
        >
          {/* Subtle scanning line effect */}
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.03)] to-transparent pointer-events-none z-0"
          />

          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="section-label mb-0 bg-transparent border-none p-0">System Architecture Flow</div>
            <div className="flex items-center text-[10px] font-mono text-gold-dim">
              <LiveDot /> Pipeline Active
            </div>
          </div>

          <div className="relative z-10">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#222]">
              <motion.div 
                className="h-full bg-gold" 
                style={{ width: `${pipelineProgress}%`, boxShadow: '0 0 10px rgba(201,168,76,0.8)' }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {pipelineSteps.map((step, i) => (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="flex flex-col items-center text-center relative cursor-crosshair group"
                >
                  <motion.div
                    animate={{
                      scale: activeStep === step.id ? 1.1 : 1,
                      borderColor: activeStep === step.id ? '#c9a84c' : pipelineProgress > (i * 25) ? '#8a6f2e' : '#333',
                      backgroundColor: activeStep === step.id ? 'rgba(201,168,76,0.1)' : '#111'
                    }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border-2 z-10 transition-colors"
                  >
                    <span className={`font-mono text-sm ${pipelineProgress > (i * 25) ? 'text-gold' : 'text-gray-600'}`}>
                      {step.icon}
                    </span>
                  </motion.div>
                  
                  <h4 className={`font-semibold text-sm mb-1 transition-colors ${activeStep === step.id ? 'text-white' : 'text-gray-300'}`}>
                    {step.label}
                  </h4>
                  <p className="text-[#a39f98] text-[11px] font-mono leading-relaxed">
                    {step.detail}
                  </p>

                  {/* Tech stack tags on hover */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeStep === step.id ? 1 : 0, y: activeStep === step.id ? 0 : 10 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono text-gold bg-[#1a1a1a] px-2 py-1 rounded border border-[#333] pointer-events-none"
                  >
                    {i === 0 ? 'Pandas, Boto3' : i === 1 ? 'Scikit-Learn' : i === 2 ? 'K-Means' : i === 3 ? 'RandomForest, MLflow' : 'AWS SageMaker'}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Details Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Unsupervised Clustering Insights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 group hover:border-gold-muted"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-200">Unsupervised Segmentation</h3>
            </div>
            
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Applied K-Means clustering (k=5) to discover latent market segments. Evaluated using Silhouette and Davies-Bouldin scores to ensure cluster stability.
            </p>

            <div className="space-y-4">
              {segments.map((seg, i) => (
                <div key={seg.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[13px] text-gray-300">{seg.label}</span>
                    <span className="text-[12px] font-mono text-gold">{seg.pct}%</span>
                  </div>
                  <div className="h-[3px] w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${seg.pct}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + (i * 0.1), ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-gold-dim to-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supervised Prediction Performance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 group hover:border-gold-muted"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-[#333] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-200">Supervised Valuation Model</h3>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Trained a Random Forest regressor tracked via MLflow. Engineered 11 custom features including BathToBedRatio and LuxuryIndicators.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#111] border border-[#222] p-4 rounded-xl text-center group-hover:border-[#333] transition-colors">
                <div className="text-2xl font-bold text-gold font-space tracking-tight">0.952</div>
                <div className="text-[10px] font-mono text-gray-500 uppercase mt-1">Test R² Score</div>
              </div>
              <div className="bg-[#111] border border-[#222] p-4 rounded-xl text-center group-hover:border-[#333] transition-colors">
                <div className="text-2xl font-bold text-gold font-space tracking-tight">4.79%</div>
                <div className="text-[10px] font-mono text-gray-500 uppercase mt-1">MAPE Error</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {features.slice(0, 6).map((f) => (
                <span key={f} className="text-[10px] font-mono px-2 py-1 bg-[#151515] text-gray-400 border border-[#2a2a2a] rounded cursor-default hover:text-gold hover:border-gold-muted transition-colors">
                  {f}
                </span>
              ))}
              <span className="text-[10px] font-mono px-2 py-1 text-gray-600">+5 more</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
