import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { stats } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

const strong = 'font-semibold text-zinc-900 dark:text-white';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="Where mathematical rigor meets intelligent systems" />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card space-y-5 p-7 text-base leading-8 text-zinc-600 sm:p-9 sm:text-lg dark:text-zinc-400"
          >
            <p className="text-lg font-medium text-zinc-800 sm:text-xl dark:text-zinc-100">
              I'm an Applied Mathematics &amp; Modeling Engineer from ENSIT, graduated with Highest Honors, with strong
              expertise in <span className="text-accentText">machine learning</span> and{' '}
              <span className="text-accentText">deep learning</span>.
            </p>
            <p>
              My background in probability, statistics and optimization gives me a deep understanding of how models
              work, not just how to use them. I build ML and DL models end to end: data preparation and feature
              engineering, model selection and hyperparameter tuning, rigorous evaluation and deployment.
            </p>
            <p>
              My work spans <span className={strong}>classical machine learning</span> (XGBoost, Random Forest, SVM),{' '}
              <span className={strong}>deep learning</span> (LSTM, CNN, Graph Neural Networks) and{' '}
              <span className={strong}>LLM-based systems</span>, such as RAG assistants that cite their sources and
              LangGraph agents that plan multi-step tasks.
            </p>
            <p>
              I'm a <span className="font-semibold text-accentText">continuous learner</span>: I constantly explore new
              models, tools and research, and I've earned 10+ certifications from Microsoft, NVIDIA and IBM.
            </p>
          </motion.div>

          <motion.dl
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="glass-card flex flex-col-reverse justify-end gap-2 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">{item.label}</dt>
                <dd className="font-heading text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">{item.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
