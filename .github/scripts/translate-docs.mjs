#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import OpenAI from 'openai';

const WORKSPACE = process.cwd();
const DOCS_DIR = path.join(WORKSPACE, 'docs');

const localeConfig = {
    es: 'Spanish',
    pt: 'Portuguese',
    da: 'Danish',
    fr: 'French',
    pl: 'Polish',
    ru: 'Russian',
    de: 'German',
    tr: 'Turkish',
};

// Frontmatter keys whose string values are user-facing prose and should be
// translated. Anything else (URLs, brand names, icons, layout, theme values,
// JSON-LD config, etc.) stays verbatim.
const TRANSLATABLE_FRONTMATTER_KEYS = new Set([
    'title',
    'description',
    'tagline',
    'text',
    'details',
    'linkText',
    'label',
    'ogLabel',
    'q',
    'a',
]);

const MAX_RETRIES = 3;
const REQUEST_TIMEOUT_MS = 120_000;
const CONCURRENCY = 5;

function hasLocalePrefix(relativePath) {
    return Object.hasOwn(localeConfig, relativePath.split(path.sep)[0]);
}

function parseList(envVar) {
    return (process.env[envVar] || '')
        .split('\n')
        .map((f) => f.trim())
        .filter(Boolean)
        .filter((f) => f.startsWith('docs/'));
}

function getLocales() {
    return (process.env.TRANSLATION_LOCALES || 'es,pt,da,fr,pl,ru,de,tr')
        .split(',')
        .map((l) => l.trim())
        .filter(Boolean)
        .filter((l) => localeConfig[l]);
}

function createClient() {
    const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error('Missing OPENROUTER_API_KEY or OPENAI_API_KEY');
    }

    const baseURL = process.env.LLM_BASE_URL || 'https://openrouter.ai/api/v1';
    const defaultHeaders = {};
    if (baseURL.includes('openrouter.ai')) {
        defaultHeaders['HTTP-Referer'] =
            process.env.OPENROUTER_HTTP_REFERER || 'https://github.com/airpodsreplicas/airreps';
        defaultHeaders['X-OpenRouter-Title'] =
            process.env.OPENROUTER_APP_TITLE || 'AirReps Translation Sync';
    }
    return new OpenAI({ apiKey, baseURL, defaultHeaders });
}

async function readOptional(filePath) {
    try {
        return await readFile(filePath, 'utf8');
    } catch {
        return null;
    }
}

async function withTimeout(promise, ms) {
    let timer;
    const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`Request timed out after ${ms}ms`)), ms);
    });
    try {
        return await Promise.race([promise, timeout]);
    } finally {
        clearTimeout(timer);
    }
}

async function chatComplete(openai, messages) {
    let lastErr;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            const res = await withTimeout(
                openai.chat.completions.create({
                    model:
                        process.env.TRANSLATION_MODEL ||
                        process.env.OPENAI_TRANSLATION_MODEL ||
                        'openai/gpt-5-mini',
                    temperature: 0.2,
                    messages,
                }),
                REQUEST_TIMEOUT_MS
            );
            return res.choices?.[0]?.message?.content || '';
        } catch (err) {
            lastErr = err;
            console.warn(`  Attempt ${attempt}/${MAX_RETRIES} failed: ${err.message}`);
            if (attempt < MAX_RETRIES) {
                await new Promise((r) => setTimeout(r, 5_000 * attempt));
            }
        }
    }
    throw lastErr;
}

function stripCodeFence(text) {
    const trimmed = text.trim();
    const fenced = trimmed.match(/^```(?:markdown|md|json)?\n([\s\S]*?)\n```$/i);
    return (fenced ? fenced[1] : trimmed).trim();
}

async function translateBody(openai, body, locale, language) {
    if (!body.trim()) {
        return body;
    }

    const system = `You translate markdown documentation into ${language}.

Rules:
- Output ONLY the translated markdown. No commentary, no code fences wrapping the output.
- Preserve markdown structure exactly: headings, lists, tables, links, emphasis, code fences, HTML tags, blank-line structure.
- Translate natural-language prose. Do NOT translate code, file paths, URLs, brand names (e.g. "AirReps"), chipset names, or model numbers.
- For internal markdown PAGE links whose URL starts with "/" (e.g. "/quiz", "/introduction/overview", "/links/info"), add the "/${locale}/" prefix so they point to the translated page. Example: [quiz](/quiz) becomes [translated quiz](/${locale}/quiz).
- Do NOT prefix asset paths (images, videos, files). Paths like "/qc-lc/image.jpg", "/logo.webp", or anything ending in .png/.jpg/.jpeg/.webp/.gif/.svg/.mp4/.pdf live in docs/public/ and must stay exactly as written in the English source.
- Do not modify links starting with http, https, mailto:, #, or ./
- Keep existing translated wording when it is already accurate; minimize unrelated rewrites.`;

    const raw = await chatComplete(openai, [
        { role: 'system', content: system },
        { role: 'user', content: body },
    ]);
    return stripCodeFence(raw);
}

function collectTranslatableStrings(data) {
    const refs = [];
    const walk = (node, pathArr) => {
        if (Array.isArray(node)) {
            node.forEach((item, i) => walk(item, [...pathArr, i]));
            return;
        }
        if (!node || typeof node !== 'object') {
            return;
        }
        for (const [key, value] of Object.entries(node)) {
            const childPath = [...pathArr, key];
            if (typeof value === 'string' && TRANSLATABLE_FRONTMATTER_KEYS.has(key)) {
                refs.push({ path: childPath, value });
            } else if (value && typeof value === 'object') {
                walk(value, childPath);
            }
        }
    };
    walk(data, []);
    return refs;
}

function setAtPath(obj, pathArr, value) {
    let cur = obj;
    for (let i = 0; i < pathArr.length - 1; i++) {
        cur = cur[pathArr[i]];
    }
    cur[pathArr[pathArr.length - 1]] = value;
}

async function translateFrontmatterStrings(openai, strings, language) {
    if (strings.length === 0) {
        return [];
    }

    const system = `You translate short UI strings into ${language}.

You receive a JSON object with a "strings" array. Return a JSON object of the form {"translations": ["...", "..."]} with exactly one translated string per input, in the same order.

Rules:
- Translate natural-language text only.
- Do NOT translate brand names (e.g. "AirReps"), URLs, model names (e.g. "AirPods Pro 3"), chipset names (e.g. "Huilian 377H3"), or file paths.
- Preserve punctuation and capitalization style.
- Return valid JSON only — no commentary, no code fences.`;

    const userPayload = JSON.stringify({ strings }, null, 2);
    const raw = await chatComplete(openai, [
        { role: 'system', content: system },
        { role: 'user', content: userPayload },
    ]);

    const cleaned = stripCodeFence(raw);
    let parsed;
    try {
        parsed = JSON.parse(cleaned);
    } catch (err) {
        throw new Error(
            `Frontmatter translation returned non-JSON: ${err.message}\nPayload head: ${cleaned.slice(0, 200)}`
        );
    }
    const translations = parsed?.translations;
    if (!Array.isArray(translations)) {
        throw new Error('Frontmatter translation response missing "translations" array');
    }
    if (translations.length !== strings.length) {
        throw new Error(
            `Expected ${strings.length} translations, got ${translations.length}`
        );
    }
    return translations.map((t, i) => (typeof t === 'string' ? t : strings[i]));
}

async function translateDocument(openai, sourcePath, targetPath, locale, language) {
    const source = await readFile(sourcePath, 'utf8');
    const relTarget = path.relative(WORKSPACE, targetPath);

    // Parse source into structured data + body. Any YAML issues in the English
    // source surface here — loudly — instead of being propagated to every locale.
    const parsedSource = matter(source);
    const { data: srcData, content: srcBody } = parsedSource;
    const refs = collectTranslatableStrings(srcData);

    // Body and frontmatter strings are translated in parallel. One call each.
    const [translatedBody, translatedStrings] = await Promise.all([
        translateBody(openai, srcBody, locale, language),
        translateFrontmatterStrings(
            openai,
            refs.map((r) => r.value),
            language
        ),
    ]);

    // Apply translations to a deep clone of the source frontmatter. Anything
    // not in the allowlist (layout, icons, URLs, etc.) stays identical to
    // the English source.
    const translatedData = structuredClone(srcData);
    refs.forEach((ref, i) => {
        setAtPath(translatedData, ref.path, translatedStrings[i]);
    });

    // gray-matter.stringify uses js-yaml, which always emits syntactically
    // valid YAML. This is the linchpin of the fix — the model never produces
    // raw YAML, so malformed frontmatter can't reach disk.
    const bodyWithTrailingNewline = translatedBody.endsWith('\n')
        ? translatedBody
        : `${translatedBody}\n`;
    const yamlOpts = { lineWidth: -1, noCompatMode: true, forceQuotes: false };
    const serialized = matter.stringify(bodyWithTrailingNewline, translatedData, {
        engines: {
            yaml: {
                parse: matter.engines.yaml.parse,
                stringify: (d) => matter.engines.yaml.stringify(d, yamlOpts),
            },
        },
    });
    // js-yaml escapes astral-plane Unicode (emoji, etc.) as \UXXXXXXXX inside
    // double-quoted scalars. Both forms are valid YAML, but raw glyphs diff
    // better and match the English source files.
    const output = serialized.replace(/\\U([0-9a-fA-F]{8})/g, (_, hex) =>
        String.fromCodePoint(Number.parseInt(hex, 16))
    );

    // Defence in depth: re-parse the output. If gray-matter can't round-trip
    // its own output, something is very wrong — throw rather than save junk.
    try {
        matter(output);
    } catch (err) {
        throw new Error(`Generated invalid frontmatter for ${relTarget}: ${err.message}`);
    }

    const existing = await readOptional(targetPath);
    if (existing === output) {
        return { changed: false, targetPath: relTarget };
    }

    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, output, 'utf8');
    return { changed: true, targetPath: relTarget };
}

async function runPool(tasks, concurrency) {
    const results = [];
    const errors = [];
    let idx = 0;

    async function worker() {
        while (idx < tasks.length) {
            const i = idx++;
            try {
                results[i] = await tasks[i]();
            } catch (err) {
                console.error(`Task ${i} failed: ${err.message}`);
                errors.push({ index: i, error: err.message });
                results[i] = { changed: false, targetPath: `(failed task ${i})` };
            }
        }
    }

    await Promise.all(
        Array.from({ length: Math.min(concurrency, tasks.length) }, () => worker())
    );
    if (errors.length > 0) {
        console.warn(`${errors.length} translation(s) failed but continuing with the rest.`);
    }
    return results;
}

async function main() {
    const changedFiles = parseList('CHANGED_FILES').filter((f) => f.endsWith('.md'));
    const protectedLocaleFiles = new Set(
        parseList('ALL_CHANGED_FILES').filter((f) => f.endsWith('.md'))
    );
    const locales = getLocales();

    if (changedFiles.length === 0) {
        console.log('No changed English markdown files to translate.');
        return;
    }
    if (locales.length === 0) {
        throw new Error('No valid locales configured in TRANSLATION_LOCALES');
    }

    const openai = createClient();

    const tasks = [];
    for (const file of changedFiles) {
        const relative = path.relative('docs', file);
        if (relative.startsWith('..') || hasLocalePrefix(relative)) {
            continue;
        }
        const sourcePath = path.join(WORKSPACE, file);

        for (const locale of locales) {
            const language = localeConfig[locale];
            const targetPath = path.join(DOCS_DIR, locale, relative);
            const relTarget = path.relative(WORKSPACE, targetPath);

            if (protectedLocaleFiles.has(relTarget)) {
                console.log(`Skipping ${relTarget} — locale file is newer than source.`);
                continue;
            }

            tasks.push(() => {
                console.log(`Translating ${file} -> ${relTarget}`);
                return translateDocument(openai, sourcePath, targetPath, locale, language);
            });
        }
    }

    console.log(`Translating ${tasks.length} files with concurrency ${CONCURRENCY}...`);
    const results = await runPool(tasks, CONCURRENCY);
    const updates = results.filter((r) => r.changed).map((r) => r.targetPath);

    if (updates.length === 0) {
        console.log('Translations were already up to date.');
        return;
    }

    console.log('Updated translation files:');
    for (const update of updates) {
        console.log(`- ${update}`);
    }
}

main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});
