// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';


// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});