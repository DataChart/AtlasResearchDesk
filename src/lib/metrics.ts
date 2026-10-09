// The engine's public metrics (state/metrics.public.json), synced by publish.yml.
// Every field is optional: before the first publish the file is a near-empty stub.
import raw from '../data/metrics.json';

type Counts = Record<string, number>;
export interface PublicMetrics {
  version?: number;
  generated_at?: string | null;
  pipeline?: { runs_logged?: number; runs_completed?: number; runs_skipped?: number; runs_failed?: number; clean_run_rate?: number | null };
  output?: { research_posts?: number; cycle_reviews?: number; words_published?: number; posts_per_tag?: Counts };
  qa?: {
    verdicts?: Counts;
    revision_rate?: number | null;
    rejection_rate?: number | null;
    pass_rate?: number | null;
    claims_checked?: number;
    claims_by_status?: Counts;
    flags_by_type?: Counts;
    flags_per_1000_words?: number | null;
  };
  sources?: {
    sources_checked?: number;
    unique_domains?: number;
    grade_mix?: Counts;
    ab_share?: number | null;
    sources_per_post_mean?: number | null;
    unresolvable_rate_at_qa?: number | null;
    link_rot_end_of_month?: number | null;
  };
  trends?: Record<string, unknown>;
}

export const metrics = raw as PublicMetrics;
export const pct = (v: number | null | undefined) => (v == null ? '—' : `${Math.round(v * 100)}%`);
