import { motion } from 'framer-motion';
import { BarChart3, Bot, BrainCircuit, Share2, Sigma, Wrench } from 'lucide-react';
import type { ReactNode } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { skillCategories } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';
import type { SkillIconKey } from '../types/portfolio';

const icons: Record<SkillIconKey, ReactNode> = {
  ml: <BrainCircuit className="h-5 w-5" />,
  llm: <Bot className="h-5 w-5" />,
  graph: <Share2 className="h-5 w-5" />,
  math: <Sigma className="h-5 w-5" />,
  data: <BarChart3 className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.article
              key={category.title}
              variants={fadeUp}
              className="glass-card h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-accent/20 bg-accent/10 p-2.5 text-accentText" aria-hidden="true">
                  {icons[category.icon]}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{category.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
