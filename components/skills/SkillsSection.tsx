'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import TechOrbit from './TechOrbit'

const skillCategories = [
  {
    label: 'ML & GenAI',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LangChain', 'LangGraph', 'RAG', 'LLMs', 'BERT', 'Sentence-BERT', 'PEFT', 'Fine-Tuning'],
  },
  {
    label: 'NLP & LLM',
    skills: ['Text Classification', 'Sentiment Analysis', 'NER', 'Topic Modeling', 'Semantic Search', 'Embeddings', 'Prompt Engineering'],
  },
  {
    label: 'MLOps',
    skills: ['MLflow', 'Docker', 'CI/CD', 'Model Registry', 'Model Monitoring', 'FastAPI'],
  },
  {
    label: 'Cloud',
    skills: ['AWS', 'SageMaker', 'Amazon Bedrock', 'Amazon Q', 'EC2', 'Lambda', 'S3', 'Azure'],
  },
  {
    label: 'Programming',
    skills: ['Python', 'Java', 'C++', 'SQL'],
  },
  {
    label: 'Data & Databases',
    skills: ['PySpark', 'Spark SQL', 'ETL', 'MySQL', 'PostgreSQL', 'MongoDB', 'FAISS', 'Chroma', 'ClickHouse', 'Neo4j'],
  },
  {
    label: 'Visualization',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
]

const proficiencies = [
  { label: 'Python & ML Engineering', pct: 95 },
  { label: 'LLMs & RAG Systems', pct: 88 },
  { label: 'MLOps & Deployment', pct: 82 },
  { label: 'Cloud (AWS / Azure)', pct: 78 },
  { label: 'Data Engineering', pct: 80 },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredCat, setHoveredCat] = useState<string | null>(null)

  return (
    <section id="skills" className="section" style={{ background: '#080808' }}>
      <div className="divider mb-0" />

      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="section-label">Skills</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#f0ece4',
            }}
          >
            The full{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI / ML stack.
            </span>
          </h2>
        </motion.div>

        <TechOrbit />

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onMouseEnter={() => setHoveredCat(cat.label)}
              onMouseLeave={() => setHoveredCat(null)}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-card p-5 h-full cursor-default relative overflow-hidden"
                style={{
                  borderColor:
                    hoveredCat === cat.label
                      ? 'rgba(201,168,76,0.2)'
                      : 'rgba(255,255,255,0.07)',
                  transition: 'border-color 0.3s',
                }}
              >
                {/* Top accent */}
                {hoveredCat === cat.label && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
                    }}
                  />
                )}

                <div
                  className="font-semibold text-xs mb-3"
                  style={{
                    color: hoveredCat === cat.label ? '#c9a84c' : '#a39f98',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s',
                  }}
                >
                  {cat.label}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 + j * 0.02 }}
                      className="px-2 py-0.5 rounded text-xs cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: '#a39f98',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="glass-card p-7"
        >
          <div className="section-label mb-6">Core Proficiencies</div>
          <div className="space-y-5">
            {proficiencies.map((item, i) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span
                    style={{
                      color: '#b5b1a8',
                      fontSize: '13px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: '#c9a84c',
                      fontSize: '12px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {item.pct}%
                  </span>
                </div>
                <div
                  className="h-px rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.pct}%` } : {}}
                    transition={{
                      duration: 1.4,
                      delay: 0.7 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(201,168,76,0.4), rgba(201,168,76,0.9))',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
