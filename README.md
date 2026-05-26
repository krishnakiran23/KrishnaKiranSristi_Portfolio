# Krishna Kiran Sristi — Portfolio

A cinematic, futuristic portfolio website built with Next.js 14, TypeScript, Framer Motion, and GSAP.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Fonts**: Inter, Space Grotesk, JetBrains Mono (Google Fonts)
- **Deployment**: Vercel

## 📦 Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```


## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── hero/               # Hero section (particles, aurora, typewriter)
│   ├── about/              # Bento grid about section
│   ├── experience/         # Animated timeline
│   ├── skills/             # Skill categories + proficiency bars
│   ├── projects/           # Hero project (Real Estate ML) + additional
│   ├── education/          # Education cards
│   ├── certifications/     # Certs & achievements
│   ├── contact/            # Contact + social links
│   └── ui/                 # Shared UI (cursor, dock, scroll progress, etc.)
├── lib/
│   └── utils.ts
├── public/
│   └── resume.pdf          # Add your resume here
└── vercel.json
```

## 🎨 Design Features

- Dark luxury theme (`#050508` background)
- Glassmorphism cards
- Aurora gradient backgrounds  
- Floating particle field (canvas)
- Mouse-follow spotlight glow
- Animated typewriter hero
- macOS-style floating dock navigation
- Scroll-triggered animations (Framer Motion)
- 3D card hover tilts
- Animated ML pipeline visualization
- Live counting metrics
- Custom animated cursor
- Cinematic loading screen
- Scroll progress indicator

## 📄 Adding Your Resume

Place your resume PDF at: `public/resume.pdf`

## 🔗 Links

- LinkedIn: https://www.linkedin.com/in/krishna-kiran-sristi-7085681bb/
- GitHub: https://github.com/krishnakiran23
- LeetCode: https://leetcode.com/krishnakiran75
- Email: sristikiran203@gmail.com
