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
    },
};
