import { createContentLoader } from 'vitepress';
import { transformArticles } from './articles';

// Keep the loader in shared code: translated Markdown lives one directory
// deeper and cannot reuse an English page's relative module import.
export default createContentLoader(['articles/*.md', '*/articles/*.md'], {
    transform: transformArticles,
});
