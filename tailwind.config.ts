import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colour — buttons, borders, fills
        accent: '#941B50',
        accentHover: '#B42363',
        // Text-safe accent: dark burgundy on light, lighter rose on dark (WCAG AA in both)
        accentText: 'rgb(var(--accent-text) / <alpha-value>)',
        darkBg: '#09090B',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 27, 80, 0.15), 0 18px 50px rgba(148, 27, 80, 0.2)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(161,161,170,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.06) 1px, transparent 1px)',
        radial:
          'radial-gradient(circle at top, rgba(148, 27, 80, 0.30), transparent 40%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.14), transparent 28%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
