'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Mail, Briefcase, GraduationCap, Zap } from 'lucide-react'
import CurrentlyExploring from './CurrentlyExploring'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const techStack = [
  'Python', 'PyTorch', 'LangChain', 'FastAPI', 'AWS', 'MLflow',
  'Docker', 'FAISS', 'Hugging Face', 'PySpark', 'PostgreSQL', 'MongoDB',
]

export default function BentoAbout() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" style={{ background: '#080808' }}>
      {/* Top divider */}
      <div className="divider mb-0" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <div className="section-label">About</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f0ece4',
              lineHeight: 1.05,
            }}
          >
            The engineer behind
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              the intelligence.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridAutoRows: 'minmax(90px, auto)',
          }}
        >
          {/* Bio */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="glass-card p-7 relative overflow-hidden"
            style={{ gridColumn: 'span 7', minHeight: '220px' }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
              }}
            />
            <div className="section-label mb-5">Bio</div>
            <p style={{ color: '#b5b1a8', lineHeight: 1.85, fontSize: '15px' }}>
              I am a recent <span style={{ color: '#c9a84c', fontWeight: 500 }}>MS Data Science graduate (May 2026)</span> with ~1 year of hands-on industry experience bridging the gap between advanced ML models and scalable production. I architect end-to-end pipelines, LLMs, and RAG systems that solve complex problems.
            </p>
            <p className="mt-3" style={{ color: '#8c8880', lineHeight: 1.8, fontSize: '13px' }}>
              I believe AI should be deployed, not just prototyped. With hands-on experience in MLOps and cloud deployments like AWS SageMaker, I own the full stack — from raw data to scalable inference endpoints.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="glass-card p-6 relative overflow-hidden"
            style={{ gridColumn: 'span 5', minHeight: '220px' }}
          >
            <div className="section-label mb-5">
              <MapPin size={10} /> Location
            </div>
            <div className="flex items-start gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.18)',
                }}
              >
                🗽
              </div>
              <div>
                <div
                  className="text-white font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px' }}
                >
                  New York City, NY
                </div>
                <div style={{ color: '#8c8880', fontSize: '12px', marginTop: '3px' }}>
                  Open to remote & hybrid roles
                </div>
              </div>
            </div>

            <div
              className="pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <a
                href="mailto:sristikiran203@gmail.com"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Mail size={13} style={{ color: '#c9a84c', opacity: 0.6 }} />
                <span
                  style={{
                    color: '#a39f98',
                    fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  sristikiran203@gmail.com
                </span>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          {[
            { value: '~1', label: 'Year Industry XP', icon: <Briefcase size={14} /> },
            { value: '2', label: 'CS/DS Degrees', icon: <GraduationCap size={14} /> },
            { value: '3.8', label: 'Masters GPA', icon: <Zap size={14} /> },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card p-5 flex flex-col justify-between"
              style={{ gridColumn: 'span 4', minHeight: '110px' }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(201,168,76,0.07)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  color: '#c9a84c',
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div
                  className="font-bold"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '26px',
                    color: '#c9a84c',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: '#8c8880', fontSize: '11px', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Tech stack */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="glass-card p-6"
            style={{ gridColumn: 'span 12' }}
          >
            <div className="section-label mb-5">Core Stack</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.06 }}
                  className="tech-badge cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div style={{ gridColumn: 'span 12' }}>
            <CurrentlyExploring />
          </div>
        </div>
      </div>
    </section>
  )
}
