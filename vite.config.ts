import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Replaces __SITE_URL__ in index.html with your public URL so that
 * LinkedIn / WhatsApp link previews can find the og-image.
 * Set it in a `.env` file:  VITE_SITE_URL=https://your-domain.com
 */
function siteUrlPlugin(siteUrl: string): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml(html) {
      return html.replace(/__SITE_URL__/g, siteUrl.replace(/\/$/, ''));
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = env.VITE_SITE_URL || process.env.VITE_SITE_URL || '';

  return {
    plugins: [react(), siteUrlPlugin(siteUrl)],
  };
});
