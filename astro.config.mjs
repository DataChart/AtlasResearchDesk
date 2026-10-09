// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import { remarkAlert } from 'remark-github-blockquote-alert';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeResearchDesk from './src/lib/rehype-research-desk.mjs';

// deploy.yml passes the values from actions/configure-pages, so a custom domain
// or a renamed repository needs no code change. The defaults match GitHub Pages
// for DataChart/AtlasResearchDesk; an empty BASE_PATH (custom domain) serves from the root.
const site = process.env.SITE_URL || 'https://datachart.github.io';
const base = process.env.BASE_PATH ?? '/AtlasResearchDesk';

export default defineConfig({
  site,
  base: base || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: { type: 'shiki', excludeLangs: ['math'] },
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
    // GFM (tables, footnotes, autolinks) is on by default in unified().
    processor: unified({
      gfm: true,
      remarkPlugins: [remarkMath, remarkAlert],
      remarkRehype: { footnoteLabel: 'QA notes', footnoteBackLabel: 'Back to the annotated claim' },
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { className: ['heading-anchor'], ariaHidden: 'true', tabIndex: -1 },
            content: { type: 'element', tagName: 'span', properties: { className: ['heading-anchor-icon'] }, children: [] },
          },
        ],
        [rehypeResearchDesk, { base }],
      ],
    }),
  },
});
