import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/animations';
import { RichText } from '../../lib/RichText';
import type { TimelineItem } from '../../types/portfolio';
import { SectionHeading } from './SectionHeading';

type TimelineSectionProps = {
  id: string;
  eyebrow: string;
  title?: string;
  items: TimelineItem[];
  compact?: boolean;
};

export function TimelineSection({ id, eyebrow, title, items, compact = false }: TimelineSectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="relative pl-6 sm:pl-10">
          <div
            aria-hidden="true"
            className="absolute left-[5px] top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:left-[13px]"
          />

          <motion.ol variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-5">
            {items.map((item) => (
              <motion.li key={`${item.title}-${item.duration}`} variants={fadeUp} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-6 top-8 h-3 w-3 rounded-full border-2 border-white bg-accent sm:-left-[2.1rem] dark:border-darkBg"
                />

                <article className={`glass-card ${compact ? 'p-6' : 'p-6 sm:p-8'}`}>
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-white">{item.title}</h3>
                      <p className="mt-1 font-medium text-accentText">{item.subtitle}</p>
                      {item.location ? (
                        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.location}
                        </p>
                      ) : null}
                    </div>
                    <span className="inline-flex shrink-0 self-start rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm font-medium text-accentText">
                      {item.duration}
                    </span>
                  </header>

                  {item.summary ? (
                    <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{item.summary}</p>
                  ) : null}

                  {item.highlights?.length ? (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-3 leading-7 text-zinc-600 dark:text-zinc-400">
                          <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accentText" />
                          <span>
                            <RichText text={h} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.tags?.length ? (
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                      {item.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
