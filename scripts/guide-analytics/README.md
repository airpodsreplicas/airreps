# Guide analytics (ops)

Aggregate measurement for airpodsreplicas.com: which pages are read, a broad
source category for each visit, and which outbound links get clicked. It has
two independent parts:

| Part | Where | What it receives |
| --- | --- | --- |
| Aggregate counter | `collect.php`, deployed at `https://airreps.link/guide-metrics/collect.php` | `{event, route, source, target}` only |
| Cloudflare Web Analytics | `static.cloudflareinsights.com` beacon → `cloudflareinsights.com` | Page views, page URL, referrer, Core Web Vitals |

The client is `docs/.vitepress/theme/guide-metrics.ts`, started once from the
theme's `enhanceApp` and fed from `router.onAfterRouteChange`. The public
explanation is the Privacy page (`docs/privacy.md` and its 8 translations),
linked from the footer in every locale.

## When anything is measured

Both parts run only when **all** of these hold. Otherwise nothing is loaded,
no listeners are attached, and nothing is sent:

- The page is served over HTTPS from `airpodsreplicas.com` or
  `www.airpodsreplicas.com`. `docs:dev`, `docs:preview`, localhost, PR builds
  and any other host never measure.
- No Do Not Track signal: `navigator.doNotTrack`, `window.doNotTrack` or
  `navigator.msDoNotTrack` equal to `'1'` (or legacy `'yes'`).
- No Global Privacy Control: `navigator.globalPrivacyControl === true`.

The endpoint also answers `204` without counting when a request carries
`DNT: 1` or `Sec-GPC: 1`.

## Counter contract

The body is JSON sent as `text/plain` (a plain-string `navigator.sendBeacon`,
so there is no CORS preflight). If the beacon is unavailable or refused, the
client uses `fetch` with `keepalive`, `mode: 'cors'`, `credentials: 'omit'`
and `Content-Type: text/plain`. Sending never delays or alters navigation.

| Field | Values |
| --- | --- |
| `event` | `view` or `outbound` |
| `route` | A canonical guide path from `allowed-routes.json`: no query, `#`, dots or escapes, ≤ 180 chars |
| `source` | `ai_chatgpt`, `ai_gemini`, `ai_claude`, `ai_grok`, `ai_perplexity`, `search_google`, `search_bing`, `search_other`, `community`, `social`, `direct`, `other` |
| `target` | `''` for views. For outbound: `hicity`, `jenny`, `earhive`, `replicute`, `kakobuy`, `kakoguide`, `discord`, `reddit` |

Optional `test: true` validates a request without writing counts, files or
rate-limit state. The production client never sends it.

### Views

- The route comes from VitePress page data (the docs source file), not the
  address bar, so query strings, fragments and arbitrary input can't reach it.
  `index.md` becomes the directory URL (`/da/`, `/articles/`), and generation
  pages (`/links/airpods-pro-2`) become their family page (`/links/pro`),
  matching the sitemap. The 404 page is never counted.
- A view is sent once the page has rendered. Hash or query-only changes on the
  same page don't count again; navigating to another page and back does.
- Views are page loads, not unique visitors or sessions.

### Sources

The category is decided once per tab, from the initial `document.referrer`
hostname and `utm_source`, and kept in memory only (no cookies or storage).
Neither the referrer nor the campaign value is ever sent.

1. A recognised external referrer wins. Hosts match exactly or as a subdomain,
   so `evil-chatgpt.com` and `chatgpt.com.example.net` don't count as ChatGPT.
2. Otherwise a recognised `utm_source` fills in (ChatGPT appends
   `utm_source=chatgpt.com`; apps often send no referrer).
3. Otherwise `other` for an unknown external referrer, or `direct` for none.

Things to keep in mind when reading the numbers:

- This site's own pages count as `direct`. That includes links opened in a new
  tab from the guide, and legacy generation URLs (their redirect stub replaces
  the original referrer).
- X usually sends only `https://x.com/`, so Grok on X mostly shows as `social`.
  Only an `/i/grok` referrer path is `ai_grok`.
- Google AI Overviews/AI Mode arrive as `search_google`; Copilot as `search_bing`.

### Outbound clicks

Trusted primary clicks (including Ctrl/Cmd/Shift-click and keyboard activation)
and middle clicks (`auxclick`, button 1) on real links. Each physical click is
one event. The listener is passive, in the capture phase, and never cancels or
rewrites anything. Counted destinations:

- `airreps.link` seller product shortlinks: prefix `e` (Earhive), `j` (Jenny)
  or `hc` (HiCity) plus a product code (`prov54hl`, `4v2tb`, `maxv3p`,
  `gen2v3e`, `pro3se`, …), and the Weidian landing aliases `earhivew`,
  `jennyw`, `hicityw`.
- `airreps.link/kakobuy`, `/discord`, `/reddit`.
- Direct hosts: `hicitypods.com`, `jenny.airreps.info`, `earhive.com`,
  `replicute.com`, `kakobuy.com`, `kakoguide.com`, `discord.gg`,
  `discord.com/invite/…`, `reddit.com/r/airreps…`.

App downloads (`flycc`, `kkx`, …), `wise`, GitHub and everything else are
ignored. A test fails if the guide gains an `airreps.link` alias that is
neither counted nor listed as deliberately ignored.

**An outbound count is click intent, not a sale.** There is no order,
affiliate or revenue attribution, and the endpoint has no YOURLS or
WooCommerce integration.

## Storage and limits (`collect.php`)

- Data directory, outside the web root:
  `/home/airreps/web/airreps.link/private/guide-analytics/`. It must be
  writable by the PHP user and must not be web-served. The endpoint creates
  files with umask `0077`.
- One file per UTC day, `YYYY-MM-DD.json`:
  `{day, minute, minute_count, total, counts}`, where `counts` maps
  `source|event|target|route` → integer. No IPs, user agents, timestamps per
  event, or identifiers.
- Request body ≤ 1024 bytes. Only `https://airpodsreplicas.com` and
  `https://www.airpodsreplicas.com` origins. No query string. Exactly the four
  fields (plus optional `test`).
- 600 events per minute and 100,000 per day (then `429`), 12,000 distinct keys
  per day, 2 MiB per file, 32 MiB for the directory, 90 days retention
  (pruned on the first event of each UTC day).
- The write lock is non-blocking: a request that arrives while another is
  writing gets `503` and that event is dropped. Expect slight undercounting
  under bursts.
- Anyone can forge requests with the right `Origin` header. The allowlists and
  caps bound the damage, but treat the totals as directional.

Standard web-server and CDN access/security logs for airreps.link and GitHub
Pages are separate from these files and outside this code.

## Deployment (manual; not done by this repo)

1. Copy `collect.php` to the airreps.link document root as
   `guide-metrics/collect.php`. Check that the shortlink rewrite serves the real
   file instead of treating `guide-metrics` as a short URL.
2. Copy `allowed-routes.json` into the data directory above. The endpoint
   answers `503` until it exists.
3. Validate without counting:

   ```sh
   curl -i -X POST https://airreps.link/guide-metrics/collect.php \
     -H 'Origin: https://airpodsreplicas.com' -H 'Content-Type: text/plain' \
     --data '{"event":"view","route":"/","source":"direct","target":"","test":true}'
   ```

   Expect `204` with `X-Guide-Analytics-Validated: 1`.

## Refreshing the route allowlist

`allowed-routes.json` is generated from the built sitemap: every indexable
page in all 9 locales, without generation redirect stubs or the 404 page.
After adding, removing or renaming pages:

```sh
bun run docs:build
bun run analytics:routes           # rewrites allowed-routes.json
bun run analytics:routes --check   # exit 1 if the committed file is stale
```

Commit the file, then copy it to the server. Until the server copy is
refreshed, views of new pages get `400` and simply aren't counted.
`scripts/guide-analytics.test.ts` also fails when docs pages and the committed
allowlist disagree.

## Cloudflare Web Analytics

- Site ID `128168c0f3e64551b1cc45a5cb4b02be` (dashboard). Public beacon token
  `bc7df2ec08544f4e955ffebd7121c70b`, in the client. It is not a secret.
- Loaded manually because GitHub Pages is DNS-only, so Cloudflare can't inject
  it. The client adds the beacon script once, after `window.load`, as
  `<script type="module" data-cf-beacon='{"token":"…"}'>`. The beacon tracks
  SPA navigations itself, and the client never adds it twice.
- The beacon sends the page URL (with query string, without the fragment) and
  the referrer to Cloudflare. The custom counter does not. See
  <https://developers.cloudflare.com/web-analytics/about/>.

## Tests

`bun test scripts/guide-analytics.test.ts` covers referrer/UTM spoofing
boundaries, DNT/GPC opt-out, host gating, canonical routes, outbound targets,
SPA de-duplication and the generator. Everything runs against stubbed browser
objects. Global `fetch` is replaced with a throwing stub, so tests can never
write live analytics.
