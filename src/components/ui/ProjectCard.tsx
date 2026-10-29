import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Info, PlayCircle, RotateCcw, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import type { ProjectItem } from '../../types/portfolio';

function ProjectLinks({ project, hidden }: { project: ProjectItem; hidden: boolean }) {
  const isVideo = project.liveUrl?.includes('drive.google.com');
  const tab = hidden ? -1 : undefined;

  return (
    <>
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" tabIndex={tab} className="btn-small">
          {isVideo ? <PlayCircle className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
          {project.liveLabel ?? 'Live demo'}
        </a>
      ) : null}
      {project.githubUrl ? (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" tabIndex={tab} className="btn-small">
          <Github className="h-4 w-4" />
          Code
        </a>
      ) : null}
    </>
  );
}

/**
 * Flip card: summary on the front, details on the back.
 * Both faces sit in the same grid cell, so the card is always as tall as its
 * longest face, and all cards in a row are stretched to the same height.
 */
export function ProjectCard({ project }: { project: ProjectItem }) {
  const [flipped, setFlipped] = useState(false);
  const face =
    'glass-card flex flex-col p-6 sm:p-7 [backface-visibility:hidden] [grid-area:1/1] transition-colors duration-300 group-hover:border-accent/40';

  return (
    <div className="group h-full [perspective:1600px]">
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid h-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <article
          aria-hidden={flipped}
          className={`${face} ${project.featured ? 'ring-1 ring-accent/30' : ''} ${flipped ? 'pointer-events-none' : ''}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accentText">
            {project.featured ? 'Featured project' : 'Project'}
          </span>

          <h3 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">{project.subtitle}</p>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{project.summary}</p>

          <div className="mt-4 flex gap-3 rounded-2xl border border-accent/20 bg-accent/[0.06] p-3.5">
            <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accentText" aria-hidden="true" />
            <p className="text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100">{project.keyResult}</p>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <div className="flex flex-wrap gap-2">
            <ProjectLinks project={project} hidden={flipped} />
            </div>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              tabIndex={flipped ? -1 : undefined}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accentText transition hover:bg-accent/20"
            >
              <Info className="h-4 w-4" />
              Details
            </button>
          </div>
        </article>

        {/* Back */}
        <article
          aria-hidden={!flipped}
          className={`${face} [transform:rotateY(180deg)] ${flipped ? '' : 'pointer-events-none'}`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accentText">Details</span>
          </div>

          <dl className="mt-5 space-y-4">
            {project.details.map((d) => (
              <div key={d.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900 dark:text-white">{d.label}</dt>
                <dd className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{d.text}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <div className="flex flex-wrap gap-2">
            <ProjectLinks project={project} hidden={!flipped} />
            </div>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              tabIndex={flipped ? undefined : -1}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-2.5 text-sm font-semibold text-accentText transition hover:bg-accent/20"
            >
              <RotateCcw className="h-4 w-4" />
              Back
            </button>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
