import type { MarkdownRenderer } from 'vitepress';

const families: Record<string, string> = {
    'airpods-2': 'airpods',
    'airpods-3': 'airpods',
    'airpods-4': 'airpods',
    'airpods-5': 'airpods',
    'airpods-pro': 'pro',
    'airpods-pro-2': 'pro',
    'airpods-pro-3': 'pro',
};

// Family pages include the original generation pages. Keep their content in
// one place while giving the combined document one H1 and generation anchors.
export function productFamiliesPlugin(md: MarkdownRenderer): void {
    md.core.ruler.before('anchor', 'product-families', (state) => {
        if (!state.src.includes('<!-- product-family -->')) {
            return;
        }

        let seenTitle = false;
        let inGeneration = false;
        for (let i = 0; i < state.tokens.length; i += 1) {
            const token = state.tokens[i];
            if (token.type === 'heading_open') {
                if (!seenTitle) {
                    seenTitle = true;
                    token.attrSet('id', 'product-family');
                    continue;
                }
                if (token.tag === 'h1') {
                    inGeneration = true;
                    const model = state.tokens[i + 1].content.match(
                        /AirPods(?:\s+Pro)?(?:\s+\d+)?/i
                    )?.[0];
                    if (model) {
                        token.attrSet('id', model.toLowerCase().replace(/\s+/g, '-'));
                    }
                }
            }
            if (inGeneration && (token.type === 'heading_open' || token.type === 'heading_close')) {
                token.tag = `h${Math.min(Number(token.tag.slice(1)) + 1, 6)}`;
            }

            // Cross-links between version info and sellers stay in the family
            // views. Standalone generation pages keep their original URLs.
            for (const child of token.children ?? []) {
                if (child.type !== 'link_open') {
                    continue;
                }
                const href = child.attrGet('href') ?? '';
                const match = href.match(
                    /^(\/(?:[a-z]{2}\/)?(?:version-info|links)\/)(airpods(?:-pro)?(?:-\d+)?)(?:\.html|\.md)?(#[^\s]*)?$/
                );
                if (match && families[match[2]]) {
                    child.attrSet(
                        'href',
                        `${match[1]}${families[match[2]]}${match[3] || `#${match[2]}`}`
                    );
                }
            }
        }
    });
}
