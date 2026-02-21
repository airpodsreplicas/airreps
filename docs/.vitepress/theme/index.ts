import Theme from 'vitepress/theme';
import './styles/vars.css';
import './styles/main.css';
// @ts-ignore - Vue component import
import Contributor from '../components/Contributors.vue';

export default {
    ...Theme,
    enhanceApp(ctx) {
        ctx.app.component('Contributor', Contributor);
    },
};
