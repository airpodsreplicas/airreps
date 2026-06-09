// AirReps service worker.
// HTML: network-first (always try fresh, fall back to cache when offline).
// Hashed /assets/ files: cache-first (filename hash invalidates on rebuild).
// Other static files: stale-while-revalidate.
// Bump VERSION to drop all old caches in one shot.

const VERSION = 'airreps-v1';
const RUNTIME = `${VERSION}-runtime`;
const HTML = `${VERSION}-html`;

const HASHED_ASSET = /^\/assets\/.+\.(?:js|css|woff2?)$/i;
const STATIC_FILE = /\.(?:webp|png|jpg|jpeg|gif|svg|ico|webm|woff2?)$/i;

self.addEventListener('install', (event) => {
    // Precache the homepage so the offline fallback in networkFirst() has
    // something to serve even if the user never navigated to '/' before.
    event.waitUntil(
        caches
            .open(HTML)
            .then((cache) => cache.add('/'))
            .catch(() => {
                // Offline install or transient failure — fallback just stays empty.
            })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(
                keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
            );
            await self.clients.claim();
        })()
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') {
        return;
    }

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) {
        return;
    }
    if (url.pathname === '/sw.js') {
        return;
    }

    const accept = request.headers.get('accept') || '';
    const isNavigate = request.mode === 'navigate' || accept.includes('text/html');

    if (isNavigate) {
        event.respondWith(networkFirst(request, HTML));
        return;
    }

    if (HASHED_ASSET.test(url.pathname)) {
        event.respondWith(cacheFirst(request, RUNTIME));
        return;
    }

    if (STATIC_FILE.test(url.pathname)) {
        event.respondWith(staleWhileRevalidate(request, RUNTIME));
    }
});

async function networkFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    try {
        const response = await fetch(request);
        if (response.ok) {
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        const cached = await cache.match(request);
        if (cached) {
            return cached;
        }
        const fallback = await cache.match('/');
        return fallback || new Response('Offline', { status: 503, statusText: 'Offline' });
    }
}

async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) {
        return cached;
    }
    const response = await fetch(request);
    if (response.ok) {
        cache.put(request, response.clone());
    }
    return response;
}

async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    const networkFetch = fetch(request)
        .then((response) => {
            if (response.ok) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => null);
    return cached || (await networkFetch) || new Response('Offline', { status: 503 });
}
