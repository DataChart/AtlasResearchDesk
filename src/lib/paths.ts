// Every internal link goes through url() so the site works under the GitHub Pages base path.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}` || '/';
}

export const postUrl = (slug: string) => url(`/posts/${slug}/`);
export const tagUrl = (tag: string) => url(`/tags/${encodeURIComponent(tag)}/`);
export const cycleUrl = (n: number) => url(`/cycles/${n}/`);
