import type { MarkdownRenderer } from 'vitepress';
import { productDestination } from '../product-routes';

// Includes remain the source of truth. Preserve each original subsection as a
// generation-prefixed alias so bookmarks survive combining duplicate headings.
export function productFamiliesPlugin(md: MarkdownRenderer): void {
    md.core.ruler.before('anchor', 'product-families', (state) => {
        if (state.src.includes('<!-- product-family -->')) {
            const titles = state.tokens.flatMap((token, index) =>
                token.type === 'heading_open' && token.tag === 'h1' ? [index] : []
            );
            const lines = state.src.split('\n');
            const aliases = new Set<string>();
            const title = state.tokens[titles[0]];
            title?.attrSet('id', 'product-family');

            for (let generation = 1; generation < titles.length; generation += 1) {
                const start = titles[generation];
                const end = titles[generation + 1] ?? state.tokens.length;
                const model = state.tokens[start + 1].content
                    .match(/AirPods(?:\s+Pro)?(?:\s+\d+)?/i)?.[0]
                    .toLowerCase()
                    .replace(/\s+/g, '-');
                if (!model) {
                    continue;
                }
                const firstLine = state.tokens[start].map?.[0] ?? 0;
                const lastLine = state.tokens[end]?.map?.[0] ?? lines.length;
                // No family marker in this slice: parsing it gives exactly the
                // anchor IDs that VitePress assigned on the original page.
                const original = md.parse(lines.slice(firstLine, lastLine).join('\n'), {});
                const headings = original.filter((token) => token.type === 'heading_open');
                let heading = 0;
                const alias = (id: string): string => {
                    const name = `${model}-${id}`;
                    if (aliases.has(name)) {
                        return '';
                    }
                    aliases.add(name);
                    return `<span id="${md.utils.escapeHtml(name)}"></span>`;
                };
                for (let index = start; index < end; index += 1) {
                    const token = state.tokens[index];
                    if (token.type === 'heading_open') {
                        const id = headings[heading]?.attrGet('id');
                        heading += 1;
                        const inline = state.tokens[index + 1];
                        if (id && inline.children) {
                            const span = new state.Token('html_inline', '', 0);
                            span.content = alias(id);
                            inline.children.unshift(span);
                        }
                        if (index === start) {
                            token.attrSet('id', model);
                        }
                    }
                    if (token.type === 'heading_open' || token.type === 'heading_close') {
                        token.tag = `h${Math.min(Number(token.tag.slice(1)) + 1, 6)}`;
                    }
                    // Explicit anchors (including English aliases in translated
                    // pages) need the same treatment as generated heading IDs.
                    for (const html of [token, ...(token.children ?? [])]) {
                        if (html.type === 'html_block' || html.type === 'html_inline') {
                            const ids = [...html.content.matchAll(/\bid="([^"]+)"/g)];
                            html.content =
                                ids
                                    .filter((match) => !aliases.has(match[1]))
                                    .map((match) => alias(match[1]))
                                    .join('') + html.content;
                        }
                    }
                }
            }
        }

        // Links throughout the guide go straight to their canonical sections.
        for (const token of state.tokens) {
            for (const child of token.children ?? []) {
                if (child.type === 'link_open') {
                    const destination = productDestination(child.attrGet('href') ?? '');
                    if (destination) {
                        child.attrSet('href', destination);
                    }
                }
            }
        }
    });
}
