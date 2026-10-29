import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ui/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/portfolio';
import { fadeUp, staggerContainer } from '../lib/animations';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          copy="A selection of my deployed projects. Each one links to a live demo or its source code."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
