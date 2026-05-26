'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { value: '0.952', label: 'R² Score (RF)' },
  { value: '7,478+', label: 'Records Processed' },
  { value: '197ms', label: 'SageMaker Latency' },
  { value: '11', label: 'ML Experiments Tracked' },
  { value: '90%', label: 'NLP Accuracy' },
  { value: '88%', label: 'Detection Accuracy' },
]

export default function MetricsStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="w-full border-y border-[rgba(255,255,255,0.05)] bg-[#0a0a0a] relative z-20 overflow-hidden py-6">
      {/* Subtle glowing lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={ref} className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center min-w-[120px]"
            >
              <div 
                className="text-2xl md:text-3xl font-bold font-space text-gold tracking-tighter"
                style={{ textShadow: '0 0 15px rgba(201,168,76,0.3)' }}
              >
                {m.value}
              </div>
              <div className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-wider mt-1">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
