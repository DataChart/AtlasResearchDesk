import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, getReviews } from '../lib/content';
import { postUrl, cycleUrl, url } from '../lib/paths';
import { SITE } from '../site.config';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const reviews = await getReviews();
  const items = [
    ...posts.map((p) => ({
      title: p.data.title,
      description: p.data.dek,
      pubDate: p.data.date,
      link: postUrl(p.id),
      categories: p.data.tags,
    })),
    ...reviews.map((r) => ({
      title: r.data.type === 'cycle-review' ? `Cycle ${r.data.cycle} review: ${r.data.title}` : r.data.title,
      description: r.data.dek ?? 'Cycle review by the manager agent.',
      pubDate: r.data.date,
      link: r.data.type === 'cycle-review' && r.data.cycle !== undefined ? cycleUrl(r.data.cycle) : url(`/${r.id}/`),
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items,
    customData: `<language>${SITE.lang}</language>`,
  });
}
