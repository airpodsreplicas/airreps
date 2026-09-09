export const PRODUCT_FAMILIES: Record<string, string> = {
    'airpods-2': 'airpods',
    'airpods-3': 'airpods',
    'airpods-4': 'airpods',
    'airpods-5': 'airpods',
    'airpods-pro': 'pro',
    'airpods-pro-2': 'pro',
    'airpods-pro-3': 'pro',
};

export function productDestination(href: string): string | null {
    let url: URL;
    try {
        url = new URL(href, 'https://airpodsreplicas.com');
    } catch {
        return null;
    }
    if (!['airpodsreplicas.com', 'www.airpodsreplicas.com'].includes(url.hostname)) {
        return null;
    }
    const match = url.pathname.match(
        /^(\/(?:[a-z]{2}\/)?(?:version-info|links))\/([^/]+?)(?:\.html|\.md|\/(?:index\.html)?)?$/
    );
    if (!(match && Object.hasOwn(PRODUCT_FAMILIES, match[2]))) {
        return null;
    }
    const [, section, model] = match;
    const fragment = url.hash.slice(1);
    const anchor = fragment && fragment !== model ? `${model}-${fragment}` : model;
    return `${section}/${PRODUCT_FAMILIES[model]}${url.search}#${anchor}`;
}

// Run before the meta refresh so a bookmark's query and subsection survive a
// full page load. Meta refresh remains a generation-level fallback without JS.
export function productRedirectScript(from: string): string {
    const destination = productDestination(from);
    if (!destination) {
        return '';
    }
    const [, model] = destination.split('#');
    return `{const u=new URL(${JSON.stringify(destination)},location.origin);u.search=location.search;const h=location.hash.slice(1);if(h&&h!==${JSON.stringify(model)})u.hash=${JSON.stringify(model)}+'-'+h;location.replace(u.href);}`;
}
