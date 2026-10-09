// Content collections: the PUBLIC fields of the engine's content model (README §9).
// `npm run build` fails on any schema error, which makes the schema a second check
// behind the engine's export leak guard (§11.4).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Sample posts live outside src/content/ so publish.yml's `rsync --delete` into
// src/content/posts and src/content/reviews never touches them. They load only in
// `astro dev` or with INCLUDE_SAMPLES=1, never in a production build.
const includeSamples = process.env.INCLUDE_SAMPLES === '1' || process.env.NODE_ENV === 'development';

// Keys the engine must strip before export (README §9). Their presence fails the build.
const PRIVATE_KEYS = ['run_id', 'attempts', 'internal_notes', 'cost_notes', 'memo_ref'];

function noPrivateKeys(value: unknown, ctx: z.RefinementCtx, path: (string | number)[] = []) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => noPrivateKeys(v, ctx, [...path, i]));
  } else if (value && typeof value === 'object' && !(value instanceof Date)) {
    for (const [key, v] of Object.entries(value)) {
      if (PRIVATE_KEYS.includes(key) || key.startsWith('_')) {
        ctx.addIssue({ code: 'custom', path: [...path, key], message: `private key "${key}" must not be published` });
      }
      noPrivateKeys(v, ctx, [...path, key]);
    }
  }
}

const isoDay = z
  .union([z.date(), z.string()])
  .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v.slice(0, 10)))
  .pipe(z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'expected an ISO date (YYYY-MM-DD)'));

const count = z.number().int().nonnegative();

const source = z.object({
  id: z.string().regex(/^S\d+$/),
  title: z.string().min(1),
  url: z.url(),
  type: z.enum(['peer-reviewed', 'preprint', 'technical-report', 'lab-post', 'code', 'dataset', 'news', 'blog', 'social']),
  grade: z.enum(['A', 'B', 'C', 'D']),
  published: isoDay,
  accessed: isoDay,
});

const correction = z.object({
  date: z.coerce.date(),
  reason: z.string().min(1),
});

const qa = z.object({
  verdict: z.enum(['pass', 'pass-with-notes']),
  checked_at: z.coerce.date(),
  sources_by_grade: z.object({ A: count, B: count, C: count, D: count }),
  claims: z.object({ verified: count, caveat: count, unverified: count, contradicted: count, outdated: count }),
  flags: z.object({ note: count, important: count, warning: count, caution: count, tip: count }),
});

const posts = defineCollection({
  loader: glob({
    base: './src',
    pattern: includeSamples ? ['content/posts/**/*.md', 'samples/posts/**/*.md'] : 'content/posts/**/*.md',
    generateId: ({ data, entry }) => String(data.slug ?? entry.replace(/\.md$/, '').split('/').pop()),
  }),
  schema: z
    .looseObject({
      title: z.string().min(1),
      slug: z.string().regex(/^\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/),
      dek: z.string().min(1),
      date: z.coerce.date(),
      type: z.literal('research'),
      status: z.literal('published'),
      cycle: z.number().int().nonnegative(),
      tags: z.array(z.string()).default([]),
      reading_time_min: z.number().positive().optional(),
      anchor_source: z.string().regex(/^S\d+$/),
      authors: z.object({ research: z.string(), qa: z.string() }),
      qa,
      sources: z.array(source).min(1),
      revision_notes: z.array(z.unknown()).default([]),
      corrections: z.array(correction).default([]),
      sample: z.boolean().default(false),
    })
    .superRefine((post, ctx) => {
      noPrivateKeys(post, ctx);
      const ids = post.sources.map((s) => s.id);
      if (!ids.includes(post.anchor_source)) {
        ctx.addIssue({ code: 'custom', path: ['anchor_source'], message: `${post.anchor_source} is not a listed source` });
      }
      if (new Set(ids).size !== ids.length) {
        ctx.addIssue({ code: 'custom', path: ['sources'], message: 'duplicate source ids' });
      }
    }),
});

const reviews = defineCollection({
  loader: glob({
    base: './src',
    pattern: includeSamples ? ['content/reviews/**/*.md', 'samples/reviews/**/*.md'] : 'content/reviews/**/*.md',
    generateId: ({ data, entry }) => String(data.slug ?? entry.replace(/\.md$/, '').split('/').pop()),
  }),
  schema: z
    .looseObject({
      title: z.string().min(1),
      slug: z.string().regex(/^(cycle-\d{2,}|retrospective)$/),
      dek: z.string().optional(),
      date: z.coerce.date(),
      type: z.enum(['cycle-review', 'retrospective']),
      status: z.literal('published').optional(),
      cycle: z.number().int().nonnegative().optional(),
      posts: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      corrections: z.array(correction).default([]),
      sample: z.boolean().default(false),
    })
    .superRefine((review, ctx) => {
      noPrivateKeys(review, ctx);
      if (review.type === 'cycle-review' && review.cycle === undefined) {
        ctx.addIssue({ code: 'custom', path: ['cycle'], message: 'a cycle review needs a cycle number' });
      }
    }),
});

export const collections = { posts, reviews };
