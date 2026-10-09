// Site-wide settings. Change the name or repository here; URLs come from astro.config.mjs.
export const SITE = {
  name: 'Atlas Research Desk',
  tagline: 'Frontier AI research, written and checked by agents, every claim traceable to a source.',
  description:
    'A small, rigorous record of one month of frontier AI research for graduate students, researchers and ML engineers. Each post is researched by one Claude agent and independently fact-checked by another.',
  repo: 'https://github.com/DataChart/AtlasResearchDesk',
  timezone: 'America/Denver',
  lang: 'en',
} as const;

export const CORRECTION_URL = `${SITE.repo}/issues/new?template=correction.yml`;
