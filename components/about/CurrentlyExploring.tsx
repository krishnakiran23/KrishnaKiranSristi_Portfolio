'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const topics = [
  'Agentic AI Systems',
  'Multi-Agent Workflows',
  'LLM Orchestration',
  'AI Infrastructure',
  'Cloud-Native Inference',
  'Retrieval-Augmented Generation',
  'Scalable AI Deployment'
]

export default function CurrentlyExploring() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="w-full mt-12">
      <div className="section-label mb-6">Currently Building & Exploring</div>
      <div 
        ref={ref}
        className="glass-card p-8 rounded-2xl relative overflow-hidden group"
      >
        {/* Subtle animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          <p className="text-gray-400 text-sm mb-6 max-w-2xl leading-relaxed">
            Continuously pushing the boundaries of what&apos;s possible with GenAI. 
            My current research and side projects are heavily focused on orchestrating 
            intelligent agents and building the infrastructure to support them at scale.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, i) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-2 rounded-xl text-xs font-mono font-medium cursor-default transition-colors"
                style={{
                  background: 'rgba(25, 25, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#c9a84c',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)'
                }}
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
