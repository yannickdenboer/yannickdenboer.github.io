// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual GitHub Pages URL when you create the repo.
  // Format: https://<username>.github.io/<repo-name>/
  // If using a custom domain or <username>.github.io repo, just use that URL.
  site: 'https://yannickdenboer.github.io',
  integrations: [icon()],

  // Generate plain HTML files (no server needed)
  output: 'static',
});
