'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { SiLeetcode } from 'react-icons/si'
import { Mail, Copy, Check, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    icon: <SiGithub size={18} />,
    href: 'https://github.com/krishnakiran23',
  },
  {
    label: 'LinkedIn',
    icon: <Linkedin size={18} />,
    href: 'https://www.linkedin.com/in/krishna-kiran-sristi-7085681bb/',
  },
  {
    label: 'LeetCode',
    icon: <SiLeetcode size={18} />,
    href: 'https://leetcode.com/krishnakiran75',
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('sristikiran203@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section relative overflow-hidden" style={{ background: '#080808' }}>
      <div className="divider mb-0" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-3xl relative text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status */}
          <div className="flex justify-center mb-10">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.18)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: '#8a7040',
                letterSpacing: '0.08em',
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#c9a84c' }}
              />
              Open to Opportunities — Internships & Full-Time
            </div>
          </div>

          <div className="section-label justify-center mb-5">Get In Touch</div>

          <h2
            className="mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(36px, 7vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#f0ece4',
            }}
          >
            Let&apos;s build{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e2c97e 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              something
            </span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #8a6f2e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              incredible.
            </span>
          </h2>

          <p
            className="mb-10 mx-auto"
            style={{ maxWidth: '440px', color: '#a39f98', fontSize: '15px', lineHeight: 1.75 }}
          >
            Whether you&apos;re an AI startup, a YC-backed company, or a research team —
            I&apos;m ready to bring production ML to your next big thing.
          </p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <motion.a
              href="mailto:sristikiran203@gmail.com"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 rounded-xl font-semibold"
              style={{
                padding: '13px 26px',
                background: '#c9a84c',
                border: '1px solid #c9a84c',
                color: '#080808',
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(201,168,76,0.2)',
              }}
            >
              <Mail size={16} />
              <span>sristikiran203@gmail.com</span>
            </motion.a>

            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl"
              style={{
                padding: '13px 20px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.09)',
                color: copied ? '#c9a84c' : '#a39f98',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'inherit',
              }}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl"
                style={{
                  padding: '11px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#b5b1a8',
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'all 0.2s',
                }}
              >
                {link.icon}
                <span className="hidden sm:block" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p
            style={{
              color: '#1e1d1c',
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '0.04em',
            }}
          >
            © 2025 Krishna Kiran Sristi · Built with Next.js · Deployed on Vercel
          </p>
        </motion.div>
      </div>
    </section>
  )
}
