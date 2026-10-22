import type { MarkdownRenderer } from 'vitepress';
import { purchaseLinkRel, qualifyRawPurchaseAnchors } from '../purchase-links';

// Marks commission-earning purchase links rel="sponsored" (see purchase-links.ts)
// while the markdown is compiled into the page component, so the static HTML
// and client-side navigation render identical anchors. Hrefs, targets and
// existing rel tokens are kept; no link gains noreferrer.
export function sponsoredLinksPlugin(md: MarkdownRenderer): void {
    // Raw HTML anchors (the seller tables), including included generations.
    md.core.ruler.push('sponsored-links', (state) => {
        for (const token of state.tokens) {
            for (const html of [token, ...(token.children ?? [])]) {
                if (html.type === 'html_block' || html.type === 'html_inline') {
                    html.content = qualifyRawPurchaseAnchors(html.content);
                }
            }
        }
    });

    // Markdown links and autolinks: VitePress adds its external-link target/rel
    // while rendering (and skips rel when one is already set), so add sponsored
    // after it has run.
    const renderLink =
        md.renderer.rules.link_open ??
        ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const html = renderLink(tokens, idx, options, env, self);
        const token = tokens[idx];
        const rel = token.attrGet('rel') ?? '';
        const qualified = purchaseLinkRel(token.attrGet('href'), rel);
        if (qualified === rel) {
            return html;
        }
        token.attrSet('rel', qualified);
        return self.renderToken(tokens, idx, options);
    };
}
