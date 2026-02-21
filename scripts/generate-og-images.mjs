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

// Ensure output directory exists
fs.ensureDirSync(outDir);

// Helper to convert image file to base64
function getBase64Image(filePath) {
    const file = fs.readFileSync(filePath);
    return `data:image/png;base64,${file.toString('base64')}`;
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

const fontData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-700-normal.woff'
);
const fontRegularData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-400-normal.woff'
);

// Fetch Extra Subsets (Latin Ext + Cyrillic)
const fontLatinExtData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-ext-700-normal.woff'
);
const fontLatinExtRegularData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-ext-400-normal.woff'
);
const fontCyrillicData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-cyrillic-700-normal.woff'
);
const fontCyrillicRegularData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-cyrillic-400-normal.woff'
);

async function generateOgImage(title, description, outFile) {
    const markup = html`
    <div
        style="
        height: 100%;
        width: 100%;
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
          display: flex;
          align-items: center;
        "
      >
        <img src="${logoBase64}" style="width: 120px; height: 120px;" />
      </div>

      <!-- Content Bottom Left -->
      <div style="display: flex; flex-direction: column; max-width: 80%;">
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
          "
        >
          GUIDE
        </div>
        <div style="font-size: 72px; font-weight: 700; line-height: 1.1; margin-bottom: 16px; display: flex; color: #ffffff;">
          ${title}
        </div>
         <div style="font-size: 32px; color: #cccccc; line-height: 1.4; display: flex;">
          ${description || 'The Ultimate Guide to AirPods Replicas'}
        </div>
      </div>
    </div>
    `;

    const svg = await satori(markup, {
        width,
        height,
        fonts: [
            {
                name: 'Inter',
                data: fontData,
                weight: 700,
                style: 'normal',
            },
            {
                name: 'Inter',
                data: fontRegularData,
                weight: 400,
                style: 'normal',
            },
            {
                name: 'InterLatinExt',
                data: fontLatinExtData,
                weight: 700,
                style: 'normal',
            },
            {
                name: 'InterLatinExt',
                data: fontLatinExtRegularData,
                weight: 400,
                style: 'normal',
            },
            {
                name: 'InterCyrillic',
                data: fontCyrillicData,
                weight: 700,
                style: 'normal',
            },
            {
                name: 'InterCyrillic',
                data: fontCyrillicRegularData,
                weight: 400,
                style: 'normal',
            },
        ],
    });

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    fs.writeFileSync(outFile, pngBuffer);
    console.log(`Generated: ${path.basename(outFile)} `);
}

async function main() {
    // Use globby to find all markdown files
    // Note: We need to install globby or just use recursion.
    // Since I didn't install globby, I'll use a recursive function. (Correction: I didn't install globby in the previous step... I should have or just use recursive read)
    // Let's implement a recursive file walker to be safe without extra deps if I missed them.
    // Actually, I'll just use a simple proprietary walker.

    const getAllFiles = (dir) => {
        let results = [];
        const list = fs.readdirSync(dir);
        list.forEach((name) => {
            const filePath = path.join(dir, name);
            const stat = fs.statSync(filePath);
            if (stat?.isDirectory()) {
                if (
                    !(
                        filePath.includes('node_modules') ||
                        filePath.includes('.vitepress') ||
                        filePath.includes('public')
                    )
                ) {
                    results = results.concat(getAllFiles(filePath));
                }
            } else if (filePath.endsWith('.md')) {
                results.push(filePath);
            }
        });
        return results;
    };

    const files = getAllFiles(docsDir);

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        const { data, content: markdownBody } = matter(content);

        let title = data.title;

        // If title is missing in frontmatter, try to find the first H1
        if (!title) {
            const h1Match = markdownBody.match(/^#\s+(.*$)/m);
            if (h1Match) {
                title = h1Match[1];
            }
        }

        if (!title) {
            continue; // Skip files without title
        }

        // Clean title (remove markdown like ** **)
        title = title.replace(/\*\*/g, '').replace(/__/g, '').replace(/\*/g, '').replace(/_/g, '');

        // Decode simple HTML entities in title
        title = title
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");

        // Calculate relative path for filename
        // e.g. docs/introduction/overview.md -> introduction/overview
        // e.g. docs/es/introduction/overview.md -> es/introduction/overview
        const relPath = path.relative(docsDir, file).replace(/\.md$/, '');

        const outFilePath = path.join(outDir, `${relPath}.png`);
        fs.ensureDirSync(path.dirname(outFilePath));

        // Description is now manually shortened in frontmatter
        const description = data.description || '';

        await generateOgImage(title, description, outFilePath);
    }
}

main().catch(console.error);
