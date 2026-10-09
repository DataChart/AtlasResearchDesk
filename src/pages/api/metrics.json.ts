// Portfolio data contract (README §17): the engine's public metrics, as synced by publish.yml.
import { metrics } from '../../lib/metrics';

export function GET() {
  return new Response(JSON.stringify(metrics, null, 2) + '\n', {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
