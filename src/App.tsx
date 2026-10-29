import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { BackToTop } from './components/ui/BackToTop';
import { TimelineSection } from './components/ui/TimelineSection';
import { educationItems, experienceItems, navItems } from './data/portfolio';
import { AboutSection } from './sections/AboutSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import type { Theme } from './types/portfolio';

function getInitialTheme(): Theme {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable: ignore */
    }
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white dark:bg-darkBg dark:bg-grid dark:bg-[size:44px_44px]">
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 hidden h-[60rem] bg-radial dark:block" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar items={navItems} theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main id="main" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TimelineSection id="experience" eyebrow="Experience" title="Where I've applied AI in practice" items={experienceItems} />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection id="education" eyebrow="Education" title="Academic background" items={educationItems} compact />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
