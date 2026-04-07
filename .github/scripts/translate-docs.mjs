#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
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

function hasLocalePrefix(relativePath) {
  return Object.hasOwn(localeConfig, relativePath.split(path.sep)[0]);
}

function getChangedFiles() {
  return (process.env.CHANGED_FILES || '')
    .split('\n')
    .map((file) => file.trim())
    .filter(Boolean)
    .filter((file) => file.startsWith('docs/'));
}

function getAllChangedFiles() {
  return (process.env.ALL_CHANGED_FILES || '')
    .split('\n')
    .map((file) => file.trim())
    .filter(Boolean)
    .filter((file) => file.startsWith('docs/'));
}

function getLocales() {
  return (process.env.TRANSLATION_LOCALES || 'es,pt,da,fr,pl,ru,de,tr')
    .split(',')
    .map((locale) => locale.trim())
    .filter(Boolean)
    .filter((locale) => localeConfig[locale]);
}

function createClient() {
  const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('Missing OPENROUTER_API_KEY or OPENAI_API_KEY');
  }

  const baseURL = process.env.LLM_BASE_URL || 'https://openrouter.ai/api/v1';
  const defaultHeaders = {};

  if (baseURL.includes('openrouter.ai')) {
    defaultHeaders['HTTP-Referer'] = process.env.OPENROUTER_HTTP_REFERER || 'https://github.com/airpodsreplicas/airreps';
    defaultHeaders['X-OpenRouter-Title'] = process.env.OPENROUTER_APP_TITLE || 'AirReps Translation Sync';
  }

  return new OpenAI({
    apiKey,
    baseURL,
    defaultHeaders,
  });
}

async function readOptional(filePath) {
  try {
    return await readFile(filePath, 'utf8');
  } catch {
    return null;
  }
}

function cleanModelOutput(text) {
  const trimmed = text.trim();
  const fenced = trimmed.match(/^```(?:markdown|md)?\n([\s\S]*?)\n```$/i);
  let content = (fenced ? fenced[1] : trimmed).trimEnd();

  // Fix YAML frontmatter issues inside the --- block
  content = content.replace(
    /^(---\n[\s\S]*?^---)/m,
    (frontmatter) => {
      let fixed = frontmatter;

      // Strip double-wrapped lines the model sometimes produces, e.g.:
      //   "  name: \"AirReps\""  →  name: "AirReps"
      //   "  - icon: 🤝"        →  - icon: 🤝
      fixed = fixed.replace(
        /^"(\s+.+)"$/gm,
        (_, inner) => inner.replace(/\\"/g, '"'),
      );

      // Fix unquoted values that contain colons — these break the YAML parser.
      // Matches lines like:  key: some text: with colon
      // but skips lines already quoted or that are just key: value with no colon in value.
      fixed = fixed.replace(
        /^(\w[\w-]*:\s)(?!["'\[{|>])(.+:.+)$/gm,
        (_, key, value) => `${key}"${value.replace(/"/g, '\\"')}"`,
      );

      return fixed;
    },
  );

  return `${content}\n`;
}

function getResponseText(response) {
  return response.choices?.[0]?.message?.content || '';
}

const MAX_RETRIES = 3;
const REQUEST_TIMEOUT_MS = 120_000; // 2 minutes per translation

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

async function translateDocument(openai, sourcePath, targetPath, locale, language) {
  const source = await readFile(sourcePath, 'utf8');
  const existingTarget = await readOptional(targetPath);
  const relativeSourcePath = path.relative(WORKSPACE, sourcePath);
  const relativeTargetPath = path.relative(WORKSPACE, targetPath);

  let response;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      response = await withTimeout(openai.chat.completions.create({
        model: process.env.TRANSLATION_MODEL || process.env.OPENAI_TRANSLATION_MODEL || 'openai/gpt-5-mini',
        temperature: 0.2,
        messages: [
      {
        role: 'system',
        content:
          'You translate documentation files. Return only the translated markdown with no code fences or commentary. Preserve the original markdown structure exactly: frontmatter keys, headings, emphasis, lists, tables, links, image paths, code fences, HTML tags, and blank-line structure. Never remove or rename frontmatter keys. Translate only user-facing natural language. Keep brand names, file paths, URLs, and slash commands unchanged. Keep existing wording whenever it is already correct, and minimize unrelated rewrites outside the changed English meaning. Do not add or remove sections. CRITICAL: Reproduce the YAML frontmatter formatting EXACTLY as it appears in the English source — same quoting, same indentation, same structure. Do NOT add extra quotes around values, do NOT escape quotes that are not escaped in the source. If the source has `name: "AirReps"` you must output `name: "AirReps"` — never `"  name: \\"AirReps\\""`. Only translate the text values, never restructure the YAML.',
      },
      {
        role: 'user',
        content: [
          `Target locale: ${locale}`,
          `Target language: ${language}`,
          `English source file: ${relativeSourcePath}`,
          `Target file: ${relativeTargetPath}`,
          'If an existing translation is provided, reuse its terminology when it still matches the English source, but make sure the final file fully reflects the English source.',
          '',
          'English source markdown:',
          '<<<ENGLISH_SOURCE',
          source,
          'ENGLISH_SOURCE',
          existingTarget
            ? ['', 'Existing translated markdown for reference:', '<<<EXISTING_TRANSLATION', existingTarget, 'EXISTING_TRANSLATION'].join('\n')
            : '',
        ]
          .filter(Boolean)
          .join('\n'),
      },
    ],
  }), REQUEST_TIMEOUT_MS);
      break; // success
    } catch (err) {
      console.warn(`  Attempt ${attempt}/${MAX_RETRIES} failed for ${relativeTargetPath}: ${err.message}`);
      if (attempt === MAX_RETRIES) throw err;
      await new Promise((r) => setTimeout(r, 5_000 * attempt)); // backoff
    }
  }

  const translated = cleanModelOutput(getResponseText(response));
  if (!translated.trim()) {
    throw new Error(`OpenAI returned empty content for ${relativeTargetPath}`);
  }

  if (existingTarget === translated) {
    return { changed: false, targetPath: relativeTargetPath };
  }

  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, translated, 'utf8');
  return { changed: true, targetPath: relativeTargetPath };
}

async function main() {
  const changedFiles = getChangedFiles().filter((file) => file.endsWith('.md'));
  const allChangedFiles = new Set(getAllChangedFiles().filter((file) => file.endsWith('.md')));
  const locales = getLocales();

  if (changedFiles.length === 0) {
    console.log('No changed English markdown files to translate.');
    return;
  }

  if (locales.length === 0) {
    throw new Error('No valid locales configured in TRANSLATION_LOCALES');
  }

  const openai = createClient();
  const updates = [];

  for (const file of changedFiles) {
    const relative = path.relative('docs', file);
    if (relative.startsWith('..') || hasLocalePrefix(relative)) {
      continue;
    }

    const sourcePath = path.join(WORKSPACE, file);

    for (const locale of locales) {
      const language = localeConfig[locale];
      const targetPath = path.join(DOCS_DIR, locale, relative);
      const relativeTargetPath = path.relative(WORKSPACE, targetPath);

      if (allChangedFiles.has(relativeTargetPath)) {
        console.log(`Skipping ${relativeTargetPath} because it was updated in the same push.`);
        continue;
      }

      console.log(`Translating ${file} -> docs/${locale}/${relative}`);
      const result = await translateDocument(openai, sourcePath, targetPath, locale, language);
      if (result.changed) {
        updates.push(result.targetPath);
      }
    }
  }

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
