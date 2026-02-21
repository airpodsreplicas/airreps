import { Resvg } from '@resvg/resvg-js';
import fs from 'fs-extra';
import path from 'path';
import satori from 'satori';
import { html } from 'satori-html';

const width = 1200;
const height = 630;

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

// Fetch Fonts
const fontData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-700-normal.woff'
);
const fontRegularData = await fetchFont(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-400-normal.woff'
);
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

async function generateOgImage(title, description, outFile, gradientStyle) {
    let gradient = '';

    if (gradientStyle === 'medium') {
        // Medium Intensity (Agile adjustment)
        gradient =
            'radial-gradient(circle at 0% 100%, rgba(236,100,93,0.6) 0%, rgba(236,100,93,0.2) 45%, rgba(15,15,15,0) 80%)';
    } else if (gradientStyle === 'high') {
        // High Intensity (Vibrant)
        gradient =
            'radial-gradient(circle at 0% 100%, rgba(236,100,93,0.85) 0%, rgba(236,100,93,0.3) 50%, rgba(15,15,15,0) 80%)';
    } else if (gradientStyle === 'wide') {
        // Wide Spread (Softer but larger area)
        gradient =
            'radial-gradient(circle at 0% 100%, rgba(236,100,93,0.5) 0%, rgba(236,100,93,0.25) 60%, rgba(15,15,15,0) 90%)';
    } else if (gradientStyle === 'current') {
        // Current (Faint)
        gradient =
            'radial-gradient(circle at 0% 100%, rgba(236,100,93,0.5) 0%, rgba(236,100,93,0.1) 40%, rgba(15,15,15,0) 80%)';
    }

    const markup = html`
    <div
        style="
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: #0f0f0f;
        background-image: ${gradient};
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
      <div style="display: flex; flex-direction: column; max-width: 80%; z-index: 10;">
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
    console.log(`Generated Test: ${path.basename(outFile)} `);
}

async function main() {
    await generateOgImage(
        'Overview',
        'Current Look (Faint)',
        path.join(outDir, 'var-1-current.png'),
        'current'
    );
    await generateOgImage(
        'Overview',
        'Option A: Medium Intensity',
        path.join(outDir, 'var-2-medium.png'),
        'medium'
    );
    await generateOgImage(
        'Overview',
        'Option B: High Intensity',
        path.join(outDir, 'var-3-high.png'),
        'high'
    );
    await generateOgImage(
        'Overview',
        'Option C: Wide Spread',
        path.join(outDir, 'var-4-wide.png'),
        'wide'
    );
}

main().catch(console.error);
