import Theme from 'vitepress/theme';
import './styles/vars.css';
import './styles/main.css';
// @ts-ignore - Vue component import
import Contributor from '../components/Contributors.vue';
// @ts-ignore - Vue component import
import Quiz from '../components/Quiz.vue';

export default {
    ...Theme,
    enhanceApp(ctx) {
        ctx.app.component('Contributor', Contributor);
        ctx.app.component('Quiz', Quiz);

        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {
                    // SW failed to register — site still works fine without it.
                });
            });
        }

        // Open a collapsed <details> (e.g. an FAQ card) when it's the target of
        // an in-page anchor link. Some links — like the payment table's
        // "Credit / Debit Card" cell pointing at #credit-card — land on an
        // anchor that sits right before a `::: details` block; without this the
        // user arrives on a folded card that looks empty until they click it.
        if (typeof window !== 'undefined') {
            // Find the <details> the anchor directly introduces: the anchor
            // itself, one it wraps, or the very next block after it (climbing
            // out of an inline wrapper such as the <p> VitePress puts around a
            // bare `<a id>`). We deliberately do NOT scan past an intervening
            // block — a heading/TOC link that merely precedes an FAQ section
            // should not pop a card open.
            const introducedDetails = (start: Element): HTMLDetailsElement | null => {
                if (start instanceof HTMLDetailsElement) {
                    return start;
                }
                const within = start.querySelector('details');
                if (within) {
                    return within;
                }
                let node: Element | null = start;
                for (let depth = 0; node && depth < 4; depth++) {
                    const sib = node.nextElementSibling;
                    if (sib instanceof HTMLDetailsElement) {
                        return sib;
                    }
                    if (sib) {
                        return null;
                    }
                    node = node.parentElement;
                }
                return null;
            };

            const openDetailsForId = (id: string) => {
                if (!id) {
                    return;
                }
                const el = document.getElementById(id);
                if (!el) {
                    return;
                }
                const details = introducedDetails(el);
                if (details && !details.open) {
                    details.open = true;
                }
            };

            const openForHash = () => {
                const { hash } = window.location;
                if (hash.length < 2) {
                    return;
                }
                try {
                    openDetailsForId(decodeURIComponent(hash.slice(1)));
                } catch {
                    openDetailsForId(hash.slice(1));
                }
            };

            // Same-page anchor clicks are the main case. VitePress may update
            // the hash via history.pushState (no `hashchange`), so key off the
            // click itself. Capture phase guarantees we see it regardless of
            // how the router handles the event.
            document.addEventListener(
                'click',
                (e) => {
                    const target = e.target as Element | null;
                    const link = target?.closest?.('a[href*="#"]');
                    if (!link) {
                        return;
                    }
                    const href = link.getAttribute('href') ?? '';
                    const id = href.slice(href.indexOf('#') + 1);
                    if (!id) {
                        return;
                    }
                    let decoded = id;
                    try {
                        decoded = decodeURIComponent(id);
                    } catch {
                        // keep raw id
                    }
                    requestAnimationFrame(() => openDetailsForId(decoded));
                },
                { capture: true }
            );
            // Direct hash edits and landing fresh with a #hash in the URL.
            window.addEventListener('hashchange', () => {
                requestAnimationFrame(openForHash);
            });
            window.addEventListener('load', () => {
                requestAnimationFrame(openForHash);
            });
            // SPA navigation to another page that carries a #hash.
            const prevAfterRouteChange = ctx.router.onAfterRouteChange;
            ctx.router.onAfterRouteChange = (to: string) => {
                prevAfterRouteChange?.(to);
                requestAnimationFrame(() => requestAnimationFrame(openForHash));
            };
        }
    },
};
