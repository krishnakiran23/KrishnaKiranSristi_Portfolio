/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050508',
          secondary: '#0a0a14',
          card: '#0d0d1a',
          glass: 'rgba(255,255,255,0.04)',
        },
        accent: {
          purple: '#7c3aed',
          'purple-light': '#a855f7',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          blue: '#3b82f6',
          pink: '#ec4899',
          green: '#10b981',
        },
        glass: {
          border: 'rgba(255,255,255,0.08)',
          bg: 'rgba(255,255,255,0.04)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'aurora-1': 'radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 60%)',
        'aurora-2': 'radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.15) 0%, transparent 60%)',
        'aurora-3': 'radial-gradient(ellipse at 60% 80%, rgba(236,72,153,0.1) 0%, transparent 60%)',
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'glow-purple': 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 70%)',
      },
      animation: {
        'aurora-shift': 'aurora-shift 8s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'beam': 'beam 2s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit 30s linear infinite reverse',
        'typing': 'typing 3.5s steps(30, end)',
      },
      keyframes: {
        'aurora-shift': {
          '0%': { transform: 'translateX(0) translateY(0) scale(1)' },
          '100%': { transform: 'translateX(40px) translateY(-20px) scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.2)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.4), 0 0 60px rgba(6,182,212,0.2)',
        'glow-pink': '0 0 20px rgba(236,72,153,0.4)',
        'glass': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.1)',
        'inner-glow': 'inset 0 0 30px rgba(124,58,237,0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      gridTemplateColumns: {
        'bento': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
}
