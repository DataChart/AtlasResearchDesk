// Portfolio data contract (README §17): one entry per published research post.
import type { APIContext } from 'astro';
import { getPosts } from '../../lib/content';
import { postUrl } from '../../lib/paths';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const body = posts.map((p) => ({
    slug: p.data.slug,
    title: p.data.title,
    dek: p.data.dek,
    date: p.data.date.toISOString(),
    tags: p.data.tags,
    cycle: p.data.cycle,
    qa_verdict: p.data.qa.verdict,
    url: new URL(postUrl(p.id), context.site).href,
  }));
  return new Response(JSON.stringify(body, null, 2) + '\n', {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
