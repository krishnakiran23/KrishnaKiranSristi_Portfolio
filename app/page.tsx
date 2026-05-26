'use client'

import ScrollProgress from '@/components/ui/ScrollProgress'
import CustomCursor from '@/components/ui/CustomCursor'
import FloatingDock from '@/components/ui/FloatingDock'
import LoadingScreen from '@/components/ui/LoadingScreen'
import HeroSection from '@/components/hero/HeroSection'
import BentoAbout from '@/components/about/BentoAbout'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline'
import SkillsSection from '@/components/skills/SkillsSection'
import HeroProject from '@/components/projects/HeroProject'
import AdditionalProjects from '@/components/projects/AdditionalProjects'
import EducationSection from '@/components/education/EducationSection'
import CertificationsSection from '@/components/certifications/CertificationsSection'
import ContactSection from '@/components/contact/ContactSection'

export default function Home() {
  return (
    <>
      {/* Global UI overlays */}
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <FloatingDock />

      {/* Main content */}
      <main>
        <HeroSection />
        <BentoAbout />
        <ExperienceTimeline />
        <SkillsSection />
        <HeroProject />
        <AdditionalProjects />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  )
}
