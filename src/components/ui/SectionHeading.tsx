import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-10 sm:mb-12"
    >
      <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accentText">
        {eyebrow}
      </span>
      {title ? (
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{title}</h2>
      ) : null}
      {copy ? <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">{copy}</p> : null}
    </motion.div>
  );
}
