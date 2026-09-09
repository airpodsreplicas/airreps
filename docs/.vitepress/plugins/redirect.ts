import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import type { Plugin } from 'vite';
import { PRODUCT_FAMILIES, productDestination, productRedirectScript } from '../product-routes';

export function writeProductRedirects(outDir: string): void {
    for (const locale of ['', '/da', '/de', '/es', '/fr', '/pl', '/pt', '/ru', '/tr']) {
        for (const section of ['version-info', 'links']) {
            for (const model of Object.keys(PRODUCT_FAMILIES)) {
                const from = `${locale}/${section}/${model}`;
                const destination = productDestination(from)!;
                const file = join(outDir, from.slice(1), 'index.html');
                mkdirSync(dirname(file), { recursive: true });
                writeFileSync(
                    file,
                    `<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex, follow"><link rel="canonical" href="https://airpodsreplicas.com${destination.split('#')[0]}"><script>${productRedirectScript(from)}</script><meta http-equiv="refresh" content="0; url=${destination}"></head><body><a href="${destination}">AirPods</a></body></html>`
                );
            }
        }
    }
}

// Redirect mappings for old dictionary pages
const redirects: Record<string, string> = {
    '/dictionary/agent': '/introduction/dictionary',
    '/dictionary/fake-airpods': '/introduction/dictionary',
    '/dictionary/guinea-pig': '/introduction/dictionary',
    '/dictionary/knockoffs': '/introduction/dictionary',
    '/dictionary/legit-check': '/introduction/dictionary',
    '/dictionary/markings': '/introduction/dictionary',
    '/dictionary/quality-control': '/introduction/dictionary',
    '/dictionary/reps-clones': '/introduction/dictionary',
    '/dictionary/w2c': '/introduction/dictionary',
};

const redirectHTML = (to: string) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0; url=${to}">
  <link rel="canonical" href="${to}">
  <script>window.location.replace('${to}')</script>
</head>
<body>
  <p>Redirecting to <a href="${to}">${to}</a>...</p>
</body>
</html>`;

export function redirectPlugin(): Plugin {
    return {
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const url = req.url?.split('?')[0] || '';
                const redirect = redirects[url];

                if (redirect) {
                    // 302 in dev — browsers cache 301s, which makes edited
                    // mappings stick until the cache is cleared.
                    res.writeHead(302, { Location: redirect });
                    res.end();
                    return;
                }

                next();
            });
        },
        name: 'vitepress-redirect',
        writeBundle(options) {
            // Write redirect files after bundle is written. VitePress runs this
            // plugin for both the client and SSR builds — skip the throwaway SSR
            // bundle (written to .vitepress/.temp) so stubs only land in dist.
            const outDir = options.dir || 'dist';
            if (outDir.includes('.temp')) {
                return;
            }

            Object.entries(redirects).forEach(([from, to]) => {
                // Remove leading slash and create directory structure
                const cleanPath = from.replace(/^\//, '').replace(/\/$/, '');
                const indexPath = join(outDir, cleanPath, 'index.html');
                const dir = dirname(indexPath);

                // Create directory if it doesn't exist
                mkdirSync(dir, { recursive: true });

                // Write redirect HTML file
                writeFileSync(indexPath, redirectHTML(to), 'utf-8');
            });
        },
    };
}
