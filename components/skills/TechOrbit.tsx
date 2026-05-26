'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const coreTech = [
  { name: 'Python', orbit: 1, delay: 0 },
  { name: 'AWS', orbit: 1, delay: 0.5 },
  { name: 'SageMaker', orbit: 2, delay: 0.2 },
  { name: 'FastAPI', orbit: 2, delay: 0.7 },
  { name: 'LangChain', orbit: 3, delay: 0.1 },
  { name: 'MLflow', orbit: 3, delay: 0.6 },
  { name: 'Docker', orbit: 4, delay: 0.3 },
  { name: 'PyTorch', orbit: 4, delay: 0.8 },
  { name: 'FAISS', orbit: 5, delay: 0.4 },
  { name: 'PostgreSQL', orbit: 5, delay: 0.9 },
]

export default function TechOrbit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  // Orbit configurations
  const orbits = [
    { size: 180, duration: 25 },
    { size: 280, duration: 35 },
    { size: 380, duration: 45 },
    { size: 480, duration: 55 },
    { size: 580, duration: 65 },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center my-16 py-10 relative overflow-hidden" ref={ref}>
      <div className="section-label mb-12">Core Infrastructure Engine</div>
      
      <div className="relative flex items-center justify-center w-[600px] h-[600px] scale-75 md:scale-100">
        
        {/* Center Node */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 100 }}
          className="absolute z-20 w-24 h-24 rounded-full flex items-center justify-center glass-card"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, rgba(8,8,8,1) 100%)',
            boxShadow: '0 0 40px rgba(201,168,76,0.4), inset 0 0 20px rgba(201,168,76,0.2)'
          }}
        >
          <span className="font-space font-bold text-gold text-center leading-tight">AI<br/>CORE</span>
        </motion.div>

        {/* Orbits */}
        {orbits.map((orbit, idx) => {
          const orbitNum = idx + 1
          const items = coreTech.filter(t => t.orbit === orbitNum)
          
          return (
            <motion.div
              key={`orbit-${idx}`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 + (idx * 0.2), duration: 1 }}
              className="absolute rounded-full border border-[rgba(255,255,255,0.05)] border-dashed"
              style={{
                width: orbit.size,
                height: orbit.size,
                animation: `spin-slow ${orbit.duration}s linear infinite`
              }}
            >
              {items.map((item, itemIdx) => {
                const angle = (itemIdx / items.length) * 360
                return (
                  <div 
                    key={item.name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${orbit.size / 2}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div 
                      className="px-3 py-1.5 rounded-lg whitespace-nowrap"
                      style={{ 
                        background: '#111', 
                        border: '1px solid rgba(201,168,76,0.3)',
                        color: '#f0ece4',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        boxShadow: '0 0 15px rgba(201,168,76,0.1)',
                        animation: `anti-spin ${orbit.duration}s linear infinite`
                      }}
                    >
                      {item.name}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          )
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes anti-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}} />
    </div>
  )
}
