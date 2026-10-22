// Builds the endpoint's route allowlist from the built sitemap, so it always
// matches the pages that actually shipped. Run after `bun run docs:build`:
//
//   bun run analytics:routes           # rewrite allowed-routes.json
//   bun run analytics:routes --check   # exit 1 if the committed file is stale
//
// The sitemap already excludes generation redirect stubs and the 404 page.
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isGuideRoute } from '../../docs/.vitepress/theme/guide-metrics';

const here = path.dirname(fileURLToPath(import.meta.url));
const SITEMAP = path.resolve(here, '../../docs/.vitepress/dist/sitemap.xml');
const OUTPUT = path.join(here, 'allowed-routes.json');
// collect.php refuses lists longer than this or files larger than 128 KiB.
const MAX_ROUTES = 2000;
const MAX_FILE_BYTES = 131_072;

const XML_ENTITIES: Record<string, string> = {
    '&amp;': '&',
    '&apos;': "'",
    '&gt;': '>',
    '&lt;': '<',
    '&quot;': '"',
};

export function routesFromSitemap(xml: string): string[] {
    const routes = new Set<string>();
    for (const [, raw] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
        const loc = raw.trim().replace(/&(?:amp|apos|gt|lt|quot);/g, (e) => XML_ENTITIES[e]);
        const url = new URL(loc);
        if (url.origin !== 'https://airpodsreplicas.com' || url.search || url.hash) {
            throw new Error(`Unexpected sitemap URL: ${loc}`);
        }
        if (!isGuideRoute(url.pathname)) {
            throw new Error(`Sitemap path is not a valid guide route: ${url.pathname}`);
        }
        routes.add(url.pathname);
    }
    if (routes.size === 0) {
        throw new Error('No <loc> entries found — build the guide first.');
    }
    if (routes.size > MAX_ROUTES) {
        throw new Error(`${routes.size} routes exceeds the endpoint limit of ${MAX_ROUTES}.`);
    }
    return [...routes].sort();
}

export function serializeRoutes(routes: string[]): string {
    const json = `${JSON.stringify(routes, null, 2)}\n`;
    if (Buffer.byteLength(json) > MAX_FILE_BYTES) {
        throw new Error(`allowed-routes.json would exceed ${MAX_FILE_BYTES} bytes.`);
    }
    return json;
}

if (import.meta.main) {
    let xml: string;
    try {
        xml = readFileSync(SITEMAP, 'utf8');
    } catch {
        console.error(
            `Missing ${path.relative(process.cwd(), SITEMAP)} — run bun run docs:build first.`
        );
        process.exit(1);
    }
    const json = serializeRoutes(routesFromSitemap(xml));
    const count = JSON.parse(json).length;
    if (process.argv.includes('--check')) {
        let current = '';
        try {
            current = readFileSync(OUTPUT, 'utf8');
        } catch {
            // Treated as stale below.
        }
        if (current !== json) {
            console.error('allowed-routes.json is out of date — run bun run analytics:routes.');
            process.exit(1);
        }
        console.log(`allowed-routes.json matches the build (${count} routes).`);
    } else {
        writeFileSync(OUTPUT, json);
        console.log(`Wrote ${count} routes to ${path.relative(process.cwd(), OUTPUT)}.`);
    }
}
