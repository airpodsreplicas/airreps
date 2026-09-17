// Shared article metadata for the /articles index and the homepage teaser.
// Both pages load `articles/*.md` through VitePress content loaders and run the
// same transform, so a new article only needs frontmatter (`category`, `order`)
// to show up in both places automatically.

export interface ArticleSummary {
    category: string;
    description: string;
    title: string;
    url: string;
}

interface RawArticle {
    frontmatter: Record<string, unknown>;
    url: string;
}

export function transformArticles(raw: RawArticle[]): ArticleSummary[] {
    return (
        raw
            // `order` is the opt-in marker: sections and the /articles landing page
            // itself have a title but no order, so they never appear as cards.
            .filter(({ frontmatter }) => typeof frontmatter.order === 'number')
            .map(({ url, frontmatter }) => ({
                category: String(frontmatter.category ?? ''),
                description: String(frontmatter.description ?? ''),
                order: Number(frontmatter.order),
                title: String(frontmatter.title ?? ''),
                url,
            }))
            .sort((a, b) => a.order - b.order)
            .map(({ order: _order, ...article }) => article)
    );
}
