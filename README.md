# Portfolio — Eya Najlaoui

Built with React, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Edit the content

All the text (experience, projects, skills, education, certifications, links) is in
**`src/data/portfolio.ts`**. The stats at the top of the page are computed from that file
automatically, so they always match what the page shows.

## Add your CV

Put your PDF in `public/` and name it exactly **`Eya_Najlaoui_CV.pdf`**.
To hide the "Download CV" buttons, set `cvUrl: ''` in `src/data/portfolio.ts`.

## Link preview with your name (LinkedIn, WhatsApp…)

The tab title and the link preview already show **EYA NAJLAOUI | Data Scientist & AI Engineer**.
For the preview **image** to appear, set your public URL before building:

- **Vercel / Netlify**: add the environment variable `VITE_SITE_URL=https://your-url` in the project settings, then redeploy.
- **Locally**: copy `.env.example` to `.env` and fill in `VITE_SITE_URL`.

After deploying, refresh LinkedIn's cache with the
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Security

`.env`, `opencode.json`, `.opencode/` and `.claude/` are in `.gitignore`. Never commit API keys.
