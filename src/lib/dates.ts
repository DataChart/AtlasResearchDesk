// All displayed dates and times are in America/Denver (README §7.3).
import { SITE } from '../site.config';

const dayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: SITE.timezone, year: 'numeric', month: '2-digit', day: '2-digit' });
const longFmt = new Intl.DateTimeFormat('en-US', { timeZone: SITE.timezone, year: 'numeric', month: 'long', day: 'numeric' });
const timeFmt = new Intl.DateTimeFormat('en-US', { timeZone: SITE.timezone, hour: '2-digit', minute: '2-digit', hour12: false, timeZoneName: 'short' });

/** YYYY-MM-DD in Denver time. */
export const isoDay = (d: Date) => dayFmt.format(d);
/** "October 14, 2026" in Denver time. */
export const longDay = (d: Date) => longFmt.format(d);
/** "2026-10-14 15:07 MDT". */
export const dayTime = (d: Date) => `${isoDay(d)} ${timeFmt.format(d)}`;

/** ISO week of the Denver calendar day, e.g. { key: "2026-W42", monday: "2026-10-12" }. */
export function isoWeek(d: Date): { key: string; monday: string; sunday: string } {
  const [y, m, day] = isoDay(d).split('-').map(Number);
  const local = new Date(Date.UTC(y, m - 1, day));
  const dow = local.getUTCDay() || 7;
  const monday = new Date(local);
  monday.setUTCDate(local.getUTCDate() - dow + 1);
  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);
  const thursday = new Date(local);
  thursday.setUTCDate(local.getUTCDate() + 4 - dow);
  const yearStart = new Date(Date.UTC(thursday.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((thursday.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return {
    key: `${thursday.getUTCFullYear()}-W${String(week).padStart(2, '0')}`,
    monday: monday.toISOString().slice(0, 10),
    sunday: sunday.toISOString().slice(0, 10),
  };
}
