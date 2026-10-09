// Queries over the posts and reviews collections, newest first.
import { getCollection, type CollectionEntry } from 'astro:content';
import { isoWeek } from './dates';

export type Post = CollectionEntry<'posts'>;
export type Review = CollectionEntry<'reviews'>;

// Belt and braces: a post marked `sample: true` never ships in a production build,
// even if one lands in src/content/ by mistake.
const visible = (e: { data: { sample: boolean } }) => import.meta.env.DEV || process.env.INCLUDE_SAMPLES === '1' || !e.data.sample;

const newestFirst = <T extends { data: { date: Date } }>(a: T, b: T) => b.data.date.getTime() - a.data.date.getTime();

export async function getPosts(): Promise<Post[]> {
  return (await getCollection('posts', visible)).sort(newestFirst);
}

export async function getReviews(): Promise<Review[]> {
  return (await getCollection('reviews', visible)).sort(newestFirst);
}

export function wordCount(markdown = ''): number {
  const prose = markdown
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  return (prose.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) ?? []).length;
}

export function readingTime(post: Post): number {
  return post.data.reading_time_min ?? Math.max(1, Math.round(wordCount(post.body) / 230));
}

export function tagCounts(posts: Post[]): [string, number][] {
  const counts = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

export interface Cycle {
  n: number;
  posts: Post[];
  review?: Review;
}

export function cycles(posts: Post[], reviews: Review[]): Cycle[] {
  const byN = new Map<number, Cycle>();
  const get = (n: number) => byN.get(n) ?? byN.set(n, { n, posts: [] }).get(n)!;
  for (const p of posts) get(p.data.cycle).posts.push(p);
  for (const r of reviews) if (r.data.type === 'cycle-review' && r.data.cycle !== undefined) get(r.data.cycle).review = r;
  for (const c of byN.values()) c.posts.sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
  return [...byN.values()].sort((a, b) => b.n - a.n);
}

export function byWeek(posts: Post[]): { key: string; monday: string; sunday: string; posts: Post[] }[] {
  const weeks = new Map<string, { key: string; monday: string; sunday: string; posts: Post[] }>();
  for (const p of posts) {
    const w = isoWeek(p.data.date);
    if (!weeks.has(w.key)) weeks.set(w.key, { ...w, posts: [] });
    weeks.get(w.key)!.posts.push(p);
  }
  return [...weeks.values()].sort((a, b) => b.key.localeCompare(a.key));
}

export const VERDICT_LABEL: Record<string, string> = {
  pass: 'Pass',
  'pass-with-notes': 'Pass with notes',
};
