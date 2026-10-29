import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { profile } from '../../data/portfolio';
import { useActiveSection } from '../../lib/useActiveSection';
import type { NavItem, Theme } from '../../types/portfolio';
import { ThemeToggle } from './ThemeToggle';

type NavbarProps = {
  items: NavItem[];
  theme: Theme;
  onThemeToggle: () => void;
};

export function Navbar({ items, theme, onThemeToggle }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => ['home', ...items.map((item) => item.href.slice(1))], [items]);
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
          <a href="#home" className="font-heading text-base font-bold tracking-[0.12em] text-zinc-900 dark:text-white">
            {profile.name.toUpperCase()}
          </a>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {items.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-accentText ${
                    isActive ? 'text-accentText' : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accentText transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass-card mt-2 flex flex-col p-2 lg:hidden"
            >
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-accent/10 ${
                    active === item.href.slice(1) ? 'text-accentText' : 'text-zinc-700 dark:text-zinc-200'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
