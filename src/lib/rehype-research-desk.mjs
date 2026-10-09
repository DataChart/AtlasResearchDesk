// Research Desk post rendering (README §8 and §11.2), run after GFM, alerts and KaTeX.
//
// - Drops the Markdown QA report card when frontmatter carries `qa`: the page renders
//   the same data as a component (verdict badge, grade-mix bar, flag counts).
// - Rebuilds the body's "Sources" section as a graded list from frontmatter `sources`,
//   with an anchor per source, so every [S#] in the text links to it.
// - Moves the GFM footnotes (the QA claim notes) under the "QA notes" heading and tags
//   each note and its reference with its claim status.
// - Rewrites the engine's relative links between posts and reviews (for example the
//   manager's `../published/<slug>.md`) to site URLs.
// - Wraps tables so wide ones scroll instead of breaking the measure.
//
// The Markdown files stay plain GFM, so they still read cleanly on GitHub (§11.3).
import { toString } from 'hast-util-to-string';

const CITE_RE = /\[(S\d+(?:\s*[,;–—-]\s*S?\d+)*)\]/g;
const STATUSES = {
  verified: 'verified',
  'supported with caveat': 'caveat',
  unverified: 'unverified',
  contradicted: 'contradicted',
  outdated: 'outdated',
};
const NO_LINK_INSIDE = new Set(['a', 'code', 'pre', 'script', 'style', 'svg', 'math']);

function h(tagName, properties = {}, children = []) {
  return {
    type: 'element',
    tagName,
    properties,
    children: children.map((c) => (typeof c === 'string' ? { type: 'text', value: c } : c)),
  };
}

const classes = (node) => [].concat(node.properties?.className ?? []);
const isElement = (node, tag) => node?.type === 'element' && (!tag || node.tagName === tag);
const headingText = (node) => toString(node).trim().toLowerCase();
const isSectionHeading = (node) => isElement(node) && (node.tagName === 'h1' || node.tagName === 'h2');

function day(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value == null ? '' : String(value).slice(0, 10);
}

/** Index range [start, end) of the root-level section that follows an h2 matching `test`. */
function sectionRange(tree, test) {
  const start = tree.children.findIndex((n) => isElement(n, 'h2') && test(headingText(n)));
  if (start < 0) return null;
  let end = tree.children.findIndex((n, i) => i > start && isSectionHeading(n));
  if (end < 0) end = tree.children.length;
  return [start, end];
}

function removeReportCard(tree) {
  const i = tree.children.findIndex(
    (n) => isElement(n) && classes(n).includes('markdown-alert-note') && toString(n).includes('QA report card'),
  );
  if (i >= 0) tree.children.splice(i, 1);
}

function sourceItem(src) {
  const id = String(src.id);
  const grade = String(src.grade ?? '?');
  const meta = [
    h('span', { className: ['grade', `grade-${grade}`], title: `Source grade ${grade}` }, [grade]),
    ` ${src.type ?? 'source'}`,
  ];
  if (src.published) meta.push(' · published ', h('time', { dateTime: day(src.published) }, [day(src.published)]));
  if (src.accessed) meta.push(' · accessed ', h('time', { dateTime: day(src.accessed) }, [day(src.accessed)]));
  return h('li', { id: `source-${id}`, className: ['source'] }, [
    h('span', { className: ['source-id'] }, [id]),
    h('div', { className: ['source-body'] }, [
      h('a', { href: String(src.url), rel: ['noopener'] }, [String(src.title ?? src.url)]),
      h('div', { className: ['source-meta'] }, meta),
    ]),
  ]);
}

function replaceSources(tree, sources) {
  const range = sectionRange(tree, (t) => t.startsWith('sources'));
  if (!range) return;
  const [start, end] = range;
  const list = h('ol', { className: ['source-list'] }, sources.map(sourceItem));
  tree.children.splice(start + 1, end - start - 1, list);
}

function citationNodes(value, ids) {
  const out = [];
  let last = 0;
  for (const m of value.matchAll(CITE_RE)) {
    const tokens = m[1].split(/(S?\d+)/);
    if (!tokens.some((t) => /^S\d+$/.test(t) && ids.has(t))) continue;
    if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
    const cite = h('span', { className: ['cite'] }, ['[']);
    for (const t of tokens) {
      if (!t) continue;
      const sid = /^S?\d+$/.test(t) ? `S${t.replace(/^S/, '')}` : null;
      if (sid && ids.has(sid)) {
        cite.children.push(h('a', { href: `#source-${sid}`, className: ['cite-link'] }, [t]));
      } else {
        cite.children.push({ type: 'text', value: t });
      }
    }
    cite.children.push({ type: 'text', value: ']' });
    out.push(cite);
    last = m.index + m[0].length;
  }
  if (!out.length) return null;
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

function linkCitations(node, ids) {
  if (!node.children) return;
  if (isElement(node) && (NO_LINK_INSIDE.has(node.tagName) || classes(node).includes('katex'))) return;
  const next = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      const replaced = citationNodes(child.value, ids);
      if (replaced) {
        next.push(...replaced);
        continue;
      }
    } else {
      linkCitations(child, ids);
    }
    next.push(child);
  }
  node.children = next;
}

function tagClaimStatuses(section) {
  const statusById = new Map();
  const walk = (node) => {
    if (isElement(node, 'li') && String(node.properties?.id ?? '').includes('fn-')) {
      const p = node.children.find((c) => isElement(c, 'p'));
      const first = p?.children.find((c) => c.type !== 'text' || c.value.trim());
      const status = isElement(first, 'strong') ? STATUSES[toString(first).trim().toLowerCase()] : undefined;
      if (status) {
        first.properties = { ...first.properties, className: ['claim-status', `claim-${status}`] };
        node.properties.className = [...classes(node), `claim-${status}`];
        statusById.set(String(node.properties.id), status);
      }
    }
    node.children?.forEach(walk);
  };
  walk(section);
  return statusById;
}

function markFootnoteRefs(node, statusById) {
  if (isElement(node, 'a') && node.properties?.dataFootnoteRef !== undefined) {
    const status = statusById.get(String(node.properties.href ?? '').replace(/^#/, ''));
    if (status) node.properties.className = [...classes(node), 'claim-ref', `claim-${status}`];
  }
  node.children?.forEach((c) => markFootnoteRefs(c, statusById));
}

function placeFootnotes(tree) {
  const i = tree.children.findIndex((n) => isElement(n, 'section') && n.properties?.dataFootnotes !== undefined);
  if (i < 0) return;
  const section = tree.children[i];
  section.properties.className = [...classes(section), 'qa-notes'];
  markFootnoteRefs(tree, tagClaimStatuses(section));
  const range = sectionRange(tree, (t) => t.startsWith('qa notes'));
  if (!range) return;
  tree.children.splice(i, 1);
  const end = sectionRange(tree, (t) => t.startsWith('qa notes'))[1];
  tree.children.splice(end, 0, section);
}

const POST_FILE_RE = /^(\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*)(?:\.md)?\/?$/;
const CYCLE_FILE_RE = /^cycle-(\d{2,})(?:\.md)?\/?$/;

/** Map an engine-relative link such as ../published/<slug>.md to its page on this site. */
function siteHref(href, base) {
  if (!href || /^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(href)) return null;
  const [path, hash = ''] = href.split('#');
  const last = path.replace(/\/$/, '').split('/').pop();
  const anchor = hash ? `#${hash}` : '';
  let m = POST_FILE_RE.exec(last);
  if (m && (path.endsWith('.md') || /(?:^|\/)(?:published|posts)\//.test(path))) return `${base}/posts/${m[1]}/${anchor}`;
  m = CYCLE_FILE_RE.exec(last);
  if (m && (path.endsWith('.md') || /(?:^|\/)(?:reviews|cycles)\//.test(path))) return `${base}/cycles/${Number(m[1])}/${anchor}`;
  return null;
}

function rewriteLinks(node, base) {
  if (isElement(node, 'a')) {
    const href = siteHref(String(node.properties?.href ?? ''), base);
    if (href) node.properties.href = href;
  }
  node.children?.forEach((c) => rewriteLinks(c, base));
}

function wrapTables(tree) {
  tree.children = tree.children.map((n) =>
    isElement(n, 'table') ? h('div', { className: ['table-wrap'] }, [n]) : n,
  );
}

export default function rehypeResearchDesk({ base = '' } = {}) {
  const root = base.replace(/\/$/, '');
  return (tree, file) => {
    const fm = file.data?.astro?.frontmatter ?? {};
    const sources = Array.isArray(fm.sources) ? fm.sources.filter((s) => s && s.id) : [];
    if (fm.qa) removeReportCard(tree);
    if (sources.length) {
      replaceSources(tree, sources);
      linkCitations(tree, new Set(sources.map((s) => String(s.id))));
    }
    placeFootnotes(tree);
    rewriteLinks(tree, root);
    wrapTables(tree);
  };
}
