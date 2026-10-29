import { profile } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-200 py-8 dark:border-white/10">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
