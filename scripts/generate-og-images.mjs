/* biome-ignore-all lint/suspicious/noBitwiseOperators: PNG CRC32 and 6-bit RGB bucket packing require bitwise math */
import { deflateSync } from 'node:zlib';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import satori from 'satori';
import { html } from 'satori-html';

const width = 1200;
const height = 630;

const docsDir = path.resolve('docs');
const outDir = path.resolve('docs/public/og');
const logoPath = path.resolve('docs/public/logo.png');

// Redirect-only product generation pages folded into /version-info/{airpods,pro}
// and /links/{airpods,pro} (mirrors docs/.vitepress/product-routes.ts). These
// pages return `noindex, follow` + meta refresh without emitting og:image, so
// generating 108 unused PNGs for them only bloats the GitHub Pages artifact.
const REDIRECT_GENERATION_MODELS = new Set([
    'airpods-2',
    'airpods-3',
    'airpods-4',
    'airpods-5',
    'airpods-pro',
    'airpods-pro-2',
    'airpods-pro-3',
]);
const REDIRECT_GENERATION_RE = /^(?:[a-z]{2}\/)?(?:version-info|links)\/(?<model>[^/]+)$/u;

function isRedirectGenerationPage(relPath) {
    const normalized = relPath.split(path.sep).join('/');
    const match = normalized.match(REDIRECT_GENERATION_RE);
    return Boolean(match?.groups && REDIRECT_GENERATION_MODELS.has(match.groups.model));
}

// --- Zero-dependency 8-bit indexed PNG encoder -----------------------------
// Resvg.asPng() writes uncompressed-ish 32-bit RGBA (~188 KB per OG card due
// to the smooth radial gradient). Quantizing opaque 1200x630 cards to a
// 256-color median-cut palette (6-bit RGB histogram + luminance-sorted PLTE +
// deflate level 9) cuts each PNG to ~40-55 KB (~75% smaller) with sharp text
// and smooth gradients, while keeping identical .png URLs and zero extra deps.
const CRC_TABLE = new Uint32Array(256);
for (let i = 0; i < 256; i += 1) {
    let c = i;
    for (let k = 0; k < 8; k += 1) {
        c = c & 1 ? 0xed_b8_83_20 ^ (c >>> 1) : c >>> 1;
    }
    CRC_TABLE[i] = c >>> 0;
}

function crc32(buf) {
    let c = 0xff_ff_ff_ff;
    for (const byte of buf) {
        c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xff_ff_ff_ff) >>> 0;
}

function pngChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const crcInput = Buffer.concat([typeBuf, data]);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc32(crcInput), 0);
    return Buffer.concat([lenBuf, crcInput, crcBuf]);
}

// Ordered 4x4 Bayer matrix normalized to [-0.5, +0.5] to break up subtle
// 6-bit gradient bands without introducing noisy speckle.
const BAYER_4X4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
].map((row) => row.map((v) => (v + 0.5) / 16 - 0.5));

function encodeIndexedPng(rgba, imgWidth, imgHeight) {
    const pixelCount = imgWidth * imgHeight;
    // 6-bit per channel histogram: 64 * 64 * 64 = 262,144 buckets.
    const BUCKETS = 1 << 18;
    const counts = new Uint32Array(BUCKETS);
    const sumR = new Float64Array(BUCKETS);
    const sumG = new Float64Array(BUCKETS);
    const sumB = new Float64Array(BUCKETS);

    // Pre-pass: fill histogram and record per-pixel 6-bit bucket key.
    const pixelKeys = new Uint32Array(pixelCount);
    for (let y = 0; y < imgHeight; y += 1) {
        const bayerRow = BAYER_4X4[y & 3];
        const rowOff = y * imgWidth;
        for (let x = 0; x < imgWidth; x += 1) {
            const p = rowOff + x;
            const i = p * 4;
            const d = bayerRow[x & 3] * 4;
            const r = Math.min(255, Math.max(0, Math.round(rgba[i] + d)));
            const g = Math.min(255, Math.max(0, Math.round(rgba[i + 1] + d)));
            const b = Math.min(255, Math.max(0, Math.round(rgba[i + 2] + d)));
            const key = ((r >> 2) << 12) | ((g >> 2) << 6) | (b >> 2);
            pixelKeys[p] = key;
            counts[key] += 1;
            sumR[key] += rgba[i];
            sumG[key] += rgba[i + 1];
            sumB[key] += rgba[i + 2];
        }
    }

    const entries = [];
    for (let key = 0; key < BUCKETS; key += 1) {
        const count = counts[key];
        if (count > 0) {
            entries.push({
                b: sumB[key] / count,
                count,
                g: sumG[key] / count,
                key,
                r: sumR[key] / count,
            });
        }
    }

    const makeBox = (items) => {
        let minR = 255;
        let maxR = 0;
        let minG = 255;
        let maxG = 0;
        let minB = 255;
        let maxB = 0;
        for (const item of items) {
            if (item.r < minR) {
                minR = item.r;
            }
            if (item.r > maxR) {
                maxR = item.r;
            }
            if (item.g < minG) {
                minG = item.g;
            }
            if (item.g > maxG) {
                maxG = item.g;
            }
            if (item.b < minB) {
                minB = item.b;
            }
            if (item.b > maxB) {
                maxB = item.b;
            }
        }
        const rangeR = maxR - minR;
        const rangeG = maxG - minG;
        const rangeB = maxB - minB;
        const maxRange = Math.max(rangeR, rangeG, rangeB);
        const channel = maxRange === rangeR ? 'r' : maxRange === rangeG ? 'g' : 'b';
        return { channel, items, priority: maxRange };
    };

    const boxes = [makeBox(entries)];
    while (boxes.length < 256) {
        let bestIdx = -1;
        let bestPriority = 0;
        for (let i = 0; i < boxes.length; i += 1) {
            if (boxes[i].items.length > 1 && boxes[i].priority > bestPriority) {
                bestPriority = boxes[i].priority;
                bestIdx = i;
            }
        }
        if (bestIdx === -1) {
            break;
        }
        const [box] = boxes.splice(bestIdx, 1);
        const ch = box.channel;
        box.items.sort((a, b) => a[ch] - b[ch]);
        const split = Math.floor(box.items.length / 2);
        boxes.push(makeBox(box.items.slice(0, split)), makeBox(box.items.slice(split)));
    }

    // Compute exact weighted average RGB per box and sort by luminance.
    const palette = boxes.map((box) => {
        let r = 0;
        let g = 0;
        let b = 0;
        let total = 0;
        for (const item of box.items) {
            r += item.r * item.count;
            g += item.g * item.count;
            b += item.b * item.count;
            total += item.count;
        }
        const avgR = Math.round(r / total);
        const avgG = Math.round(g / total);
        const avgB = Math.round(b / total);
        return {
            b: avgB,
            g: avgG,
            items: box.items,
            luma: 0.2126 * avgR + 0.7152 * avgG + 0.0722 * avgB,
            r: avgR,
        };
    });
    palette.sort((a, b) => a.luma - b.luma);

    // Direct O(1) LUT from every populated 6-bit RGB bucket to its palette index.
    const lut = new Uint8Array(BUCKETS);
    const plte = Buffer.alloc(palette.length * 3);
    for (let idx = 0; idx < palette.length; idx += 1) {
        const entry = palette[idx];
        plte[idx * 3] = entry.r;
        plte[idx * 3 + 1] = entry.g;
        plte[idx * 3 + 2] = entry.b;
        for (const item of entry.items) {
            lut[item.key] = idx;
        }
    }

    // Build raw scanlines with filter byte 0 (None) — optimal for indexed PNG8.
    const stride = imgWidth + 1;
    const raw = Buffer.allocUnsafe(stride * imgHeight);
    for (let y = 0; y < imgHeight; y += 1) {
        const dstRow = y * stride;
        const srcRow = y * imgWidth;
        raw[dstRow] = 0;
        for (let x = 0; x < imgWidth; x += 1) {
            raw[dstRow + 1 + x] = lut[pixelKeys[srcRow + x]];
        }
    }

    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(imgWidth, 0);
    ihdr.writeUInt32BE(imgHeight, 4);
    ihdr[8] = 8; // bit depth
    ihdr[9] = 3; // indexed color (PLTE)
    ihdr[10] = 0; // compression
    ihdr[11] = 0; // filter
    ihdr[12] = 0; // interlace

    const idat = deflateSync(raw, { level: 9 });
    const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    return Buffer.concat([
        signature,
        pngChunk('IHDR', ihdr),
        pngChunk('PLTE', plte),
        pngChunk('IDAT', idat),
        pngChunk('IEND', Buffer.alloc(0)),
    ]);
}

// Ensure output directory exists
fs.ensureDirSync(outDir);

function getBase64Image(filePath) {
    const file = fs.readFileSync(filePath);
    const ext = path.extname(filePath).slice(1).toLowerCase();
    const mime = ext === 'webp' ? 'image/webp' : `image/${ext}`;
    return `data:${mime};base64,${file.toString('base64')}`;
}

const logoBase64 = getBase64Image(logoPath);

// Fetch Font (Inter)
async function fetchFont(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch font: ${res.statusText}`);
    }
    return Buffer.from(await res.arrayBuffer());
}

// Load all font subsets up front. These come from a CDN, so a transient outage
// would otherwise throw at module load — before `main().catch()` can handle it —
// and abort the whole `docs:build`, blocking deploy. The generated OG images are
// committed to the repo, so on any fetch failure we log and exit 0, leaving the
// existing committed PNGs in place rather than failing the build.
let fontData;
let fontRegularData;
let fontLatinExtData;
let fontLatinExtRegularData;
let fontCyrillicData;
let fontCyrillicRegularData;
try {
    fontData = await fetchFont(
        'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-700-normal.woff'
    );
    fontRegularData = await fetchFont(
        'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-400-normal.woff'
    );

    // Fetch Extra Subsets (Latin Ext + Cyrillic)
    fontLatinExtData = await fetchFont(
        'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-ext-700-normal.woff'
    );
    fontLatinExtRegularData = await fetchFont(
        'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-ext-400-normal.woff'
    );
    fontCyrillicData = await fetchFont(
        'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-cyrillic-700-normal.woff'
    );
    fontCyrillicRegularData = await fetchFont(
        'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-cyrillic-400-normal.woff'
    );
} catch (err) {
    console.warn(
        `[generate-og] Skipping OG image generation (font fetch failed: ${err.message}). Using committed images.`
    );
    process.exit(0);
}

// satori-html escapes interpolated text (& -> &amp;), but satori draws text
// children literally — so a title like "Sellers & Versions" would show up as
// "Sellers &amp; Versions" on the image. Walk the VNode tree after parsing and
// decode entities in text children to undo that escaping.
function unescapeTextNodes(node) {
    if (typeof node === 'string') {
        return node
            .replace(/&lt;/gu, '<')
            .replace(/&gt;/gu, '>')
            .replace(/&quot;/gu, '"')
            .replace(/&#0?39;/gu, "'")
            .replace(/&amp;/gu, '&');
    }
    if (Array.isArray(node)) {
        return node.map(unescapeTextNodes);
    }
    if (node && typeof node === 'object' && node.props && node.props.children !== undefined) {
        node.props.children = unescapeTextNodes(node.props.children);
    }
    return node;
}

async function generateOgImage(title, description, outFile, label = 'GUIDE') {
    // satori 0.48 resolves percentages and absolute offsets on the content box
    // and lays padding outside width/height. 0.33.4 treated the 1200×630 frame
    // as the border box, so `right: 60px` kept the logo on-canvas and
    // `max-width: 80%` wrapped text at 864px (80% of the 1080px content width).
    // Pin that geometry: border-box frame, an explicit logo size (flex-shrink
    // 0) so the absolute badge is measured from a real edge, and fixed text
    // widths so lines break where they used to.
    const markup = html`
    <div
        style="
        height: 630px;
        width: 1200px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: #0f0f0f;
        background-image: radial-gradient(circle at 0% 100%, rgba(236,100,93,0.5) 0%, rgba(236,100,93,0.1) 40%, rgba(15,15,15,0) 80%);
        padding: 60px;
        color: #ffffff;
        font-family: 'Inter', 'InterLatinExt', 'InterCyrillic', sans-serif;
        position: relative;
      "
    >

      <!-- Logo Top Right -->
      <div
        style="
          position: absolute;
          top: 60px;
          right: 60px;
          width: 120px;
          height: 120px;
          display: flex;
          flex-shrink: 0;
          align-items: center;
        "
      >
        <img src="${logoBase64}" style="width: 120px; height: 120px; flex-shrink: 0;" />
      </div>

      <!-- Content Bottom Left -->
      <div style="display: flex; flex-direction: column; width: 864px; flex-shrink: 0;">
         <div
          style="
            background: #589DBA;
            padding: 8px 24px;
            border-radius: 50px;
            font-size: 24px;
            font-weight: bold;
            color: white;
            align-self: flex-start;
            margin-bottom: 24px;
            display: flex;
            flex-shrink: 0;
          "
        >
          ${label}
        </div>
        <div style="font-size: 72px; font-weight: 700; line-height: 1.1; margin-bottom: 16px; display: flex; color: #ffffff; width: 864px; flex-shrink: 0;">
          ${title}
        </div>
         <div style="font-size: 32px; color: #cccccc; line-height: 1.4; display: flex; width: 864px; flex-shrink: 0;">
          ${description || 'The Ultimate Guide to AirPods Replicas'}
        </div>
      </div>
    </div>
    `;

    const svg = await satori(unescapeTextNodes(markup), {
        fonts: [
            {
                data: fontData,
                name: 'Inter',
                style: 'normal',
                weight: 700,
            },
            {
                data: fontRegularData,
                name: 'Inter',
                style: 'normal',
                weight: 400,
            },
            {
                data: fontLatinExtData,
                name: 'InterLatinExt',
                style: 'normal',
                weight: 700,
            },
            {
                data: fontLatinExtRegularData,
                name: 'InterLatinExt',
                style: 'normal',
                weight: 400,
            },
            {
                data: fontCyrillicData,
                name: 'InterCyrillic',
                style: 'normal',
                weight: 700,
            },
            {
                data: fontCyrillicRegularData,
                name: 'InterCyrillic',
                style: 'normal',
                weight: 400,
            },
        ],
        height,
        width,
    });

    const resvg = new Resvg(svg);
    const rendered = resvg.render();
    const pngBuffer = encodeIndexedPng(rendered.pixels, rendered.width, rendered.height);

    fs.writeFileSync(outFile, pngBuffer);
}

async function main() {
    // Recursively collect every markdown file under docs/, skipping
    // node_modules, .vitepress, and public (no extra deps needed).
    const getAllFiles = (dir) => {
        let results = [];
        const list = fs.readdirSync(dir);
        list.forEach((name) => {
            const filePath = path.join(dir, name);
            const stat = fs.statSync(filePath);
            if (stat?.isDirectory()) {
                // Match on the directory name, not the full path — a checkout
                // under e.g. /var/www/public/... would otherwise skip everything.
                if (!(name === 'node_modules' || name === '.vitepress' || name === 'public')) {
                    results = results.concat(getAllFiles(filePath));
                }
            } else if (filePath.endsWith('.md')) {
                results.push(filePath);
            }
        });
        return results;
    };

    const files = getAllFiles(docsDir);
    const CONCURRENCY = 8;
    let cursor = 0;
    let generated = 0;
    let skippedRedirects = 0;

    const worker = async () => {
        while (cursor < files.length) {
            const file = files[cursor];
            cursor += 1;

            const relPath = path.relative(docsDir, file).replace(/\.md$/u, '');
            if (isRedirectGenerationPage(relPath)) {
                skippedRedirects += 1;
                continue;
            }

            const content = fs.readFileSync(file, 'utf-8');
            const { data, content: markdownBody } = matter(content);

            let { title } = data;

            // If title is missing in frontmatter, try to find the first H1
            if (!title) {
                const h1Match = markdownBody.match(/^#\s+(?<heading>.*$)/mu);
                if (h1Match?.groups) {
                    title = h1Match.groups.heading;
                }
            }

            if (!title) {
                continue; // Skip files without title
            }

            // Clean title (remove markdown like ** **)
            title = title
                .replace(/\*\*/gu, '')
                .replace(/__/gu, '')
                .replace(/\*/gu, '')
                .replace(/_/gu, '');

            // Decode simple HTML entities in title
            title = title
                .replace(/&amp;/gu, '&')
                .replace(/&lt;/gu, '<')
                .replace(/&gt;/gu, '>')
                .replace(/&quot;/gu, '"')
                .replace(/&#39;/gu, "'");

            const outFilePath = path.join(outDir, `${relPath}.png`);
            fs.ensureDirSync(path.dirname(outFilePath));

            // Description is now manually shortened in frontmatter
            const description = data.description || '';
            const label = data.ogLabel || 'GUIDE';

            try {
                // biome-ignore lint/performance/noAwaitInLoops: bounded concurrency worker pool
                await generateOgImage(title, description, outFilePath, label);
                generated += 1;
            } catch (err) {
                // Keep going so one bad page doesn't hide errors in the rest,
                // but fail the build — a silent partial run would deploy pages
                // whose meta tags point at missing/outdated OG images.
                console.error(`[generate-og] Failed for ${relPath}: ${err.message}`);
                process.exitCode = 1;
            }
        }
    };

    await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
    console.log(
        `[generate-og] Generated ${generated} PNG8 OG images (skipped ${skippedRedirects} redirect-only pages).`
    );
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
