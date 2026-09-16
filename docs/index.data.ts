import { createContentLoader } from 'vitepress';
import { transformArticles } from './.vitepress/articles';

export default createContentLoader('articles/*.md', {
    transform: transformArticles,
});
