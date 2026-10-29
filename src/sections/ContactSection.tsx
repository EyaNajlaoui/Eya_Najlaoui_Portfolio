import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { profile } from '../data/portfolio';
import { fadeUp } from '../lib/animations';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', value: 'in/eya-najlaoui', href: profile.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', value: 'EyaNajlaoui', href: profile.github, icon: Github, external: true },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Contact" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="glass-card relative mx-auto max-w-4xl overflow-hidden p-8 text-center sm:p-12"
        >
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">Let's work together</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
            I'm open to Data Science, Machine Learning and AI Engineer roles. Feel free to reach out.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail className="h-4 w-4" />
              Send me an email
            </a>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} download className="btn-secondary">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            ) : null}
          </div>

          <ul className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {links.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-3 rounded-2xl border border-zinc-200 p-3.5 transition hover:border-accent/40 dark:border-white/10"
                >
                  <span className="rounded-xl bg-accent/10 p-2 text-accentText">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">{label}</span>
                    <span className="block break-all text-sm font-medium text-zinc-800 group-hover:text-accentText dark:text-zinc-100">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
