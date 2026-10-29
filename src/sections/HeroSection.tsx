import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';
import { fadeUp, staggerContainer } from '../lib/animations';

export function HeroSection() {
  return (
    <section id="home" className="relative pb-16 pt-12 sm:pb-24 sm:pt-20">
      <div className="section-shell">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Open to Data Science &amp; AI opportunities
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white"
            >
              Eya Najlaoui
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-xl font-semibold text-zinc-700 sm:text-2xl dark:text-zinc-200">
              {profile.role}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-1 text-lg font-medium text-accentText sm:text-xl">
              {profile.tagline}
            </motion.p>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg dark:text-zinc-400">
              I combine applied mathematics, machine learning and deep learning to build AI systems that are accurate,
              measurable and ready for real users, from forecasting models to RAG assistants and agentic platforms.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View my projects
                <ArrowRight className="h-4 w-4" />
              </a>
              {profile.cvUrl ? (
                <a href={profile.cvUrl} download className="btn-secondary">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              ) : null}
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="btn-secondary h-11 w-11 !p-0"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="btn-secondary h-11 w-11 !p-0"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[16rem] sm:max-w-[20rem] md:mx-0 md:max-w-[22rem] md:justify-self-end"
          >
            <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-accent/20 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={profile.photo}
                alt="Portrait of Eya Najlaoui"
                width={720}
                height={960}
                fetchPriority="high"
                className="aspect-[3/4] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
