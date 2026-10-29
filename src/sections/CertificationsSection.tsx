import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { certifications } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';
import type { CertificationItem } from '../types/portfolio';

function IssuerLogo({ cert }: { cert: CertificationItem }) {
  const sources = Array.isArray(cert.issuerLogo) ? cert.issuerLogo : [cert.issuerLogo];
  const [index, setIndex] = useState(0);
  const initials = cert.issuer
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5 dark:border-white/10">
      {index < sources.length ? (
        <img
          key={sources[index]}
          src={sources[index]}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setIndex((i) => i + 1)}
          className="h-full w-full object-contain"
        />
      ) : (
        <span className="text-xs font-bold text-accent">{initials}</span>
      )}
    </div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          copy="A selection of my 10+ certifications in AI, machine learning, deep learning and data science."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.li key={cert.title} variants={fadeUp}>
              <a
                href={cert.accessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card group flex h-full items-center gap-4 rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 ${
                  cert.featured ? 'ring-1 ring-accent/30' : ''
                }`}
              >
                <IssuerLogo cert={cert} />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-snug text-zinc-900 dark:text-white">{cert.title}</p>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-accentText" aria-hidden="true" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
